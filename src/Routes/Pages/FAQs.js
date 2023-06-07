import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import FAQComponent2 from '../../Components/FAQComponent/FAQComponent2'
import PricingPlan from '../../Components/PricingPlan/PricingPlan'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../../PageTitle'

const FAQs = () => {
  useDocumentTitle("TRoo Yoga | FAQs")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <FAQComponent2/>
        <PricingPlan/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default FAQs