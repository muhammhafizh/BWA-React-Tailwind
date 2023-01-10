import React from 'react'
import BreadCrumb from '../components/BreadCrumb/Breadcrumb'
import ShoppingCart from '../parts/Cart/ShoppingCart'
// import ProductDetails from '../parts/Details/ProductDetails'
// import Suggestion from '../parts/Details/Suggestion'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import SiteMap from '../parts/SiteMap'

export default function Cart() {
  return (
    <>
        <Header theme="black" />
        <BreadCrumb  
            list={[
            { url: "/", name: "Home"},
            { url: "/cart", name: "Shopping Cart"},          
        ]} />
        
        {/*<ProductDetails />
        <Suggestion /> */}

        <ShoppingCart />
        <SiteMap />
        <Footer />
    </>
  )
}