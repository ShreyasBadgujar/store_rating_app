import React, { useEffect, useState } from 'react'
import { getOwnerStoreRatings, getOwnerStore } from '../../services/api'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

export default function OwnerDashboard() {
  const [ratings, setRatings] = useState([])
  const [store, setStore] = useState(null)

  useEffect(() => {
    async function fetch() {
      try {
        const s = await getOwnerStore()
        setStore(s.data)
        const r = await getOwnerStoreRatings()
        setRatings(r.data || [])
      } catch (err) {}
    }
    fetch()
  }, [])

  const avg = ratings.length ? (ratings.reduce((a,b)=>a+b.value,0)/ratings.length).toFixed(2) : 0

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar role="owner" />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Owner Dashboard</h1>
          <div className="bg-white p-4 rounded shadow">Store: {store?.name}</div>
          <div className="bg-white p-4 rounded shadow mt-4">Average rating: {avg}</div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Ratings</h2>
            <ul className="space-y-2">
              {ratings.map(r => (
                <li key={r.id} className="bg-white p-3 rounded shadow">{r.userName} — {r.value}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}