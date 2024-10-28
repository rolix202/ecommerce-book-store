import React from 'react'
import Header from '../components/header/Header'
import ProductDetails from '../components/product-Details/ProductDetails'
import CollectionGrid from '../components/collection/Collections'
import bookData from '../books/books'
import lastViewData from '../books/lastViewed'
import LastView from '../components/lastviewed/LastView'


const ProductPage = () => {
  return (
    <div>
        <Header />
        <ProductDetails/>
        <CollectionGrid items={bookData}/>
        <LastView items={lastViewData}/>
    </div>
  )
}

export default ProductPage