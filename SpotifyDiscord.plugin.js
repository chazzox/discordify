/**
 * @name SpotifyDiscord
 * @author Pinpal and Chazzox
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/PINPAL/spotifyDiscord#readme
 * @source https://github.com/PINPAL/spotifyDiscord
 */

module.exports = class SpotifyDiscord {
	load() {}
	start() {
		BdApi.alert('wagwan', 'uwu\nthis is a test');
		const reactTarget = document.createElement('div');
		reactTarget.id = 'discordSpotifyTarget';
		document.getElementsByClassName('container-2lgZY8')[0].append(reactTarget);
		const reactTargetDom = document.getElementById('discordSpotifyTarget');
		BdApi.ReactDOM.render(BdApi.React.createElement('p', null, 'hello world from react'), reactTargetDom);
	}
	stop() {
		const reactTargetDom = document.getElementById('discordSpotifyTarget');
		reactTargetDom.remove();
	}
};
