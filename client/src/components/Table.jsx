import React from 'react'

export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            {columns.map(col => (
              <th key={col.key} className="text-left p-4 font-bold text-gray-700 uppercase text-xs tracking-wider">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors duration-150">
              {columns.map(col => (
                <td key={col.key} className="p-4 text-gray-700 text-sm">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <div className="text-4xl mb-4">📊</div>
          <p className="text-lg font-medium">No data available</p>
        </div>
      )}
    </div>
  )
}