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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} /> 
    </CartProvider>
  </StrictMode>,
)
