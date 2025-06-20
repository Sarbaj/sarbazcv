import React from 'react'
import Navbar from './PAGE/Navbar'
import Home from './PAGE/Home'
import { Routes,Route,useLocation } from 'react-router-dom';
import Work from './PAGE/Work';
import About from './PAGE/About';
import Contact from './PAGE/Contact';
import Footer from './PAGE/Footer';
import AddProject from './PAGE/AddProject';
import Login from './PAGE/Login';
import { useEffect } from 'react';
const App = () => {
    const location = useLocation();
     useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Work/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/addproject' element={<AddProject/>}/>
      <Route path='/bin/auth/login' element={<Login/>}/>
   
    </Routes>
    <Footer/>
    </>
  )
}

export default App