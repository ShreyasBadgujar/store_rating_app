import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ role }) {
  const linkClasses = "block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-500 transition-all duration-200 font-medium"

  return (
    <aside className="w-64 bg-gray-50 border-r-2 border-gray-200 p-6 min-h-screen">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Navigation</h2>
        <div className="w-12 h-1 bg-blue-500 rounded mt-2"></div>
      </div>
      
      <ul className="space-y-2">
        {role === 'admin' && (
          <>
            <li>
              <Link to="/admin/dashboard" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Users
              </Link>
            </li>
            <li>
              <Link to="/admin/stores" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Stores
              </Link>
            </li>
          </>
        )}
        {role === 'user' && (
          <>
            <li>
              <Link to="/user/dashboard" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Stores
              </Link>
            </li>
            <li>
              <Link to="/update-password" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Update Password
              </Link>
            </li>
          </>
        )}
        {role === 'owner' && (
          <>
            <li>
              <Link to="/owner/dashboard" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                My Store
              </Link>
            </li>
            <li>
              <Link to="/update-password" className={linkClasses}>
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Update Password
              </Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  )
}
