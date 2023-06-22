package com.EmployeeManagementSystem.service;

import java.util.List;

import com.EmployeeManagementSystem.model.Employee;

public interface InterEmployeeService {
	
	
	
	
//	Add Employees Details 
public Employee add(Employee emp);

public Employee updateEmp(Employee emp, int emp_Id);


//Get All Employees date 
public List<Employee> getAllEmployees();

//Get Employee date by using id  
//	public Employee getEmpById(int empId);

	public Employee getEmployee(int emp_Id);

}
