import React from 'react';

import { useMatch, useResolvedPath, Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import classNames from 'classnames';

type NavLinkProps = LinkProps & { defaultClassName: string; isActive: string };

/**
 * @param children any children of the component
 * @param to url that the link is to
 * @param defaultClassName default class name used by component
 * @param isActive The class name appended when the url matches the 'to' argument
 */
export default function NavLink({ children, to, defaultClassName, isActive }: NavLinkProps) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Link to={to} className={classNames(defaultClassName, { [isActive]: match })}>
			{children}
		</Link>
	);
}
