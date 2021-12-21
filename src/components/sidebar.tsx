import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { getAuthHeader, data_log } from '@utils';

import { Search } from '@components/navbarIcons';
import NavLink from '@components/navLink';
import PlayBackControls from '@components/playbackControls';

import Albums from '@routes/albums';
import Artists from '@routes/artists';
import Playlists from '@routes/playlists';

const Sidebar = () => {
	const [accessToken, setAccessToken] = React.useState('');

	React.useEffect(() => {
		getAuthHeader()
			.then((token) => {
				setAccessToken(`Bearer ${token}`);
			})
			.catch((err) => data_log(err));

		data_log('Auth Header', accessToken);
	}, []);

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
				{accessToken !== '' && <PlayBackControls />}
			</div>
		</div>
	);
};

export default Sidebar;
