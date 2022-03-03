import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh4cL9JLFjT6ADNpeegENLKLFdXZyyYz8",
  authDomain: "nagomez-af711.firebaseapp.com",
  projectId: "nagomez-af711",
  storageBucket: "nagomez-af711.appspot.com",
  messagingSenderId: "432849115280",
  appId: "1:432849115280:web:83a1120dacf0c7aabda015",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
export const firestoreDb = getFirestore(app);
