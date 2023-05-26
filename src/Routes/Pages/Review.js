import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import ReviewComponent2 from '../../Components/ReviewComponent/ReviewComponent2'
import PricingPlan from '../../Components/PricingPlan/PricingPlan'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'

const Review = () => {
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <ReviewComponent2 />
        <PricingPlan/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Review