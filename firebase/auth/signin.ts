import firebase_app from '../firebase';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  let result: UserCredential = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
