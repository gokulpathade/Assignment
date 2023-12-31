import { useEffect, useState } from 'react';
// import React{useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UpdateEmp() {


    const [employee, setEmployee] = useState([]);

    const baseURL = "http://localhost:8080/api";
    const navigate = useNavigate();
    const [empName, setEmpName] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empCompanyName, setEmpCompanyName] = useState("");
    const [empDateJoing, setEmpDateJoing] = useState("");
    const [empAddress, setEmpAddress] = useState("");
    const [empGender, setEmpGender] = useState("");
    const [empDateofBirth, setEmpDateofBirth] = useState("");
    const [empMobileNumber, setEmpMobileNumber] = useState("");
    const [empAlterMoNum, setEmpAlterMoNum] = useState("");
    const [empCourse, setEmpCourse] = useState("");
    const [empTechSkill, setEmpTechSkill] = useState("");
    const [skillRating, setEmpSkillRating] = useState("");
  


    const SetEmployeeData=()=>{
        axios.get(baseURL+"/updateEmp/").then((response)=>{
        setEmployee(response.data);
        }).catch(error=>{ alert("somethings wrong"+error);
        });
        
        }

    useEffect(() => {
            SetEmployeeData()
            // setEmplo();
            // setEmployee();
          }, []);



    const updateEmp = (id) => {
        axios
          .put(baseURL + "/updateEmp/" + id)  // Assuming you want to send 
          .then((response) => {
            navigate("/AddEmployee.js");
          })
          .catch((error) => {
            alert("Error occurred while updating employee: " + error);
          });
      };
    
    



    const submitActionHandler = (event) => {
        event.preventDefault();
        axios
          .post(baseURL, {
            empName: empName,
            empEmail: empEmail,
            empCompanyName: empCompanyName,
            empDateJoing: empDateJoing,
            empAddress: empAddress,
            empGender: empGender,
            empDateofBirth: empDateofBirth,
            empMobileNumber: empMobileNumber,
            empAlterMoNum: empAlterMoNum,
            empCourse: empCourse,
            empTechSkill: empTechSkill,
            skillRating: skillRating,
          })
          .then((response) => {
            alert("Employee data added successfully!");
            cancelHandler();
            navigate("./");
          })
          .catch((error) => {
            alert("error===" + error);
          });
      };

      const cancelHandler = () => {
        setEmpName("");
        setEmpEmail("");
        setEmpCompanyName("");
        setEmpDateJoing("");
        setEmpAddress("");
        setEmpGender("");
        setEmpDateofBirth("");
        setEmpMobileNumber("");
        setEmpAlterMoNum("");
        setEmpCourse("");
        setEmpTechSkill("");
        setEmpSkillRating("");
      };




      
  const nameChangeHandler = (event) => {
    setEmpName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmpEmail(event.target.value);
    //  baseURL = "http://localhost:8080/api/addEmp";
  };
  const companynameChangeHandler = (event) => {
    setEmpCompanyName(event.target.value);
  };
  const dojChangeHandler = (event) => {
    setEmpDateJoing(event.target.value);
  };
  const addChangeHandler = (event) => {
    setEmpAddress(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setEmpGender(event.target.value);
  };
  const dobChangeHandler = (event) => {
    setEmpDateofBirth(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    setEmpMobileNumber(event.target.value);
  };

  const alternativeChangeHandler = (event) => {
    setEmpAlterMoNum(event.target.value);
  };
  const courseChangeHandler = (event) => {
    setEmpCourse(event.target.value);
  };
  const techskillChangeHandler = (event) => {
    setEmpTechSkill(event.target.value);
  };
  const skillratingChangeHandler = (event) => {
    setEmpSkillRating(event.target.value);
  };



  return (
   
    <div>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    {/*---- Include the above in your HEAD tag --------*/}
    <link
      href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    {/*---- Include the above in your HEAD tag --------*/}
    <div className="container">
      <form
        className="form-horizontal"
        role="form"
        onSubmit={submitActionHandler}
        // action="/AddEmp.java"
        post
      >
        <h2>Registration</h2>
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
              value={empName}
              onChange={nameChangeHandler}
              autofocus
           required
            />
          </div>
        </div>
        {/* <div className="form-group"> */}
        {/* <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label> */}
        {/* <div className="col-sm-9"> */}
        {/* <input type="text" id="lastName" placeholder="Last Name" className="form-control" autofocus /> */}
        {/* </div> */}
        {/* </div> */}
        <div className="form-group">
          <label htmlFor="email" className="col-sm-3 control-label" >
            Email*{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
              name="email"
              value={empEmail}
              onChange={emailChangeHandler}
          required  />
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
              value={empCompanyName}
              onChange={companynameChangeHandler}
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
              value={empDateJoing}
              onChange={dojChangeHandler}
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
              value={empAddress}
              onChange={addChangeHandler}
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
        checked={empGender === "Female"} // Check if empGender is "Other"
        onChange={genderChangeHandler}
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
                   checked={empGender === "Male"} // Check if empGender is "Other"
                   onChange={genderChangeHandler}
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
                  checked={empGender === "Other"} // Check if empGender is "Other"
                  onChange={genderChangeHandler}
                  
                  
                  
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
              value={empDateofBirth}
              onChange={dobChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="col-sm-3 control-label">
            Phone number{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              value={empMobileNumber}
              onChange={mobileChangeHandler}
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
              type="AlterphoneNumber"
              id="AlterphoneNumber"
              placeholder="Alternative Phone number"
              className="form-control"
              value={empAlterMoNum}
              onChange={alternativeChangeHandler}
            />
            {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Course" className="col-sm-3 control-label">
            Course
          </label>
          <div className="col-sm-9">
            {/* <label> </label> */}
            <select
              className="col-sm-9"
              value={empCourse}
              onChange={courseChangeHandler}
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
              value={empTechSkill}
              onChange={techskillChangeHandler}
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
              value={skillRating}
              onChange={skillratingChangeHandler}
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
          {/* <div className="col-sm-9"> */}
          {/* <input */}
          {/* //  type="text" */}
          {/* //  id="TechnicalSkills" */}
          {/* //  placeholder="TechnicalSkills" */}
          {/* //  className="form-control" */}
          {/* //  autofocus */}
          {/* //  /> */}
          {/* </div> */}
        </div>
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
        <div className="form-group">
          <div className="col-sm-9 col-sm-offset-3">
            {/* <span className="help-block">*Required fields</span> */}
          </div>
        </div>
        <button type="submit"  onClick={()=>updateEmp(employee.id)} className="btn btn-primary mx-3">
          Register
        </button>
        <button
          type="rest"
          onClick={() => cancelHandler()}
          className="btn btn-danger mx-3"
        >
          Cancel
        </button>
        <button type="" className="btn btn-secondary mx-3">
          Login
        </button>
      </form>{" "}
      {/* /form */}
    </div>{" "}
    {/* ./container */}
  </div>
   
   
  )
}

export default UpdateEmp
