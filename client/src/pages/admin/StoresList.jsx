import React, { useEffect, useState } from 'react'
import { getStoresAdmin } from '../../services/api'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

export default function StoresList() {
  const [stores, setStores] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await getStoresAdmin()
      setStores(res.data || [])
    }
    fetch()
  }, [])

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'address', title: 'Address' },
    { key: 'rating', title: 'Rating', render: (r) => r.averageRating || 0 },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar role="admin" />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Stores</h1>
          <Table columns={columns} data={stores} />
        </main>
      </div>
    </div>
  )
}