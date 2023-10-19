'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { SimplePage } from '../components/SimplePage';

export default function Page() {
  const router = useRouter();

  const title = 'New Workout';

  const node = (
    <>
      <button
        type='button'
        onClick={() => router.push('/new-workout')}
        className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
      >
        New Routine
      </button>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
      <p className=''>Present Workout Plan</p>
    </>
  );

  return <SimplePage title={title} node={node} />;
}
