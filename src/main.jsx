import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import ProductsPage from './pages/ProductsPage'
import CategoryProducts from './pages/CategoryProducts'
import GroupCategories from './pages/GroupCategories'
import { ClerkProvider } from '@clerk/clerk-react'
import ProductDetail from './components/ProductDetail'
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

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <CartProvider>
        <RouterProvider router={router} /> 
      </CartProvider>
     </ClerkProvider>
  </StrictMode>,
)
