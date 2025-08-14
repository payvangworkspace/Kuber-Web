import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import InnovationSection from './Components/InnovationSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home'
import { SignIn } from './Screens/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter basename='/Kuber-Web'>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<SignIn/>} />


</Routes>



</BrowserRouter>



    </>
  )
}

export default App
