import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem('tenda-admin-auth') === 'true'
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />
}
