import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
//import App from 'App.css'

export default function App() {
  return (
    <div className='body'>
      <Router>
      <Navbar/>
      <Routes>
      {/* <Navbar/> */}
      <Route exact path="/" element={<Home/>} /> 
      {/* <Route exact path="/Navbar" element={<Navbar/>} /> */}
      <Route exact path="/AddEmployee" element={<AddEmployee/>} /> 


      </Routes>
      {/* <Navbar/>
       <Home/> */}

      </Router>
     
     
                
    </div>
  )
}


