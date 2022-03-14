import React from 'react';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

import About from './Components/About';
import Projects from './Components/Projects';
import Drawer from './Components/Drawer';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* <NavBar/>  */}
        <Drawer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/About' element={<About />}></Route>
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Drawer>
      </BrowserRouter>
    </div>
  );
}

export default App;