import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogDetailsComponent from '../../Components/BlogComponent/BlogDetailsComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'

const BlogDetails = () => {
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <BlogDetailsComponent/>
        <ContactComponent/>

        <Footer/>
    </div>
  )
}

export default BlogDetails