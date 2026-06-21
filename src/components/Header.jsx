import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, UtensilsCrossed } from 'lucide-react'
import { useState } from 'react'
import { businessConfig } from '../config/businessConfig'
import { useApp } from '../context/useApp'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/cardapio', label: 'Cardapio' },
  { to: '/promocoes', label: 'Promocoes' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { cart } = useApp()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Ir para a pagina inicial">
          <span className="brand-mark">
            <UtensilsCrossed size={22} />
          </span>
          <span>{businessConfig.name}</span>
        </Link>

        <button
          className="icon-button mobile-menu"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <Menu size={22} />
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Menu principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="cart-link" to="/carrinho" onClick={() => setOpen(false)}>
            <ShoppingCart size={18} />
            Carrinho
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>
          <NavLink className="admin-link" to="/admin/login" onClick={() => setOpen(false)}>
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
