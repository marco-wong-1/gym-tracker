'use client';
import React from 'react';
import signUp from '@/firebase/auth/signup';
import { useRouter } from 'next/navigation';
import AuthForm from '../components/AuthForm';

function Page() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const router = useRouter();

	const handleForm = async (event: any) => {
		event.preventDefault();

		alert(password);

		const { result, error } = await signUp(email, password);

		if (error) {
			return console.log(error);
		}

		// else successful
		console.log(result);
		return router.push('/');
	};
	return AuthForm(
		'Sign up',
		handleForm,
		'Sign up',
		{ text: 'Email', func: setEmail },
		{ text: 'Password', func: setPassword },
	);
}

export default Page;
