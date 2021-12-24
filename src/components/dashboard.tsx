import React from 'react';

import { Search } from '@components/navbarIcons';
import NavLink from '@components/navLink';
import PlayBackControls from '@components/playbackControls';
import { useSpotify } from '@utils';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = ({ children }) => {
	const { accessToken } = useSpotify();

	if (!accessToken) return <Navigate to="/login" />;

	return (
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
			<div className="grid">{children}</div>
			<PlayBackControls token={'accessToken'} />
		</div>
	);
};

export default Dashboard;
