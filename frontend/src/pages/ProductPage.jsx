import React from 'react'
import Header from '../components/header/Header'
import ProductDetails from '../components/product-Details/ProductDetails'
import CollectionGrid from '../components/collection/Collections'
import bookShop from './books/books.json'


const ProductPage = () => {
  return (
    <div>
        <Header />
        <ProductDetails/>
        <CollectionGrid items={bookShop}/>
    </div>
  )
}

export default ProductPage