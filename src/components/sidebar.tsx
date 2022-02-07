import React from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';

import { log, getPlaying, SpotifyActions, useSpotify } from 'utils';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';
import Queue from '@routes/queue';

import Dashboard from '@components/dashboard';
import Login from '@components/login';

const Sidebar = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useSpotify();

	const { accessToken } = state;

	React.useEffect(() => {
		if (accessToken) {
			getPlaying(accessToken).then((e) => {
				log(e);
				dispatch({ type: SpotifyActions.UPDATE_PLAYER, payload: { isPlaying: e.is_playing } });
			});
		}
		navigate(BdApi.loadData('discordify', 'pathname') || '/');
	}, []);

	return (
		<div id="discordSpotifySidebar">
			<div id="discordSpotifyInner">
				<Routes>
					<Route
						path="/"
						element={
							<Protect>
								<Dashboard />
							</Protect>
						}
					>
						<Route index element={<Playlists />} />
						<Route path="artists" element={<Artists />} />
						<Route path="albums" element={<Albums />} />
						<Route path="queue" element={<Queue />} />
						{/* Listings Album/Playlists */}
						{/* Search */}
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
};

const Protect = ({ children }) => {
	const { state } = useSpotify();
	let location = useLocation();

	if (!state.accessToken) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default Sidebar;
