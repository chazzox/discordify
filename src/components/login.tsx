import React from 'react';

import { getAuthHeader, SpotifyActions, useSpotify } from '@utils';

const Login = () => {
	const { dispatch } = useSpotify();
	React.useEffect(() => {
		getAuthHeader().then((token) => {
			if (token) dispatch({ type: SpotifyActions.SET_ACCESS, payload: token });
		});
	}, []);
	return <h1>Please get open a spotify device to use this plugin</h1>;
};

export default Login;
