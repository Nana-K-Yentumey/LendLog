import React from 'react'

export default function Summary({ transactions }) {
  const totalLent = transactions.filter(t => t.type === 'lent').reduce((s, t) => s + (Number(t.amount) || 0), 0)
  const totalOwed = transactions.filter(t => t.type === 'owed').reduce((s, t) => s + (Number(t.amount) || 0), 0)
  const net = totalLent - totalOwed

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 border rounded text-center">
        <div className="text-sm text-gray-600">Lent</div>
        <div className="text-xl font-bold">GHS {totalLent.toFixed(2)}</div>
      </div>
      <div className="p-4 border rounded text-center">
        <div className="text-sm text-gray-600">Owed</div>
        <div className="text-xl font-bold">GHS {totalOwed.toFixed(2)}</div>
      </div>
      <div className="p-4 border rounded text-center">
        <div className="text-sm text-gray-600">Net</div>
        <div className="text-xl font-bold">GHS {net.toFixed(2)}</div>
      </div>
    </div>
  )
}
