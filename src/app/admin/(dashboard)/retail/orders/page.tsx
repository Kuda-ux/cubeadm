'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Plus, Search, Eye, Truck, Package } from 'lucide-react'

const orders = [
  { id: 'ORD-001', client: 'Ministry of Health', items: 5, total: '$8,500', date: '2026-01-29', status: 'processing' },
  { id: 'ORD-002', client: 'ZimBank Ltd', items: 3, total: '$4,200', date: '2026-01-28', status: 'shipped' },
  { id: 'ORD-003', client: 'Econet Wireless', items: 10, total: '$15,000', date: '2026-01-28', status: 'pending' },
  { id: 'ORD-004', client: 'TelOne', items: 2, total: '$2,800', date: '2026-01-27', status: 'delivered' },
  { id: 'ORD-005', client: 'University of Zimbabwe', items: 8, total: '$12,400', date: '2026-01-26', status: 'processing' },
  { id: 'ORD-006', client: 'ZIMRA', items: 4, total: '$6,000', date: '2026-01-25', status: 'delivered' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered': return 'bg-green-500/10 text-green-500'
    case 'shipped': return 'bg-blue-500/10 text-blue-500'
    case 'processing': return 'bg-yellow-500/10 text-yellow-500'
    case 'pending': return 'bg-gray-500/10 text-gray-500'
    case 'cancelled': return 'bg-red-500/10 text-red-500'
    default: return 'bg-gray-500/10 text-gray-500'
  }
}

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Orders</h1>
          <p className="text-gray-500 mt-1">Manage customer orders and fulfillment</p>
        </div>
        <Link
          href="/admin/retail/orders/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:opacity-90 transition-opacity w-fit"
        >
          <Plus className="w-4 h-4" />
          New Order
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF]"
          />
        </div>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-white/5 bg-white/5">
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Client</th>
              <th className="p-4 font-medium">Items</th>
              <th className="p-4 font-medium">Total</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-white/5">
                <td className="p-4">
                  <span className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-orange-500" />
                    <span className="font-medium text-[#00D4FF]">{order.id}</span>
                  </span>
                </td>
                <td className="p-4">{order.client}</td>
                <td className="p-4 text-gray-400">{order.items} items</td>
                <td className="p-4 font-medium">{order.total}</td>
                <td className="p-4 text-gray-400">{order.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/retail/orders/${order.id}`} className="p-2 hover:bg-white/10 rounded-lg">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </Link>
                    {order.status === 'processing' && (
                      <button className="p-2 hover:bg-white/10 rounded-lg" title="Mark as Shipped">
                        <Truck className="w-4 h-4 text-blue-500" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
