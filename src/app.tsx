import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '@components/sidebar';
import { Spotify } from '@components/navbarIcons';
import {
	AccessTokenEvent,
	ACTION_TYPES,
	debug_log,
	Dispatcher,
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
	const [isHidden, setIsHidden] = React.useState(true);
	const { state, dispatch } = useSpotify();

	const container = document.querySelector(SIDEBAR_CONTAINER_CLASS);

	const handleTokenUpdate = (e: AccessTokenEvent) => {
		if (state.accessToken !== e.accessToken)
			dispatch({ type: SpotifyActions.SET_ACCESS, payload: e.accessToken });
	};

	const handleStateUpdate = (e: any) => {
		debug_log('state update', e);
	};

	React.useEffect(() => {
		// if the access token is ever updated by discord internals, update the components value
		Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN, handleTokenUpdate);
		Dispatcher.subscribe(ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate);
		LOGS.forEach((l) => Dispatcher.subscribe(l, (e: any) => debug_log(l, e)));
		return () => {
			Dispatcher.unsubscribe(
				ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN,
				handleTokenUpdate
			);
			Dispatcher.unsubscribe(ACTION_TYPES.SPOTIFY_PLAYER_STATE, handleStateUpdate);
			LOGS.forEach((l) => Dispatcher.unsubscribe(l, (e: any) => debug_log(l, e)));
		};
	}, []);

	return (
		<>
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
		</>
	);
}
