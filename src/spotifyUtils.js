// spotify functions
export async function getUserInfo(token) {
	const result = await fetch('https://api.spotify.com/v1/me', {
		headers: { Authorization: 'Bearer ' + token }
	});
	return await result.json();
}

export async function togglePlay(token) {
	const currently_playing = await fetch(' https://api.spotify.com/v1/me/player/currently-playing', {
		headers: { Authorization: 'Bearer ' + token }
	});
	const currently_playing_json = await currently_playing.json();
	if (currently_playing_json.is_playing) pause(token);
	else play(token);
}

export async function pause(token) {
	fetch('https://api.spotify.com/v1/me/player/pause', { method: 'PUT', headers: { Authorization: 'Bearer ' + token } });
}

export async function play(token) {
	fetch('https://api.spotify.com/v1/me/player/play', { method: 'PUT', headers: { Authorization: 'Bearer ' + token } });
}

export async function next(token) {
	fetch('https://api.spotify.com/v1/me/player/next', { method: 'POST', headers: { Authorization: 'Bearer ' + token } });
}

export async function previous(token) {
	fetch('https://api.spotify.com/v1/me/player/previous', {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token }
	});
}

export async function getPlaylists(token) {
	const playlists = [];
	let next = 'https://api.spotify.com/v1/me/playlists?limit=50';
	while (next) {
		const res = await fetch(next, {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token }
		});
		const jsonResponse = await res.json();
		playlists.push(...jsonResponse.items);
		next = jsonResponse.next;
	}

	return playlists;
}
