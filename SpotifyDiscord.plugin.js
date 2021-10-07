/**
 * @name SpotifyDiscord
 * @author Pinpal and Chazzox
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/PINPAL/spotifyDiscord#readme
 * @source https://github.com/PINPAL/spotifyDiscord
 */

// container ids
const sidebarContainerId = 'container-2lgZY8';
const toolbarContainerId = 'toolbar-1t6TWx';

// wrapper ids
const sidebarId = 'discordSpotifySidebar';
const toolBarId = 'discordSpotifyToolbar';

let hide = false;

function addSideBar() {
	const reactTarget = document.createElement('div');
	reactTarget.id = sidebarId;
	document.getElementsByClassName(sidebarContainerId)[0].append(reactTarget);
	const reactTargetDom = document.getElementById(sidebarId);
	BdApi.ReactDOM.render(
		BdApi.React.createElement(
			BdApi.React.Fragment,
			null,
			!hide ? BdApi.React.createElement('h1', null, 'hello world') : null
		),
		reactTargetDom
	);
}

function addToolbar() {
	const reactToolbarEl = document.createElement('div');
	reactToolbarEl.id = toolBarId;
	document.getElementsByClassName(toolbarContainerId)[0].append(reactToolbarEl);
	const reactTargetDom = document.getElementById(toolBarId);
	BdApi.ReactDOM.render(
		BdApi.React.createElement(
			'button',
			{
				onClick: () => {
					hide = false;
				}
			},
			'toggle'
		),
		reactTargetDom
	);
}

function callback() {
	BdApi.onRemoved(document.getElementById(toolBarId), () => {
		addToolbar();
		callback();
	});
}

module.exports = class SpotifyDiscord {
	load() {}
	start() {
		addSideBar();
		addToolbar();
		callback();
	}
	stop() {
		document.getElementById(sidebarId)?.remove();
		document.getElementById(toolBarId)?.remove();
	}
};
