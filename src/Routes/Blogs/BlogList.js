import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogListComponent from '../../Components/BlogComponent/BlogListComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../../PageTitle'

const BlogList = () => {
  useDocumentTitle("TRoo Yoga | Blogs Lists")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <BlogListComponent/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default BlogList