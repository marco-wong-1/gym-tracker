'use client';
import React from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/firebase';
import { useRouter } from 'next/navigation';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext<User | null>(null);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = React.useState<User | null>(null);
	const [loading, setLoading] = React.useState(true);
	const router = useRouter();

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				router.push('/not-authenticated');
			}
			setLoading(false);
			console.log(user);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	);
};
