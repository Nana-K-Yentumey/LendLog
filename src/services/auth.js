// src/services/auth.js
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Sign Up
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log In
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log Out
export const logOut = () => {
  return signOut(auth);
};
