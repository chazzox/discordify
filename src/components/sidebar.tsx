import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Search } from '@components/navbarIcons';
import NavLink from '@components/navLink';
import PlayBackControls from '@components/playbackControls';
import { ACTION_TYPES, debug_log, Dispatcher, getAuthHeader, SpotifyContext } from '@utils';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';
import Queue from '@routes/queue';

const Sidebar = () => {
	const [accessToken, setAccessToken] = React.useState('');

	const Spotify = useContext(SpotifyContext);

	const LOGS = [
		ACTION_TYPES.SPOTIFY_PLAYER_STATE,
		ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
		ACTION_TYPES.SPOTIFY_PROFILE_UPDATE
	];

	React.useEffect(() => {
		debug_log(Spotify);
		getAuthHeader()
			.then((token) => {
				if (token) setAccessToken(`Bearer ${token}`);
			})
			.catch((err) => debug_log('token request failed', err));

		// @TEMP : Logging discord internal spotify events
		LOGS.forEach((l) => Dispatcher.subscribe(l, debug_log));
		return () => {
			// Unsubbing from log on unMount
			LOGS.forEach((l) => Dispatcher.unsubscribe(l, debug_log));
		};
	}, []);

	return (
		<div id="discordSpotifySidebar">
			{accessToken !== '' && (
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
							<NavLink to="/queue" standard="pill" isActive="select">
								Queue
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
							<Route path="/queue" element={<Queue />} />
						</Routes>
					</div>
					<PlayBackControls token={accessToken} />
				</div>
			)}
		</div>
	);
};

export default Sidebar;
