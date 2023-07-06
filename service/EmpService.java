package com.hrmsbackend.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.repository.EmpRepository;

@Service
public class EmpService implements IntEmpService {

	
	
@Autowired 
 private EmpRepository empRepo;

	



	
	
	
//	@Override
//	public Employee empAdd(Employee emp) {
//		// TODO Auto-generated method stub
//		return empRepo.save(emp);
//		
//	}


//Add new Employee details Here 
	
	public Employee saveEmp(Employee emp) {
		// TODO Auto-generated method stub
		return empRepo.save(emp);
	}

	
//	Get all employee details list Data here
	@Override
	public List<Employee> getEmp() {
		// TODO Auto-generated method stub
		return  empRepo.findAll();
	}

	

	
	

//	get Employee details here using by id 
	@Override
	public Employee getEmployee(int id) {
		// TODO Auto-generated method stub
		return empRepo.findById(id).get(); 
	}



//	get Employee details here using by id 
	public Employee findById(int id) {
		// TODO Auto-generated method stub
		return empRepo.findById(id).get();
	}


	
	
	
	
	
	
	
//	Edit Employee Details here by using id 

	@Override
	public Employee editEmp(int id) {
		// TODO Auto-generated method stub
		return empRepo.findById(id).get();
	}


	
	
	
	
	
	
	
	
	
	

	 // Get all employee list of details here 
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return  empRepo.findAll();
	}

	
	
	
//	Update employee Details Here 
	
	
//	@Override
//	public Employee updateEmp(Employee emp, int id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//

//	@Override
//	public Employee updateEmp(Employee emp) {
//		// TODO Auto-generated method stub
//		return null;
//	}


//	@Override
//	public Employee getEmpById(Employee emp, int id) {
//		// TODO Auto-generated method stub
//		return empRepo.getEmpById(id);
//	}

	

	 // update employee details here using id 
	public Employee updateEmp(int id) {
		return empRepo.updateEmp(id);
	}

	
	public Employee getEmpById(int id) {
		return empRepo.findById(id).get();
	}


	 // update employee details here 
	@Override
	public Employee updateEmp(Employee Emp, int id) {
		// TODO Auto-generated method stub
		
//		Employee employee=empRepo.findById(id).get();
//	if (Object.nonNull(employee.getempName())&&!"".equalsIgnoreCase(employee.setempName())) {
//		employee.setempName(employee.getempName());
//		
//	}
//		
		return empRepo.save(Emp);
	}


	

	 // delete employee details here 
	@Override
	public void deleteEmpId(int id) {
		// TODO Auto-generated method stub
		empRepo.deleteById(id);
	}


	public Employee saveEmp(int id) {
		// TODO Auto-generated method stub
		return empRepo.findById(id).get();
	}


	public Employee save(Employee updatedEmp) {
		// TODO Auto-generated method stub
		return empRepo.save(updatedEmp);
	}



//	@Override
//	public Employee updateEmp(String empName) {
//		// TODO Auto-generated method stub
//		return empRepo.updateEmp(empName);
//	}
//
//
//	@Override
//	public Employee searchEmp(String empSkills) {
//		// TODO Auto-generated method stub
//		return empRepo.updateEmp(empSkills);
//	}

//
//	@Override
//	public Employee updateEmp(Employee emp) {
//		// TODO Auto-generated method stub
//		return empRepo.save(emp);
//	}

	

	
	
	
	
	
	


	
	
	
	
	
	
	
	
	
	
	
	
}











