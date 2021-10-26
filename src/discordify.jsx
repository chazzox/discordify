import * as spotifyApi from './spotifyUtils';
import './discordify.scss';

// BdApi stuff that we use
const { React, ReactDOM } = BdApi;

// discord spotify code :)
const SpotifyTrackUtils = BdApi.findModuleByProps('getActiveSocketAndDevice');
const SpotifyUtils = BdApi.findModuleByProps('SpotifyAPI');

const sidebarContainerClass = 'content-yTz4x3';
const sidebarWrapperId = 'sidebarWrapper';

function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	const [accessToken, setAccessToken] = React.useState('');
	const [userInfo, setUserInfo] = React.useState({});
	const [playlists, setPlaylists] = React.useState([]);
	const [showPlaylists, setShowPlaylists] = React.useState(false);

	React.useEffect(() => {
		const accountId = SpotifyTrackUtils?.getActiveSocketAndDevice()?.socket?.accountId;
		accountId && SpotifyUtils.getAccessToken(accountId).then((res) => setAccessToken(res.body.access_token));
	}, []);

	React.useEffect(() => {
		if (accessToken) {
			spotifyApi.getUserInfo(accessToken).then((info) => setUserInfo(info));
			spotifyApi.getPlaylists(accessToken).then((res) => setPlaylists(res));
		}
	}, [accessToken]);

	return (
		<>
			<button onClick={() => setIsHidden(!isHidden)}>toggle</button>
			{/* {ReactDOM.createPortal(
				<>
					{!isHidden && (
						<>
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
						</>
					)}
				</>,
				document.getElementById(sidebarWrapperId)
			)} */}
		</>
	);
}

module.exports = class SpotifyDiscord {
	patchedHeader = false;
	cancel_patch_header() {}
	start() {
		this.patch();
	}
	stop() {
		this.cancel_patch_header();
	}
	onSwitch() {
		this.patch();
		const Container = document.getElementsByClassName(sidebarContainerClass)[0];
		if (Container && !document.getElementById(sidebarWrapperId)) {
			console.log('need to create');
		}
	}
	patch() {
		const HeaderBarContainer = BdApi.findModuleByDisplayName('HeaderBarContainer')?.prototype;
		if (HeaderBarContainer && !this.patchedHeader) {
			this.cancel_patch_header = BdApi.monkeyPatch(HeaderBarContainer, 'renderLoggedIn', {
				after: ({ returnValue }) => {
					returnValue?.props?.toolbar?.props?.children.push(<App />);
				}
			});
			this.patchedHeader = true;
		}
	}
};
