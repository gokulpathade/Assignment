import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateEmp() {
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
    skillRating: ""
  });

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    axios
      .get(baseURL + "/getEmpById/" + id)
      .then((response) => {
      //  console.log(response)
         setEmployee(response.data);
      })
      .catch((error) => {
        alert("Something went wrong: " + error);
      });
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    const updatedEmployeeData = { ...employee };

    axios
      .put(baseURL + "/updateEmp/" + id, updatedEmployeeData)
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
                name="empName"
                value={employee.empName}
                onChange={handleChange}
                autoFocus
                required
              />
            </div>
          </div>
          {/* Other form fields */}

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
              value={employee.empEmail}
             onChange={handleChange}//emailhandleChange}
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
              value={employee.empCompanyName}
             onChange={handleChange}//companynamehandleChange}
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
             onChange={handleChange}//dojhandleChange}
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
             onChange={handleChange}//addhandleChange}
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
       onChange={handleChange}//genderhandleChange}





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
                  onChange={handleChange}//genderhandleChange}


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
                 onChange={handleChange}//genderhandleChange}
                  
                  
                  
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
             onChange={handleChange}//dobhandleChange}

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
             onChange={handleChange}//mobilehandleChange}
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
             onChange={handleChange}//alternativehandleChange}
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
             onChange={handleChange}//coursehandleChange}
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
        <label className="reglabel">Tech Skill :</label>
            <select
              className="col-sm-9"
              value={employee.empTechSkill}
             onChange={handleChange}//techskillhandleChange}
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
          {/* </div>{" "} */} 
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
             onChange={handleChange}//skillratinghandleChange}
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
       
          {/* ... */}
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              {/* <span className="help-block">*Required fields</span> */}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mx-3">
            Update
          </button>
          <button
            type="reset"
            onClick={cancelHandler}
            className="btn btn-danger mx-3"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmp;
