package com.hrmsbackend.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.service.EmpService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")


@CrossOrigin("http://localhost:3000/")

public class EmpController<NoSuchElementFoundException> {

	@Autowired
	private EmpService empService;

	
	
	

//	get all employee list of details here 

	@GetMapping("/getEmp")
	public List<Employee> getEmp() {
		// TODO Auto-generated method stub
		return empService.findAll();
	}

	
	
//	get Employee Details By using Employee Id 
	@GetMapping("/getEmp/{id}")
	public Employee getEmployee(@PathVariable int id)
	{
		return empService.findById(id);
		
	}
	
	
	
	
	
	

//  edit employee data here 
@RequestMapping ("/editEmp/{id}")
public Employee editEmp(@RequestBody int id, HttpServletRequest req) {
req.setAttribute("empl",empService.editEmp(id));
req.setAttribute("empl", "req");
return empService.editEmp(id);
}

	


//Edit employee data here
	@GetMapping("/editEmp/{id}")
	public Employee editEmp(@PathVariable int id) {
	    return empService.findById(id);
	}
	
	
	
	
	
	
	
	

	

//	Add Employee Here 
	
	@PostMapping("/addEmp")
	public Employee saveEmp(@RequestBody Employee emp) {
		// TODO Auto-generated method stub
		return empService.saveEmp(emp);

	}
	
	
	

//	update Employee data By Id  

//	@PostMapping("")
//	public String getEmpById(@PathVariable int id, @ModelAttribute("Employee") Employee Emp) {
//
//		Employee empl = empService.getEmpById(id);
//		empl.setEmpName(Emp.getEmpName());
//		empl.setEmpEmail(Emp.getEmpEmail());
//		empl.setEmpCompanyName(Emp.getEmpCompanyName());
//		empl.setEmpDateJoing(Emp.getEmpDateJoing());
//		empl.setEmpAddress(Emp.getEmpAddress());
//		empl.setEmpGender(Emp.getEmpGender());
//		empl.setEmpDateofBirth(Emp.getEmpDateofBirth());
//		empl.setEmpMobileNumber(Emp.getEmpMobileNumber());
//		empl.setEmpAlterMoNum(Emp.getEmpAlterMoNum());
//		empl.setEmpCourse(Emp.getEmpCourse());
//		empl.setEmpTechSkill(Emp.getEmpTechSkill());
//		empl.setSkillRating(Emp.getSkillRating());
//
//		return "redirect:/api/getEmp"; 
//	}
//	
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//  update employee Details Here. 
	@PutMapping("/updateEmp/{id}")
	//...

	

	// Update employee data by ID
	@PostMapping("/updateEmp/{id}")
	public Employee updateEmp(@ModelAttribute Employee emp, @PathVariable("id") int id) {
	    Employee existingEmp = empService.findById(id);
	    existingEmp.setEmpName(emp.getEmpName());
	    existingEmp.setEmpEmail(emp.getEmpEmail());
	    // Update other employee fields as needed

	    return empService.saveEmp(existingEmp);
	}

	//...


	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 // delete employee details here 
	@DeleteMapping("/deleteEmp/{id}")
	public String deleteEmpId(@PathVariable("id") int id)
	{
	    empService.deleteEmpId(id);
		return "Emp Data delete Successfully";
	    
	}
	
	
//	
//	@ExceptionHandler(NoSuchElementFoundException.class)
//	@ResponseStatus(HttpStatus.NOT_FOUND)
//	public ResponseEntity<String>handleNoSuchElement
//	
//	
//	 @ExceptionHandler(NoSuchElementFoundException.class)
//	  @ResponseStatus(HttpStatus.NOT_FOUND)
//	  public ResponseEntity<String> handleNoSuchElementFoundException(
//	      NoSuchElementFoundException exception
//	  ) {
//	    return ResponseEntity
//	        .status(HttpStatus.NOT_FOUND)
//	        .body(exception.getMessage());
//	  }
	
	
	
	
}

































