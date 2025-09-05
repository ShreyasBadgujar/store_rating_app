import React from 'react'
import { Link } from 'react-router-dom'

function Stars({ value }) {
  const v = Math.round(value)
  return (
    <div className="flex items-center gap-1">
      <div className="text-yellow-400 text-lg">
        {'★'.repeat(v)}
        <span className="text-gray-300">{'★'.repeat(5-v)}</span>
      </div>
      <span className="text-sm text-gray-600 ml-1">({value?.toFixed(1) || '0.0'})</span>
    </div>
  )
}

export default function StoreCard({ store }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-blue-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-700 transition-colors">
            {store.name}
          </h3>
          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{store.address}</p>
        
        <div className="flex items-center justify-between">
          <Stars value={store.averageRating || 0} />
          <Link 
            to={`/user/store/${store.id}`} 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
          >
            View Store
          </Link>
        </div>
      </div>
      
      <div className="h-1 bg-blue-100 group-hover:bg-blue-200 transition-colors"></div>
    </div>
  )
}