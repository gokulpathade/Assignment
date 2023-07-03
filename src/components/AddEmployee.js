// import React from 'react'
import React,{ useState } from 'react'
import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 import{form, button, }






export default function AddEmployee() {

//
    const baseURL="http://localhost:8080/api/addEmp"; 
    const navigate = useNavigate();
    const [empName ,    setEmpName]    =useState("");
    const [empEmail       , setEmpEmail          ]=useState("");
    const [empCompanyName , setEmpCompanyName    ]=useState("");
    const [empDateJoing   , setEmpDateJoing      ]=useState("");
    const [empAddress     , setEmpAddress        ]=useState("");
    const [empGender      , setEmpGender         ]=useState("");
    const [empDateofBirth , setEmpDateofBirth    ]=useState("");
    const [empMobileNumber, setEmpMobileNumber   ]=useState("");
    const [empAlterMoNum  , setEmpAlterMoNum     ]=useState("");
    const [empCourse      , setEmpCourse         ]=useState("");
    const [empTechSkill   , setEmpTechSkill      ]=useState("");
    const [skillRating    , setEmpSkillRating    ]=useState("");



const nameChangeHandler =(event)=>{
  setEmpName(event.target.value);
}

const emailChangeHandler=(event)=>{
  setEmpEmail       (event.target.value);
}
const companynameChangeHandler=(event)=>{
  setEmpCompanyName  (event.target.value);         
}
const dojChangeHandler=(event)=>{setEmpDateJoing    (event.target.value);}
const addChangeHandler=(event)=>{
  setEmpAddress      (event.target.value);
}
const genderChangeHandler=(event)=>{
setEmpGender       (event.target.value);
}
const dobChangeHandler=(event)=>{
  setEmpDateofBirth  (event.target.value);
}
const mobileChangeHandler=(event)=>{
  setEmpMobileNumber (event.target.value);
}
const alternativeChangeHandler=(event)=>{
  setEmpAlterMoNum   (event.target.value);
}
const courseChangeHandler=(event)=>{
  setEmpCourse       (event.target.value);
}
const techskillChangeHandler=(event)=>{
  setEmpTechSkill    (event.target.value);

}
const skillratingChangeHandler=(event)=>{
  setEmpSkillRating  (event.target.value);
}
// const ChangeHandler=(event)=>{}



const submitActionHandler =(event)=>{
  event.preventDefault();
  axios 
.post(baseURL, {
        empName  :  empName ,
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
        skillRating: skillRating
                });
         };









// 






// 
  //  const[employee, setEmployee]=useState({
    // empName:"",   
    // empEmail:"",
    // empCompanyName:"",
    // empDateJoing:"",
    // empAddress:"",
    // empGender:"",
    // empDateofBirth:"",
    // empMobileNumber:"",
    // empAlterMoNum:"",
    // empCourse:"",
    // empTechSkill:"",
    // skillRating:"" 
  // })
//  
  // const {empName, empEmail, empCompanyName, empDateJoing, empAddress, empGender, empDateofBirth, empMobileNumber, empAlterMoNum  ,
// empCourse, empTechSkill, skillRating    
  // } =employee;
//  
//  
 
//  Add new employee details here
//  const;=(e)=>{
//  setEmployee({...employee, [e.target.empName]: e.target.value });
//  };
// 
 
// send data to api through form registration
// const onSubmit = async (e)=>{
  //  for url use this privent method when we click on submit then url going long path url 
  // so prevent is use able to minimize the wierd url 
  // e.preventDefault();   
// await axios.post("http://localhost:8080/api/addEmp",employee)
//  navigate("/")
// 
// }
// 


return (
   <div className='col-md-6 offset-md-3 border roundes p-4 mt-2 shoadow'>
    {/* <title>HRMS PROJECT</title> */}
    {/* <link rel="stylesheet" href="style.css" /> */}
    {/* <meta charSet="utf-8" /> */}
    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" /> */}
    {/*  */}
    {/* // empName   :" ", */}
    {/* // empEmail       :" ", */}
    {/* // empCompanyName :" ", */}
    {/* // empDateJoing   :" ", */}
    {/* // empAddress     :" ", */}
    {/* // empGender      :" ", */}
    {/* // empDateofBirth :" ", */}
    {/* // empMobileNumber:" ", */}
    {/* // empAlterMoNum  :" ", */}
    {/* // empCourse      :" ", */}
    {/* // empTechSkill   :" ", */}
    {/* // skillRating    :" "  */}
    {/* =employee; */}
    {/*  */}
    <div id="divregisterform">
      <center>
        <form onSubmit={submitActionHandler} action="/AddEmp.java"  post>
          <div>
            <h1> Employee Registeration Form</h1><br />
            <label className="reglabel">  Name : </label>
            <input type="text" name="fullname" 
            placeholder="Full Name"
            value={empName}
            onChange={nameChangeHandler}
             required />
            {/* <label> Middlename: </label>    */}
            {/* <input type="text" name="middlename" placeholder="Middlename" size="15" required />    */}
            {/* <label> Lastname: </label>     */}
            {/* <input type="text" name="lastname" placeholder="Lastname" size="15"required />    */}
            {/* <div>   */}
            <br />
            <label className="reglabel" htmlFor="email"><b>Email :</b></label>
            <input type="text" placeholder="Enter Email" 
            name="email" required 
            value={empEmail}
            onChange={emailChangeHandler}
            /> <br />
            <label className="reglabel">Company Name : </label>
            <input type="text" name="Companyname" 
            placeholder="Company name" 
            value={empCompanyName}
            onChange={companynameChangeHandler}
            /><br />
            <div>
              <label className="reglabel" htmlFor="dateofjoing">Date Of Joing :</label>
              <input type="date" id="birthday" 
            name="birthday"
            value={empDateJoing}
            onChange={dojChangeHandler}
            /><br />
            </div>
            <label className="reglabel"> Current Address : </label>
            <input type="text" name="Current Address" 
            placeholder="Carrent Address"
            value={empAddress} 
            onChange={addChangeHandler}
            /><br />
            
            <div>
              <label className="reglabel">
                Gender :
              </label>
              <input type="radio" 
              defaultValue="Male" name="gender" 
              defaultChecked 
              value={empGender}
              onChange={genderChangeHandler}
              /> Male
              <input type="radio" 
              defaultValue="Female" 
              name="gender" value={empGender}
              onChange={nameChangeHandler}
              /> Female
              <input type="radio"
               defaultValue="Other"
                name="gender" 
                value={empGender}
                onChange={genderChangeHandler}
                /> Other
            </div> <br />
            <label lass="reglabel" htmlFor="birthday">Date of Birth :</label>
            <input type="date" id="birthday" 
            name="birthday"
            value={empDateofBirth}
            onChange={dobChangeHandler}
             /><br />
            <label className="reglabel">
              Phone :
            </label>
            <input type="number" name="MobileNumber" 
            placeholder="Mobile Number"
             defaultValue={+91} size={13} 
            value={empMobileNumber} 
            onChange={mobileChangeHandler}
            /> 
            {/* <input type="text" name="phone" placeholder="phone no." size="10" required>   */}
            <br />
            <label className="reglabel">
              Alternative Phone :
            </label>
            <input type="number" name="OtherNumber" 
            placeholder="Other Mobile" 
            defaultValue={+91} size={10}
            value={empAlterMoNum} 
            onChange={alternativeChangeHandler}
            /> 

            {/* <input type="text" name="phone" placeholder="phone no." size="10" required>   */}
            <br />
            <div>
              <label className="reglabel">
                Course :
              </label>
              <select value={empCourse}
          onChange={courseChangeHandler}>
                <option value="Course">Course</option>
                <option value="empCourse"  >BCA</option>
                <option value="empCourse">BBA</option>
                <option value="empCourse">B.Tech</option>
                <option value="empCourse">MBA</option>
                <option value="empCourse">MCA</option>
                <option value="empCourse">M.Tech</option>
              </select>
            </div> <br />
            <div>
              <label className="reglabel">
                Tech Skill :
              </label>
              <select value={empTechSkill}
            onChange={techskillChangeHandler}>
                <option value="TechnicalSkills">Technical Skills</option>
                <option value="empTechSkill">Java</option>
                <option value="empTechSkill">Python</option>
                <option value="empTechSkill">C</option>
                <option value="empTechSkill">CPP</option>
                <option value="empTechSkill">React.js</option>
                <option value="empTechSkill">Node.js</option>
              </select>
            </div> <br />
            <label className="reglabel">
              Tech Skill Rating :
            </label>
            <select value={skillRating} 
          onChange={skillratingChangeHandler} >
              <option value="TechnicalSkills Rating">Technical Skills Rating </option>
              <option value="skillRating">1</option>
              <option value="skillRating">2</option>
              <option value="skillRating">3</option>
              <option value="skillRating">4</option>
              <option value="skillRating">5</option>
              {/* <option value="Node.js">Node.js</option>   */}
            </select>
            <br />
            <br />
            {/* <label> Company Address :  </label> */}
            {/* <textarea cols="80" rows="1" placeholder="Current Address" value="address" required>   */}
            {/* </textarea><br>   */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/* <label class="lab1" for="lname">Email:</label> */}
            {/* <input type="Email" id="Email" placeholder="Email" required ><br> */}
            {/* <label for="email"><b>Email</b></label>   */}
            {/* <input type="text" placeholder="Enter Email" name="email" required>  <br> */}
            {/* <label for="psw"><b>Password</b></label>   */}
            {/* <input type="password" placeholder="Enter Password" name="psw" required>   */}
            {/*  */}
            {/* <label for="psw-repeat"><b>Re-type Password</b></label>   */}
            {/* <input type="password" placeholder="Retype Password" name="psw-repeat" required>   */}
            <center> <button type="submit"  className="btn btn-outline-primary mx-2">  Register   </button>
              <button type="submit" className="btn btn-outline-primary mx-2">  Login  </button>
            </center>
          </div></form></center>
    </div>
  </div>
);




















































}




