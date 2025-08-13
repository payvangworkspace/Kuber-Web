import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import InnovationSection from './Components/InnovationSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter>
<Routes>
<Route path='' element={<Home/>} />



</Routes>



</BrowserRouter>



    </>
  )
}

export default App
