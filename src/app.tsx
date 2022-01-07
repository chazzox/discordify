import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '@components/sidebar';
import { Spotify } from '@components/navbarIcons';
import {
	AccessTokenEvent,
	ACTION_TYPES,
	debug_log,
	getAuthHeader,
	SIDEBAR_CONTAINER_CLASS,
	SpotifyActions,
	useSpotify
} from '@utils';

export default function App() {
	const [isHidden, setIsHidden] = React.useState(true);
	const { state, dispatch } = useSpotify();

	const { accessToken } = state;

	const container = document.querySelector(SIDEBAR_CONTAINER_CLASS);

	React.useEffect(() => {
		const handleTokenUpdate = (e: AccessTokenEvent) => {
			if (accessToken !== e.accessToken)
				dispatch({ type: SpotifyActions.SET_ACCESS, payload: e.accessToken });
		};

		// fires too often
		const handleStateUpdate = (e: any) => {
			// if the spotify state has changed and we still dont have an access token
			if (!accessToken) {
				debug_log(accessToken, state);
				getAuthHeader().then((token) => {
					if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
				});
			}
		};

		const handleDeviceUpdate = (e) => {
			// if there are no devices clear the token
			if (e.devices.length === 0) dispatch({ type: SpotifyActions.SET_ACCESS, payload: null });

			// try to fetch token when a new device is detected and the accessToken is null
			if (!accessToken && e.devices.length > 0)
				getAuthHeader(e.accountId).then((token) => {
					if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
				});
		};
	}, [accessToken]);

	return (
		<>
			<button
				id="discordifyBtn"
				onClick={() =>
					setIsHidden((prev) => {
						return !prev;
					})
				}
			>
				<div className="iconWrapper-2OrFZ1 clickable-3rdHwn">
					<Spotify />
					<div
						id="discordifyBtnTooltip"
						className="tooltip-2QfLtc tooltipBottom-3ARrEK tooltipPrimary-1d1ph4"
					>
						<div className="tooltipPointer-3ZfirK"></div>
						<div className="tooltipContent-bqVLWK">{isHidden ? 'Open' : 'Close'} Spotify</div>
					</div>
				</div>
			</button>
			{ReactDOM.createPortal(!isHidden && <Sidebar />, container)}
		</>
	);
}
