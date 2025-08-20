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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter basename='/Kuber-Web'>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<SignIn/>} />
<Route path='/contact' element={<Contact/>} />
<Route path="/company" element={<Company/>} />
<Route path="/solution-and-features" element={<SolutionAndFeatures/>} />
<Route path="/pricing" element={<Pricing/>} />
<Route path="/faqs" element={<FAQs/>} />
<Route path="/privacy-policy" element={<PrivacyPolicySection/>} />
</Routes>



</BrowserRouter>



    </>
  )
}

export default App
