import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import TeamComponent2 from '../../Components/TeamComponent/TeamComponent2'
import CounterComponent from '../../Components/CounterComponent/CounterComponent'
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent'
import PricingPlan from '../../Components/PricingPlan/PricingPlan'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'

const Team = () => {
  return (
    <div className='team'>
        <Header/>
        <BannerGlobal/>
        <TeamComponent2/>
        <CounterComponent/>
        <ReviewComponent/>
        <PricingPlan/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Team