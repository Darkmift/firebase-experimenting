import config from './config.mjs'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Initialize Firebase
const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

export default async () => {
  try {
    const userCollection = collection(db, 'users')
    const snapshot = await getDocs(userCollection)
    return snapshot.docs
  } catch (error) {
    console.log("🚀 ~ file: firebase.mjs ~ line 30 ~ getUsers ~ error", error)
  }
}