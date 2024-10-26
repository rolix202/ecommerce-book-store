import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import ProductDetails from './components/product-Details/ProductDetails'
import Header from './components/header/Header'
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div>
      {/* <Homepage /> */}
      <Header />
      <ProductDetails/>
      
    </div>
    
  )
}

export default App