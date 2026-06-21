import { ClipboardList, DollarSign, Percent, Tags, Utensils } from 'lucide-react'
import { useApp } from '../../context/useApp'
import { formatCurrency } from '../../services/whatsappService'

export default function AdminDashboard() {
  const { products, categories, promos, orders } = useApp()
  const estimatedSales = orders.reduce((sum, order) => sum + order.total, 0)
  const cards = [
    { label: 'Produtos', value: products.length, icon: Utensils },
    { label: 'Categorias', value: categories.length, icon: Tags },
    { label: 'Promocoes', value: promos.length, icon: Percent },
    { label: 'Pedidos', value: orders.length, icon: ClipboardList },
    { label: 'Vendido estimado', value: formatCurrency(estimatedSales), icon: DollarSign },
  ]

  return (
    <section className="admin-page">
      <div className="admin-heading">
        <span className="eyebrow">Painel geral</span>
        <h1>Dashboard Admin</h1>
      </div>
      <div className="metric-grid">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article className="metric-card" key={card.label}>
              <Icon size={22} />
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          )
        })}
      </div>
      <div className="admin-table-card">
        <h2>Ultimos pedidos recebidos</h2>
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Cliente</th>
                <th>Itens</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.items}</td>
                  <td>{formatCurrency(order.total)}</td>
                  <td><span className="status-pill">{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
