import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '@components/sidebar';
import { Spotify } from '@components/icons';

import { ACTION_TYPES, log, Dispatcher, getAuthHeader, SIDEBAR_CONTAINER_CLASS, SpotifyActions, useSpotify } from 'utils';
import { useLocation } from 'react-router-dom';

export default function App() {
	const [isHidden, setIsHidden] = React.useState(BdApi.loadData('discordify', 'isHidden'));
	const { state, dispatch } = useSpotify();
	const location = useLocation();

	const { accessToken } = state;

	React.useEffect(() => {
		BdApi.setData('discordify', 'pathname', location.pathname);
	}, [location]);

	React.useEffect(() => {
		const handleTokenUpdate = (e: AccessTokenEvent) => {
			if (accessToken !== e.accessToken) dispatch({ type: SpotifyActions.SET_ACCESS, payload: e.accessToken });
		};

		// fires too often
		const handleStateUpdate = (e: StateUpdateEvent) => {
			// if the spotify state has changed and we still dont have an access token
			if (!accessToken) {
				log(accessToken, state);
				getAuthHeader().then((token) => {
					if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
				});
			}
		};

		const handleDeviceUpdate = (e: DeviceUpdateEvent) => {
			const filteredDevices = e.devices.filter((d) => d.type === 'Computer');
			// if there are no devices clear the token
			if (filteredDevices.length === 0) dispatch({ type: SpotifyActions.SET_ACCESS, payload: null });

			// try to fetch token when a new device is detected and the accessToken is null
			if (!accessToken && filteredDevices.length > 0)
				getAuthHeader(e.accountId).then((token) => {
					if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
				});
		};

		const log_pairs = [
			[ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate],
			[ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate],
			[ACTION_TYPES.SPOTIFY_SET_DEVICES, handleDeviceUpdate]
		];

		// if the access token is ever updated by discord internals, update the components value
		log_pairs.forEach(([action, func]) => Dispatcher.subscribe(action, func));

		return () => {
			log_pairs.forEach(([action, func]) => Dispatcher.unsubscribe(action, func));
		};
	}, [accessToken]);

	return (
		<>
			<button
				id="discordifyBtn"
				onClick={() =>
					setIsHidden((prev) => {
						BdApi.saveData('discordify', 'isHidden', !prev);
						return !prev;
					})
				}
			>
				<div className="iconWrapper-2awDjA clickable-ZD7xvu">
					<Spotify />
					<div id="discordifyBtnTooltip" className="tooltip-14MtrL tooltipBottom-2WzfVx tooltipPrimary-3qLMbS">
						<div className="tooltipPointer-3L49xb"></div>
						<div className="tooltipContent-Nejnvh">{isHidden ? 'Open' : 'Close'} Spotify</div>
					</div>
				</div>
			</button>
			{ReactDOM.createPortal(!isHidden && <Sidebar />, document.querySelector(SIDEBAR_CONTAINER_CLASS))}
		</>
	);
}
