import React from 'react';
import classNames from 'classnames';

import { Pause, Play, Loop, Shuffle, Previous, Next } from '@components/navbarIcons';
import Volume from '@components/volume';
import { useSpotify } from '@utils';

const PlayBackControls: React.FC<{ token: string }> = ({ token }) => {
	const { state } = useSpotify();
	const { playerState, currentlyPlaying, accessToken } = state;

	React.useEffect(() => {}, []);

	return (
		accessToken && (
			<div id="playbackControls">
				<div id="songInformation">
					<div className="row">
						<div
							id="currentArtwork"
							style={{ backgroundImage: `url('${currentlyPlaying.image}')` }}
						/>
					</div>
					<div className="row">
						<p id="currentSong">
							{currentlyPlaying.song} - {currentlyPlaying.album}
						</p>
					</div>
					<div className="row">
						<p id="currentArtist">{currentlyPlaying.artist}</p>
					</div>
				</div>
				<Volume />
				<div className="row">
					<button id="shuffle" className={playerState.isShuffle && 'active'}>
						<Shuffle />
					</button>
					<button id="previous">
						<Previous />
					</button>
					<button id="playPause">{playerState.isPlaying ? <Play /> : <Pause />}</button>
					<button id="next">
						<Next />
					</button>
					<button
						id="loop"
						className={classNames(
							{ active: playerState.isLooping != 0 },
							`mode${playerState.isLooping}`
						)}
					>
						<Loop />
					</button>
				</div>
				<div id="songProgress" className="progressBarRow row">
					<p>1:43</p>
					<div className="progressBar">
						<div className="progressBarInner"></div>
						<div className="progressKnob"></div>
					</div>
					<p>2:38</p>
				</div>
			</div>
		)
	);
};
export default PlayBackControls;
