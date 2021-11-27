import classNames from 'classnames';
import { Pause, Play, Loop, Shuffle, Previous, Next } from './components/navbarIcons';
import './discordify.scss';

const sidebarContainerClass = 'container-2lgZY8';

function App() {
	const [isHidden, setIsHidden] = React.useState(true);

	return (
		<>
			<button onClick={() => setIsHidden(!isHidden)}>{isHidden ? 'Open' : 'Close'} Discordify</button>
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
			<h1>AYO</h1>
			<div id="navbar">
				<div className="row">
					<div id="currentArtwork"></div>
				</div>
				<div className="row">
					<p id="currentSong">Example Song Name</p>
				</div>
				<div className="row">
					<p id="currentArtist">The Artist</p>
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
						className={classNames({ active: isLooping != 0 }, isLooping)}
						onClick={() => setIsLooping((prevState) => (prevState + 1) % 3)}
					>
						<Loop />
					</button>
				</div>
				<div className="row" id="progressBarRow">
					<p>1:43</p>
					<div id="progressBar">
						<div id="progressBarInner"></div>
						<div id="progressKnob"></div>
					</div>
					<p>2:38</p>
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
	onSwitch() {
		this.patch();
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
