import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import InnovationSection from './Components/InnovationSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home'
import { SignIn } from './Screens/SignIn'
import { Contact } from './Screens/Contact'
import Company from './Screens/Company'
import SolutionAndFeatures from './Screens/SolutionAndFeatures'
import Pricing from './Screens/Pricing'
import FAQs from './Screens/FAQs'
import PrivacyPolicySection from './Screens/PrivacyPolicySection'
import AcceptingPaymentSection from './Screens/AcceptingPaymentSection'
import InvoiceSection from './Screens/InvoiceSection'
import VirtualAccountSection from './Screens/VirtualAccountSection'
import WhiteLabelSection from './Screens/WhiteLabelSection'
import IntegrationSection from './Components/IntegrationSection'
import { Developer } from './Screens/Developer'
import SignupSection from './Screens/SignupSection'
import { TermsandConditions } from './Screens/TermsandConditions'
import Integration from './Screens/Integration'
import CardDetail from './Components/CardDetail'
import InfoDetail from './Components/InfoDetail'
import ClientDetail from './Components/ClientDetail'
import NFCScreen from './Screens/NFCScreen'

// ✅ ScrollToTop Component
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }) // change 'instant' to 'smooth' for animation
  }, [pathname])

  return null
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/Kuber-Web'>
        <ScrollToTop />  

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signUp' element={<SignupSection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solution-and-features" element={<SolutionAndFeatures />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicySection />} />
          <Route path="/terms-and-condition" element={<TermsandConditions />} />
          <Route path="/payment-gateway" element={<AcceptingPaymentSection />} />
          <Route path="/invoice" element={<InvoiceSection />} />
          <Route path="/virtual-account" element={<VirtualAccountSection />} />
          <Route path="/whitelabel" element={<WhiteLabelSection />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/merchant-integration" element={<Integration />} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/info/:id" element={<InfoDetail />} />
          <Route path="/client-approach" element={<ClientDetail />} />
            <Route path="/NFC-Payment" element={<NFCScreen/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
