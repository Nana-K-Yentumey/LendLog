// src/services/firestore.js
import { db } from "../firebase";  
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  orderBy,
} from "firebase/firestore";

// Reference to a user's transactions collection
const userTransactionsRef = (userId) =>
  collection(db, "users", userId, "transactions");

// Add a transaction
export const addTransaction = async (userId, transaction) => {
  try {
    await addDoc(userTransactionsRef(userId), {
      ...transaction,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};

// Listen to transactions in real-time
export const listenToTransactions = (userId, callback) => {
  const q = query(userTransactionsRef(userId), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const transactions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(transactions);
  });
};

// Update a transaction
export const updateTransaction = async (userId, id, updatedData) => {
  try {
    const docRef = doc(db, "users", userId, "transactions", id);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw error;
  }
};

// Delete a transaction
export const deleteTransaction = async (userId, id) => {
  try {
    const docRef = doc(db, "users", userId, "transactions", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};
