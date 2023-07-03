

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  


  return (
   <div>

    <ul className="listfirst">
    <li className="lif"><a className="active" /></li> 
    <li className="lif"><a>Human Resource Management System</a></li>
    {/* <li class="lif"><a> Wecare@goldsgym.in</a></li> */}
    {/* <li><a href="#about">About</a></li> */}
  </ul>





    
<nav className="navbar navbar-expand-lg navbar-blue bg-primary">
  <a className="navbar-brand" href="/">HRMS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="btn btn-primary mx-2" to="/AddEmployee">ADD</Link>
  <button className="btn btn-primary mx-2">Update</button>
  <button className="btn btn-primary mx-2">Delete</button>
  {/* <button className="btn btn-outline-light">AddUser</button> */}





</nav>
    </div>

  )
}






// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const API_URL = 'http://localhost:8080/api/employee';

// const EmployeeList = () =>{











































// // //   const [E, setItems] = useState([]);
// //    const [loading, setLoading] = useState(true);
// //    const [error, setError] = useState('');



// // const [employees, setEmp]=useState()
// // const [id, setid] = useState("");
// // const [empName, setempName] = useState("");
// // const [empEmail, setempEmail] = useState("");
// // const [CompanyName, setCompanyName] = useState("");
// // const [empDateJoing, setempDateJoing] = useState("");
// // const [empAddress, setempAddress] = useState("");
// // const [empGender, setempGender] = useState("");
// // const [empDateofBirth, setempDateofBirth] = useState("");
// // const [empMobileNumber, setempMobileNumber] = useState("");
// // const [empAlterMoNum, setempAlterMoNum] = useState("");
// // const [empCourse, setempCourse] = useState("");
// // const [empTechSkill, setempTechSkills] = useState("");
// // const [empRating, setempRating] = useState("");
// //   useEffect(() => {
// //     fetchEmp();
// //   }, []);

// //   const fetchEmp = async () => {
// //     try {
// //       const response = await axios.get(`${API_URL}/items`);
// //       setEmp(response.data);
// //       setid(response.data);
// //       setempName(response.data);
// //       setempEmail(response.data);
// //       setCompanyName(response.data);
// //       setempDateJoing(response.data);
// //       setempAddress(response.data);
// //       setempGender(response.data);
// //       setempDateofBirth(response.data);
// //       setempMobileNumber(response.data);
// //       setempAlterMoNum(response.data);
// //       setempCourse(response.data);
// //       setempTechSkills(response.data);
// //       setempRating(response.data);
// //       setLoading(false);
// //     } catch (error) {
// //       setError('Error fetching data');
// //       setLoading(false);
// //     }
// //   };

// //   const addEmp = async (item) => {
// //     try {
// //       const response = await axios.post(`${API_URL}/items`, item)
// //       setEmp([...employees, response.data]);
// //     } catch (error) {
// //        setError('Error adding item');
// //     }
// //   };

// //   const updateEmp = async (Emp) => {
// //     try {
// //       await axios.put(`${API_URL}/Emp/${Emp.id}`,Emp);
// //       const updatedEmp = Emp.map((i) => (i.id === Emp.id ? Emp : i));
// //       setEmp(updatedEmp);
// //     } catch (error) {
// //       setError('Error updating employeee');
// //     }
// //   };

