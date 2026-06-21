import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, MessageCircle, WalletCards } from 'lucide-react'
import CartItem from '../components/CartItem'
import { businessConfig } from '../config/businessConfig'
import { useApp } from '../context/useApp'
import { formatCurrency, getWhatsappUrl } from '../services/whatsappService'

export default function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart, createOrder } = useApp()
  const [customer, setCustomer] = useState({
    name: '',
    note: '',
    fulfillment: 'retirada',
    address: '',
  })
  const missingValue = Math.max(businessConfig.minimumOrder - cartTotal, 0)
  const canFinish = cart.length > 0 && cartTotal >= businessConfig.minimumOrder

  const handleChange = (event) => {
    const { name, value } = event.target
    setCustomer((current) => ({ ...current, [name]: value }))
  }

  const finishOrder = async () => {
    if (!canFinish) return
    await createOrder({
      customerName: customer.name || 'Cliente WhatsApp',
      items: cart.map((item) => `${item.quantity}x ${item.name}`).join(', '),
      total: cartTotal,
      type: customer.fulfillment,
      note: customer.fulfillment === 'entrega'
        ? `${customer.note || 'Sem observação'} | Endereço: ${customer.address || 'Não informado'}`
        : customer.note || 'Sem observação',
      status: 'Recebido',
    })
    window.open(getWhatsappUrl(cart, customer), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="page-section">
      <div className="container page-heading">
        <span className="eyebrow">Carrinho</span>
        <h1>Revise seu pedido</h1>
        <p>Pedido minimo: {formatCurrency(businessConfig.minimumOrder)}.</p>
      </div>

      <div className="container cart-layout">
        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="empty-state">
              <h2>Seu carrinho esta vazio</h2>
              <p>Adicione produtos do cardápio para montar seu pedido.</p>
              <Link className="btn btn-primary" to="/cardapio">
                Ver cardápio
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={updateQuantity}
                onRemove={removeFromCart}
              />
            ))
          )}
        </div>

        <aside className="checkout-panel">
          <h2>Finalização</h2>
          {!canFinish && cart.length > 0 && (
            <div className="alert">
              <AlertCircle size={18} />
              Faltam {formatCurrency(missingValue)} para atingir o pedido minimo.
            </div>
          )}

          <label>
            <span>Nome</span>
            <input name="name" value={customer.name} onChange={handleChange} placeholder="Seu nome" />
          </label>
          <label>
            <span>Observação do pedido</span>
            <textarea name="note" value={customer.note} onChange={handleChange} placeholder="Ex: sem cebola, ponto da carne..." />
          </label>
          <label>
            <span>Retirada ou entrega</span>
            <select name="fulfillment" value={customer.fulfillment} onChange={handleChange}>
              <option value="retirada">Retirada</option>
              <option value="entrega">Entrega</option>
            </select>
          </label>
          {customer.fulfillment === 'entrega' && (
            <label>
              <span>Endereço</span>
              <input name="address" value={customer.address} onChange={handleChange} placeholder="Rua, numero, bairro" />
            </label>
          )}

          <div className="payment-note">
            <WalletCards size={18} />
            {businessConfig.paymentNote}
          </div>

          <div className="total-row">
            <span>Total</span>
            <strong>{formatCurrency(cartTotal)}</strong>
          </div>
          <button className="btn btn-whatsapp full" type="button" disabled={!canFinish} onClick={finishOrder}>
            <MessageCircle size={18} />
            Finalizar pelo WhatsApp
          </button>
          {cart.length > 0 && (
            <button className="btn btn-ghost full" type="button" onClick={clearCart}>
              Limpar carrinho
            </button>
          )}
        </aside>
      </div>
    </section>
  )
}
