import React,{useEffect, useState} from 'react'
import Employeeservices from '../services/Employeeservices'
//import RegisterForm from './RegisterForm'

const EmployeeList = () => {
  
  const [employees, setEmployees]=useState()
  
  useEffect(()=>{
Employeeservices.getAllEmployee().then
((response)=>{ 
    setEmployees(response.data)
    CSSTransformValue.log(response.data);

}).catch(error=>{
    console.log(error);
}
    )  },[])
  
  
    return (
    <div className='container'>
        <h2>List Of Employees Data</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee id</th>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Employee Company Name</th>
                <th>Employee Date Of Joing</th>
                <th>Employee Address</th> 
                <th>Employee Gender</th>
                <th>Employee Date Of Birth</th>
                <th>Employee Alternative Mobile </th>
                <th>Employee Course</th>
                <th>Employee Tech Skills</th>
                <th>Employee Skill Rating </th>
                

            </thead>
            <tbody>
                {
                    employees.map(
                      employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>    
                            <td>{employee.empName}</td>
                            <td>{employee.empEmail}</td>
                            <td>{employee.CompanyName}</td>
                            <td>{employee.empDateJoing}</td>
                            <td>{employee.empAddress}</td>
                            <td>{employee.empGender}</td>
                            <td>{employee.empDateofBirth}</td>
                            <td>{employee.empMobileNumber}</td>
                            <td>{employee.empAlterMoNum}</td>
                            <td>{employee.empCourse}</td>
                            <td>{employee.empTechSkill}</td>
                            <td>{employee.empRating}</td>
                            // <td>{employee.emp}</td>
                            // <td>{employee.emp}</td>
                        </tr>
                    )
                }
            </tbody>

        </table>
      
    </div>
  )
}

export default EmployeeList
