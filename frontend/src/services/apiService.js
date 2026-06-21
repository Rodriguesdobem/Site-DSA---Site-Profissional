const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Erro ao acessar API.' }))
    throw new Error(error.message || 'Erro ao acessar API.')
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export const apiService = {
  getBusiness: () => request('/business'),
  login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  getProducts: () => request('/products'),
  createProduct: (product) => request('/products', { method: 'POST', body: JSON.stringify(product) }),
  updateProduct: (id, product) => request(`/products/${id}`, { method: 'PUT', body: JSON.stringify(product) }),
  deleteProduct: (id) => request(`/products/${id}`, { method: 'DELETE' }),
  getCategories: () => request('/categories'),
  createCategory: (category) => request('/categories', { method: 'POST', body: JSON.stringify(category) }),
  updateCategory: (id, category) => request(`/categories/${id}`, { method: 'PUT', body: JSON.stringify(category) }),
  deleteCategory: (id) => request(`/categories/${id}`, { method: 'DELETE' }),
  getPromotions: () => request('/promotions'),
  createPromotion: (promotion) => request('/promotions', { method: 'POST', body: JSON.stringify(promotion) }),
  updatePromotion: (id, promotion) => request(`/promotions/${id}`, { method: 'PUT', body: JSON.stringify(promotion) }),
  deletePromotion: (id) => request(`/promotions/${id}`, { method: 'DELETE' }),
  getOrders: () => request('/orders'),
  createOrder: (order) => request('/orders', { method: 'POST', body: JSON.stringify(order) }),
  updateOrderStatus: (id, status) =>
    request(`/orders/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
}
