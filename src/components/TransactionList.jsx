// src/components/TransactionList.jsx
import { useTransactions } from "../context/TransactionContext";

const TransactionList = () => {
  const { transactions } = useTransactions();

  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">Transactions</h2>
      <ul className="space-y-1">
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          transactions.map(tx => (
            <li key={tx.id} className="border-b py-1 flex justify-between">
              <span>{tx.description}</span>
              <span>${tx.amount}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
