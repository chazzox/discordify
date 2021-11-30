import { React, ReactDOM } from './utils';
import { Spotify, Search } from './components/navbarIcons';

import PlayBackControls from './components/playbackControls';
import './discordify.scss';

const sidebarContainerClass = 'container-2lgZY8';

function App() {
	const [isHidden, setIsHidden] = React.useState(true);

	return (
		<>
			<button id="discordifyBtn" onClick={() => setIsHidden(!isHidden)}>
				<div className="iconWrapper-2OrFZ1 clickable-3rdHwn">
					<Spotify />
					<div id="discordifyBtnTooltip" className="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipPrimary-1d1ph4">
						<div className="tooltipPointer-3ZfirK"></div>
						<div className="tooltipContent-bqVLWK">{isHidden ? 'Open' : 'Close'} Spotify</div>
					</div>
				</div>
			</button>
			<SidebarPortal isHidden={isHidden} />
		</>
	);
}

const SidebarPortal = ({ isHidden }) => {
	const container = document.createElement('div');

	React.useEffect(() => {
		document.getElementsByClassName(sidebarContainerClass)[0].appendChild(container);
		return () => {
			document.getElementsByClassName(sidebarContainerClass)[0].removeChild(container);
		};
	}, [isHidden]);

	return <>{ReactDOM.createPortal(<>{!isHidden && <Sidebar />}</>, container)}</>;
};

const Sidebar = () => {
	return (
		<div id="discordSpotifySidebar">
			<div id="discordSpotifyInner">
				<div id="navbar">
					<div className="pillRow">
						<div className="pill select">Playlists</div>
						<div className="pill">Artists</div>
						<div className="pill">Albums</div>
						<div id="discordifySearch">
							<Search />
						</div>
					</div>
				</div>
				<div className="grid">
					<div className="gridBox wideBox">
						<div className="playlistArtwork"></div>
						<h1>Liked Songs</h1>
						<h2>56 liked songs</h2>
					</div>
					<div className="gridBox">
						<div className="playlistArtwork"></div>
						<h1>Playlist Name</h1>
						<h2>Description of Playlist</h2>
					</div>
					<div className="gridBox">
						<div className="playlistArtwork"></div>
						<h1>Playlist Name</h1>
						<h2>Super long description of the playlist.</h2>
					</div>
					<div className="gridBox">
						<div className="playlistArtwork"></div>
						<h1>Playlist Name</h1>
						<h2>Description of Playlist</h2>
					</div>
				</div>
				<PlayBackControls />
			</div>
		</div>
	);
};

module.exports = class SpotifyDiscord {
	patchedHeader = false;
	cancel_patch_header() {}
	load() {
		this.patch();
	}
	start() {
		this.patch();
	}
	stop() {
		this.cancel_patch_header();
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
