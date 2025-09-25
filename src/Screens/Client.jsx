import React from 'react'
import Navbar from '../Components/Navbar'
// import ClientApproach from '../Components/ClientApproach'
import Banner from '../Components/Banner'
import ClientDetail from '../Components/ClientDetail'
import Footer from '../Components/Footer'

const Client = () => {
  return (
    <div>
      <Navbar/>
      <Banner title="Web Developer Partnership" subtitle="Our Web Developer Partnership" />
      <ClientDetail/>
      <Footer/>

    </div>
  )
}

export default Client
