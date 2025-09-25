// src/services/db.js
import { db, auth } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const addTransaction = async (transactionData) => {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");

  await addDoc(collection(db, "users", user.uid, "transactions"), {
    ...transactionData,
    createdAt: new Date()
  });
};

export const getTransactions = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");

  const q = query(collection(db, "users", user.uid, "transactions"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
