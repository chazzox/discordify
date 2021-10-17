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

async function togglePlay(token) {
	const currently_playing = await fetch(' https://api.spotify.com/v1/me/player/currently-playing', {
		headers: { Authorization: 'Bearer ' + token }
	});
	const currently_playing_json = await currently_playing.json();
	if (currently_playing_json.is_playing) pause(token);
	else play(token);
}

async function pause(token) {
	fetch('https://api.spotify.com/v1/me/player/pause', { method: 'PUT', headers: { Authorization: 'Bearer ' + token } });
}

async function play(token) {
	fetch('https://api.spotify.com/v1/me/player/play', { method: 'PUT', headers: { Authorization: 'Bearer ' + token } });
}

async function next(token) {
	fetch('https://api.spotify.com/v1/me/player/next', { method: 'POST', headers: { Authorization: 'Bearer ' + token } });
}

async function previous(token) {
	fetch('https://api.spotify.com/v1/me/player/previous', {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token }
	});
}

async function getPlaylists(token) {
	const playlists = [];
	let next = 'https://api.spotify.com/v1/me/playlists?limit=50';
	while (next) {
		const res = await fetch(next, {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token }
		});
		const jsonResponse = await res.json();
		playlists.push(...jsonResponse.items);
		next = jsonResponse.next;
	}

	return playlists;
}

async function addSongToQueue() {}

function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	const [accessToken, setAccessToken] = React.useState('');
	const [userInfo, setUserInfo] = React.useState({});
	const [playlists, setPlaylists] = React.useState([]);
	const [showPlaylists, setShowPlaylists] = React.useState(false);

	React.useEffect(() => {
		const {
			socket: { accountId }
		} = SpotifyTrackUtils.getActiveSocketAndDevice();
		SpotifyUtils.getAccessToken(accountId).then((res) => setAccessToken(res.body.access_token));
	}, []);

	React.useEffect(() => {
		if (accessToken) {
			getUserInfo(accessToken).then((info) => setUserInfo(info));
			getPlaylists(accessToken).then((res) => setPlaylists(res));
		}
	}, [accessToken]);

	return (
		<>
			{ReactDOM.createPortal(
				<button onClick={() => setIsHidden(!isHidden)}>toggle</button>,
				document.getElementById(toolBarWrapperId)
			)}
			{!isHidden && (
				<div>
					{userInfo.display_name && <p>Fuck off {userInfo.display_name}</p>}
					<button onClick={() => previous(accessToken)}>backwards</button>
					<button onClick={() => togglePlay(accessToken)}>play/pause</button>
					<button onClick={() => next(accessToken)}>forwards</button>
					<button onClick={() => setShowPlaylists(!showPlaylists)}>toggle playlists</button>
					{showPlaylists && (
						<div
							id="playlistContainer"
							style={{ width: '400px', overflowY: 'scroll', userSelect: 'text', height: '400px' }}>
							{playlists.map((playlist) => (
								<p>{JSON.stringify(playlist)}</p>
							))}
						</div>
					)}
				</div>
			)}
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
module.exports = class SpotifyDiscord {
	load() {
		console.log('loading up');
	}
	start() {
		createDom();
		ReactDOM.render(<App />, document.getElementById(sidebarWrapperId));
	}
	stop() {
		destroyDom();
	}
};
