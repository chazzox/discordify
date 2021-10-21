import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import { name } from './package.json';
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
 * @name discordify
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */
`;

export default defineConfig({
	input: 'src/discordify.jsx',
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
		nodeResolve(),
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
		// jsx transformer
		babel({
			presets: ['@babel/preset-react']
		}),
		// minifier
		terser({
			module: true,
			compress: { sequences: false },
			mangle: {},
			parse: {},
			rename: {},
			format: {}
		})
	]
});