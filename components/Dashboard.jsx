// import React from 'react'
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

function Dashboard() {

  const [employee, setEmployee] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const baseURL = "http://localhost:8080/api";

  const fetchEmployeeData = () => {
    axios
      .get(baseURL + "/EmpList", {
        params: {
          // page: currentPage,
          // search: searchTerm
        }
      })
      .then((response) => {
        setEmployee(response.data);
        // setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        alert("Something went wrong" + error);
      });
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const removeEmp = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete Employee?");
    if (confirmed) {
      axios
        .delete(baseURL + "/DeleteEmployee/" + id)
        .then((response) => {
          alert("Employee Id " + id + " deleted successfully !!!");
          fetchEmployeeData();
        })
        .catch((error) => {
          alert("Error occurred while removing Employee: " + error);
        });
    }
  };







  return (
    <div>Dashboard
      <div>
        <meta charSet="utf-8" />
        <title>Admin Dashboard </title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content name="keywords" />
        <meta content name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        {/* Libraries Stylesheet */}
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        <div className="container-xxl position-relative bg-white d-flex p-0">
          {/* Spinner Start */}
          {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{"width":"3rem","height":"3rem"}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          Spinner End */}





          {/* Sidebar Start */}
          <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
              <a href="index.html" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-hashtag me-2" />HRMS</h3>
              </a>
              <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                  <img className="rounded-circle" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                  <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
                </div>
                <div className="ms-3">
                  {/* <h6 className="mb-0">      Jhon Do e    </h6> */}
                  <span>Admin</span>
                </div>
              </div>
              <div className="navbar-nav w-100">
                <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2" />Dashboard</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Employee Details</a>
                  <div className="dropdown-menu bg-transparent border-0">
                    <a href="button.html" className="dropdown-item">Attendence</a>
                    <a href="typography.html" className="dropdown-item">List Employee</a>
                    <a href="element.html" className="dropdown-item">Other</a>
                  </div>
                </div>

{/* 
                <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
                <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
                <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</a>
                <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
               
                */}
               
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Other</a>
                  <div className="dropdown-menu bg-transparent border-0">
                    {/* <a href="signin.html" className="dropdown-item">Sign In</a>
                    <a href="signup.html" className="dropdown-item">Sign Up</a>
                    <a href="404.html" className="dropdown-item">404 Error</a>
                    <a href="blank.html" className="dropdown-item">Blank Page</a> */}
                  </div>


                </div>
              </div>
            </nav>
          </div>
          {/* Sidebar End */}
          {/* Content Start */}









          <div className="content">
            {/* Navbar Start */}
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
              <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
              </a>
              <a href="#" className="sidebar-toggler flex-shrink-0">
                <i className="fa fa-bars" />
              </a>
              <form className="d-none d-md-flex ms-4">
                <input className="form-control border-0" type="search" placeholder="Search" />
              </form>
              <div className="navbar-nav align-items-center ms-auto">
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="fa fa-envelope me-lg-2" />
                    <span className="d-none d-lg-inline-flex">Message</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    {/* <a href="#" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <img className="rounded-circle" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                        <div className="ms-2">
                          <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                          <small>15 minutes ago</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" /> */}
                  
                  
                    <a href="#" className="dropdown-item text-center">See all message</a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="fa fa-bell me-lg-2" />
                    <span className="d-none d-lg-inline-flex">Notificatin</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" className="dropdown-item">
                      <h6 className="fw-normal mb-0">Profile updated</h6>
                      <small>15 minutes ago</small>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <h6 className="fw-normal mb-0">New user added</h6>
                      <small>15 minutes ago</small>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <h6 className="fw-normal mb-0">Password changed</h6>
                      <small>15 minutes ago</small>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item text-center">See all notifications</a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <img className="rounded-circle me-lg-2" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                    <span className="d-none d-lg-inline-flex">John Doe</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" className="dropdown-item">My Profile</a>
                    <a href="#" className="dropdown-item">Settings</a>
                    <a href="#" className="dropdown-item">Log Out</a>
                  </div>
                </div>
              </div>
            </nav>
            {/* Navbar End */}
            {/* Sale & Revenue Start */}
            <div className="container-fluid pt-4 px-4">
              <div className="row g-4">
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i className="fa fa-chart-line fa-3x text-primary" />
                    <div className="ms-3">
                      {/* <p className="mb-2">Today Sale</p>
                      <h6 className="mb-0">$1234</h6> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i className="fa fa-chart-bar fa-3x text-primary" />
                    <div className="ms-3">
                      {/* <p className="mb-2">Total Sale</p>
                      <h6 className="mb-0">$1234</h6> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i className="fa fa-chart-area fa-3x text-primary" />
                    <div className="ms-3">
                      {/* <p className="mb-2">Today Revenue</p>
                      <h6 className="mb-0">$1234</h6> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    <i className="fa fa-chart-pie fa-3x text-primary" />
                    <div className="ms-3">
                      {/* <p className="mb-2">Total Revenue</p> */}
                      {/* <h6 className="mb-0">$1234</h6> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sale & Revenue End */}
            {/* Sales Chart Start */}
            <div className="container-fluid pt-4 px-4">
              <div className="row g-4">
                <div className="col-sm-12 col-xl-6">
                  <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h6 className="mb-0">Worldwide Sales</h6>
                      <a href>Show All</a>
                    </div>
                    <canvas id="worldwide-sales" />
                  </div>
                </div>
                <div className="col-sm-12 col-xl-6">
                  <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h6 className="mb-0">Salse &amp; Revenue</h6>
                      <a href>Show All</a>
                    </div>
                    <canvas id="salse-revenue" />
                  </div>
                </div>
              </div>
            </div>
            {/* Sales Chart End */}
            {/* Recent Sales Start */}
            <div className="container-fluid pt-4 px-4">
              <div className="bg-light text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Employee Details List</h6>
                  <a href>Show All</a>
                </div>
                <div className="table-responsive">
                <table className="table table-bordered table-sm table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company Name</th>
              <th scope="col">Date of Join</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Alternative Number</th>
              <th scope="col">Course</th>
              <th scope="col">Tech Skills</th>
              <th scope="col">Skills Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp) => (
              <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.empName}</td>
                <td>{emp.empEmail}</td>
                <td>{emp.empCompanyName}</td>
                <td>{emp.empDateJoing}</td>
                <td>{emp.empAddress}</td>
                <td>{emp.empGender}</td>
                <td>{emp.empDateofBirth}</td>
                <td>{emp.empMobileNumber}</td>
                <td>{emp.empAlterMoNum}</td>
                <td>{emp.empCourse}</td>
                <td>{emp.empTechSkill}</td>
                <td>{emp.skillRating}</td>
                <td>
                  <Link to={`/Edit/${emp.id}`} className="btn btn-outline-primary mx-2">
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    className="btn btn-danger mx-2"
                    onClick={() => removeEmp(emp.id)}
                    aria-label="delete"
                    style={{ backgroundColor: 'red' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
                </div>
              </div>
            </div>
            {/* Recent Sales End */}
            {/* Widgets Start */}
            <div className="container-fluid pt-4 px-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-6 col-xl-4">
                  <div className="h-100 bg-light rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="mb-0">Messages</h6>
                      <a href>Show All</a>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-3">
                      <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-0">Jhon Doe</h6>
                          <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-3">
                      <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-0">Jhon Doe</h6>
                          <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-3">
                      <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-0">Jhon Doe</h6>
                          <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-0">Jhon Doe</h6>
                          <small>15 minutes ago</small>
                        </div>
                        <span>Short message goes here...</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                  <div className="h-100 bg-light rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h6 className="mb-0">Calender</h6>
                      <a href>Show All</a>
                    </div>
                    <div id="calender" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-4">
                  <div className="h-100 bg-light rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h6 className="mb-0">To Do List</h6>
                      <a href>Show All</a>
                    </div>
                    <div className="d-flex mb-2">
                      <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
                      <button type="button" className="btn btn-primary ms-2">Add</button>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-2">
                      <input className="form-check-input m-0" type="checkbox" />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <span>Short task goes here...</span>
                          <button className="btn btn-sm"><i className="fa fa-times" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-2">
                      <input className="form-check-input m-0" type="checkbox" />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <span>Short task goes here...</span>
                          <button className="btn btn-sm"><i className="fa fa-times" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-2">
                      <input className="form-check-input m-0" type="checkbox" defaultChecked />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <span><del>Short task goes here...</del></span>
                          <button className="btn btn-sm text-primary"><i className="fa fa-times" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center border-bottom py-2">
                      <input className="form-check-input m-0" type="checkbox" />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <span>Short task goes here...</span>
                          <button className="btn btn-sm"><i className="fa fa-times" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-2">
                      <input className="form-check-input m-0" type="checkbox" />
                      <div className="w-100 ms-3">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <span>Short task goes here...</span>
                          <button className="btn btn-sm"><i className="fa fa-times" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Widgets End */}
            {/* Footer Start */}
            <div className="container-fluid pt-4 px-4">
              <div className="bg-light rounded-top p-4">
                <div className="row">
                  <div className="col-12 col-sm-6 text-center text-sm-start">
                    © <a href="#">Human Resource Management</a>, All Right Reserved. 
                  </div>
                  
                </div>
              </div>
            </div>
            {/* Footer End */}
          </div>
          {/* Content End */}
          {/* Back to Top */}
          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
        </div>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}
      </div>
    </div>

  )
}

export default Dashboard