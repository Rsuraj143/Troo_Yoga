import React from 'react'
import Header from '../../Components/Header/Header'
import CommingSoonComponent from '../../Components/CommingSoonComponent/CommingSoonComponent'
import useDocumentTitle from '../../PageTitle'

const CommingSoon = () => {
  useDocumentTitle("TRoo Yoga | Comming Soon")
  return (
    <div className='comming'>
        <Header/>
        <CommingSoonComponent/>
    </div>
  )
}

export default CommingSoon