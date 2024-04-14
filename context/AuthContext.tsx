'use client';
import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/firebase';
import { useRouter } from 'next/navigation';

const auth = getAuth(firebase_app);

export const AuthContext = createContext<User | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push('/not-authenticated');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, user]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
