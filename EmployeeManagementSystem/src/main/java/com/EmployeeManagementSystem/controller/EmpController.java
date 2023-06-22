package com.EmployeeManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeManagementSystem.Repository.EmpRepository;
import com.EmployeeManagementSystem.model.Employee;
import com.EmployeeManagementSystem.service.EmpService;

@RestController

@RequestMapping("/api")
public class EmpController {
	
	
@Autowired
private EmpService empServ;


//Add Employee Details here 
@PostMapping("/addEmp")
public Employee Save(@RequestBody Employee emp) {
	return empServ.save(emp);
}

//Get All Employees Data Here
@GetMapping("/getAllEmp")
public List<Employee> getAllEmp() {
	return empServ.getAllEmployees();
	
}



@GetMapping("/getById/{emp_Id}")
public Employee getEmpById(@PathVariable int emp_Id) {
	return empServ.getEmployee(emp_Id);
	
}

//Update Employees Data Here
@PutMapping("/updateEmp/{emp_Id}")
public Employee updateEmp(@RequestBody Employee emp, @PathVariable int emp_Id) {
	return empServ.save(emp);
}






}
