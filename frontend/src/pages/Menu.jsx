import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useApp } from '../context/useApp'

export default function Menu() {
  const { products, categories, addToCart } = useApp()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('todos')

  const activeCategories = categories.filter((item) => item.status === 'ativo')
  const categoryMap = Object.fromEntries(categories.map((item) => [item.id, item.name]))

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => product.status === 'ativo')
      .filter((product) => category === 'todos' || product.categoryId === category)
      .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
  }, [category, products, search])

  return (
    <section className="page-section">
      <div className="container page-heading">
        <span className="eyebrow">Cardápio real</span>
        <h1>Monte seu pedido</h1>
        <p>Use a busca ou filtre por categoria para encontrar espetos, petiscos e bebidas.</p>
      </div>

      <div className="container filters-bar">
        <label className="search-field">
          <span>Buscar produto</span>
          <div>
            <Search size={18} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ex: frango, coca, kafta"
            />
          </div>
        </label>
        <label>
          <span>Categoria</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="todos">Todas as categorias</option>
            {activeCategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="container product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryName={categoryMap[product.categoryId]}
            onAdd={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="container empty-state">
          <h2>Nenhum produto encontrado</h2>
          <p>Tente outro termo ou selecione uma categoria diferente.</p>
        </div>
      )}
    </section>
  )
}
