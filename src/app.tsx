import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '@components/sidebar';
import { Spotify } from '@components/navbarIcons';
import {
	AccessTokenEvent,
	ACTION_TYPES,
	debug_log,
	Dispatcher,
	getAuthHeader,
	SIDEBAR_CONTAINER_CLASS,
	SpotifyActions,
	useSpotify
} from '@utils';

const LOGS = [
	ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
	ACTION_TYPES.SPOTIFY_PLAYER_PAUSE,
	ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE
];

export default function App() {
	const [isHidden, setIsHidden] = React.useState(BdApi.loadData('discordify', 'isHidden'));
	const { state, dispatch } = useSpotify();

	const container = document.querySelector(SIDEBAR_CONTAINER_CLASS);

	const handleTokenUpdate = (e: AccessTokenEvent) => {
		if (state.accessToken !== e.accessToken)
			dispatch({ type: SpotifyActions.SET_ACCESS, payload: e.accessToken });
	};

	const handleStateUpdate = (e: any) => {
		debug_log('state update', e);
		// if the spotify state has changed and we still dont have an access token
		if (!state.accessToken) {
			getAuthHeader().then((token) => {
				if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
			});
		}
	};

	const handleDeviceUpdate = (e) => {
		debug_log(ACTION_TYPES.SPOTIFY_SET_DEVICES, e);
		// if there are no devices clear the token
		if (e.devices.length === 0) dispatch({ type: SpotifyActions.SET_ACCESS, payload: null });

		// try to fetch token when a new device is detected and the accessToken is null
		if (!state.accessToken && e.devices.length > 0)
			getAuthHeader().then((token) => {
				debug_log('token from devices', token);
				if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
			});
	};

	React.useEffect(() => {
		// if the access token is ever updated by discord internals, update the components value
		Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate);
		Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate);
		Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_SET_DEVICES, handleDeviceUpdate);

		LOGS.forEach((l) => Dispatcher.subscribe(l, (e: any) => debug_log(l, e)));
		return () => {
			Dispatcher.unsubscribe(ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate);
			Dispatcher.unsubscribe(ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate);
			Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_SET_DEVICES, handleDeviceUpdate);

			LOGS.forEach((l) => Dispatcher.unsubscribe(l, (e: any) => debug_log(l, e)));
		};
	}, []);

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
