import { defineConfig } from 'rollup';

import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

import { name, version } from './package.json';
import os from 'os';
import path from 'path';

function GetBetterDiscordPath() {
	switch (os.platform()) {
		case 'darwin':
			return [process.env.HOME, 'Library/Application Support/BetterDiscord/plugins/'];
		case 'win32':
			return [process.env.HOME, 'AppData/Roaming/BetterDiscord/plugins/'];
		default:
			throw Error(
				'Platform not implemented, please submit an issue at https://github.com/chazzox/discordify/issues or make a pr :)'
			);
	}
}

const meta = `
/**
 * @name ${name}
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version ${version}
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */
`;

export default defineConfig({
	input: 'src/discordify.tsx',
	output: [
		{
			file: 'plugin/discordify.plugin.js',
			format: 'cjs',
			banner: meta
		},
		{
			file: path.join(...GetBetterDiscordPath(), 'discordify.plugin.js'),
			format: 'cjs',
			banner: meta
		}
	],
	plugins: [
		// imports
		alias({
			entries: [{ find: 'react', replacement: path.resolve(path.resolve(__dirname), 'src/react.ts') }]
		}),
		nodeResolve({ extensions: ['.tsx', '.ts'], jsnext: true }),
		commonjs(),
		// .scss files to inline BdApi string
		styles({
			extensions: ['.scss'],
			mode: [
				'inject',
				(varname, id) => {
					return `BdApi.injectCSS("${name}-styles",${varname})`;
				}
			]
		}),
		// tsx and ts transformer
		typescript(),
		// minifier
		terser({
			module: true,
			compress: { sequences: false },
			mangle: {},
			parse: {},
			rename: {},
			format: { comments: '/@name/' }
		})
	]
});
