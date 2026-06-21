export function getStoredData(key, fallback) {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

export function setStoredData(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function clearAdminSession() {
  localStorage.removeItem('tenda-admin-auth')
}
