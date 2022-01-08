import type { Firestore } from 'firebase/firestore';
import { initFirebase } from './init-firebase';

let firestoreInstance: Firestore = undefined;

export async function getFirestore(): Promise<Firestore> {
	if (!firestoreInstance) {
		const firebase = await initFirebase();
		const firestore = await import('firebase/firestore');
		firestoreInstance = firestore.getFirestore(firebase);
	}
	return firestoreInstance;
}
