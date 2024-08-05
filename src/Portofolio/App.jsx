import React from 'react'
import Home from './Portofolio/Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Portofolio/Pages/component/Navbar'
import Contact from './Portofolio/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/:any' element={<Home/>}/> 
      </Routes>
    </>
  )
}

export default App
