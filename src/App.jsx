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
 import VirtualAccountSection from './Components/VirtualAccountSection'
import WhiteLabelSection from './Screens/WhiteLabelSection'
import IntegrationSection from './Components/IntegrationSection'
import { Developer } from './Screens/Developer'
import SignUp from './Screens/SignUp'
import {TermsandConditions} from './Screens/TermsandConditions'

function App() {

  const [count, setCount] = useState(0)
 
  return (
<>
 
<BrowserRouter basename='/Kuber-Web'>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<SignIn/>} />
<Route path= '/signUp' element={<SignUp/>} />
<Route path='/contact' element={<Contact/>} />
<Route path="/company" element={<Company/>} />

<Route path="/solution-and-features" element={<SolutionAndFeatures/>} />
<Route path="/pricing" element={<Pricing/>} />
<Route path="/faqs" element={<FAQs/>} />
<Route path="/privacy-policy" element={<PrivacyPolicySection/>} />
<Route path="/terms-and-condition" element={<TermsandConditions/>} />
<Route path="/faqs" element={<FAQs/>} />
<Route path="/payment-gateway" element={<AcceptingPaymentSection />} />
<Route path="/invoice" element={<InvoiceSection />} />
<Route path="/virtual-account" element={<VirtualAccountSection/>}/>
<Route path="/whitelabel" element={<WhiteLabelSection />} />
 <Route path="/developer" element={<Developer />} />

</Routes>
 
 
</BrowserRouter>
 
 
    </>

  )

}
 
export default App
 