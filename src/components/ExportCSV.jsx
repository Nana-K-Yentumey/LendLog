import React from 'react'
import { saveAs } from 'file-saver'

function toCSV(rows) {
  const header = ['id','person','amount','type','date','createdAt']
  const lines = [header.join(',')]
  rows.forEach(r => {
    const line = [r.id, `"${(r.person||'').replace(/"/g,'""')}"`, r.amount, r.type, r.date || '', r.createdAt || ''].join(',')
    lines.push(line)
  })
  return lines.join('\n')
}

export default function ExportCSV({ transactions }) {
  const handle = () => {
    if (!transactions || transactions.length === 0) return alert('No records to export')
    const csv = toCSV(transactions)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, 'lendlog_export.csv')
  }
  return <button className="px-3 py-2 border rounded" onClick={handle}>Export CSV</button>
}
