// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBgKtdl0NEnGrZE-S1mw63pcoW55L0_Dc",
  authDomain: "lendlog-7c6ad.firebaseapp.com",
  projectId: "lendlog-7c6ad",
  storageBucket: "lendlog-7c6ad.firebasestorage.app",
  messagingSenderId: "827601342063",
  appId: "1:827601342063:web:2c34f8bee89ccd5e10079a",
  measurementId: "G-C09RYYGJML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);