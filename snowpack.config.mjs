/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: { public: '/', src: '/dist' },
	plugins: ['@snowpack/plugin-sass'],
	routes: [],
	optimize: {
		bundle: true
	},
	packageOptions: {},
	devOptions: {},
	buildOptions: {
		baseUrl: '/discordify'
	},
	alias: { '@components': './src/components', '@styles': './src/styles' }
};
