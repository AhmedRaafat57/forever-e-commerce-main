import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Router/AppRouter.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ShopContextProvider>
      <AppRouter/>
   </ShopContextProvider>
  </StrictMode>
)
