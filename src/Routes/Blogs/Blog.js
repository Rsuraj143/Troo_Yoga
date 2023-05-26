import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogComponent2 from '../../Components/BlogComponent/BlogComponent2'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'

const Blog = () => {
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <BlogComponent2/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Blog