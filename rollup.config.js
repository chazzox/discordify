import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import { name } from './package.json';

export default defineConfig({
	input: 'src/discordify.jsx',
	output: {
		file: 'plugin/discordify.plugin.js',
		format: 'cjs',
		banner: `/**
 * @name discordify
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */`
	},
	plugins: [
		nodeResolve(),
		styles({
			extensions: ['.scss'],
			mode: [
				'inject',
				(varname, id) => {
					return `BdApi.injectCSS("${name}-styles",${varname})`;
				}
			]
		}),
		babel({
			presets: ['@babel/preset-react']
		}),
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
