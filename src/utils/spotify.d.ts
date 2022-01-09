// ----------- Spotify Discord Dispatcher Events -----------
type SpotifyDevice = {
	id: string;
	is_active: boolean;
	is_private_session: boolean;
	is_restricted: boolean;
	name: string;
	type: SpotifyDeviceType;
	volume_percent: number;
};

declare enum SpotifyDeviceType {
	Speaker = 'Speaker',
	Computer = 'Computer'
}

type DeviceUpdateEvent = {
	accountId: string;
	devices: SpotifyDevice[];
	type: string;
};

type SpotifyTrack = any;

interface StateUpdateEvent {
	accessToken?: string;
	context: any;
	device: SpotifyDevice;
	is_playing: boolean;
	isPlaying: boolean;
	position: number;
	repeat: boolean;
	type: string;
	track: SpotifyTrack;
}

type AccessTokenEvent = {
	type: string;
	accountId: string;
	accessToken: string;
};

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
