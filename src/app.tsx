import React, { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Spotify } from '@components/navbarIcons';
import Sidebar from '@components/sidebar';

const sidebarContainerClass = 'content-yTz4x3';

export default function App() {
	const [isHidden, setIsHidden] = React.useState(true);

	return (
		<MemoryRouter>
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
			<SidebarPortal isHidden={isHidden} />
		</MemoryRouter>
	);
}

const SidebarPortal = ({ isHidden }) => {
	const wrapper = document.createElement('div');

	useEffect(() => {
		const container = document.getElementsByClassName(sidebarContainerClass)[0];
		container?.appendChild(wrapper);
		return () => {
			container?.removeChild(wrapper);
		};
	}, [isHidden]);

	return <>{BdApi.ReactDOM.createPortal(<>{!isHidden && <Sidebar />}</>, wrapper)}</>;
};
