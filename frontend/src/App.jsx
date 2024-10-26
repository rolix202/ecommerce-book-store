import React from 'react'
import './App.css'
import ProductDetails from './components/product-Details/ProductDetails'
import Header from './components/header/Header'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/product-page",
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