import React from 'react'
import Header from '../Components/Header/Header'
import BannerGlobal from '../Components/Banner/BannerGlobal'
import Footer from '../Components/Footer/Footer'
import GoogleMap from '../Components/ContactComponent/GoogleMap'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../PageTitle'

const Contacts = () => {
  useDocumentTitle("TRoo Yoga | Contacts")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <GoogleMap/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Contacts