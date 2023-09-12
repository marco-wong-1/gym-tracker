// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDytC-myKWGHo7NHydqZcxOgjzrjNkZGF4',
	authDomain: 'gymtracker-e1159.firebaseapp.com',
	projectId: 'gymtracker-e1159',
	storageBucket: 'gymtracker-e1159.appspot.com',
	messagingSenderId: '709002503458',
	appId: '1:709002503458:web:2b22c7d683bdf8b8d2f17b',
	measurementId: 'G-Y4V41F7VHG',
};

// Initialize Firebase
const firebase_app =
	getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;
