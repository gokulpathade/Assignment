import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  const [employee, setEmployee] = useState([]);
  // const navigate = useNavigate();
  const baseURL = "http://localhost:8080/api/";

  // fetch Employee Data Here From Api
  // const SetEmployeeData=()=>{
  // axios.get(baseURL+"/getEmp").then((response)=>{
  // setEmployee(response.data);
  // }).catch(error=>{ alert("somethings wrong"+error);
  // });
  //
  // }

  // load Employee Data Here From Api
  useEffect(() => {
    setEmplo();
    // setEmployee();
  }, []);

  //
  //
  // const removeEmp=(id)=>{
  // axios.delete(baseURL+"/deleteEmp/"+ id).then((response)=>{
  // alert("employee data"+ id +"deleted successfully !!!");
  // setEmployee();
  // navigate("/home")
  // }).catch(error =>{
  // alert("error ocurred in remove Employee:"+error);
  // });
  //
  // }
  //

  //
  // fetch Employee Data Here From Api
  const setEmplo = async () => {
    const baseURL = await axios.get("http://localhost:8080/api/getEmp");
    setEmployee(baseURL.data);
  };
  //
  return (
    <div className="container">
      <div className="py-1">
        {/* <table className="table table-light shadow border-5"> */}
        <table class="table table-bordered table-dark shadow">
          <thead>
            <tr>
              {/* <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">AlterPho</th>
      <th scope="col">date</th>
      <th scope="col">Handle</th>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      
      
      
      
       "id": 1,
        "empName": "gokul",
        "empEmail": "gokuldaspathade@gmail.com",
        "empCompanyName": "MEGnext",
        "empDateJoing": "2023-04-10T18:30:00.000+00:00",
        "empAddress": "Pune",
        "empGender": "Male",
        "empDateofBirth": "1998-01-10T18:30:00.000+00:00",
        "empMobileNumber": 8830438878,
        "empAlterMoNum": 9011438878,
        "empCourse": "java",
        "empTechSkill": "python",
        "skillRating": 5
      
      
      
      */}
              <th scope="col"> Id</th>
              {/* <th scope="col"> Id</th> */}
              {/* <th scope="col"> Id</th> */}
              <th scope="col"> Name</th>
              <th scope="col"> Email</th>
              <th scope="col"> Company Name</th>
              <th scope="col"> Date of Join</th>
              <th scope="col"> Address</th>
              {/* <th scope="col"> Date of Join</th> */}
              <th scope="col"> Gender</th>

              <th scope="col"> Date Of Birth</th>
              <th scope="col">Mobile </th>
              <th scope="col"> Alternative Mobile </th>
              {/* <th scope="col"> Gender</th> */}
              <th scope="col"> Course</th>
              {/* <th scope="col"> Date Of Birth  </th> */}

              {/* <th scope="col">Alternative Mobile </th> */}
              <th scope="col"> Tech Skills</th>
              <th scope="col">Skills Rating</th>
              <th scope="col">Crud Action</th>
            </tr>
          </thead>
          <tbody>
            {/* here we create new user  */}
            {employee.map((employee, emp) => (
              <tr>
                <th scope="row" key={emp}>
                  {emp + 1}
                </th>
                {/* <th scope="row"key={emp}>{}</th> */}
                {/* <td>{employee.id}</td> */}
                {/* <td>{employee.id}</td>     */}
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
                  <button type="button" class="btn btn-outline-primary">
                    Update
                  </button>
                  {/* <button type="button" class="btn btn-outline-secondary">Secondary</button> */}
                  {/* <button type="button" href="./AddEmployee.js" class="btn btn-outline-success"> */}
                  {/* Add */}
                  {/* </button> */}
                  <button type="button" class="btn btn-outline-danger">
                    Delete
                  </button>
                  {/* <button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button> */}
                </td>
              </tr>
            ))}
            {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
