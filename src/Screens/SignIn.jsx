import React from 'react'
import Navbar from '../Components/Navbar';
import "../Styles/SignIn.css"
import Sign  from '../Components/Sign';
import Footer from '../Components/Footer';
export const SignIn = () => {
  return (
    <div className='sign-outer'>
    <Navbar/>
<Sign/>
    <Footer/>
    
    </div>
  )
}
