import { collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore } from './firestore';

export const getRandomWelcome = async (): Promise<string> => {
	const db = await getFirestore();
	const collectionRef = collection(db, 'welcomes');
	const snapshot = await getDocs(collectionRef);
	const randomIndex = Math.floor(Math.random() * snapshot.docs.length);
	const doc = snapshot.docs[randomIndex].data();
	return doc.value;
};
