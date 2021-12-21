import React from 'react';
import classNames from 'classnames';

import { Pause, Play, Loop, Shuffle, Previous, Next, Mute } from '@components/navbarIcons';
import * as Utils from '@utils';

const PlayBackControls: React.FC<{ token: string }> = ({ token }) => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isShuffled, setIsShuffled] = React.useState(false);
	const [isLooping, setIsLooping] = React.useState(0);

	// useReducer typa vibe tbh
	const [currentlyPlaying, setCurrentInfo] = React.useState({
		image: '',
		name: '',
		maker: ''
	});

	React.useEffect(() => {
		Utils.getPlaying(token).then((res) => {
			setIsPlaying(res.is_playing);
			setCurrentInfo({
				image: res.item.album.images[0].url,
				name: res.item.album.name,
				maker: res.item.album.artists[0].name
			});
		});
	}, []);

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
					<p id="currentSong">{currentlyPlaying.name}</p>
				</div>
				<div className="row">
					<p id="currentArtist">{currentlyPlaying.maker}</p>
				</div>
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
