// src/screens/Home.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  addTransaction,
  listenToTransactions,
  deleteTransaction,
} from "../services/firestore";

export default function Home() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  // Real-time listener
  useEffect(() => {
    if (!user) return;

    const unsubscribe = listenToTransactions(user.uid, setTransactions);

    return () => unsubscribe();
  }, [user]);

  // Add transaction
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!item || !amount) return;

    await addTransaction(user.uid, {
      item,
      amount: parseFloat(amount),
      status: "lent", // or "borrowed", depending on your use case
    });

    setItem("");
    setAmount("");
  };

  // Delete transaction
  const handleDelete = async (id) => {
    await deleteTransaction(user.uid, id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>

      <form onSubmit={handleAdd} className="mb-6 flex gap-2">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item or Borrower"
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border p-2 rounded w-28"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {transactions.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="font-semibold">{t.item}</p>
              <p className="text-sm text-gray-600">${t.amount}</p>
            </div>
            <button
              onClick={() => handleDelete(t.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