//     <div>
//      {/* <h1>Employeee Add Details Here </h1> */}
//     <form onSubmit={(e)=>onSubmit(e)}>
//      <section className="h-100 bg-dark shadow">
//   <div className="container py-5 h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col">
//         <div className="card card-registration my-4">
          
//           <div className="row g-0">
            
//             <div className="col-xl-6 d-none d-xl-block">
//               <img
//                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
//                 alt="Sample photo"
//                 className="img-fluid"
//                 style={{
//                   borderTopLeftRadius: ".25rem",
//                   borderBottomLeftRadius: ".30rem"
//                 }}
//               />
//             </div>










            
//             <div className="col-xl-6">
//               <div className="card-body p-md-5 text-black">
//                 <h3 className="mb-5 text-uppercase">
//                   Employee registration form
//                 </h3>
                
//                 <div className="row">
//                   <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       <input
//                         type="text"
                        // id="form3Example1m"
                        // className="form-control form-control-lg"
                        // value={empName}
                        // ;

//                       />
//                       <label className="form-label" htmlFor="form3Example97">
//                          Name
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       {/* <input
//                         type="text"
//                         id="form3Example1n"
//                         className="form-control form-control-lg"
//                       />
//                       <label className="form-label" htmlFor="form3Example1n">
//                         Last name
//               </label> */}
//                     </div>
//                   </div>
//                 </div>


