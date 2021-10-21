import * as spotifyApi from './spotifyUtils';
import './discordify.scss';

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
			spotifyApi.getUserInfo(accessToken).then((info) => setUserInfo(info));
			spotifyApi.getPlaylists(accessToken).then((res) => setPlaylists(res));
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
					<button onClick={() => spotifyApi.previous(accessToken)}>backwards</button>
					<button onClick={() => spotifyApi.togglePlay(accessToken)}>play/pause</button>
					<button onClick={() => spotifyApi.next(accessToken)}>forwards</button>
					<button onClick={() => setShowPlaylists(!showPlaylists)}>toggle playlists</button>
					{showPlaylists && (
						<div
							id="playlistContainer"
							style={{ width: '400px', overflowY: 'scroll', userSelect: 'text', height: '400px' }}
						>
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
		console.log('test');
	}
	start() {
		createDom();
		ReactDOM.render(<App />, document.getElementById(sidebarWrapperId));
	}
	stop() {
		destroyDom();
	}
};
