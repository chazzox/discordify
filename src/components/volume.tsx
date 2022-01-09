import React from 'react';

import { Mute } from '@components/icons';

const Volume: React.FC = () => {
	const [volume, setVolume] = React.useState(['65']);

	var widthStyle = {
		'--progress-bar-percentage': `${Number.parseInt(volume[0])}%`
	} as React.CSSProperties;

	return (
		<div id="volumeLevel" className="progressBarRow row">
			<button id="muteBtn">
				<Mute
					volume={Number.parseInt(volume[0])}
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
				style={widthStyle}
			/>
		</div>
	);
};

export default Volume;
