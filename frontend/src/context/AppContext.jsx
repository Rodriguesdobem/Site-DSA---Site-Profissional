import { useCallback, useEffect, useMemo, useState } from 'react'
import { categoriesMock } from '../data/categoriesMock'
import { ordersMock } from '../data/ordersMock'
import { productsMock } from '../data/productsMock'
import { promosMock } from '../data/promosMock'
import { getStoredData, setStoredData } from '../services/storageService'
import { apiService } from '../services/apiService'
import { AppContext } from './appContextCore'

export function AppProvider({ children }) {
  const [products, setProductsState] = useState(productsMock)
  const [categories, setCategoriesState] = useState(categoriesMock)
  const [promos, setPromosState] = useState(promosMock)
  const [orders, setOrdersState] = useState(ordersMock)
  const [cart, setCart] = useState(() => getStoredData('tenda-cart', []))
  const [apiError, setApiError] = useState('')

  const loadApiData = useCallback(async () => {
    try {
      const [apiProducts, apiCategories, apiPromos, apiOrders] = await Promise.all([
        apiService.getProducts(),
        apiService.getCategories(),
        apiService.getPromotions(),
        apiService.getOrders(),
      ])
      setProductsState(apiProducts)
      setCategoriesState(apiCategories)
      setPromosState(apiPromos)
      setOrdersState(apiOrders)
      setApiError('')
    } catch {
      setApiError('Backend indisponivel. Exibindo dados mock do frontend.')
    }
  }, [])

  useEffect(() => {
    // Initial API hydration keeps the frontend decoupled from hardcoded mocks.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadApiData()
  }, [loadApiData])

  const setProducts = async (nextProducts) => {
    const previousById = new Map(products.map((product) => [product.id, product]))
    setProductsState(nextProducts)
    try {
      await Promise.all(
        products
          .filter((product) => !nextProducts.some((nextProduct) => nextProduct.id === product.id))
          .map((product) => apiService.deleteProduct(product.id)),
      )
      await Promise.all(
        nextProducts.map((product) =>
          previousById.has(product.id)
            ? apiService.updateProduct(product.id, product)
            : apiService.createProduct(product),
        ),
      )
      await loadApiData()
    } catch (error) {
      setApiError(error.message)
    }
  }

  const setCategories = async (nextCategories) => {
    const previousById = new Map(categories.map((category) => [category.id, category]))
    setCategoriesState(nextCategories)
    try {
      await Promise.all(
        categories
          .filter((category) => !nextCategories.some((nextCategory) => nextCategory.id === category.id))
          .map((category) => apiService.deleteCategory(category.id)),
      )
      await Promise.all(
        nextCategories.map((category) =>
          previousById.has(category.id)
            ? apiService.updateCategory(category.id, category)
            : apiService.createCategory(category),
        ),
      )
      await loadApiData()
    } catch (error) {
      setApiError(error.message)
    }
  }

  const setPromos = async (nextPromos) => {
    const previousById = new Map(promos.map((promo) => [promo.id, promo]))
    setPromosState(nextPromos)
    try {
      await Promise.all(
        promos
          .filter((promo) => !nextPromos.some((nextPromo) => nextPromo.id === promo.id))
          .map((promo) => apiService.deletePromotion(promo.id)),
      )
      await Promise.all(
        nextPromos.map((promo) =>
          previousById.has(promo.id)
            ? apiService.updatePromotion(promo.id, promo)
            : apiService.createPromotion(promo),
        ),
      )
      await loadApiData()
    } catch (error) {
      setApiError(error.message)
    }
  }

  const setOrders = async (nextOrders) => {
    setOrdersState(nextOrders)
    try {
      await Promise.all(
        nextOrders
          .filter((order) => orders.some((current) => current.id === order.id && current.status !== order.status))
          .map((order) => apiService.updateOrderStatus(order.id, order.status)),
      )
      await loadApiData()
    } catch (error) {
      setApiError(error.message)
    }
  }

  const createOrder = async (order) => {
    try {
      await apiService.createOrder(order)
      await loadApiData()
    } catch (error) {
      setApiError(error.message)
    }
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
    createOrder,
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    apiError,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
