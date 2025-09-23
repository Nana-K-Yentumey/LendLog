import React from 'react'
import { TransactionProvider } from './context/TransactionContext'
import Home from './screens/Home.jsx'

export default function App() {
  return (
    <TransactionProvider>
      <div className="min-h-screen max-w-3xl mx-auto p-4">
        <Home />
      </div>
    </TransactionProvider>
  )
}
