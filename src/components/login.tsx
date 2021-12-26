import React from 'react';

import { getAuthHeader, SpotifyActions, useSpotify } from '@utils';

const Login = () => {
	const { dispatch } = useSpotify();
	React.useEffect(() => {
		getAuthHeader().then((token) =>
			dispatch({ type: SpotifyActions.SET_ACCESS, payload: token })
		);
	}, []);
	return <>Please get open a spotify device to use this plugin</>;
};

export default Login;
