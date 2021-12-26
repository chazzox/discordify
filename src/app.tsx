import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Sidebar from '@components/sidebar';
import { Spotify } from '@components/navbarIcons';
import { SIDEBAR_CONTAINER_CLASS, SpotifyContext } from '@utils';

export default function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	const [accessToken, setAccessToken] = React.useState('');

	const container = document.querySelector('.container-2lgZY8');

	return (
		<MemoryRouter>
			<SpotifyContext.Provider value={{ accessToken, setAccessToken }}>
				<button id="discordifyBtn" onClick={() => setIsHidden(!isHidden)}>
					<div className="iconWrapper-2OrFZ1 clickable-3rdHwn">
						<Spotify />
						<div
							id="discordifyBtnTooltip"
							className="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipPrimary-1d1ph4"
						>
							<div className="tooltipPointer-3ZfirK"></div>
							<div className="tooltipContent-bqVLWK">
								{isHidden ? 'Open' : 'Close'} Spotify
							</div>
						</div>
					</div>
				</button>
				{ReactDOM.createPortal(!isHidden && <Sidebar />, container)}
			</SpotifyContext.Provider>
		</MemoryRouter>
	);
}
