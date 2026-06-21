import { useMemo, useState } from 'react'
import { categoriesMock } from '../data/categoriesMock'
import { ordersMock } from '../data/ordersMock'
import { productsMock } from '../data/productsMock'
import { promosMock } from '../data/promosMock'
import { getStoredData, setStoredData } from '../services/storageService'
import { AppContext } from './appContextCore'

export function AppProvider({ children }) {
  const [products, setProductsState] = useState(() => getStoredData('tenda-products', productsMock))
  const [categories, setCategoriesState] = useState(() => getStoredData('tenda-categories', categoriesMock))
  const [promos, setPromosState] = useState(() => getStoredData('tenda-promos', promosMock))
  const [orders, setOrdersState] = useState(() => getStoredData('tenda-orders', ordersMock))
  const [cart, setCart] = useState(() => getStoredData('tenda-cart', []))

  const setProducts = (value) => {
    setProductsState(value)
    setStoredData('tenda-products', value)
  }

  const setCategories = (value) => {
    setCategoriesState(value)
    setStoredData('tenda-categories', value)
  }

  const setPromos = (value) => {
    setPromosState(value)
    setStoredData('tenda-promos', value)
  }

  const setOrders = (value) => {
    setOrdersState(value)
    setStoredData('tenda-orders', value)
  }

  const syncCart = (nextCart) => {
    setCart(nextCart)
    setStoredData('tenda-cart', nextCart)
  }

  const addToCart = (product) => {
    const nextCart = cart.some((item) => item.id === product.id)
      ? cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      : [...cart, { ...product, quantity: 1 }]
    syncCart(nextCart)
  }

  const updateQuantity = (productId, quantity) => {
    const nextCart = cart
      .map((item) => (item.id === productId ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0)
    syncCart(nextCart)
  }

  const removeFromCart = (productId) => {
    syncCart(cart.filter((item) => item.id !== productId))
  }

  const clearCart = () => syncCart([])

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  )

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
    promos,
    setPromos,
    orders,
    setOrders,
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
