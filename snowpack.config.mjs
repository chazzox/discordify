/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: { public: '/', src: '/dist' },
	plugins: [],
	routes: [],
	optimize: {
		bundle: true
	},
	packageOptions: {},
	devOptions: {},
	buildOptions: {
		baseUrl: '/discordify'
	}
};
