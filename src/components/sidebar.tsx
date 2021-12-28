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
	const { state } = useSpotify();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!state.accessToken) navigate('/login');
		else navigate('/');
	}, [state.accessToken]);

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
