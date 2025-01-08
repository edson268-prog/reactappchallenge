// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9fXoBWjXOB73mNS5Yj9rdm9ziD93x8WE",
  authDomain: "react-challenge-79ccc.firebaseapp.com",
  projectId: "react-challenge-79ccc",
  storageBucket: "react-challenge-79ccc.firebasestorage.app",
  messagingSenderId: "285728653752",
  appId: "1:285728653752:web:cce6c2d2cdc5c720844f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);