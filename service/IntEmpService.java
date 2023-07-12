package com.hrmsbackend.app.service;

import java.time.LocalDate;
//import java.time.LocalDate;
import java.util.List;

import com.hrmsbackend.app.model.Employee;

public interface IntEmpService {

	// Get all Employee details
	public List<Employee> getEmp();

	// Get Employee details by ID
	public Employee getEmpById(int id);

	// Add Employee details
	public Employee saveEmp(Employee emp);

	// Edit Employee details
	public Employee editEmp(int id);

	// Update Employee details
	public Employee updateEmp(Employee emp, int id);

	// Save updated Employee details
	public Employee save(Employee updatedEmp);

	// Delete Employee by ID
	void deleteEmpId(int id);

	// Get Employee by ID
	public Employee getEmployee(int id);
	
	
	
	public List<Employee> getEmpDate(LocalDate empDateofBirth);
	
//	public List<Employee> findEmployeesWithTodayBirthday(Employee empName);
//	public Employee sendEmailtoEMP();
	
	
	
//	
////	send Email On BARTHDAY EMAIL 
////	BARTHDAY EMAIL  WISH
//	 void sendBirthdayEmail(String recipientEmail);
//	 
//	 
////	 	send Email ON  ANNIVERSARY DAY 
//	 // EMAIL TO THE EMPLOYEE ANNIVERSARY WISH 
//	    void sendAnniversaryEmail(String recipientEmail);
	
//	public <empEmail> LocalDate getBirthdate(empEmail String);
//	
	
	
	
//	

}
