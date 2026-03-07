import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import Career from './career'
import Internship from './internship'
import ProductsPage from './pages/ProductsPage'
import CategoryProducts from './pages/CategoryProducts'
import GroupCategories from './pages/GroupCategories'
import ProductDetail from './components/ProductDetail'
import SearchResults from './pages/SearchResults'
import { CartProvider } from './context/CartContext'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/career',
    element:<Career/>
  },
  {
    path:'/internship',
    element:<Internship/>
  },
  {
    path:'/products',
    element:<ProductsPage/>
  },
  {
    path:'/products/group/:groupName',
    element:<GroupCategories/>
  },
  {
    path:'/products/category/:categoryName',
    element:<CategoryProducts/>
  },
  {
    path:'/product/:id',
    element:<ProductDetail/>
  },
  {
    path:'/search',
    element:<SearchResults/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/checkout',
    element:<Checkout/>
  },
  {
    path:'/success',
    element:<Success/>
  }
])


const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <CartProvider>
        <RouterProvider router={router} /> 
      </CartProvider>
    </StrictMode>,
  )
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Error Loading Application</h1>
      <p>${error.message}</p>
      <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">${error.stack}</pre>
    </div>
  `
}
