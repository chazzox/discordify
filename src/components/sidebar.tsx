import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useSpotify } from '@utils';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';
import Queue from '@routes/queue';

import Dashboard from '@components/dashboard';
import Login from '@components/login';

const Sidebar = () => {
	const navigate = useNavigate();
	const { state } = useSpotify();

	const { accessToken } = state;

	React.useEffect(() => {
		if (!accessToken) navigate('/login');
		else navigate('/');
	}, [accessToken]);

	return (
		<div id="discordSpotifySidebar">
			<div id="discordSpotifyInner">
				<Routes>
					<Route path="" element={<Dashboard />}>
						test
						<Route index element={<Playlists />} />
						<Route path="/artists" element={<Artists />} />
						<Route path="albums" element={<Albums />} />
						<Route path="queue" element={<Queue />} />
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
};

export default Sidebar;
