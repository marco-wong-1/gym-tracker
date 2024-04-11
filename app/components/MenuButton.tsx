'use client';
import { AuthContext } from '@/context/AuthContext';
import React, { useContext } from 'react';
import Link from 'next/link';
import { UserMenu } from './UserMenu';

export const MenuButton = () => {
  const userCtx = useContext(AuthContext);
  return (
    <div className='leading-none'>
      <div className='block'>
        {userCtx !== null ? (
          <UserMenu />
        ) : (
          <Link
            className='flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white'
            href={'/signin'}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
