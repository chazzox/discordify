import React from 'react';
import classNames from 'classnames';

import { Pause, Play, Loop, Shuffle, Previous, Next } from '@components/navbarIcons';
import Volume from '@components/volume';

const PlayBackControls: React.FC<{ token: string }> = ({ token }) => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isShuffled, setIsShuffled] = React.useState(false);
	const [isLooping, setIsLooping] = React.useState(0);

	const [currentlyPlaying, setCurrentInfo] = React.useState({
		image: '',
		name: '',
		maker: '',
		album: ''
	});

	return (
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
						{currentlyPlaying.name} - {currentlyPlaying.album}
					</p>
				</div>
				<div className="row">
					<p id="currentArtist">{currentlyPlaying.maker}</p>
				</div>
			</div>
			<Volume />
			<div className="row">
				<button
					id="shuffle"
					className={isShuffled && 'active'}
					onClick={() => setIsShuffled(!isShuffled)}
				>
					<Shuffle />
				</button>
				<button id="previous">
					<Previous />
				</button>
				<button id="playPause" onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? <Play /> : <Pause />}
				</button>
				<button id="next">
					<Next />
				</button>
				<button
					id="loop"
					className={classNames({ active: isLooping != 0 }, `mode${isLooping}`)}
					onClick={() => setIsLooping((prevState) => (prevState + 1) % 3)}
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
	);
};
export default PlayBackControls;
