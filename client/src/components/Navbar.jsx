import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-slate-900 shadow-lg border-b-2 border-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SR</span>
        </div>
        <span className="font-bold text-xl text-white tracking-wide">StoreRatings</span>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="text-gray-300 text-sm bg-slate-800 px-3 py-1 rounded-full">
              <span className="font-medium text-white">{user.name}</span>
              <span className="ml-2 text-blue-400">• {user.role}</span>
            </div>
            <button 
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105" 
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            to="/login" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}