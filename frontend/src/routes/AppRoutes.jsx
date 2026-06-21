import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProtectedRoute from '../components/ProtectedRoute'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Promotions from '../pages/Promotions'
import AdminCategories from '../pages/admin/AdminCategories'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminOrders from '../pages/admin/AdminOrders'
import AdminProducts from '../pages/admin/AdminProducts'
import AdminPromotions from '../pages/admin/AdminPromotions'

function CustomerLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function AdminLayout() {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/promocoes" element={<Promotions />} />
        <Route path="/contato" element={<Contact />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="produtos" element={<AdminProducts />} />
          <Route path="categorias" element={<AdminCategories />} />
          <Route path="promocoes" element={<AdminPromotions />} />
          <Route path="pedidos" element={<AdminOrders />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
