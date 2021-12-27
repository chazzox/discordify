import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ACTION_TYPES, debug_log, Dispatcher } from '@utils';

import App from './app';
import './discordify.scss';

const LOGS = [
	ACTION_TYPES.SPOTIFY_PLAYER_PLAY,
	ACTION_TYPES.SPOTIFY_PLAYER_STATE,
	ACTION_TYPES.SPOTIFY_PROFILE_UPDATE
];
module.exports = class SpotifyDiscord {
	patchedHeader = false;
	cancel_patch_header() {}
	load() {
		this.patch();
	}
	start() {
		this.patch();
		LOGS.forEach((l) => Dispatcher.subscribe(l, (e: any) => debug_log(l, e)));
	}
	stop() {
		LOGS.forEach((l) => Dispatcher.unsubscribe(l, (e: any) => debug_log(l, e)));
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
						returnValue?.props?.toolbar?.props?.children.push(
							<MemoryRouter>
								<App />
							</MemoryRouter>
						);
					}
				}
			);
			this.patchedHeader = true;
		}
	}
};
