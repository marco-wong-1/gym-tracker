import firebase_app from '../firebase';
import { signOut as fireabseSignOut, getAuth } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function signOut() {
  let error = null;
  try {
    await fireabseSignOut(auth);
  } catch (e) {
    error = e;
  }

  return { error };
}
