import type { FirebaseApp } from 'firebase/app';

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
		const fb = (await import('firebase/app')).default;
		await import('firebase/auth');
		await import('firebase/firestore');
		firebaseAppInstance = fb.initializeApp(firebaseConfig);
	}

	return firebaseAppInstance;
};
