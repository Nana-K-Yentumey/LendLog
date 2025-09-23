import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export default function TransactionList({ transactions }) {
  const { removeTransaction } = useContext(TransactionContext)

  if (!transactions || transactions.length === 0) return <div className="text-gray-600">No records yet.</div>

  return (
    <div className="space-y-2">
      {transactions.slice().reverse().map(tx => (
        <div key={tx.id} className="flex items-center justify-between p-3 border rounded">
          <div>
            <div className="font-semibold">{tx.person} {tx.type === 'lent' ? '→ Owes you' : '→ You owe'}</div>
            <div className="text-sm text-gray-600">GHS {Number(tx.amount).toFixed(2)} {tx.date ? `• ${tx.date}` : ''}</div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-red-600" onClick={() => removeTransaction(tx.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
