import React from 'react'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Service from './Components/Pages/Service/Service'
import Industries from './Components/Pages/Industries/Industries'
import Contact from './Components/Pages/Contact/Contact'
import Reachus from './Components/Pages/Reach us/Reachus'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Getmore from './Components/Pages/SubPages/Getmore/Getmore'
import Learnmore from './Components/Pages/SubPages/Learnmore/Learnmore'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reachus' element={<Reachus />} />
          <Route path='/getmore' element={<Getmore />} />
          <Route path='/learnmore' element={<Learnmore />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App