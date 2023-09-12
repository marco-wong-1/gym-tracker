import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebase_app from '@/firebase/firebase';

export default function AuthForm(
	title: string,
	handleForm: any,
	buttonText: string,
	field1: { text: string; func: any },
	field2: { text: string; func: any }
) {
	return (
		<div className='grid place-items-center'>
			<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
						{title}
					</h1>
					<form onSubmit={handleForm} className='space-y-4 md:space-y-6'>
						<label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							{field1.text}
						</label>
						<input
							onChange={e => field1.func(e.target.value)}
							required
							type='email'
							name='email'
							id='email'
							placeholder='example@mail.com'
							className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						/>
						<label htmlFor='password'>{field2.text}</label>
						<input
							onChange={e => field2.func(e.target.value)}
							required
							type='password'
							name='password'
							id='password'
							placeholder='••••••••'
							className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						/>
						<button
							type='submit'
							className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
						>
							{buttonText}
						</button>
					</form>
					<hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
					<button
						type='button'
						onClick={() =>
							signInWithPopup(getAuth(firebase_app), new GoogleAuthProvider())
						}
						className='text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
					>
						<svg
							className='mr-2 -ml-1 w-4 h-4'
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='google'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 488 512'
						>
							<path
								fill='currentColor'
								d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
							></path>
						</svg>
						Sign in with Google<div></div>
					</button>
				</div>
			</div>
		</div>
	);
}
