import React, { useEffect, useRef } from 'react'
import Navbar from './PAGE/Navbar'
import Home from './PAGE/Home'
import { Routes,Route,useLocation } from 'react-router-dom';
import Work from './PAGE/Work';
import About from './PAGE/About';
import Services from './PAGE/Service';
import Contact from './PAGE/Contact';
import Footer from './PAGE/Footer';
import AddProject from './PAGE/AddProject';
import Login from './PAGE/Login';
import TestAPI from './PAGE/TestAPI';
import Journey from './PAGE/Journey';

const App = () => {
    const location = useLocation();
    const scrollRef = useRef(null);
    const wrapperRef = useRef(null);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
      // Set body height based on content
      const setBodyHeight = () => {
        if (scrollRef.current) {
          document.body.style.height = `${scrollRef.current.offsetHeight}px`;
        }
      };
      
      setBodyHeight();
      window.addEventListener('resize', setBodyHeight);
      
      // Smooth scroll implementation
      let scrollY = 0;
      let targetScrollY = 0;
      
      const smoothScroll = () => {
        targetScrollY = window.scrollY;
        scrollY += (targetScrollY - scrollY) * 0.08; // Lazy scroll factor
        
        if (scrollRef.current) {
          scrollRef.current.style.transform = `translate3d(0, -${scrollY}px, 0)`;
        }
        
        requestAnimationFrame(smoothScroll);
      };
      
      const rafId = requestAnimationFrame(smoothScroll);
      
      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', setBodyHeight);
        document.body.style.height = 'auto';
        if (scrollRef.current) {
          scrollRef.current.style.transform = 'translate3d(0, 0, 0)';
        }
      };
    }, [location.pathname]);

    return (
      <>
        <Navbar/>
        <div ref={wrapperRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'visible', zIndex: 0 }}>
          <div ref={scrollRef} style={{ willChange: 'transform' }}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/projects' element={<Work/>}/>
              <Route path='/journey' element={<Journey/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/bin/auth/dashboard' element={<AddProject/>}/>
              <Route path='/auth/login' element={<Login/>}/>
              <Route path='/test-api' element={<TestAPI/>}/>
            </Routes>
            <Footer/>
          </div>
        </div>
      </>
    )
}

export default App