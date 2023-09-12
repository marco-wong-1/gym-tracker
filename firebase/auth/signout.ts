import firebase_app from '../firebase';
import { signOut as fireabseSignOut, getAuth } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function signOut() {
	let result = null,
		error = null;
	try {
		result = await fireabseSignOut(auth);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
