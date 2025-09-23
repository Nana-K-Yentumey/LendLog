import React, { useContext, useState, useMemo } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import AddTransactionForm from '../components/AddTransactionForm'
import TransactionList from '../components/TransactionList'
import Summary from '../components/Summary'
import ExportCSV from '../components/ExportCSV'

export default function Home() {
  const { transactions, clearAll } = useContext(TransactionContext)
  const [query, setQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const filtered = useMemo(() => {
    return transactions.filter(t => {
      if (filterType !== 'all' && t.type !== filterType) return false
      if (!query) return true
      const q = query.toLowerCase()
      return (t.person && t.person.toLowerCase().includes(q)) || (t.type && t.type.toLowerCase().includes(q))
    })
  }, [transactions, query, filterType])

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">LendLog</h1>
        <div className="text-sm text-gray-600">Simple ledger — minimal B&amp;W</div>
      </header>

      <Summary transactions={transactions} />

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input className="border p-2 rounded w-full md:w-1/2" placeholder="Search by person or type" value={query} onChange={e => setQuery(e.target.value)} />
        <select className="border p-2 rounded mt-2 md:mt-0" value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All</option>
          <option value="lent">I lent (Owed to me)</option>
          <option value="owed">I owe</option>
        </select>
        <div className="ml-auto flex space-x-2">
          <ExportCSV transactions={filtered} />
          <button className="px-3 py-2 border rounded" onClick={clearAll}>Clear all</button>
        </div>
      </div>

      <AddTransactionForm />

      <TransactionList transactions={filtered} />

    </div>
  )
}
