import React from 'react'
import Header from '../Components/Header/Header'
import BannerGlobal from '../Components/Banner/BannerGlobal'
import Footer from '../Components/Footer/Footer'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import HighlightComponent from '../Components/HighlightComponent/HighlightComponent'
import TeamComponent from '../Components/TeamComponent/TeamComponent'
import CounterComponent from '../Components/CounterComponent/CounterComponent'
import ReviewComponent from '../Components/ReviewComponent/ReviewComponent'
import PricingPlan from '../Components/PricingPlan/PricingPlan'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../PageTitle'

const About = () => {
useDocumentTitle("TRoo Yoga | About")
  return (
    <div className='about_page'>
        <Header/>
        <BannerGlobal/>
        <AboutComponent/>
        <HighlightComponent/>
        <TeamComponent/>
        <CounterComponent/>
        <ReviewComponent/>
        <PricingPlan/>
        <ContactComponent/>
        <Footer/>

    </div>
  )
}

export default About