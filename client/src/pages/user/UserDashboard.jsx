import React, { useEffect, useState } from 'react'
import { getStores } from '../../services/api'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import StoreCard from '../../components/StoreCard'

export default function UserDashboard() {
  const [stores, setStores] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await getStores()
      setStores(res.data || [])
    }
    fetch()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar role="user" />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Stores</h1>
          <div className="grid grid-cols-3 gap-4">
            {stores.map(s => <StoreCard key={s.id} store={s} />)}
          </div>
        </main>
      </div>
    </div>
  )
}