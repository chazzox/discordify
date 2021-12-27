import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Sidebar from '@components/sidebar';
import { Spotify } from '@components/navbarIcons';
import { initialState, SIDEBAR_CONTAINER_CLASS, SpotifyContext, spotifyReducer } from '@utils';

export default function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	const [state, dispatch] = React.useReducer(spotifyReducer, initialState);

	const container = document.querySelector(SIDEBAR_CONTAINER_CLASS);

	return (
		<SpotifyContext.Provider value={{ state, dispatch }}>
			<button id="discordifyBtn" onClick={() => setIsHidden((prev) => !prev)}>
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
	);
}
