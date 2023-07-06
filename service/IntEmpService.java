package com.hrmsbackend.app.service;

import java.util.List;

import com.hrmsbackend.app.model.Employee;

public interface IntEmpService {
	


	
	
//	get All Employee list details Here 
	public List<Employee> getEmp();

	
//	get Employee details Here using id 
	public Employee getEmpById(int id); 
	
	
	
	
//	Add Employee Details Here // New Employee details  
	public Employee saveEmp(Employee emp);
	
	
	
	
// Edit Employee Details Here If It Exist 
	
	public Employee editEmp(int id);
	
	
	
//	public Employee getEmpById(Employee emp, int id);
	
	//update Employee details here
	public Employee updateEmp(Employee Emp, int id);
	public Employee save(Employee updatedEmp);
//	public Employee updateEmp(String empName);
//	public Employee searchEmp(String empSkills);

//	public Employee updateEmp(Employee emp);
	
	
//	delete Employee Data Here 
	void deleteEmpId(int id);

	
	

	public Employee getEmployee(int id);
	
	
	
	
	
	
	
}











