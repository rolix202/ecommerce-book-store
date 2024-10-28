import React from 'react'
import Header from '../components/header/Header'
import ProductDetails from '../components/product-Details/ProductDetails'
import CollectionGrid from '../components/collection/Collections'
import bookData from '../books/books'


const ProductPage = () => {
  return (
    <div>
        <Header />
        <ProductDetails/>
        <CollectionGrid items={bookData}/>
    </div>
  )
}

export default ProductPage