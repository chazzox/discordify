import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ACTION_TYPES, debug_log, Dispatcher, useSpotify } from '@utils';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';
import Queue from '@routes/queue';
import Dashboard from '@components/dashboard';

const Sidebar = () => {
	const { accessToken, setAccessToken } = useSpotify();

	React.useEffect(() => {
		debug_log(`Access token: '${accessToken}'`);
	}, [accessToken]);

	const LOGS = [
		ACTION_TYPES.SPOTIFY_PLAYER_STATE,
		ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
		ACTION_TYPES.SPOTIFY_PROFILE_UPDATE
	];

	React.useEffect(() => {
		if (!accessToken) {
			debug_log(`i should fetch token: '${accessToken}'`);
			// this causes error smh
			setAccessToken('hello world');
		}

		// @TEMP : Logging discord internal spotify events
		LOGS.forEach((l) => Dispatcher.subscribe(l, debug_log));
		return () => {
			// Unsubbing from log on unMount
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
				<Route
					path="/login"
					element={<>Please open a spotify window to use the plugin!</>}
				/>
			</Routes>
		</div>
	);
};

export default Sidebar;
