import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import InnovationSection from './Components/InnovationSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home'
import { SignIn } from './Screens/SignIn'
import AcceptingPaymentSection from './Components/AcceptingPaymentSection'
import InvoiceSection from './Components/InvoiceSection'
import VirtualAccountSection from './Components/VirtualAccountSection'
import WhiteLabelSection from './Components/WhiteLabelSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter basename='/Kuber-Web'>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<SignIn/>} />
<Route path="/payment-gateway" element={<AcceptingPaymentSection />} />
<Route path="/invoice" element={<InvoiceSection />} />
<Route path="/virtual-account" element={<VirtualAccountSection/>}/>
<Route path="/whitelabel" element={<WhiteLabelSection />} />

</Routes>



</BrowserRouter>



    </>
  )
}

export default App
