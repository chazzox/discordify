import React from 'react';

const Playlists = () => {
	return (
		<>
			<div className="gridBox wideBox">
				<div className="playlistArtwork"></div>
				<h1>Liked Songs</h1>
				<h2>56 liked songs</h2>
			</div>
			<div className="gridBox">
				<div className="playlistArtwork"></div>
				<h1>Playlist Name</h1>
				<h2>Description of Playlist</h2>
			</div>
			<div className="gridBox">
				<div className="playlistArtwork"></div>
				<h1>Playlist Name</h1>
				<h2>Super long description of the playlist.</h2>
			</div>
			<div className="gridBox">
				<div className="playlistArtwork"></div>
				<h1>Playlist Name</h1>
				<h2>Description of Playlist</h2>
			</div>
		</>
	);
};

export default Playlists;
