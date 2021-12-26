import React from 'react';

import PlayBackControls from '@components/playbackControls';
import { Search } from '@components/navbarIcons';
import NavLink from '@components/navLink';

const Dashboard: React.FC = ({ children }) => {
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
