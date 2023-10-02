'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { SimplePage } from '../components/SimplePage';

export default function Page() {
	const router = useRouter();

	const title = 'Not Authenticated';

	const topHalf = (
		<>
    <p>Please sign in.</p>
			<button
				type='button'
				onClick={() => router.push('/signin')}
				className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
			>
				Sign In
			</button>
		</>
	);
	const signUp = (
		<>
			<p>If you don&apos;t have an account, please sign up</p>
			<button
				type='button'
				onClick={() => router.push('/signup')}
				className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
			>
				Sign Up
			</button>
		</>
	);

	return <SimplePage title={title} node1={topHalf} node2={signUp} />;
}
