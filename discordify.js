/**
 * @name discordify
 * @author PINPAL#5245 and chazzox#1001
 * @description Spotify but inside discord
 * @version 0.0.1
 * @website https://github.com/chazzox/discordify#readme
 * @source https://github.com/chazzox/discordify
 */

// BdApi stuff that we use
const { React, ReactDOM } = BdApi;
// discord spotify code :)
const SpotifyTrackUtils = BdApi.findModuleByProps('getActiveSocketAndDevice');
const SpotifyUtils = BdApi.findModuleByProps('SpotifyAPI');

// container ids
const sidebarContainerClass = 'container-2lgZY8';
const toolbarContainerClass = 'toolbar-1t6TWx';

// wrapper ids
const sidebarWrapperId = 'discordSpotifySidebar';
const toolBarWrapperId = 'discordSpotifyToolbar';

// spotify functions
async function getUserInfo(token) {
	const result = await fetch('https://api.spotify.com/v1/me', {
		headers: { Authorization: 'Bearer ' + token }
	});
	return await result.json();
}

async function pause() {}
async function play() {}
async function forwards() {}
async function backwards() {}
async function playlists() {}
async function queue() {}
async function addSongToQueue() {}

function Sidebar() {
	const [accessToken, setAccessToken] = React.useState('');
	const [userInfo, setUserInfo] = React.useState({});
	React.useEffect(() => {
		const {
			socket: { accountId }
		} = SpotifyTrackUtils.getActiveSocketAndDevice();
		SpotifyUtils.getAccessToken(accountId).then((res) => setAccessToken(res.body.access_token));
	}, []);

	React.useEffect(() => {
		if (accessToken) {
			getUserInfo(accessToken).then((info) => setUserInfo(info));
		}
	}, [accessToken]);

	return <div>{userInfo.display_name && <p>Fuck off {userInfo.display_name}</p>}</div>;
}

function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	return (
		<>
			<button onClick={() => setIsHidden(!isHidden)}>toggle</button>
			{!isHidden && ReactDOM.createPortal(<Sidebar />, document.getElementById(sidebarWrapperId))}
		</>
	);
}

function createDom() {
	const toolbarWrapperEl = document.createElement('div');
	toolbarWrapperEl.id = toolBarWrapperId;
	document.getElementsByClassName(toolbarContainerClass)[0].append(toolbarWrapperEl);

	const sidebarWrapperEl = document.createElement('div');
	sidebarWrapperEl.id = sidebarWrapperId;
	document.getElementsByClassName(sidebarContainerClass)[0].append(sidebarWrapperEl);
}

function destroyDom() {
	document.getElementById(sidebarWrapperId)?.remove();
	document.getElementById(toolBarWrapperId)?.remove();
}
function render() {
	ReactDOM.render(<App />, document.getElementById(toolBarWrapperId));
}

module.exports = class SpotifyDiscord {
	load() {
		console.log('loading up');
	}
	start() {
		createDom();
		render();
	}
	stop() {
		destroyDom();
	}
};
