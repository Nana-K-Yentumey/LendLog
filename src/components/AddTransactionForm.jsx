import React, { useState, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export default function AddTransactionForm() {
  const { addTransaction } = useContext(TransactionContext)
  const [person, setPerson] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('lent')
  const [date, setDate] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!person.trim() || !amount) return alert('Please provide person and amount')
    addTransaction({ person: person.trim(), amount: Number(amount), type, date: date || null })
    setPerson(''); setAmount(''); setType('lent'); setDate('')
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <input className="border p-2 rounded" placeholder="Person's name" value={person} onChange={e => setPerson(e.target.value)} />
        <input className="border p-2 rounded" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} inputMode="numeric" />
        <select className="border p-2 rounded" value={type} onChange={e => setType(e.target.value)}>
          <option value="lent">I lent</option>
          <option value="owed">I owe</option>
        </select>
        <input className="border p-2 rounded" type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div className="mt-3 flex justify-end">
        <button type="submit" className="px-4 py-2 border rounded">Save</button>
      </div>
    </form>
  )
}
