import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react'
import { apiService } from '../../services/apiService'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await apiService.login(form)
      localStorage.setItem('tenda-admin-auth', 'true')
      navigate('/admin/dashboard')
    } catch (apiError) {
      setError(apiError.message || 'Usuario ou senha invalidos. Use admin / admin123.')
    }
  }

  return (
    <section className="admin-login-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <div className="admin-login-icon">
          <LockKeyhole size={28} />
        </div>
        <h1>Login Admin</h1>
        <p>Acesso simulado para apresentacao do TCC.</p>
        {error && <div className="form-error" role="alert">{error}</div>}
        <label>
          <span>Usuario</span>
          <input
            value={form.username}
            onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
            autoComplete="username"
            required
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            autoComplete="current-password"
            required
          />
        </label>
        <button className="btn btn-primary full" type="submit">
          Entrar
        </button>
      </form>
    </section>
  )
}
