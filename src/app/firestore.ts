import { Firestore, getFirestore as createFirestore } from 'firebase/firestore';
import { initFirebase } from './init-firebase';

let firestoreInstance: Firestore = undefined;

export async function getFirestore(): Promise<Firestore> {
	if (!firestoreInstance) {
		const firebase = await initFirebase();
		firestoreInstance = createFirestore(firebase);
	}
	return firestoreInstance;
}
