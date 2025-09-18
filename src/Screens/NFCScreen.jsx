import React from 'react'
import Navbar from '../Components/Navbar'
import NFCSection from '../Components/NFCSection'
import Footer from '../Components/Footer';
import OrchestrationLayer from "../Components/OrchestrationLayer";
import FlowKuber from '../Components/FlowKuber';
import FlowComparison from '../Components/FlowComparison';

const NFCScreen = () => {
  return (
    <div>
      <Navbar/>
      <NFCSection/>
      {/* <OrchestrationLayer/> */}
      <FlowKuber/>
      <FlowComparison/>
      <Footer/>
    </div>
  )
}

export default NFCScreen
