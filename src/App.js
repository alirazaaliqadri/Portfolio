import React from 'react';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Drawer from './Components/Drawer';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        {/* <NavBar/>  */}
        <Routes>
          <Route path='/' element={<Drawer />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path="Contact" element={<Contact />} />
          <Route path="Project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;