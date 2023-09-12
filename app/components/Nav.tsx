'use client';

import Link from 'next/link';
import { UserSettings } from './UserSettings';

export function Nav() {
	return (
		<nav className='flex item-center justify-between flex-wrap p-6'>
			<Link href='/'>Home</Link>
			<UserSettings />
		</nav>
	);
}
