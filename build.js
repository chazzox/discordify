const esbuild = require('esbuild');
const path = require('path');
const os = require('os');
const fs = require('fs');
const alias = require('esbuild-plugin-alias');
const sass = require('sass');

const name = 'discordify';
const version = '0.6.0';
const root = path.resolve(__dirname);

const args = process.argv.slice(2);
const isWatching = args.includes('-w');
const isLocalOnly = args.includes('-l');

const meta = `/**
 * @name ${name}
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version ${version}
 * @donate https://www.paypal.me/chazzox
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */`;

const watch = {
	watch: {
		onRebuild(error, result) {
			if (error) errorHandler(error);
			else resultHandler(result);
		}
	}
};

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

esbuild
	.build({
		entryPoints: [`src/${name}.tsx`],
		banner: {
			js: meta
		},
		...(isWatching && watch),
		format: 'cjs',
		logLevel: 'silent',
		write: false,
		bundle: true,
		plugins: [
			{
				name: 'sass',
				setup(build) {
					build.onLoad({ filter: /.scss$/ }, (args) => {
						const { css } = sass.compile(args.path, { style: 'compressed' });
						return {
							contents: `BdApi.injectCSS('${name}-styles', '${css.trim()}')`,
							loader: 'js'
						};
					});
				}
			},
			{
				name: 'perf',
				setup(build) {
					build.onStart(() => {
						console.time('build took');
					});
					build.onEnd(() => {
						console.timeEnd('build took');
					});
				}
			},
			alias({
				react: path.resolve(root, 'src/utils/react.ts'),
				'react-dom': path.resolve(root, 'src/utils/react-dom.ts')
			})
		]
	})
	.then(resultHandler)
	.catch(errorHandler);

function resultHandler(res) {
	fs.writeFile(`plugin/${name}.plugin.js`, res.outputFiles[0].contents, fsCallback);
	if (!isLocalOnly)
		fs.writeFile(
			path.join(...GetBetterDiscordPath(), `${name}.plugin.js`),
			res.outputFiles[0].contents,
			fsCallback
		);

	console.log('some nice log about how its done');
}

function errorHandler(err) {
	console.error('need to clean this error log up prolly', JSON.stringify(err));
}

function fsCallback(err) {
	if (err) {
		console.log('\x1b[41m COPY FAILED', '\x1b[0m');
		console.log('\x1b[31m', err.path, '---->', err.dest, '\x1b[0m', 'Could not succeed');
	}
}
