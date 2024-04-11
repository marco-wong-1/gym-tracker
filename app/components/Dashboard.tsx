'use client';
import { useRouter } from 'next/navigation';
import { WorkoutHistory } from './WorkoutHistory';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export const Dashboard = () => {
  const userCtx = useContext(AuthContext);
  const router = useRouter();

  if (userCtx == null) {
    router.push('/not-authenticated');
  }

  return (
    <div className='justify-center'>
      <div className='w-full xl:w-8/12 px-4 mx-auto'>
        <div className='min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-indigo-800'>
          <div className='mb-0 px-4 py-3 bg-transparent'>
            <div className='flex w-full'>
              <div className='w-1/2 '>
                <h6 className='uppercase mb-1 text-xs font-semibold text-white'>
                  Overview
                </h6>
                <h2 className='text-xl font-semibold text-white'>
                  Past Workouts
                </h2>
              </div>
              <div className='relative w-1/2 mt-2 mr-2'>
                <button
                  className='absolute block top-0 right-0 rounded-md shadow-sm ring-2 stroke-2 ring-inset text-white ring-white stroke-white hocus:bg-white hocus:stroke-indigo-600 hocus:ring-indigo-600 hocus:text-indigo-600 hocus:ring-inset hocus:outline-none'
                  onClick={() => router.push('/start-new-workout')}
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='plus-icon fill-none'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </button>
              </div>
            </div>
            <WorkoutHistory />
          </div>
          {/* TODO: add canvas graphs */}
        </div>
      </div>
    </div>
  );
};