// //   const deleteItem = async (EmpId) => {
// //     try {
// //       await axios.delete(`${API_URL}/Emp/${EmpId}`);
// //       const updatedEmp = employees.filter((i) => i.id !== EmpId);
// //    setEmp(updatedEmp);
// //     } catch (error) {
// //      setError('Error deleting Emp');
// //     }
// //   };

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (error) {
// //     return <p>{error}</p>;
// //   }

// //   return (
// //     <div>
// //       <h1>Employee </h1>
// //       <h2>List Of Employees Data</h2>
// //         <table className='table table-bordered table-striped'>
// //             <thead>
                // <th>Employee id</th>
                // <th>Employee Name</th>
                // <th>Employee Email</th>
                // <th>Employee Company Name</th>
                // <th>Employee Date Of Joing</th>
                // <th>Employee Address</th> 
                // <th>Employee Gender</th>
                // <th>Employee Date Of Birth</th>
                // <th>Employee Alternative Mobile </th>
                // <th>Employee Course</th>
                // <th>Employee Tech Skills</th>
                // <th>Employee Skill Rating </th>
                

// //             </thead>
// //       <tbody>
// //         {employees.map((employee) => (
// //           <tr key={employee.id}>
// //             {/* {Emp.name} - {Emp.description} */}
// //         <td>{employee.id}</td>    
// //         <td>{employee.empName}</td>
// //         <td>{employee.empEmail}</td>
// //         <td>{employee.CompanyName}</td>
// //         <td>{employee.empDateJoing}</td>
// //         <td>{employee.empAddress}</td>
// //         <td>{employee.empGender}</td>
// //         <td>{employee.empDateofBirth}</td>
// //         <td>{employee.empMobileNumber}</td>
// //         <td>{employee.empAlterMoNum}</td>
// //         <td>{employee.empCourse}</td>
// //         <td>{employee.empTechSkill}</td>
// //         <td>{employee.empRating}</td>
// //         {/* // <td>{employee.emp}</td> */}
// //         {/* // <td>{employee.emp}</td> */}
// //    <button onClick={() => deleteItem(employee.id)}>Delete</button>
// //           </tr>
// //         ))}
// //       </tbody>
// //       </table>
// //       <form
// //         onSubmit={(e) => {
// //           e.preventDefault();
// //           const newEmp= {
// //             name: e.target.name.value,
// //             description: e.target.description.value,
// //           };
// //           addEmp(newEmp);
// //           e.target.reset();
// //         }}
// //       >
// //         <input type="text" name="name" placeholder="Name" required />
// //         <input type="text" name="name" placeholder="Name" required />
// //         <input type="text" name="name" placeholder="Name" required />
// //         <input type="text" name="name" placeholder="Name" required />
// //         <input type="text" name="name" placeholder="Name" required />
// //         <input type="text" name="name" placeholder="Name" required />
// //         <input type="text" name="name" placeholder="Name" required />
// //         <button type="submit">Add Employee</button>
// //       </form>
// //     </div>
// //   );
// };

// export default EmployeeList



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const EmployeeList = () => {
// //     const [employees, setEmployees]=useState()
// //   const [id, setid] = useState("");
// //   const [empName, setempName] = useState("");
// //   const [empEmail, setempEmail] = useState("");
// //   const [CompanyName, setCompanyName] = useState("");
// //   const [empDateJoing, setempDateJoing] = useState("");
// //   const [empAddress, setempAddress] = useState("");
// //   const [empGender, setempGender] = useState("");
// //   const [empDateofBirth, setempDateofBirth] = useState("");
// //   const [empMobileNumber, setempMobileNumber] = useState("");
// //   const [empAlterMoNum, setempAlterMoNum] = useState("");
// //   const [empCourse, setempCourse] = useState("");
// //   const [empTechSkill, setempTechSkills] = useState("");
// //   const [empRating, setempRating] = useState("");
// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:8080/api/employee');
//     //   setid(response.data);
//     //   setempName(response.data);
//     //   setempEmail(response.data);
//     //   setCompanyName(response.data);
//     //   setempDateJoing(response.data);
//     //   setempAddress(response.data);
//     //   setempGender(response.data);
//     //   setempDateofBirth(response.data);
//     //   setempMobileNumber(response.data);
//     //   setempAlterMoNum(response.data);
//     //   setempCourse(response.data);
//     //   setempTechSkills(response.data);
//     //   setempRating(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// // //   const handleInputChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// //   const handleCreate = async () => {
// //     try {
// //       await axios.post('http://localhost:8080/api/getEmp', formData);
// //       fetchData();
// //       setData({});
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleUpdate = async (id) => {
// //     try {
// //       await axios.put(`http://localhost:8080/api/updateEmp/${id}`, formData);
// //       fetchData();
// //       setData({});
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:8080/api/deleteEmp/${id}`);
// //       fetchData();
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>CRUD Operations</h1>
// //       <h2>Create</h2>
// //       {/* <input
// //         type="text"
// //         name="name"
// //         placeholder="Name"
// //         value={Data.name || ''}
// //         onChange={handleInputChange}
// //       />
// //       <input
// //         type="text"
// //         name="description"
// //         placeholder="Description"
// //         value={formData.description || ''}
// //         onChange={handleInputChange}
// //       />
// //       <button onClick={handleCreate}>Create</button>

// //       <h2>Read</h2>
// //  */}


// //       <h2>List Of Employees Data</h2>
// //         <table className='table table-bordered table-striped'>
// //             <thead>
// //                 <th>Employee id</th>
// //                 <th>Employee Name</th>
// //                 <th>Employee Email</th>
// //                 <th>Employee Company Name</th>
// //                 <th>Employee Date Of Joing</th>
// //                 <th>Employee Address</th> 
// //                 <th>Employee Gender</th>
// //                 <th>Employee Date Of Birth</th>
// //                 <th>Employee Alternative Mobile </th>
// //                 <th>Employee Course</th>
// //                 <th>Employee Tech Skills</th>
// //                 <th>Employee Skill Rating </th>
                

// //             </thead>
// //             <tbody>
// //                 {
// //                     data.map(
// //                       (employee)=>(
// //                         <tr key={employee.id}>
//                         //     <td>{employee.id}</td>    
//                         //     <td>{employee.empName}</td>
//                         //     <td>{employee.empEmail}</td>
//                         //     <td>{employee.CompanyName}</td>
//                         //     <td>{employee.empDateJoing}</td>
//                         //     <td>{employee.empAddress}</td>
//                         //     <td>{employee.empGender}</td>
//                         //     <td>{employee.empDateofBirth}</td>
//                         //     <td>{employee.empMobileNumber}</td>
//                         //     <td>{employee.empAlterMoNum}</td>
//                         //     <td>{employee.empCourse}</td>
//                         //     <td>{employee.empTechSkill}</td>
//                         //     <td>{employee.empRating}</td>
//                         //     // <td>{employee.emp}</td>
//                         //     // <td>{employee.emp}</td>
//                         // </tr>
// //                       )
// //                     )
// //                 }
// //             </tbody>

// //         </table>


// //       <ul>
// //         {data.map((item) => (
// //           <li key={item.id}>
// //             {item.name} - {item.description}
// //             <button onClick={() => handleUpdate(item.id)}>Update</button>
// //             <button onClick={() => handleDelete(item.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default EmployeeList

// // import React,{useEffect, useState} from 'react'
// // import Employeeservices from '../services/Employeeservices'
// // //import RegisterForm from './RegisterForm'

// // const EmployeeList = () => {
  
// //   const [employees, setEmployees]=useState()
// //   const [id, setid] = useState("");
// //   const [empName, setempName] = useState("");
// //   const [empEmail, setempEmail] = useState("");
// //   const [CompanyName, setCompanyName] = useState("");
// //   const [empDateJoing, setempDateJoing] = useState("");
// //   const [empAddress, setempAddress] = useState("");
// //   const [empGender, setempGender] = useState("");
// //   const [empDateofBirth, setempDateofBirth] = useState("");
// //   const [empMobileNumber, setempMobileNumber] = useState("");
// //   const [empAlterMoNum, setempAlterMoNum] = useState("");
// //   const [empCourse, setempCourse] = useState("");
// //   const [empTechSkill, setempTechSkills] = useState("");
// //   const [empRating, setempRating] = useState("");



// // //   <td>{employee.empName}</td>
// // //   <td>{employee.empEmail}</td>
// // //   <td>{employee.CompanyName}</td>
// // //   <td>{employee.empDateJoing}</td>
// // //   <td>{employee.empAddress}</td>
// // //   <td>{employee.empGender}</td>
// // //   <td>{employee.empDateofBirth}</td>
// // //   <td>{employee.empMobileNumber}</td>
// // //   <td>{employee.empAlterMoNum}</td>
// // //   <td>{employee.empCourse}</td>
// // //   <td>{employee.empTechSkill}</td>
// // //   <td>{employee.empRating}</td>
  
// //   useEffect(()=>{
// // Employeeservices.getAllEmployee().then
// // ((response)=>{ 
// //     setEmployees(response.data)
// //     CSSTransformValue.log(response.data);

// // }).catch(error=>{
// //     console.log(error);
// // }
// //     )  },[])
  
  
// //     return (
// //     <div className='container'>
//         // <h2>List Of Employees Data</h2>
//         // <table className='table table-bordered table-striped'>
//         //     <thead>
//         //         <th>Employee id</th>
//         //         <th>Employee Name</th>
//         //         <th>Employee Email</th>
//         //         <th>Employee Company Name</th>
//         //         <th>Employee Date Of Joing</th>
//         //         <th>Employee Address</th> 
//         //         <th>Employee Gender</th>
//         //         <th>Employee Date Of Birth</th>
//         //         <th>Employee Alternative Mobile </th>
//         //         <th>Employee Course</th>
//         //         <th>Employee Tech Skills</th>
//         //         <th>Employee Skill Rating </th>
                

//         //     </thead>
//         //     <tbody>
//         //         {
//         //             employees.map(
//         //               employee=>
//         //                 <tr key={employee.id}>
//         //                     <td>{employee.id}</td>    
//         //                     <td>{employee.empName}</td>
//         //                     <td>{employee.empEmail}</td>
//         //                     <td>{employee.CompanyName}</td>
//         //                     <td>{employee.empDateJoing}</td>
//         //                     <td>{employee.empAddress}</td>
//         //                     <td>{employee.empGender}</td>
//         //                     <td>{employee.empDateofBirth}</td>
//         //                     <td>{employee.empMobileNumber}</td>
//         //                     <td>{employee.empAlterMoNum}</td>
//         //                     <td>{employee.empCourse}</td>
//         //                     <td>{employee.empTechSkill}</td>
//         //                     <td>{employee.empRating}</td>
//         //                     // <td>{employee.emp}</td>
//         //                     // <td>{employee.emp}</td>
//         //                 </tr>
//         //             )
//         //         }
//         //     </tbody>

//         // </table>
      
// //     </div>
// //   )
// // }

// // export default EmployeeList
