import { Plus, Tag } from 'lucide-react'
import { formatCurrency } from '../services/whatsappService'

export default function PromoCard({ promo, onAdd }) {
  return (
    <article className="promo-card">
      <img src={promo.image} alt={promo.title} loading="lazy" />
      <div className="card-body">
        <span className="status-pill">
          <Tag size={14} />
          {promo.status}
        </span>
        <h3>{promo.title}</h3>
        <p>{promo.description}</p>
        <div className="card-actions">
          <strong>{formatCurrency(promo.price)}</strong>
          {onAdd && (
            <button className="btn btn-primary btn-small" type="button" onClick={onAdd}>
              <Plus size={18} />
              Adicionar
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
