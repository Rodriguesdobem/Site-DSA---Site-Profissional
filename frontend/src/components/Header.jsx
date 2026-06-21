import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, UtensilsCrossed } from 'lucide-react'
import { businessConfig } from '../config/businessConfig'
import { useApp } from '../context/useApp'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/promocoes', label: 'Promoções' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const { cart } = useApp()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Ir para a página inicial">
          <span className="brand-mark">
            <UtensilsCrossed size={22} />
          </span>
          <span>{businessConfig.name}</span>
        </Link>

        <nav className="main-nav" aria-label="Menu principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="cart-link" to="/carrinho">
            <ShoppingCart size={18} />
            Carrinho
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>
          <NavLink className="admin-link" to="/admin/login">
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
