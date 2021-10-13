import React, { useEffect, useState } from 'react';

import '@styles/index.scss';

export default function App() {
	const [isRedirected, setIsRedirected] = useState(false);
	useEffect(() => {
		if (document.location.hash !== '') {
			const hashObject = Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());
			if (hashObject.access_token) {
				setIsRedirected(true);
			}
		}
	}, []);
	return <>{isRedirected ? <Redirect /> : <NoRedirect />}</>;
}

function NoRedirect() {
	return <>No redirect</>;
}

function Redirect() {
	const test = 'oiiii';
	return <div>Copy paste this shite: {test}</div>;
}
