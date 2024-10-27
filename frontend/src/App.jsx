import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import ProductDetails from './components/product-Details/ProductDetails'
import Header from './components/header/Header'
import "@fortawesome/fontawesome-free/css/all.min.css";
import CollectionGrid from './components/collection/Collections'
import bookShop from './books/books.json'

const App = () => {
  return (
    <div>
      {/* <Homepage /> */}
      <Header />
      <ProductDetails/>
      <CollectionGrid items={bookShop}/>
      
    </div>
    
  )
}

export default App