// src/context/TransactionContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { addTransaction, getTransactions } from "../services/db";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    };

    fetchTransactions();
  }, []);

  const addNewTransaction = async (transaction) => {
    await addTransaction(transaction);
    setTransactions(prev => [...prev, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
