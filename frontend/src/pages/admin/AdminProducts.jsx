import { useMemo, useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { useApp } from '../../context/useApp'
import { formatCurrency } from '../../services/whatsappService'

const emptyProduct = {
  name: '',
  description: '',
  price: '',
  categoryId: '',
  image: '',
  status: 'ativo',
}

export default function AdminProducts() {
  const { products, setProducts, categories } = useApp()
  const [form, setForm] = useState(emptyProduct)
  const [editingId, setEditingId] = useState(null)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('todos')
  const categoryMap = Object.fromEntries(categories.map((item) => [item.id, item.name]))

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
      .filter((product) => categoryFilter === 'todos' || product.categoryId === categoryFilter)
  }, [categoryFilter, products, search])

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      ...form,
      id: editingId || form.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\W+/g, '-'),
      price: Number(form.price),
      image: form.image || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    }
    setProducts(editingId ? products.map((item) => (item.id === editingId ? payload : item)) : [...products, payload])
    setForm(emptyProduct)
    setEditingId(null)
  }

  const editProduct = (product) => {
    setForm({ ...product, price: String(product.price) })
    setEditingId(product.id)
  }

  return (
    <section className="admin-page admin-crud-grid">
      <div className="admin-heading">
        <span className="eyebrow">CRUD</span>
        <h1>Produtos</h1>
      </div>
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId ? 'Editar produto' : 'Cadastrar produto'}</h2>
        <label><span>Nome</span><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
        <label><span>Descrição</span><textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} required /></label>
        <label><span>Preço</span><input type="number" min="0" step="0.01" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} required /></label>
        <label>
          <span>Categoria</span>
          <select value={form.categoryId} onChange={(event) => setForm({ ...form, categoryId: event.target.value })} required>
            <option value="">Selecione</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </label>
        <label><span>Imagem</span><input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="URL da imagem" /></label>
        <label><span>Status</span><select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></label>
        <button className="btn btn-primary full" type="submit"><Plus size={18} /> Salvar produto</button>
      </form>
      <div className="admin-table-card">
        <div className="admin-table-toolbar">
          <input placeholder="Buscar produto" value={search} onChange={(event) => setSearch(event.target.value)} />
          <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
            <option value="todos">Todas</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </div>
        <div className="responsive-table">
          <table>
            <thead><tr><th>Produto</th><th>Categoria</th><th>Preço</th><th>Status</th><th>Ações</th></tr></thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{categoryMap[product.categoryId]}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td><span className="status-pill">{product.status}</span></td>
                  <td className="table-actions">
                    <button className="icon-button" type="button" aria-label="Editar" onClick={() => editProduct(product)}><Pencil size={16} /></button>
                    <button className="icon-button danger" type="button" aria-label="Excluir" onClick={() => setProducts(products.filter((item) => item.id !== product.id))}><Trash2 size={16} /></button>
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
