import { useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { useApp } from '../../context/useApp'

const emptyCategory = { name: '', description: '', status: 'ativo' }

export default function AdminCategories() {
  const { categories, setCategories } = useApp()
  const [form, setForm] = useState(emptyCategory)
  const [editingId, setEditingId] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      ...form,
      id: editingId || form.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\W+/g, '-'),
    }
    setCategories(editingId ? categories.map((item) => (item.id === editingId ? payload : item)) : [...categories, payload])
    setForm(emptyCategory)
    setEditingId(null)
  }

  return (
    <section className="admin-page admin-crud-grid">
      <div className="admin-heading"><span className="eyebrow">CRUD</span><h1>Categorias</h1></div>
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId ? 'Editar categoria' : 'Cadastrar categoria'}</h2>
        <label><span>Nome</span><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
        <label><span>Descrição</span><textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} required /></label>
        <label><span>Status</span><select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></label>
        <button className="btn btn-primary full" type="submit"><Plus size={18} /> Salvar categoria</button>
      </form>
      <div className="admin-table-card">
        <div className="responsive-table">
          <table>
            <thead><tr><th>Nome</th><th>Descrição</th><th>Status</th><th>Ações</th></tr></thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td><span className="status-pill">{category.status}</span></td>
                  <td className="table-actions">
                    <button className="icon-button" type="button" aria-label="Editar" onClick={() => { setForm(category); setEditingId(category.id) }}><Pencil size={16} /></button>
                    <button className="icon-button danger" type="button" aria-label="Excluir" onClick={() => setCategories(categories.filter((item) => item.id !== category.id))}><Trash2 size={16} /></button>
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
