import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_APIKEYFB,
  authDomain: process.env.REACT_APP_FBAD,
  projectId: process.env.REACT_APP_FBID,
  storageBucket: process.env.REACT_APP_FBSB,
  messagingSenderId: process.env.REACT_APP_FBMS,
  appId: process.env.REACT_APP_FBAID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
export const firestoreDb = getFirestore(app);
