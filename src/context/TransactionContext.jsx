import React, { createContext, useEffect, useState } from 'react'

export const TransactionContext = createContext()

const STORAGE_KEY = 'lendlog_transactions_v1'

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setTransactions(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to load from localStorage', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
    } catch (e) {
      console.error('Failed to save to localStorage', e)
    }
  }, [transactions])

  const addTransaction = (tx) => {
    setTransactions(prev => [...prev, { id: Date.now().toString(), ...tx }])
  }

  const removeTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  const clearAll = () => setTransactions([])

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction, clearAll }}>
      {children}
    </TransactionContext.Provider>
  )
}
