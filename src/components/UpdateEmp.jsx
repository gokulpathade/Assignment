// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const baseURL = "http://localhost:8080/api";
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    empName: "",
    empEmail: "",
    empCompanyName: "",
    empDateJoing: "",
    empAddress: "",
    empGender: "",
    empDateofBirth: "",
    empMobileNumber: "",
    empAlterMoNum: "",
    empCourse: "",
    empTechSkill: "",
    skillRating: "",
  });

  const fetchEmployeeData = () => {
    axios
      .get(baseURL + "/EmpById/" + id)
      .then((response) => {
        //  console.log(response)
        setEmployee(response.data);
      })
      .catch((error) => {
        alert("Something went wrong: " + error);
      });
  };
  const handleChange = (event) => {
    const {empName, value } = event.target;
    setEmployee((prevEmployee) => ({
      prevEmployee,
      [empName]: value,
    }));
  };
  

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const submitActionHandler = (event) => {
    event.preventDefault();
  
    axios
      .put(baseURL + "/UpdateEmployee/" +id,
    //  { empName:"" ,
    //   empEmail:"",
    //   empCompanyName:"",
    //   empDateJoing:"",
    //   empAddress: "",
    //   empGender: "",
    //   empDateofBirth: "",
    //   empMobileNumber: "",
    //   empAlterMoNum: "",
    //   empCourse: "",
    //   empTechSkill: "",
    //   skillRating: "" }
    )
      .then((response) => {
        alert("Employee data updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };
  

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <form
          className="form-horizontal"
          role="form"
          onSubmit={submitActionHandler}
        >
          <h2>EDIT DETAILS </h2>
          <div className="form-group">
            <label htmlFor="firstName" className="col-sm-3 control-label">
              Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="Name"
                placeholder="Enter Your Full Name"
                className="form-control"
                name="empName"
                value={employee.empName}
                onChange={handleChange}
             
                required
              />
            </div>
          </div>
          {/* Other form fields */}
          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label">
              Email*{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                name="email"
                value={employee.empEmail}
                onChange={handleChange} //emailhandleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ComapanyName" className="col-sm-3 control-label">
              Company Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="ComapanyName"
                placeholder="Comapany Name"
                className="form-control"
                value={employee.empCompanyName}
                onChange={handleChange} //companynamehandleChange}
                required
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="birthDate" className="col-sm-3 control-label">
              Date of Joing*
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                id="birthDate"
                className="form-control"
                value={employee.empDateJoing}
                onChange={handleChange} //dojhandleChange}
              />
            </div>
          </div>
          {/* <div className="form-group"> */}
          {/* <label htmlFor="password" className="col-sm-3 control-label">Password*</label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="password" id="password" placeholder="Password" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="form-group"> */}
          {/* <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="password" id="password" placeholder="Password" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          <div className="form-group">
            <label htmlFor="Address" className="col-sm-3 control-label">
              Address
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="Address"
                placeholder="Address"
                className="form-control"
                value={employee.empAddress}
                onChange={handleChange} //addhandleChange}
                required
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Gender</label>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      id="femaleRadio"
                      defaultValue="Female"
                      value="Female"
                      checked={employee.empGender === "Female"} // Check if empGender is "Other"
                      onChange={handleChange} //genderhandleChange}
                    />
                    Female
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      id="maleRadio"
                      defaultValue="Male"
                      value="Male"
                      checked={employee.empGender === "Male"} // Check if empGender is "Other"
                      onChange={handleChange} //genderhandleChange}
                    />
                    Male
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      id="otherRadio"
                      defaultValue="Other"
                      value="Other"
                      checked={employee.empGender === "Other"} // Check if empGender is "Other"
                      onChange={handleChange} //genderhandleChange}
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /.form-group */}
          <div className="form-group">
            <label htmlFor="birthDate" className="col-sm-3 control-label">
              Date of Birth*
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                id="birthDate"
                className="form-control"
                value={employee.empDateofBirth}
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="col-sm-3 control-label">
              Phone number{" "}
            </label>
            <div className="col-sm-9">
              <input
                min={10}
                max={12}
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                value={employee.empMobileNumber}
                onChange={handleChange} //mobilehandleChange}
                className="form-control"
                required
              />
              {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="AlterphoneNumber"
              className="col-sm-3 control-label"
            >
              Alternative Phone number{" "}
            </label>
            <div className="col-sm-9">
              <input
                min={10}
                max={12}
                type="AlterphoneNumber"
                id="AlterphoneNumber"
                placeholder="Alternative Phone number"
                className="form-control"
                value={employee.empAlterMoNum}
                onChange={handleChange} //alternativehandleChange}
              />
              {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Course" className="col-sm-3 control-label">
              Course
            </label>
            <div className="col-sm-9">
              <label> </label>
              <select
                className="col-sm-9"
                value={employee.empCourse}
                onChange={handleChange} //coursehandleChange}
              >
                <option value="Course">Course</option>
                <option value="BCA   ">BCA </option>
                <option value="BBA   ">BBA </option>
                <option value="B.Tech">B.Tech</option>
                <option value="MBA   ">MBA </option>
                <option value="MCA   ">MCA </option>
                <option value="M.Tech">M.Tech</option>
              </select>
            </div>{" "}
            {/* <div className="col-sm-9"> */}
            {/* <input */}
            {/* // //  type="text" */}
            {/* // //  id="Course" */}
            {/* // //  placeholder="Course" */}
            {/* // //  className="form-control" */}
            {/* // //  autofocus */}
            {/* // //  /> */}
            {/* //  </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="technicalskill" className="col-sm-3 control-label">
              Technical Skills
            </label>
            <div className="col-sm-9">
              {/* <label className="reglabel">Tech Skill :</label> */}
              <select
                className="col-sm-9"
                value={employee.empTechSkill}
                onChange={handleChange} //techskillhandleChange}
                required
              >
                <option value="TechnicalSkills">Technical Skills</option>
                <option value="Java    ">Java </option>
                <option value="Python  ">Python </option>
                <option value="C       ">C </option>
                <option value="CPP     ">CPP </option>
                <option value="React.js">React.js </option>
                <option value="Node.js ">Node.js </option>
              </select>
              </div>{" "}
              {/* <div className="col-sm-9"> */}
              {/* <input */}
              {/* //  type="text" */}
              {/* //  id="technicalskill" */}
              {/* //  placeholder="technicalskill" */}
              {/* //  className="form-control" */}
              {/* //  autofocus */}
              {/* //  /> */}
              {/* </div> */}
            </div>
            <div className="form-group">
              <label
                htmlFor="TechnicalSkillRating"
                className="col-sm-3 control-label"
              >
                Technical Skills rating
              </label>
              <div className="col-sm-9">
                <select
                  className="col-sm-9"
                  value={employee.skillRating}
                  onChange={handleChange} //skillratinghandleChange}
                  required
                >
                  <option value="Skillrating">Skill Rating </option>
                  <option value="1"> 1</option>
                  <option value="2">2 </option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 </option>
                  {/* <option value="empCourse">12345 </option> */}
                  {/* <option value="empCourse">5 </option> */}
                </select>
              </div>{" "}
            </div>
          {/* </div> */}
          {/* <div className="form-group"> */}
          {/* <label htmlFor="Height" className="col-sm-3 control-label">Height* </label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="number" id="height" placeholder="Please write your height in centimetres" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="form-group"> */}
          {/* <label htmlFor="weight" className="col-sm-3 control-label">Weight* </label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="number" id="weight" placeholder="Please write your weight in kilograms" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          {/* ... */}
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3 ">
              {/* <span className="help-block">*Required fields</span> */}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mx-3 shadow-2">
            Update
          </button>
          <button
            type="reset"
            onClick={cancelHandler}
            className="btn btn-danger mx-3 shadow"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;






















































////////////////////////////////////////home


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Dashboard from "./Dashboard";

export default function Home() {
  const [employee, setEmployee] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  


  const navigate = useNavigate();
  const baseURL = "http://localhost:8080/api";




  const SetEmployeeData = () => {
    axios
      .get(baseURL + "/EmpList", {
      params: {
        page: currentPage,
        search: searchTerm
      }
    })
      .then((response) => {
        setEmployee(response.data.results);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        alert("Something went wrong" + error);
      });
  };

  useEffect(() => {
    SetEmployeeData();
  }, []);

  const removeEmp = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete Employee?");
    if (confirmed) {
      axios
        .delete(baseURL + "/DeleteEmployee/" + id)
        .then((response) => {
          alert("Employee Id " + id + " " + employee.empName +  " deleted successfully !!!");
          SetEmployeeData();
        })
        .catch((error) => {
          alert("Error occurred while removing Employee: " + error);
        });
    }
  };
  
  return (
    <div className="contai">
      <div className="py-1">
       <h1 className="h1">Welcome to the HRMS</h1> 
       <input
  type="text"
  placeholder="Search Employee..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
<Button variant="contained" onClick={() => SetEmployeeData()}>
  Search
</Button>
        <table className="table table-bordered table-sm table-striped">
     

          <thead className="table-dark">
            <tr >
              <th scope="col"> Id</th>
              <th scope="col"> Name</th>
              <th scope="col"> Email</th>
              <th scope="col"> Company Name</th>
              <th scope="col"> Date of Join</th>
              <th scope="col"> Address</th>
              <th scope="col"> Gender</th>
              <th scope="col"> Date Of Birth</th>
              <th scope="col"> Mobile Number </th>
              <th scope="col"> Alternative Number </th>
              <th scope="col"> Course</th>
              <th scope="col"> Tech Skills</th>
              <th scope="col"> Skills Rating</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.empName}</td>
                <td>{employee.empEmail}</td>
                <td>{employee.empCompanyName}</td>
                <td>{employee.empDateJoing}</td>
                <td>{employee.empAddress}</td>
                <td>{employee.empGender}</td>
                <td>{employee.empDateofBirth}</td>
                <td>{employee.empMobileNumber}</td>
                <td>{employee.empAlterMoNum}</td>
                <td>{employee.empCourse}</td>
                <td>{employee.empTechSkill}</td>
                <td>{employee.skillRating}</td>
                <td>
                  {/* <Link
                    to={`/Edit/${employee.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link> */}
                  {/* <Button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => removeEmp(employee.id)}
                    variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button> */}
                   <Link to={`/Edit/${employee.id}`} className="btn btn-outline-primary mx-2">
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton
        className="btn btn-danger mx-2"
        onclick="alert('Are you sure you want to Delete Employee ')"
        onClick={() => removeEmp(employee.id)}
        aria-label="delete"
        style={{ backgroundColor: 'red' }}
        // onclick="alert('Hello world!')"
        >
        <DeleteIcon />
      </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
  Prev
</Button>
<Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
  Next
</Button>
     
     
     
      </div>
    </div>
  );
}
































////////////////////////////////////////////////////////////////////////////////////////////////////
333333333333333333333333##################################################################
Dashboard







import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";

import LoginIcon from "@mui/icons-material/Login";
import Navbar from "./Navbar";
import { useAppStore } from "../appStore";
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  // USE FOR THE DRAWER OPEN AND CLOSE 
  const setOpen =useAppStore((state)=>state.updateOpen);
  const open =useAppStore((state)=>state.dopen);
  



















  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
<div>
<Navbar/>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" onClick={() => setOpen(!open)} open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>


        <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            component={Link} // Use Link component to handle navigation
            to="/Profile/:id"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href="/Profile.jsx"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Profile Details "
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>




        <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            component={Link} // Use Link component to handle navigation
            to="/Edit"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href="/Edit/:id"
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Update Details"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>











          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/Home")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Employee Details "
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/AddEmployee")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Employee "
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/AboutUs")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/Contact")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            //  key={text}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/Login")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <LoginIcon />
              </ListItemIcon>
              <ListItemText
                primary="Login"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography paragraph>
        <h1>WELCOME TO THE HRMS</h1>
        </Typography>
      </Box>
    </Box>
</div>
    
  );
}
