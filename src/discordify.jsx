import './discordify.scss';

// BdApi stuff that we use
const { React, ReactDOM } = BdApi;

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
	container.id = 'discordSpotifySidebar';
	React.useEffect(() => {
		console.log('mounted');
		document.getElementsByClassName(sidebarContainerClass)[0].appendChild(container);
		return () => {
			console.log('unmounted');
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
		<>
			<div className="pillRow">
				<div className="pill">Playlists</div>
				<div className="pill">Artists</div>
				<div className="pill">Albums</div>
			</div>
			<div
			id="navbar">
				<div className="row">
					<div id="currentArtwork"></div>
				</div>
				<div className="row">
					<p id="currentSong">Example Song Name</p>
				</div>
				<div className="row">
					<p id="currentArtist">The Artist</p>
				</div>
				<div id="volumeLevel" className="progressBarRow row">
					<button id="muteBtn">
						<svg viewBox="0 0 510.65 434.66">
							<path d="M511.91,256.54c-.65,7.76-1.19,15.53-2,23.27-5.36,52.65-26.94,97.85-62.62,136.67-21.37,23.25-46.64,40.87-75.39,53.67-12.32,5.49-23.3,2.1-28-8.44-4.47-10,.47-20.87,12.37-26.27,40.07-18.2,70.65-46.51,92.43-84.8,38.44-67.56,31.14-155.91-18.86-218.33a193.24,193.24,0,0,0-72.67-56.25c-16.11-7.22-19.88-23.66-7.76-33.67,6.51-5.38,13.74-5.27,21.11-2.07,43.33,18.84,77.57,48.41,103.11,88,23.6,36.6,36.58,76.58,37.26,120.33a38.33,38.33,0,0,0,1,5.86Z" transform="translate(-1.26 -38.1)"/>
							<path d="M236.39,255.8q0,81.51,0,163c0,11.07-4.94,19-13.43,21.64-8,2.51-14.52,0-20.32-5.83-31.67-31.79-63.51-63.42-95.09-95.3a19.14,19.14,0,0,0-15-6.13c-22.94.25-45.88.14-68.81.08-14-.05-21.94-6.62-22.13-20.67q-.75-57.08,0-114.16c.19-14.05,8.1-20.62,22.13-20.66,23.1-.07,46.22.29,69.3-.29a22.32,22.32,0,0,0,13.86-5.68q47.17-46.26,93.56-93.31c6.85-6.91,14.09-11.61,23.84-7.31s12.17,12.56,12.14,22.55C236.31,147.77,236.4,201.78,236.39,255.8Z" transform="translate(-1.26 -38.1)"/>
							<path d="M432.9,263.43c-3.57,57.53-32.81,106.14-92.41,135-10.84,5.25-22.24,1.69-27.15-7.88-4.82-9.4-1.46-19.9,9.18-25.69,18.56-10.08,35.74-21.44,48.67-38.78,43-57.65,24.5-140.77-39.1-174.45-3.68-2-7.34-3.92-10.87-6.1-9.14-5.64-12.35-15.52-8.1-24.52s15.49-14,25-9.11c13.22,6.82,26.62,14,38.16,23.24C411.72,163.59,433,210.28,432.9,263.43Z" transform="translate(-1.26 -38.1)"/>
							<path d="M315.68,255.71c.59-13.58-5.07-24-16.28-31.59a103.72,103.72,0,0,1-12.23-9.38c-7.38-6.82-8.59-15.77-3.65-23.3,5.25-8,15.08-10.86,24.16-7,44.83,19.18,60.46,76.29,32,116.18a75.17,75.17,0,0,1-31.13,25.61c-9.41,4.19-19.26,1.8-24.77-6.24-5.33-7.77-4.06-16.88,3.79-24.06a104.85,104.85,0,0,1,11.88-9C310.47,279.42,316.16,269.21,315.68,255.71Z" transform="translate(-1.26 -38.1)"/>
						</svg>
					</button>
					<div className="progressBar">
						<div className="progressBarInner"></div>
						<div className="progressKnob"></div>
					</div>
				</div>
				<div className="row">
					<button id="shuffle" className={isShuffled ? "active" : ""} onClick={() => setIsShuffled(!isShuffled)}>
						<svg viewBox="0 0 512.77 401.95">
							<path d="M39,384.21c8,0,16.15.83,24-.18,15.06-1.94,27-9.78,36.57-21.58Q195.4,244.78,291.32,127.18c19.78-24.34,45.1-36.37,76.32-36.34,16.26,0,32.51-.13,48.77.08,4.3.06,5.79-1.36,5.48-5.58a93,93,0,0,1,0-12c.78-15,16-23.2,28.6-15.08q27,17.43,53.44,35.65c11.24,7.72,11.31,22.16.1,29.89Q477.11,142.3,449.62,160c-12.23,7.85-26.41.4-27.73-14-.05-.57,0-1.15-.05-1.72-.55-17.39-.55-17.39-18.21-17.39-11.67,0-23.34.24-35-.06-19.81-.5-35.41,7.32-47.83,22.57Q225.19,266.85,129.45,384.2C109.52,408.72,84,420.74,52.59,420.65c-11.1,0-22.19.08-33.28,0C7.94,420.49-.47,412.68-.38,402.52S8,384.77,19.48,384.63c6.5-.07,13,0,19.51,0Z" transform="translate(0.39 -55.03)"/>
							<path d="M512,402.4a16.71,16.71,0,0,1-7.77,15.06c-18.08,12.18-36.09,24.45-54.41,36.25-12.69,8.16-27.08.21-28-14.9-.35-5.85,2.67-13.94-1.37-16.93s-11.69-1.05-17.77-1.23c-18.5-.58-37.1,1.54-55.5-1.91-21.93-4.11-39.88-15.07-53.95-32.26-16.59-20.27-33-40.7-49.4-61.12-7.72-9.6-7.18-20.15,1.18-26.91,8.09-6.55,19.15-4.74,26.67,4.47q24.49,30,48.92,60c11.7,14.33,26.66,21.84,45.36,21.68,16.64-.13,33.28-.2,49.91.08,4.89.08,6.26-1.54,6.06-6.22-.23-5.31-.37-10.8.7-16,2.56-12.28,15.77-18.33,26.31-11.64,18.72,11.88,37,24.41,55.37,36.87C509.47,391.28,512.38,396.39,512,402.4Z" transform="translate(0.39 -55.03)"/><path d="M42.25,90.85C52,90.7,65,90.4,77.78,93.55A91.46,91.46,0,0,1,128,125.63q24.41,30,48.84,60c7.92,9.75,7.56,20.6-.82,27.39s-19.16,4.75-27-4.86Q124.94,178.65,100.94,149c-12.07-14.91-27.45-22.58-46.8-22.22-11.65.23-23.31.14-35,0C7.87,126.71-.55,118.77-.38,108.65S7.89,91.06,19,90.87C25.67,90.75,32.35,90.85,42.25,90.85Z" transform="translate(0.39 -55.03)"/>
						</svg>
					</button>
					<button id="previous">
						<svg viewBox="0 0 374.3 393.78">
							<path d="M156.31,276.18,405.5,446.68a24,24,0,0,0,37.55-19.81v-341a24,24,0,0,0-37.55-19.8L156.31,236.56A24,24,0,0,0,156.31,276.18Z" transform="translate(-68.76 -59.29)"/>
							<rect x="68.76" y="59.29" width="51.63" height="393.78" rx="25.82" transform="translate(120.39 453.08) rotate(-180)"/>
						</svg>
					</button>
					<button id="playPause" onClick={() => setIsPlaying(!isPlaying)}>
						{isPlaying ? 
						<svg viewBox="0 0 297.19 389.08">
							<path d="M394.15,236.19,145,65.69A24,24,0,0,0,107.4,85.5v341A24,24,0,0,0,145,446.31l249.19-170.5A24,24,0,0,0,394.15,236.19Z" transform="translate(-107.4 -61.46)"/>
						</svg>
						: 
						<svg viewBox="0 0 195.69 393.78">
							<rect x="158.16" y="59.29" width="51.63" height="393.78" rx="25.82" transform="translate(209.79 453.08) rotate(-180)"/>
							<rect x="302.21" y="59.29" width="51.63" height="393.78" rx="25.82" transform="translate(497.9 453.08) rotate(-180)"/>
						</svg>
						}
					</button>
					<button id="next">
						<svg viewBox="0 0 374.3 393.78">
							<path d="M355.5,236.19,106.31,65.69A24,24,0,0,0,68.76,85.5v341a24,24,0,0,0,37.55,19.81L355.5,275.81A24,24,0,0,0,355.5,236.19Z" transform="translate(-68.76 -59.29)"/>
							<rect x="322.66" width="51.63" height="393.78" rx="25.82"/>
						</svg>
					</button>
					<button id="loop" className={`${(isLooping != 0) ? "active" : ""} mode${isLooping}`} onClick={() => setIsLooping(prevState => (prevState + 1) % 3)}>
						<svg viewBox="0 0 512.43 483.62">
							<path d="M234.86,126.9q-39.72,0-79.45,0C79.49,127,30.33,199.21,58.18,270c5.1,12.95,3.71,24.31-7.81,32.72-9.87,7.19-20.28,6.51-30.08-.92-4.18-3.16-6.31-7.7-8.25-12.36C-30.11,188.46,43.57,77.09,153.09,76.51c54.77-.29,109.55-.5,164.31.26,13.26.18,17.44-3.8,16.21-16.64-1-10.33-.24-20.85.07-31.27.17-5.8,1.65-11.31,7.76-13.85,6-2.48,10.8-.07,15.47,3.68q43.88,35.24,87.85,70.36c11.26,9,11.26,16.2,0,25.24Q400.66,149.72,356.44,185c-4.52,3.63-9.31,5.7-15,3.3C335.92,186,334,181,333.84,175.6c-.43-12.83-.64-25.68-.35-38.51.18-7.49-2.54-10.37-10.15-10.3C293.85,127.06,264.35,126.9,234.86,126.9Z" transform="translate(0 -14)"/>
							<path d="M277,384.71q40,0,80,0c75.91-.06,125.07-72.32,97.23-143-5.21-13.23-3.64-24.74,8.28-33.07,10-7,20.43-6,30.06,1.63,4.09,3.25,6.09,7.87,8,12.53,41.61,100.9-32,211.75-141.24,212.34q-84,.45-167.91-.14c-9.91-.07-13.12,3.2-12.58,12.85.64,11.6.22,23.27-.15,34.9C178.58,488.46,177,494,171,496.6s-10.79,0-15.45-3.71q-43.64-35.06-87.38-70c-11.86-9.51-11.84-16.47,0-26q43.44-34.83,86.91-69.6c4.8-3.86,9.73-6.71,15.93-4s7.64,8.58,7.8,14.52c.32,12.23.49,24.48.14,36.71-.21,7.52,2.59,10.35,10.18,10.28C218.43,384.55,247.72,384.71,277,384.71Z" transform="translate(0 -14)"/>
						</svg>
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
		</>
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
