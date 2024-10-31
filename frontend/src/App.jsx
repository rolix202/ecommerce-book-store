import React from 'react'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fontsource/inter";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage';
import Warning from './components/warning/Warning'

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
     <Warning>
      <RouterProvider router={router} />  
      </Warning>
    </div>
    
  )
}

export default App