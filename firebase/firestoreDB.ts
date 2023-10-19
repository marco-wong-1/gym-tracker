import {
  doc,
  getFirestore,
  setDoc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  where,
  getDoc,
} from 'firebase/firestore';
import firebase_app from '@/firebase/firebase';
import { User, getAuth } from 'firebase/auth';
import { get } from 'firebase/database';

const db = getFirestore(firebase_app);

export const setUserDoc = async (
  userCtx: User,
  workoutName: string,
  data: any
) => {
  await addDoc(collection(db, `${userCtx.uid}`), {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    workoutName,
    workout: data,
    date: new Date(),
  });
  // await addDoc(collection(db, document), `${userCtx?.uid}`), {
  // 	// exercise: data,
  // 	createdAt: serverTimestamp(),
  // 	...data,
  // 	// updatedAt: serverTimestamp(),
  // });
  // await setDoc(doc(db, document, `${userCtx?.uid}`), {
  // 	// exercise: data,
  // 	createdAt: serverTimestamp(),
  // 	...data,
  // 	// updatedAt: serverTimestamp(),
  // });
  // document:
  // [{
  //   Reps: 10,
  //   weights: 10,
  // },]
};

export const getUserDoc = async (userCtx: User) => {
  const docSnap = await getDocs(
    query(collection(db, userCtx.uid), orderBy('createdAt', 'desc'))
  );
  return docSnap.docs;
};

export const getWorkoutDoc = async (userCtx: User, workoutId: string) => {
  const workoutRef = await getDoc(
    doc(db, 'routine', 'User', userCtx.uid, workoutId)
  );
  return workoutRef.data();
};
