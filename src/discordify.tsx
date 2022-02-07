import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ACTION_TYPES, log, Dispatcher, initialState, SpotifyContext, spotifyReducer } from 'utils';

import App from './app';
import './discordify.scss';

const LOGS = [
	ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
	ACTION_TYPES.SPOTIFY_PLAYER_PAUSE,
	ACTION_TYPES.SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE
];

export default class Discordify {
	load() {
		BdApi.setData('discordify', 'isHidden', true);
	}
	start() {
		log('started!');

		const HeaderBarContainer = BdApi.findModuleByDisplayName('HeaderBarContainer')?.prototype;
		// @ts-expect-error
		BdApi.Patcher.after('discordify', HeaderBarContainer, 'renderLoggedIn', (_, __, returnValue) => {
			returnValue?.props?.toolbar?.props?.children.push(<MainComponent />);
		});

		LOGS.forEach((l) => Dispatcher.subscribe(l, (e: any) => log(l, e)));
	}
	stop() {
		// @ts-expect-error
		BdApi.Patcher.unpatchAll('discordify');
		LOGS.forEach((l) => Dispatcher.unsubscribe(l, (e: any) => log(l, e)));
	}
}

const MainComponent = () => {
	const [state, dispatch] = React.useReducer(spotifyReducer, initialState);

	return (
		<SpotifyContext.Provider value={{ state, dispatch }}>
			<MemoryRouter>
				<App />
			</MemoryRouter>
		</SpotifyContext.Provider>
	);
};