//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example97"
//                     className="form-control form-control-lg"
//                     // value={empEmail}
//                     //;
//                   />
//                   <label className="form-label" htmlFor="form3Example97">
//                     E-mail ID
//                   </label>
//                 </div>









//                 <div className="row">
//                   <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="form3Example1m1"
//                         className="form-control form-control-lg"
//                         // value={empCompanyName}
//                         //;
//                       />
//                       <label className="form-label" htmlFor="form3Example1m1">
//                       Company Name
//                       </label>
//                     </div>
//                   </div>



//                   <div className="form-outline mb-4">
//                   <input
//                     type="number"
//                     id="form3Example9"
//                     className="form-control form-control-lg"
//                     // value={empDateJoing}
//                     //;

//                   />
//                   <label className="form-label" htmlFor="form3Example9">
//                     Date Of Joing
//                   </label>
//                 </div>





//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example8"
//                     className="form-control form-control-lg"
//                     // value={empAddress}
//                     //;

//                   />
//                   <label className="form-label" htmlFor="form3Example8">
//                     Address
//                   </label>
//                 </div>






//                 <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
//                   <h6 className="mb-0 me-4">Gender: </h6>
//                   <div className="form-check form-check-inline mb-0 me-4">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="inlineRadioOptions"
//                       id="femaleGender"
//                       defaultValue="option1"
//                       // value={empGender}
//                       //;

