import React from 'react'

import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import User from './components/User';
function App() {


  return (
    <div>
    <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="/user/:id" element={<User></User>}/>
        </Routes>
    </div>
  )
}

export default App
