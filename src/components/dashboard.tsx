import React from 'react';

import PlayBackControls from '@components/playbackControls';
import { Search } from '@components/navbarIcons';
import NavLink from '@components/navLink';
import { useLocation } from 'react-router-dom';
import { debug_log } from '@utils';

const Dashboard: React.FC<{ children?: any }> = ({ children }) => {
	let location = useLocation();

	React.useEffect(() => {
		debug_log(location, children);
	}, [location, children]);

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
			<div className="grid">{children}</div>
			<PlayBackControls />
		</>
	);
};

export default Dashboard;
