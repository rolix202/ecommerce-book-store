import React from 'react'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/inter";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "product-page",
    element: <ProductPage />
  }
])

const App = () => {
  return (
    <div>

      <RouterProvider router={router} />  
    </div>
    
  )
}

export default App