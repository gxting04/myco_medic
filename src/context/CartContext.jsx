import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('myco_cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('myco_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1, variantInfo = null) => {
    setCartItems(prevItems => {
      // Create a unique key for this product variant combination
      const variantKey = variantInfo 
        ? `${product.id}-${variantInfo.color || 'default'}-${variantInfo.size || 'default'}`
        : `${product.id}-default-default`
      
      const existingItem = prevItems.find(item => {
        const itemVariantKey = item.variantInfo
          ? `${item.id}-${item.variantInfo.color || 'default'}-${item.variantInfo.size || 'default'}`
          : `${item.id}-default-default`
        return itemVariantKey === variantKey
      })
      
      if (existingItem) {
        return prevItems.map(item => {
          const itemVariantKey = item.variantInfo
            ? `${item.id}-${item.variantInfo.color || 'default'}-${item.variantInfo.size || 'default'}`
            : `${item.id}-default-default`
          return itemVariantKey === variantKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        })
      }
      
      return [...prevItems, { ...product, quantity, variantInfo }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


