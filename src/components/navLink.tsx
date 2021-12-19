import React from 'react';

import { useMatch, useResolvedPath, Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import classNames from 'classnames';

export default function NavLink({ children, to, standard, isActive }: LinkProps & { standard: string; isActive: string }) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Link to={to} className={classNames(standard, { [isActive]: match })}>
			{children}
		</Link>
	);
}
