import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
// import UpdateEmp from "./components/UpdateEmp";
// import Login from "./components/Login";
import Edit from "./components/Edit";

export default function App() {
  return (
    <div className="body">
      <Router>
        {/* <Login/> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          {/* <Route path="/UpdateEmp" element={<UpdateEmp />} /> */}
          <Route path="/Edit/:id" element={<Edit />} />

          {/* <Route path="/Login" element={<Login />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
