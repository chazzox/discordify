import classNames from 'classnames';
import { Pause, Play, Loop, Shuffle, Previous, Next, Mute, Spotify, Search, Chevron } from './components/navbarIcons';
import './discordify.scss';

const sidebarContainerClass = 'container-2lgZY8';

function App() {
	const [isHidden, setIsHidden] = React.useState(true);

	return (
		<>
			<button id="discordifyBtn" onClick={() => setIsHidden(!isHidden)}>
				<div className="iconWrapper-2OrFZ1 clickable-3rdHwn">
					<Spotify />
					<div id="discordifyBtnTooltip" class="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipPrimary-1d1ph4">
						<div class="tooltipPointer-3ZfirK"></div>
						<div class="tooltipContent-bqVLWK">{isHidden ? 'Open' : 'Close'} Spotify</div>
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
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isShuffled, setIsShuffled] = React.useState(false);
	const [isLooping, setIsLooping] = React.useState(0);

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
				{/* add class "compact" for smaller #playbackControls */}
				<div id="playbackControls">
					<div id="songInformation">
						<div className="row">
							<div id="currentArtwork"></div>
						</div>
						<div id="songDetails">
							<div className="row">
								<p id="currentSong">Example Song Name</p>
							</div>
							<div className="row">
								<p id="currentArtist">The Artist</p>
							</div>
						</div>
						<button id="compactBtn">
							<Chevron />
						</button>
					</div>
					<div id="volumeLevel" className="progressBarRow row">
						<button id="muteBtn">
							<Mute />
						</button>
						<div className="progressBar">
							<div className="progressBarInner"></div>
							<div className="progressKnob"></div>
						</div>
					</div>
					<div className="row">
						<button id="shuffle" className={isShuffled && 'active'} onClick={() => setIsShuffled(!isShuffled)}>
							<Shuffle />
						</button>
						<button id="previous">
							<Previous />
						</button>
						<button id="playPause" onClick={() => setIsPlaying(!isPlaying)}>
							{isPlaying ? <Play /> : <Pause />}
						</button>
						<button id="next">
							<Next />
						</button>
						<button
							id="loop"
							className={classNames({ active: isLooping != 0 }, `mode${isLooping}`)}
							onClick={() => setIsLooping((prevState) => (prevState + 1) % 3)}
						>
							<Loop />
						</button>
					</div>
					<div id="songProgress" className="progressBarRow row">
						<p>1:43</p>
						<div className="progressBar">
							<div className="progressBarInner"></div>
							<div className="progressKnob"></div>
						</div>
						<p>2:38</p>
					</div>
				</div>
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
