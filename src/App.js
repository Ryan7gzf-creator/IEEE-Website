import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Events from  './Components/Events/Events'
import Membership from './Components/Membership/Membership';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/" element={<Events />}/>
                      <Route path="/" element={<Membership />}/>
                      <Route path="./About" element={<About />}/>
                  </Routes>
              </div>
              <Footer />
          </Router>
      </div>
  );
}

export default App;
