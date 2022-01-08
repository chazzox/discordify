type StateUpdateEvent = any;
type DeviceUpdateEvent = any;

interface ActionTypes {
	ActionTypes: {
		SPOTIFY_PLAYER_PLAY: string;
		SPOTIFY_PLAYER_PAUSE: string;
		SPOTIFY_PLAYER_STATE: string;
		SPOTIFY_ACCOUNT_ACCESS_TOKEN: string;
		SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: string;
		SPOTIFY_SET_ACTIVE_DEVICE: string;
		SPOTIFY_SET_DEVICES: string;
	};
}

type AccessTokenEvent = {
	type: string;
	accountId: string;
	accessToken: string;
};

type SpotifyMediaType = 'album' | 'track';

interface StateType {
	accessToken?: string;
	currentlyPlaying: {
		album?: string;
		song?: string;
		artist?: string;
		image?: string;
	};
	playerState: {
		isPlaying: boolean;
		isShuffle: boolean;
		isLooping: number;
	};
}

interface SpotifyItem {
	name: string;
	album: any;
}

interface Currently_playing {
	actions: { resuming: boolean };
	context: {
		external_urls: { spotify: string };
		type: SpotifyMediaType;
		uri: string;
	};
	is_playing: boolean;
	item: SpotifyItem;

	progress_ms: number;
	timestamp: number;
}

interface Playlists {}
