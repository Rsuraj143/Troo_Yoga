import React from 'react'
import Header from '../../Components/Header/Header'
import ErrorPage from '../../Components/ErrorPage/ErrorPage'
import useDocumentTitle from '../../PageTitle'


const Error404 = () => {
  useDocumentTitle("TRoo Yoga | Error 404")
  return (
    <div className='comming'>
        <Header/>
        <ErrorPage/>
    </div>
  )
}

export default Error404