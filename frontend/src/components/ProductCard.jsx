import { Plus } from 'lucide-react'
import { formatCurrency } from '../services/whatsappService'

export default function ProductCard({ product, categoryName, onAdd }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <span className="eyebrow">{categoryName}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="card-actions">
          <strong>{formatCurrency(product.price)}</strong>
          <button className="btn btn-primary btn-small" type="button" onClick={() => onAdd(product)}>
            <Plus size={18} />
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}
