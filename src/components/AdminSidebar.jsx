import { NavLink, useNavigate } from 'react-router-dom'
import { Boxes, ClipboardList, LayoutDashboard, LogOut, Percent, Tags, Utensils } from 'lucide-react'
import { clearAdminSession } from '../services/storageService'

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/produtos', label: 'Produtos', icon: Utensils },
  { to: '/admin/categorias', label: 'Categorias', icon: Tags },
  { to: '/admin/promocoes', label: 'Promocoes', icon: Percent },
  { to: '/admin/pedidos', label: 'Pedidos', icon: ClipboardList },
]

export default function AdminSidebar() {
  const navigate = useNavigate()

  const logout = () => {
    clearAdminSession()
    navigate('/admin/login')
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <Boxes size={22} />
        <span>Admin Ozi</span>
      </div>
      <nav aria-label="Menu administrativo">
        {adminLinks.map((link) => {
          const Icon = link.icon
          return (
            <NavLink key={link.to} to={link.to}>
              <Icon size={18} />
              {link.label}
            </NavLink>
          )
        })}
      </nav>
      <button className="btn btn-ghost" type="button" onClick={logout}>
        <LogOut size={18} />
        Sair
      </button>
    </aside>
  )
}
