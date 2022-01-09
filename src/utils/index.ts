import { createContext, useContext } from 'react';

// -----------------  MODULES  -----------------

// Subscribe to internal discord events
export const Dispatcher = BdApi.findModuleByProps('dirtyDispatch');

// Spotify discord internals
export const SpotifyTrackUtils = BdApi.findModuleByProps('getActiveSocketAndDevice');
export const SpotifyUtils = BdApi.findModuleByProps('SpotifyAPI');

// ----------------  CONSTANTS  ----------------

export const PAGINATION_LIMIT = '50';

export const SIDEBAR_CONTAINER_CLASS = '.container-2lgZY8';

// const Endpoints =  BdApi.findModuleByProps('SpotifyEndpoints')

// Discord Dispatcher Types

export const { ActionTypes: ACTION_TYPES } = BdApi.findModuleByProps(
	'ActionTypes',
	'API_HOST'
) as ActionTypes;

/**
 * @description Enum that contains all the spotify endpoints
 */
enum SPOTIFY_URLS {
	CURRENTLY_PLAYING = 'https://api.spotify.com/v1/me/player/currently-playing',
	PAUSE = 'https://api.spotify.com/v1/me/player/pause',
	PLAY = 'https://api.spotify.com/v1/me/player/play',
	NEXT = 'https://api.spotify.com/v1/me/player/next',
	PREVIOUS = 'https://api.spotify.com/v1/me/player/previous',
	PLAYLISTS = 'https://api.spotify.com/v1/me/playlists'
}

/**
 * @description Enum for http methods
 */
enum METHODS {
	PUT = 'PUT',
	POST = 'POST',
	GET = 'GET'
}

/**
 * @description The object used to generate the log styles
 */
const LOG_STYLES = {
	color: 'white',
	background: '#1db954',
	padding: '2px 0.5em',
	'border-radius': '0.5em',
	'font-weight': 'bold'
};

/**
 * @description `console.log` with the 'discordify' prefix
 * @param output any series of objects you want to log
 */
export function debug_log(...output: any): void {
	console.log(
		'%cdiscordify',
		Object.entries(LOG_STYLES)
			.map(([a, b]) => `${a}:${b};`)
			.join(''),
		...output
	);
}

// ---------------  SPOTIFY API FUNCTIONS  ---------------

/**
 * @description Retrieves access token to spotify song
 * @param accountId if there is not an internal value for accessToken and we know the users spotify
 * account id, use getAccessToken to fetch a new one
 * @returns Authorization header
 */
export async function getAuthHeader(accountId?: string): Promise<string> {
	const accessToken = SpotifyTrackUtils.getActiveSocketAndDevice()?.socket?.accessToken;
	if (!accessToken && accountId) {
		const req = await SpotifyUtils.getAccessToken(accountId);
		return req?.body?.access_token;
	}
	return `Bearer ${accessToken}`;
}

/**
 * @description Get information about users playing data
 * @param token Authorization header
 * @returns Currently playing object
 */
export async function getPlaying(token: string): Promise<Currently_playing> {
	const req = await fetch(SPOTIFY_URLS.CURRENTLY_PLAYING, {
		method: METHODS.GET,
		headers: { Authorization: token }
	});

	return await req.json();
}

/**
 * @description Get all user playlists
 * @param token Authorization header
 * @returns User playlist object
 */
export async function getPlaylists(token: string): Promise<Playlists> {
	const playlists = [];

	let url = new URL(SPOTIFY_URLS.PLAYLISTS);
	url.searchParams.append('limit', PAGINATION_LIMIT);

	let next = url.toString();
	while (next) {
		const req = await fetch(next, {
			method: METHODS.GET,
			headers: { Authorization: token }
		});
		const res = await req.json();
		playlists.push(...res.items);
		next = res.next;
	}

	return playlists;
}

// --------- SPOTIFY CONTEXT ---------

export enum SpotifyActions {
	SET_ACCESS = 'SET_ACCESS',
	SET_IS_PLAYING = 'SET_IS_PLAYING',
	SET_IS_SHUFFLE = 'SET_IS_SHUFFLE',
	SET_IS_LOOPING = 'SET_IS_LOOPING'
}

type Actions =
	| { type: SpotifyActions.SET_ACCESS; payload: string }
	| { type: SpotifyActions.SET_IS_PLAYING; payload: boolean }
	| { type: SpotifyActions.SET_IS_SHUFFLE; payload: boolean }
	| { type: SpotifyActions.SET_IS_LOOPING; payload: number };

type ContextType = {
	state: React.ReducerState<typeof spotifyReducer>;
	dispatch: React.Dispatch<React.ReducerAction<typeof spotifyReducer>>;
};

export const SpotifyContext = createContext<ContextType>(null);

export const useSpotify = () => {
	return useContext(SpotifyContext);
};

export const initialState: StateType = {
	accessToken: null,
	currentlyPlaying: { album: null, song: null, artist: null, image: null },
	playerState: { isPlaying: false, isShuffle: false, isLooping: 0 }
};

export function spotifyReducer(state: StateType, action: Actions): StateType {
	switch (action.type) {
		case SpotifyActions.SET_ACCESS:
			return { ...state, accessToken: action.payload };
		case SpotifyActions.SET_IS_PLAYING:
			return { playerState: { isPlaying: action.payload }, ...state };
		case SpotifyActions.SET_IS_SHUFFLE:
			return { playerState: { isShuffle: action.payload }, ...state };
		case SpotifyActions.SET_IS_LOOPING:
			return { playerState: { isLooping: action.payload }, ...state };
		default:
			throw new Error('No Action with signature' + action);
	}
}
