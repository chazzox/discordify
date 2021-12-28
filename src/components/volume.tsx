import React from 'react';

import { Mute } from '@components/navbarIcons';

const Volume: React.FC = () => {
	const [volume, setVolume] = React.useState(['65']);

	return (
		<div id="volumeLevel" className="progressBarRow row">
			<button id="muteBtn">
				<Mute
					onClick={() =>
						setVolume((prev) => {
							// @Notice This is fucking rank please refactor soon.
							return prev[0] == '0' ? [prev[1]] : ['0', prev[0]];
						})
					}
				/>
			</button>
			<input
				type="range"
				className="progress"
				min="0"
				max="100"
				value={volume[0]}
				onChange={(e) => setVolume([e.target.value, volume[0]])}
			/>
		</div>
	);
};

export default Volume;
