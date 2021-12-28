import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { initialState, SpotifyContext, spotifyReducer } from '@utils';

import App from './app';
import './discordify.scss';

module.exports = class SpotifyDiscord {
	load() {}
	start() {
		const HeaderBarContainer = BdApi.findModuleByDisplayName('HeaderBarContainer')?.prototype;
		// @ts-expect-error
		BdApi.Patcher.after('discordify', HeaderBarContainer, 'renderLoggedIn', (_, __, returnValue) => {
			returnValue?.props?.toolbar?.props?.children.push(<MainComponent />);
		});
	}
	stop() {
		// @ts-expect-error
		BdApi.Patcher.unpatchAll('discordify');
	}
};

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
