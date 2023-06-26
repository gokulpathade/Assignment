import React from "react";
import React, { useState } from "react";

const RegisterForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [course, setCourse] = useState("");
  const [PlatformCourse, setPlatformCourse] = useState("");
  const [skills, setSkills] = useState("");
  const [skillRating, setSkillRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, mobileNumber, email, gender, dateOfBirth, password, cpassword, course, PlatformCourse, skills, skillRating);
  };


  return (
    <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <div className="container">
          <form className="form-horizontal" role="form">
            <h2>Registration</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
              <div className="col-sm-9">
                <input
                 type="text" 
                 value={firstName} 
                 onChange={event => setfirstName(event.target.value)} 
                  id="firstName" placeholder="First Name" className="form-control" autofocus />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
              <div className="col-sm-9">
                <input 
                type="text" 
                value={firstName} 
                onChange={event => setlastName(event.target.value)} 
             id="lastName" placeholder="Last Name" className="form-control" autofocus />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Gender</label>
              <div className="col-sm-6">
                <div className="row">
                <div className="col-sm-4">
                    <label className="radio-inline">
                      <input
                      
                      value={firstName} 
                      onChange={event => setGender(event.target.value)} 
                      
                      type="radio" id="maleRadio" Value="Male" />Male
                    </label>
                  </div>
                <div className="col-sm-4">
                    <label className="radio-inline">
                      <input 
                    
                      value={firstName} 
                      onChange={event => setGender(event.target.value)} 
                       type="radio" id="femaleRadio" Value="Female" />Female
                    </label>
                  </div>
                </div>
              </div>
            </div> {/* /.form-group */}
          <div className="form-group">
              <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
              <div className="col-sm-9">
                <input type="email" 
    value={email} 
    onChange={event => setEmail(event.target.value)}
     id="email" placeholder="Email" className="form-control" name="email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
              <div className="col-sm-9">
                <input 
            
                value={password} 
                onChange={event => password(event.target.value)} 
                type="password" id="password" placeholder="Password" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cpassword" className="col-sm-3 control-label">Confirm Password*</label>
              <div className="col-sm-9">
                <input 
                type="text" 
                value={cpassword} 
                onChange={event => cpassword(event.target.value)} 
                id="password" placeholder="Password" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
              <div className="col-sm-9">
                <input  type="date" 
                    value={dateOfBirth} 
                  onChange={event => setDateOfBirth(event.target.value)}
                    id="birthDate" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="col-sm-3 control-label"> Mobile Number </label>
              <div className="col-sm-9">
                <input type="tel" 
                    value={mobileNumber} 
                     onChange={event => setMobileNumber(event.target.value)}
                     id="phoneNumber" placeholder="Phone number" className="form-control" />
                <span className="help-block">Your phone number won't be disclosed anywhere </span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Height" className="col-sm-3 control-label">Course </label>
              <div className="col-sm-9">
                <input type="text" 
                      value={course} 
                    onChange={event => setCourse(event.target.value)}
                        id="height" placeholder="Please write your course name" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="weight" className="col-sm-3 control-label">Platform Name  </label>
              <div className="col-sm-9">
                <input  type="text" 
    value={PlatformCourse} 
    onChange={event => setPlatformCourse(event.target.value)} 
     id="Platformcourse" placeholder="Please write your course completion platform name " className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Select Skills</label>
              <div className="col-sm-6">
            <label>
  Rate Your Skills out of 5:
</label>
                <div className="row">
                <div className="col-sm-4">
                    <label className="radio-inline">
                      <input
                      
  
                   type="number" 
                  min="0" 
                      max="5" 
                        value={skills} 
                 onChange={event => setSkills(event.target.value)}
                       id="paython" Value="python" />Python
                    </label>
                  </div>
                <div className="col-sm-4">
                    <label className="radio-inline">
                      <input 
                 type="number" 
                       min="0" 
                     max="5" 
                     value={skills} 
                    onChange={event => setSkills(event.target.value)} 
                       id="Java" Value="Java" />JAVA
                    </label>
                  </div>
                </div>
              </div>
            </div> {/* /.form-group */}




            
              
<div>
                    <label className="radio-inline">
                      <input type="checkbox" id="ccheck" defaultValue="C" />C
                     
                       </label>
                    {/*  <RatingComponent id='rating' showLabel={true} value={3} labelTemplate='<span>${value} out of 5</span>'></RatingComponent><br/>
                     */}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
          


            </form>
   </div>
</div>


  )
};

export default RegisterForm;