import React from 'react';
import { Outlet } from 'react-router-dom';

import PlayBackControls from '@components/playbackControls';
import { Search } from '@components/icons';
import NavLink from '@components/navLink';

const Dashboard: React.FC = () => {
	return (
		<>
			<div id="navbar">
				<div className="pillRow">
					<NavLink to="/" defaultClassName="pill" isActive="select">
						Playlists
					</NavLink>
					<NavLink to="/artists" defaultClassName="pill" isActive="select">
						Artists
					</NavLink>
					<NavLink to="/albums" defaultClassName="pill" isActive="select">
						Albums
					</NavLink>
					<NavLink to="/queue" defaultClassName="pill" isActive="select">
						Queue
					</NavLink>
					<div id="discordifySearch">
						<Search />
					</div>
				</div>
			</div>
			<div className="grid">
				<Outlet />
			</div>
			<PlayBackControls />
		</>
	);
};

export default Dashboard;
