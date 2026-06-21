import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatCurrency } from '../services/whatsappService'

export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{formatCurrency(item.price)} cada</p>
      </div>
      <div className="quantity-control" aria-label={`Quantidade de ${item.name}`}>
        <button
          className="icon-button"
          type="button"
          aria-label="Diminuir quantidade"
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        >
          <Minus size={16} />
        </button>
        <span>{item.quantity}</span>
        <button
          className="icon-button"
          type="button"
          aria-label="Aumentar quantidade"
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >
          <Plus size={16} />
        </button>
      </div>
      <strong>{formatCurrency(item.price * item.quantity)}</strong>
      <button className="icon-button danger" type="button" aria-label="Remover item" onClick={() => onRemove(item.id)}>
        <Trash2 size={18} />
      </button>
    </article>
  )
}
