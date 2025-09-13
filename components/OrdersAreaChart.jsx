'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function OrdersAreaChart({ allOrders }) {

  // Agrupar pedidos por data
  const ordersPerDay = allOrders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toISOString().split('T')[0] // formato: YYYY-MM-DD
    acc[date] = (acc[date] || 0) + 1
    return acc
  }, {})

  // Converter para array para o Recharts
  const chartData = Object.entries(ordersPerDay).map(([date, count]) => ({
    date,
    orders: count
  }))

  return (
    <div className="w-full max-w-4xl h-[300px] text-xs">
      <h3 className="text-lg font-medium text-slate-800 mb-4 pt-2 text-right">
        <span className='text-slate-500'>Pedidos /</span> Dia
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} label={{ value: 'Pedidos', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Area type="monotone" dataKey="orders" stroke="#4f46e5" fill="#8884d8" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
