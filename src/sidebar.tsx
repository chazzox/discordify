import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { ACTION_TYPES, debug_log, Dispatcher, getAuthHeader, SpotifyContext } from '@utils';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';
import Queue from '@routes/queue';
import Dashboard from '@components/dashboard';

const Sidebar = () => {
	const [accessToken, setAccessToken] = React.useState('');
	const Spotify = useContext(SpotifyContext);
	const navigate = useNavigate();

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

	React.useEffect(() => {
		if (!accessToken) navigate('/login');
	}, [accessToken]);

	return (
		<div id="discordSpotifySidebar">
			<Routes>
				{!accessToken && (
					<Route path="/" element={<Dashboard />}>
						<Route index element={<Playlists />} />
						<Route path="artists" element={<Artists />} />
						<Route path="albums" element={<Albums />} />
						<Route path="queue" element={<Queue />} />
					</Route>
				)}
				<Route path="/login" element={<>No session</>} />
			</Routes>
		</div>
	);
};

export default Sidebar;
