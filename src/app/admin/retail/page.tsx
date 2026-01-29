'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShoppingCart,
  Package,
  Truck,
  BarChart3,
  Plus,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  TrendingUp,
  DollarSign
} from 'lucide-react'

const stats = [
  { title: 'Total Products', value: '156', change: '+12 this month', icon: Package, color: 'from-orange-500 to-amber-500' },
  { title: 'Pending Orders', value: '23', change: '5 urgent', icon: ShoppingCart, color: 'from-blue-500 to-indigo-500' },
  { title: 'Low Stock Items', value: '8', change: 'Needs attention', icon: AlertTriangle, color: 'from-red-500 to-pink-500' },
  { title: 'Monthly Sales', value: '$45,280', change: '+18% vs last month', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
]

const recentOrders = [
  { id: 'ORD-001', client: 'Ministry of Health', items: 5, total: '$8,500', status: 'processing', date: '2026-01-29' },
  { id: 'ORD-002', client: 'ZimBank Ltd', items: 3, total: '$4,200', status: 'shipped', date: '2026-01-28' },
  { id: 'ORD-003', client: 'Econet Wireless', items: 10, total: '$15,000', status: 'pending', date: '2026-01-28' },
  { id: 'ORD-004', client: 'TelOne', items: 2, total: '$2,800', status: 'delivered', date: '2026-01-27' },
  { id: 'ORD-005', client: 'University of Zimbabwe', items: 8, total: '$12,400', status: 'processing', date: '2026-01-26' },
]

const lowStockItems = [
  { id: 1, name: 'Dell Latitude 5540', sku: 'DELL-LAT-5540', stock: 2, reorderLevel: 5, category: 'Laptops' },
  { id: 2, name: 'Cisco Catalyst 9200', sku: 'CISCO-CAT-9200', stock: 1, reorderLevel: 3, category: 'Networking' },
  { id: 3, name: 'HP ProLiant DL380', sku: 'HP-DL380-G10', stock: 0, reorderLevel: 2, category: 'Servers' },
  { id: 4, name: 'Ubiquiti UniFi AP', sku: 'UBI-UAP-AC', stock: 3, reorderLevel: 10, category: 'Networking' },
]

const topProducts = [
  { name: 'Dell Latitude 5540', sales: 45, revenue: '$67,500', growth: '+12%' },
  { name: 'HP ProBook 450', sales: 38, revenue: '$45,600', growth: '+8%' },
  { name: 'Cisco Catalyst 9200', sales: 22, revenue: '$88,000', growth: '+15%' },
  { name: 'Lenovo ThinkPad T14', sales: 28, revenue: '$39,200', growth: '+5%' },
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

export default function RetailPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            Retail & Hardware
          </h1>
          <p className="text-gray-500 mt-1">Manage products, inventory, and orders</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/retail/products/new"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
          <Link
            href="/admin/retail/orders/new"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            New Order
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.title} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <Link href="/admin/retail/orders" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-white/5">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Client</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Total</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/5">
                    <td className="py-3 font-medium text-[#00D4FF]">{order.id}</td>
                    <td className="py-3">{order.client}</td>
                    <td className="py-3 text-gray-400">{order.items} items</td>
                    <td className="py-3 font-medium">{order.total}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Low Stock Alert
            </h2>
            <Link href="/admin/retail/inventory" className="text-sm text-[#00D4FF] hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div key={item.id} className="p-4 bg-white/5 rounded-xl border-l-4 border-red-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.sku}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.stock === 0 ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {item.stock === 0 ? 'Out of Stock' : `${item.stock} left`}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-gray-500">{item.category}</span>
                  <span className="text-gray-500">Reorder: {item.reorderLevel}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors">
            Create Purchase Order
          </button>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Top Selling Products</h2>
          <Link href="/admin/retail/products" className="text-sm text-[#00D4FF] hover:underline">
            View All Products
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topProducts.map((product) => (
            <div key={product.name} className="p-4 bg-white/5 rounded-xl">
              <h3 className="font-medium mb-3">{product.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Units Sold</span>
                  <span className="font-medium">{product.sales}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Revenue</span>
                  <span className="font-medium text-[#00D4FF]">{product.revenue}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Growth</span>
                  <span className="font-medium text-green-500">{product.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Products', href: '/admin/retail/products', icon: Package, count: 156 },
          { name: 'Inventory', href: '/admin/retail/inventory', icon: BarChart3, count: '8 low' },
          { name: 'Orders', href: '/admin/retail/orders', icon: ShoppingCart, count: 23 },
          { name: 'Suppliers', href: '/admin/retail/suppliers', icon: Truck, count: 12 },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center">
              <link.icon className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="font-medium">{link.name}</p>
              <p className="text-sm text-gray-500">{link.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
