import React from 'react'
import Navbar from '../Components/Navbar'
import MerchantBanner from '../Components/MerchantBanner'
import UnicornResellerContent from '../Components/UnicornResellerContent'
import ResellerShowcase from '../Components/ResellerShowcase'
import ResellerPartnership from '../Components/ResellerPartnership'
import ResellerCommission from '../Components/ResellerCommission'
import ResellerPayouts from '../Components/ResellerPayouts'
import WebDeveloperPartnership from '../Components/WebDeveloperPartnership'
import MerchantSignupForm from '../Components/MerchantSignupForm'
import Footer from '../Components/Footer'

const MerchantServiceReseller = () => {
  return ( 
    <div>
        <Navbar/>
        <MerchantBanner/>
        {/* <KuberResellerContent/> */}
      <ResellerShowcase/>
       <ResellerCommission/>
      <ResellerPartnership/>
      <ResellerPayouts/>
      <WebDeveloperPartnership/>
      <MerchantSignupForm/>
      <Footer/>
    </div>
  )
}

export default MerchantServiceReseller
