import React from 'react';
import classNames from 'classnames';

import { Pause, Play, Loop, Shuffle, Previous, Next, Mute } from './navbarIcons';

export default function PlayBackControls() {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isShuffled, setIsShuffled] = React.useState(false);
	const [isLooping, setIsLooping] = React.useState(0);
	return (
		<div id="playbackControls">
			<div className="row">
				<div id="currentArtwork"></div>
			</div>
			<div className="row">
				<p id="currentSong">Example Song Name</p>
			</div>
			<div className="row">
				<p id="currentArtist">The Artist</p>
			</div>
			<div id="volumeLevel" className="progressBarRow row">
				<button id="muteBtn">
					<Mute />
				</button>
				<div className="progressBar">
					<div className="progressBarInner"></div>
					<div className="progressKnob"></div>
				</div>
			</div>
			<div className="row">
				<button id="shuffle" className={isShuffled && 'active'} onClick={() => setIsShuffled(!isShuffled)}>
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
}
