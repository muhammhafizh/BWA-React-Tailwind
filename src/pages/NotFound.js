import React from 'react'
import ErrorMessage from '../parts/ErrorMessage'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import SiteMap from '../parts/SiteMap'

export default function NotFound() {
  return (
    
    <>
        <Header theme="black" />
        <ErrorMessage />
        <SiteMap />
        <Footer />
    </>
  )
}
