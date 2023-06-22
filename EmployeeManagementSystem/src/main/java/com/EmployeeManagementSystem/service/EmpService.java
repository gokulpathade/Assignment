package com.EmployeeManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EmployeeManagementSystem.Repository.EmpRepository;
import com.EmployeeManagementSystem.model.Employee;

@Service
public class EmpService implements InterEmployeeService {
	 
	
@Autowired
EmpRepository empRepo;


//Add Emp Details
@Override
public Employee add(Employee emp) {

	return empRepo.save(emp);
}



@Override
//  Get All Employee 
public List<Employee> getAllEmployees() {
	
	return empRepo.findAll();
}


//  Update the Employee data here 

@Override
public Employee updateEmp(Employee emp, int emp_Id) {
	
	return empRepo.save(emp);
	
}



public Employee save(Employee emp) {
	return empRepo.save(emp);
}


//get Employee Data By using by id 
@Override
//public Employee getEmpById(int empId) {
//	return empRepo.findByEmployeeId(empId);
//}



public Employee getEmployee(int emp_Id) {
	// TODO Auto-generated method stub
	return empRepo.findByEmployeeId(emp_Id);
}




}
