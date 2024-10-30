import React from 'react'
import Header from '../components/header/Header'
import ProductDetails from '../components/product-Details/ProductDetails'
import CollectionGrid from '../components/collection/Collections'
import bookData from '../books/books'
import lastViewData from '../books/lastViewed'
import LastView from '../components/lastviewed/LastView'
import Footer from '../components/footer/Footer'


const ProductPage = () => {
  return (
    <div>
        <Header />
        <ProductDetails/>
        <CollectionGrid items={bookData}/>
        <LastView items={lastViewData}/>
        <Footer/>
    </div>
  )
}

export default ProductPage