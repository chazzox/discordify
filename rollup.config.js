import { defineConfig } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

import styles from 'rollup-plugin-styles';

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

const meta = `/**
 * @name ${name}
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version ${version}
 * @donate https://www.paypal.me/chazzox
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */`;

const selfInstall = ['', ''];

const selfInstallHeader = '';
const selfInstallFooter = '';

const root = path.resolve(__dirname);

export default defineConfig({
	input: 'src/discordify.tsx',
	output: [
		// build to local file as well as plugin folder
		{
			file: 'plugin/discordify.plugin.js',
			format: 'es',
			banner: meta + selfInstallHeader,
			footer: selfInstallFooter
		},
		{
			file: path.join(...GetBetterDiscordPath(), 'discordify.plugin.js'),
			format: 'es',
			banner: meta + selfInstallHeader,
			footer: selfInstallFooter
		}
	],
	plugins: [
		// importing libraries and converting commonjs files to es6
		nodeResolve({ extensions: ['.tsx', '.ts'], jsnext: true }),
		commonjs(),

		// fixing any node_module relying on react/react-dom to use discord internals
		alias({
			entries: [
				{
					find: 'react',
					replacement: path.resolve(root, 'src/utils/react.ts')
				},
				{
					find: 'react-dom',
					replacement: path.resolve(root, 'src/utils/react-dom.ts')
				}
			]
		}),

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

		// transforms ts and tsx to js
		typescript()
	]
});
