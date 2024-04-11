'use client';
import { AuthContext } from '@/context/AuthContext';
import signOut from '@/firebase/auth/signout';
import React, { useState, useContext, useRef } from 'react';
import { DropdownList } from './DropDownList';
import { DropDownItem } from './DropDownItem';
import { useRouter } from 'next/navigation';
import { useClickOutside } from '@/hooks/useClickedOutside';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userCtx = useContext(AuthContext);
  const ref = useRef();
  const router = useRouter();

  useClickOutside(ref, () => setIsOpen(false));

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='leading-none'>
      <div className='block' ref={ref}>
        <button
          onClick={handleClick}
          className='text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
        >
          {userCtx?.displayName?.split(' ')[0]}
        </button>
        {isOpen && (
          <DropdownList>
            <DropDownItem
              text='New Workout'
              handleClick={() => router.push('/start-new-workout')}
            />
            <DropDownItem text='Sign Out' handleClick={signOut} />
          </DropdownList>
        )}
      </div>
    </div>
  );
};
