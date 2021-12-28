import React from 'react';

import { Mute } from '@components/navbarIcons';

const Volume: React.FC = () => {
	const [volume, setVolume] = React.useState('65');

	return (
		<div id="volumeLevel" className="progressBarRow row">
			<button id="muteBtn">
				<Mute onClick={() => setVolume('0')} />
			</button>
			<input
				type="range"
				className="progress"
				min="0"
				max="100"
				value={volume}
				onChange={(e) => setVolume(e.target.value)}
			/>
		</div>
	);
};

export default Volume;
