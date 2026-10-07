import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { QuoteProvider } from './context/QuoteContext'
import { UIProvider } from './context/UIContext'
import { routes } from './routes'


const router = createBrowserRouter(routes)


const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

// The prerendered HTML inside #root (see scripts/prerender.mjs) exists for
// crawlers and first paint. createRoot replaces it on mount rather than
// hydrating: the quote list and other per-browser state read localStorage, so
// the client's first render legitimately differs from the build-time one.
try {
  createRoot(rootElement).render(
    <StrictMode>
      <CartProvider>
        <QuoteProvider>
          <UIProvider>
            <RouterProvider router={router} />
          </UIProvider>
        </QuoteProvider>
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
