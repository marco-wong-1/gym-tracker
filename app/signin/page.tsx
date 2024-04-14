'use client';
import React from 'react';
import signIn from '@/firebase/auth/signin';
import { useRouter } from 'next/navigation';
import AuthForm from '../components/AuthForm';

function Page() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const router = useRouter();

	const handleForm = async (event: any) => {
		event.preventDefault();

		const { result, error } = await signIn(email, password);

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(result);
		router.push('/');
	};
	return AuthForm(
		'Sign in',
		handleForm,
		'Sign in',
		{ text: 'Email', func: setEmail },
		{ text: 'Password', func: setPassword }
	);
}

export default Page;
