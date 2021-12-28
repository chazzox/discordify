import React from 'react';

const Queue = () => {
	return (
		<>
			<h1 className="titleText">Queue</h1>
			<h1 className="headerText">Now playing</h1>
			<div className="gridBox queueBox">
				<h1>1</h1>
				<div className="songInfo">
					<div className="playlistArtwork"></div>
					<div className="songExtraInfo">
						<h1>Song Name</h1>
						<h2>Artist</h2>
					</div>
				</div>
				<h3>Album</h3>
				<h4>2:36</h4>
			</div>
			<h1 className="headerText">Next up</h1>
			<div className="gridBox queueBox">
				<h1>2</h1>
				<div className="songInfo">
					<div className="playlistArtwork"></div>
					<div className="songExtraInfo">
						<h1>Song Name</h1>
						<h2>Very very long artist name</h2>
					</div>
				</div>
				<h3>Extremely long and unnecesary album name</h3>
				<h4>1:47</h4>
			</div>
			<div className="gridBox queueBox">
				<h1>3</h1>
				<div className="songInfo">
					<div className="playlistArtwork"></div>
					<div className="songExtraInfo">
						<h1>Song Name</h1>
						<h2>Artist</h2>
					</div>
				</div>
				<h3>Album</h3>
				<h4>3:06</h4>
			</div>
			<div className="gridBox queueBox">
				<h1>4</h1>
				<div className="songInfo">
					<div className="playlistArtwork"></div>
					<div className="songExtraInfo">
						<h1>Song Name</h1>
						<h2>Artist</h2>
					</div>
				</div>
				<h3>Album</h3>
				<h4>3:06</h4>
			</div>
		</>
	);
};

export default Queue;
