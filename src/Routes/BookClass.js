import React from 'react'
import Header from '../Components/Header/Header'
import BannerGlobal from '../Components/Banner/BannerGlobal'
import Footer from '../Components/Footer/Footer'
import BookClassComponent from '../Components/BookClassComponent/BookClassComponent'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../PageTitle'

const BookClass = () => {
  useDocumentTitle("TRoo Yoga | Book Classes")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <BookClassComponent/>
        <ContactComponent/>
        <Footer/>

    </div>
  )
}

export default BookClass