import { getAuthHeader, SpotifyActions, useSpotify } from '@utils';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
	let navigate = useNavigate();
	let location = useLocation();

	const { dispatch } = useSpotify();

	React.useEffect(() => {
		getAuthHeader().then((header) => {
			if (header) {
				dispatch({ type: SpotifyActions.SET_ACCESS, payload: header });
				// @ts-expect-error
				navigate(location.state?.from?.pathname || '/', { replace: true });
			}
		});
	}, []);

	return <h1>Please get open a spotify device to use this plugin</h1>;
};

export default Login;
