package com.hrmsbackend.app.controller;

import java.time.LocalDate;
//import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.repository.EmpRepository;
import com.hrmsbackend.app.service.BirthdayWishService;
import com.hrmsbackend.app.service.EmpService;

//import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class EmpController {

	@Autowired
	private EmpService empService;

     
	 
	  private final EmpRepository  employeeRepository;
	    private final BirthdayWishService emailService;

	    public EmpController(EmpRepository employeeRepository, BirthdayWishService emailService) {
	        this.employeeRepository = employeeRepository;
	        this.emailService = emailService;
	    }

	
	
	
	
	
	
//	GET ALL EMPLOYEE DETAILS HERE IN LIST 
	
	@GetMapping("/getEmp")
	public List<Employee> getEmp() {
		return empService.findAll();
	}

	
//	GET EMPLOYEE DETAILS HERE BY ID 
	
	@GetMapping("/getEmpById/{id}")
	public Employee getEmployee(@PathVariable int id) {
		return empService.findById(id);
	}

////	EDIT EMPLOYEE DETAILS HERE 
//	@PostMapping("/editEmp/{id}")
//	public Employee editEmp(@PathVariable int id, HttpServletRequest req) {
//		req.setAttribute("empl", empService.editEmp(id));
//		return empService.save(getEditEmp(id));
//	}

//	EDIT EMPLOYEE DETAILS HERE BY USING ID
	@GetMapping("/editEmp/{id}")
	public Employee getEditEmp(@PathVariable int id) {
		return empService.findById(id);
	}

	
	
//	ADD NEW EMPLOYEE DETAILS HERE 
//	@PostMapping("/addEmp")
//	public Employee saveEmp(@RequestBody Employee emp) {
//		return empService.saveEmp(emp);
//	}
//


	  @PostMapping("/addEmp")
	    public ResponseEntity<String> registerEmployee(@RequestBody Employee employee) {
	        Employee savedEmployee = empService.save(employee);
	        if (savedEmployee != null) {
	            emailService.sendRegisterEmail(savedEmployee);
	            return ResponseEntity.ok("you have register successfully !");
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email to the employee");
	        }
	  }
	
	
//UPDATE EMPLOYEE DETAILS HERE BY ID 
	@PutMapping("/updateEmp/{id}")
	public ResponseEntity<Employee> updateEmp(@RequestBody Employee emp, @PathVariable("id") int id) {
//		Employee existingEmp = empService.findById(id);
//		existingEmp.setEmpName(emp.getEmpName());
//		existingEmp.setEmpEmail(emp.getEmpEmail());
//		existingEmp.setEmpCompanyName(emp.getEmpCompanyName());
//		existingEmp.setEmpDateJoing(emp.getEmpDateJoing());
//		existingEmp.setEmpAddress(emp.getEmpAddress());
//		existingEmp.setEmpGender(emp.getEmpGender());
//		existingEmp.setEmpDateofBirth(emp.getEmpDateofBirth());
//		existingEmp.setEmpMobileNumber(emp.getEmpMobileNumber());
//		existingEmp.setEmpAlterMoNum(emp.getEmpAlterMoNum());
//		existingEmp.setEmpCourse(emp.getEmpCourse());
//		existingEmp.setEmpTechSkill(emp.getEmpTechSkill());
//		existingEmp.setSkillRating(emp.getSkillRating());
		
		
		 Employee updatedEmployee = empService.updateEmp(emp, id);
	        if (updatedEmployee != null) {
	            return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

//		return empService.updateEmp(emp, id );
	}

	
//	//	DELETE EMPLOYEE DETAILS HERE BY USING ID
	@DeleteMapping("/deleteEmp/{id}")
	public String deleteEmpId(@PathVariable("id") int id) {
		empService.deleteEmpId(id);
		return "Emp Data delete Successfully";
	}
	
	
	
	
	public List<Employee> getEmpDate(LocalDate empDateofBirth) { 
		return empService.findAll();
	}

	
	
	
	
	
	
	
	
	
//	send birthday Email Here
	
	@PostMapping("/sendBirthdayEmail")
	public List<Employee> Birthday(@RequestBody LocalDate today) {
		// TODO Auto-generated method stub
		return empService.getEmpDate(today);
	}

	
	
	
	
	
//	send birthday Email Here   
	  @PostMapping("/sendBirthday")
	    public ResponseEntity<String> sendBirthday(@RequestBody Employee employee) {
	        Employee savedEmployee = employeeRepository.save(employee);
	        if (savedEmployee != null) {
	            emailService.sendBirthday(savedEmployee);
	            return ResponseEntity.ok("Email send successfully for Birthday wish!");
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email to the employee");
	        }
	
	  } 
	
	
	
	
	
	List<Employee> findByBirthdayMonthAndBirthdayDay(int monthValue, int dayOfMonth){
		return empService.findAll();
		
	}

//	
//	@GetMapping("/sendMail")
//	public <empEmail> LocalDate getBirthdate(empEmail String) {
//		return empService.findAll();
//	}
//	
//	
//	public List<Employee> findEmployeesWithTodayBirthday(Employee empName)
//	{
//		return null;
//		
//	}
}
