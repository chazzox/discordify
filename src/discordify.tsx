import React, { useEffect } from 'react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

import { Spotify, Search } from './components/navbarIcons';
import NavLink from './components/navLink';
import PlayBackControls from './components/playbackControls';
import './discordify.scss';

const sidebarContainerClass = 'content-yTz4x3';

function App() {
	const [isHidden, setIsHidden] = React.useState(true);

	return (
		<MemoryRouter>
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
		</MemoryRouter>
	);
}

const SidebarPortal = ({ isHidden }) => {
	const wrapper = document.createElement('div');

	useEffect(() => {
		const container = document.getElementsByClassName(sidebarContainerClass)[0];
		container?.appendChild(wrapper);
		return () => {
			container?.removeChild(wrapper);
		};
	}, [isHidden]);

	return <>{BdApi.ReactDOM.createPortal(<>{!isHidden && <Sidebar />}</>, wrapper)}</>;
};

const Sidebar = () => {
	return (
		<div id="discordSpotifySidebar">
			<div id="discordSpotifyInner">
				<div id="navbar">
					<div className="pillRow">
						<NavLink to="/" standard="pill" isActive="select">
							Playlists
						</NavLink>
						<NavLink to="/artists" standard="pill" isActive="select">
							Artists
						</NavLink>
						<NavLink to="/albums" standard="pill" isActive="select">
							Albums
						</NavLink>
						<div id="discordifySearch">
							<Search />
						</div>
					</div>
				</div>
				<div className="grid">
					<Routes>
						<Route path="/" element={<Playlists />} />
						<Route path="/artists" element={<Artists />} />
						<Route path="/albums" element={<Albums />} />
					</Routes>
				</div>
				<PlayBackControls />
			</div>
		</div>
	);
};

const Playlists = () => {
	return (
		<>
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
		</>
	);
};

const Artists = () => {
	return <>Artists</>;
};
const Albums = () => {
	return <>Albums</>;
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
