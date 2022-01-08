import { FirebaseApp, initializeApp } from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBFeRKPvmob0L0S7UX0Mzsjz5aG6r60imw',
	authDomain: 'svelte-typescript-firebase.firebaseapp.com',
	projectId: 'svelte-typescript-firebase',
	storageBucket: 'svelte-typescript-firebase.appspot.com',
	messagingSenderId: '510845574896',
	appId: '1:510845574896:web:f5153454104e8833956c35'
};

let firebaseAppInstance: FirebaseApp;

export const initFirebase = async (): Promise<FirebaseApp> => {
	if (!firebaseAppInstance) {
		firebaseAppInstance = initializeApp(firebaseConfig);
	}

	return firebaseAppInstance;
};
