import { useApp } from '../../context/useApp'
import { formatCurrency } from '../../services/whatsappService'

const statuses = ['Recebido', 'Em preparo', 'Pronto', 'Finalizado', 'Cancelado']

export default function AdminOrders() {
  const { orders, setOrders } = useApp()

  const updateStatus = (orderId, status) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status } : order)))
  }

  return (
    <section className="admin-page">
      <div className="admin-heading"><span className="eyebrow">Pedidos</span><h1>Pedidos simulados</h1></div>
      <div className="admin-table-card">
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Cliente</th>
                <th>Itens</th>
                <th>Total</th>
                <th>Tipo</th>
                <th>Observacao</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.items}</td>
                  <td>{formatCurrency(order.total)}</td>
                  <td>{order.type}</td>
                  <td>{order.note}</td>
                  <td>
                    <select value={order.status} onChange={(event) => updateStatus(order.id, event.target.value)}>
                      {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
