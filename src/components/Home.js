import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {

const [employee, setEmployee]=useState([])
useEffect(()=>{
LoadEmp();
},[]); 



const LoadEmp=async () => {
    const result= await axios.get("http://localhost:8080/api/getEmp")
    setEmployee(result.data);
}

  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table table-light shadow border-5">
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
      <th scope="col">Handle</th> */}
       <th scope="col"> Id</th>
                  <th scope="col"> Id</th>
                <th scope="col"> Id</th>
                <th scope="col"> Name</th>
                <th scope="col"> Email</th>
                <th scope="col"> Company Name</th>
                <th scope="col"> Date Of Joing</th>
                <th scope="col"> Address</th> 
                <th scope="col"> Gender</th>
                <th scope="col"> Date Of Birth</th>
                <th scope="col">Mobile </th>

                <th scope="col"> Alternative Mobile </th>
                <th scope="col"> Course</th>
                <th scope="col"> Tech Skills</th>
                <th scope="col"> Skill Rating </th>
    </tr>
  </thead>
  <tbody>
    {employee.map((employee, emp)=>
    
    <tr>
      <th scope="row"key={emp}>{emp+1}</th>
      <td>{employee.id}</td>
              <td>{employee.id}</td>    
              <td>{employee.empName}</td>
              <td>{employee.empEmail}</td>
.. ..         <td>{employee.CompanyName}</td>
.. ..         <td>{employee.empDateJoing}</td>
.. ..         <td>{employee.empAddress}</td>
.. ..         <td>{employee.empGender}</td>
.. ..         <td>{employee.empDateofBirth}</td>
.. ..         <td>{employee.empMobileNumber}</td>
.. ..         <td>{employee.empAlterMoNum}</td>
.. ..         <td>{employee.empCourse}</td>
.. ..         <td>{employee.empTechSkill}</td>
.. ..         <td>{employee.empRating}</td>
    </tr>
    
    )}
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
        </div>
      
    </div>
  )
}
