import { useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { useApp } from '../../context/useApp'
import { formatCurrency } from '../../services/whatsappService'

const emptyPromo = { title: '', description: '', productId: '', price: '', image: '', status: 'ativo' }

export default function AdminPromotions() {
  const { promos, setPromos, products } = useApp()
  const [form, setForm] = useState(emptyPromo)
  const [editingId, setEditingId] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      ...form,
      id: editingId || form.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\W+/g, '-'),
      price: Number(form.price),
      image: form.image || 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=900&q=80',
    }
    setPromos(editingId ? promos.map((item) => (item.id === editingId ? payload : item)) : [...promos, payload])
    setForm(emptyPromo)
    setEditingId(null)
  }

  return (
    <section className="admin-page admin-crud-grid">
      <div className="admin-heading"><span className="eyebrow"></span><h1>Promoções</h1></div>
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId ? 'Editar Promoção' : 'Cadastrar Promoção'}</h2>
        <label><span>Titulo</span><input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required /></label>
        <label><span>Descrição</span><textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} required /></label>
        <label><span>Produto relacionado</span><select value={form.productId} onChange={(event) => setForm({ ...form, productId: event.target.value })} required><option value="">Selecione</option>{products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}</select></label>
        <label><span>Preço promocional</span><input type="number" min="0" step="0.01" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} required /></label>
        <label><span>Imagem</span><input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="URL da imagem" /></label>
        <label><span>Status</span><select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></label>
        <button className="btn btn-primary full" type="submit"><Plus size={18} /> Salvar promoção</button>
      </form>
      <div className="admin-table-card">
        <div className="responsive-table">
          <table>
            <thead><tr><th>Título</th><th>Preço</th><th>Status</th><th>Ações</th></tr></thead>
            <tbody>
              {promos.map((promo) => (
                <tr key={promo.id}>
                  <td>{promo.title}</td>
                  <td>{formatCurrency(promo.price)}</td>
                  <td><span className="status-pill">{promo.status}</span></td>
                  <td className="table-actions">
                    <button className="icon-button" type="button" aria-label="Editar" onClick={() => { setForm({ ...promo, price: String(promo.price) }); setEditingId(promo.id) }}><Pencil size={16} /></button>
                    <button className="icon-button danger" type="button" aria-label="Excluir" onClick={() => setPromos(promos.filter((item) => item.id !== promo.id))}><Trash2 size={16} /></button>
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
