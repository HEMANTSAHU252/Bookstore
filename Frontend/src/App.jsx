 import React from 'react'
 import Home from './home/Home';
//  import { useEffect } from'react';
//  import { useState } from 'react';
 import { Routes,Route } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './component/Signup';
import Contactsus from './contact/Contactsus';
import Aboutsus from './about/Aboutsus';
 function App  () {
    // const [backgroundColor, setBackgroundColor] = useState('white'); // Default color
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollPosition = window.scrollY; // Current vertical scroll position
  
    //     // Change background color based on scroll position
    //     if (scrollPosition > 10) {
    //       setBackgroundColor('black'); // Light gray when scrolled down
    //     } else {
    //       setBackgroundColor('white'); // White when at the top
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll); // function call
  
    //   // Cleanup the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll); // return value karayege
    //   };
    // }, []);
   return (
     <>
    
        {/* <div className='dark:bg-slate-900 dark:text-white'> */}

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contactsus />} />
            <Route path ="/about" element={<Aboutsus />} />

        </Routes>
        {/* </div> */}

      
    
  
   </>
   )
 }
 
 export default App