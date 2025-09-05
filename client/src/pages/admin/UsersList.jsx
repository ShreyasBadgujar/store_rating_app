import React, { useEffect, useState } from 'react'
import { getUsers, createUser } from '../../services/api'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

export default function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await getUsers()
      setUsers(res.data || [])
    }
    fetch()
  }, [])

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'address', title: 'Address' },
    { key: 'role', title: 'Role' },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar role="admin" />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Users</h1>
          <Table columns={columns} data={users} />
        </main>
      </div>
    </div>
  )
}