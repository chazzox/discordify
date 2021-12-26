import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { ACTION_TYPES, debug_log, Dispatcher, useSpotify } from '@utils';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';
import Queue from '@routes/queue';

import Dashboard from '@components/dashboard';
import Login from '@components/login';

const Sidebar = () => {
	const {
		state: { accessToken }
	} = useSpotify();
	const navigate = useNavigate();

	React.useEffect(() => {
		debug_log(`access token: '${accessToken}'`);
		if (!accessToken) navigate('/login');
		else navigate('/');
	}, [accessToken]);

	const LOGS = [
		ACTION_TYPES.SPOTIFY_PLAYER_STATE,
		ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
		ACTION_TYPES.SPOTIFY_PROFILE_UPDATE
	];

	React.useEffect(() => {
		// @TEMP : Logging discord internal spotify events.
		LOGS.forEach((l) => Dispatcher.subscribe(l, debug_log));
		return () => {
			// @TEMP : Unsubbing from log on unMount.
			LOGS.forEach((l) => Dispatcher.unsubscribe(l, debug_log));
		};
	}, []);

	return (
		<div id="discordSpotifySidebar">
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<Playlists />} />
					<Route path="artists" element={<Artists />} />
					<Route path="albums" element={<Albums />} />
					<Route path="queue" element={<Queue />} />
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
};

export default Sidebar;
