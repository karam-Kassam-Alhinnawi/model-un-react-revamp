// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWb9doryEXQcxX2g7LTy7o3qH2FGbJswM",
  authDomain: "model-un-academy.firebaseapp.com",
  projectId: "model-un-academy",
  storageBucket: "model-un-academy.firebasestorage.app",
  messagingSenderId: "612055557079",
  appId: "1:612055557079:web:96b9174dfc7175a457e192",
  measurementId: "G-H479K41DGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);