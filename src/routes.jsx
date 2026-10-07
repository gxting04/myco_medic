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
// Cart page hidden
// import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import NotFound from './pages/NotFound'
import RootLayout from './components/site/RootLayout'

// Shared by the browser router (main.jsx) and the build-time prerenderer
// (entry-server.jsx), so both render exactly the same tree for a URL.
export const routes = [
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
      { path: '/career', element: <Career /> },
      { path: '/internship', element: <Internship /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/group/:groupName', element: <GroupCategories /> },
      { path: '/products/category/:categoryName', element: <CategoryProducts /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/search', element: <SearchResults /> },
      // Cart page hidden
      // { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/success', element: <Success /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]
