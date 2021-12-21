// ----------------  CONSTANTS  ----------------

const PAGINATION_LIMIT = '50';

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
 * @description print with the 'discordify' prefix
 * @param output any object you want to print
 */
export function data_log(...output: any): void {
	console.log(
		'%cdiscordify',
		Object.entries(LOG_STYLES)
			.map(([a, b]) => `${a}:${b};`)
			.join(''),
		...output
	);
}

// ----------------  SPOTIFY  ----------------

// Spotify discord internals
const SpotifyTrackUtils = BdApi.findModuleByProps('getActiveSocketAndDevice');
const SpotifyUtils = BdApi.findModuleByProps('SpotifyAPI');

/**
 * @description Retrieves access token to spotify song
 * @returns Authorization header
 */
export async function getAuthHeader(): Promise<string> {
	const accountId = SpotifyTrackUtils.getActiveSocketAndDevice()?.socket?.accountId;
	const res = await SpotifyUtils.getAccessToken(accountId);
	return res.body.access_token;
}

interface Currently_playing {}

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

interface Playlists {}

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
