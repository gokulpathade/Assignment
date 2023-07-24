import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function Home() {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  const baseURL = "http://localhost:8080/api";

  const SetEmployeeData = () => {
    axios
      .get(baseURL + "/EmpList")
      .then((response) => {
        setEmployee(response.data);
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
    <div className="container">
      <div className="py-1">
        <table className="table table-bordered table-pink">
          <thead>
            <tr>
              <th scope="col"> Id</th>
              <th scope="col"> Name</th>
              <th scope="col"> Email</th>
              <th scope="col"> Company Name</th>
              <th scope="col"> Date of Join</th>
              <th scope="col"> Address</th>
              <th scope="col"> Gender</th>
              <th scope="col"> Date Of Birth</th>
              <th scope="col"> Mobile </th>
              <th scope="col"> Alternative Mobile </th>
              <th scope="col"> Course</th>
              <th scope="col"> Tech Skills</th>
              <th scope="col"> Skills Rating</th>
              <th scope="col"> Crud Action</th>
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
      </div>
    </div>
  );
}
