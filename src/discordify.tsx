import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { initialState, SpotifyContext, spotifyReducer } from '@utils';

import App from './app';
import './discordify.scss';

const MainComponent = () => {
	const [state, dispatch] = React.useReducer(spotifyReducer, initialState);

	return (
		<SpotifyContext.Provider value={{ state, dispatch }}>
			<MemoryRouter>
				<App />
			</MemoryRouter>
		</SpotifyContext.Provider>
	);
};

ReactDOM.render(<MainComponent />, document.getElementById('root'));
