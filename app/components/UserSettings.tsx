'use client';
import { AuthContext } from '@/context/AuthContext';
import signOut from '@/firebase/auth/signout';
import React from 'react';
import { useState } from 'react';

export const UserSettings = () => {
	const [isOpen, setIsOpen] = useState(false);
	const user = React.useContext(AuthContext);

	// {/* <button
	// type='button'
	// onClick={() => signOut()}
	// className='text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
	// >
	// Sign Out
	// </button> */}
	const handleClick = () => {
		// setIsOpen(!isOpen);

		{
			console.log(user, user?.displayName);
		}
	};

	return (
		<div className='leading-none'>
			<div className='block'>
				<button
					onClick={handleClick}
					className='flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white'
				>
					{user ? user.user.displayName : 'no user'}
				</button>
			</div>
		</div>
	);
};
