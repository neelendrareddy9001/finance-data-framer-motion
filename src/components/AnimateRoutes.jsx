import React from 'react';


//import pages
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Analytics from './Analytics';

//import Framer motion 
import { AnimatePresence } from 'framer-motion';

//import Routes and Route & useLocation hook
import {Routes, Route, useLocation} from 'react-router-dom';

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes key={location.pathname} location={location} className="cursor-pointer">
      <Route path='/' element={<Hero/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/newsletter' element={<Newsletter/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/footer' element={<Footer/>} />
    </Routes>
    </AnimatePresence>
   
  )
}

export default AnimateRoutes