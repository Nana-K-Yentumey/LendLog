// src/components/AddTransactionForm.jsx
import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

const AddTransactionForm = () => {
  const { addNewTransaction } = useTransactions();
  const [formData, setFormData] = useState({
    description: "",
    amount: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    await addNewTransaction({
      description: formData.description,
      amount: parseFloat(formData.amount)
    });

    setFormData({ description: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border px-2 py-1 w-full"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="border px-2 py-1 w-full"
      />
      <button
        type="submit"
        className="bg-black text-white px-3 py-1 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransactionForm;
