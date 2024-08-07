import React from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {Route,Routes} from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
