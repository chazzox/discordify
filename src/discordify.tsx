import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { initialState, SpotifyContext, spotifyReducer } from '@utils';

import App from './app';
import './discordify.scss';

module.exports = class SpotifyDiscord {
	patchedHeader = false;
	cancel_patch_header() {}
	load() {
		this.patch();
	}
	start() {
		this.patch();
	}
	stop() {
		this.cancel_patch_header();
	}
	patch() {
		// patches toolbar component with react app
		// @TODO: replace with Patcher
		const HeaderBarContainer =
			BdApi.findModuleByDisplayName('HeaderBarContainer')?.prototype;

		if (HeaderBarContainer && !this.patchedHeader) {
			this.cancel_patch_header = BdApi.monkeyPatch(
				HeaderBarContainer,
				'renderLoggedIn',
				{
					after: ({ returnValue }) => {
						// pushes the component to the children prop
						returnValue?.props?.toolbar?.props?.children.push(<MainComponent />);
					}
				}
			);
			this.patchedHeader = true;
		}
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