//                     />
//                     <label className="form-check-label" htmlFor="femaleGender">
//                       Female
//                     </label>
//                   </div>



//                   <div className="form-check form-check-inline mb-0 me-4">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="inlineRadioOptions"
//                       id="maleGender"
//                       defaultValue="option2"
//                       // value={empGender}
//                       //;

//                     />
//                     <label className="form-check-label" htmlFor="maleGender">
//                       Male
//                     </label>
//                   </div>


//                   <div className="form-check form-check-inline mb-0">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="inlineRadioOptions"
//                       id="otherGender"
//                       defaultValue="option3"
//                       // value={empGender}
//                       //;

//                     />
//                     <label className="form-check-label" htmlFor="otherGender">
//                       Other
//                     </label>
//                   </div>
//                 </div>



                
//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example9"
//                     className="form-control form-control-lg"
//                     // value={empDateofBirth}
//                     //;

//                   />
//                   <label className="form-label" htmlFor="form3Example9">
//                     Date Of Birth
//                   </label>
//                 </div>








//                   <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="form3Example1n1"
//                         className="form-control form-control-lg"
//                         // value={empMobileNumber}
//                         //;

//                       />
//                       <label className="form-label" htmlFor="form3Example1n1">
//                         Mobile Number
//                       </label>
//                     </div>
//                   </div>
//                 </div>

                
//                 <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="form3Example1n1"
//                         className="form-control form-control-lg"
//                         value={empAlterMoNum}
//                      a

//                       />
//                       <label className="form-label" htmlFor="form3Example1n1">
//                         Alternative Mobile Number
//                       </label>
//                     </div>
//                   </div>
//                 {/* </div> */}
               
               
                
// {/*                   
//                 <div className="row">
//                   <div className="col-md-6 mb-4">
//                     <select className="select">
//                       <option value={1}>State</option>
//                       <option value={2}>Option 1</option>
//                       <option value={3}>Option 2</option>
//                       <option value={4}>Option 3</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 mb-4">
//                     <select className="select">
//                       <option value={1}>City</option>
//                       <option value={2}>Option 1</option>
//                       <option value={3}>Option 2</option>
//                       <option value={4}>Option 3</option>
//                     </select>
//                   </div>
//                 </div> */}




// {/*                
//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example90"
//                     className="form-control form-control-lg"
//                   />
//                   <label className="form-label" htmlFor="form3Example90">
//                     Pincode
//                   </label>
//                 </div> */}





//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example99"
//                     className="form-control form-control-lg"
//                     // value={empCourse}
//                     //;

//                   />
//                   <label className="form-label" htmlFor="form3Example99">
//                     Course
//                   </label>
//                 </div>




//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example99"
//                     className="form-control form-control-lg"
//                     // value={empTechSkill}
//                     //;

//                   />
//                   <label className="form-label" htmlFor="form3Example99">
//                     Technical Skill / IT Skill
//                   </label>
//                 </div>




//                 <div className="form-outline mb-4">
//                   <input
//                     type="text"
//                     id="form3Example90"
//                     className="form-control form-control-lg"
//                     // value={skillRating}
//                     //;

//                   />
//                   <label className="form-label" htmlFor="form3Example90">
//                    Skill rating in number Out of 5
//                   </label>
//                 </div> 





                                                
                





//                 <div className="d-flex justify-content-end pt-3">
//                   <button type="button" className="btn btn-danger btn-danger">
//                     Cancel
//                   </button>
//                   <button type="button" className="btn btn-warning btn-lg ms-2">
//                     Submit 
//                   </button>
//                 </div>
//               </div>










//             </div>
            
//           </div>
//         </div>
        
//       </div>
      
//     </div>
    
//   </div>
// </section>
// </form>








//     </div>

