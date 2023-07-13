package com.hrmsbackend.app.service;

import java.time.LocalDate;
import java.util.List;

//import org.apache.naming.factory.SendMailFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.hrmsbackend.app.controller.EmpController;
import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.repository.EmpRepository;

@Service
public class EmpService implements IntEmpService {

	@Autowired
	private EmpRepository empRepo;
//	private EmpController mailSender;
	
//	ADD NEW EMPLOYEE DETAILS HERE

	public Employee saveEmp(Employee emp) {
		return empRepo.save(emp);
	}

	
//  GET ALL EMPLOYEE LIST DETAILS HERE
	
	@Override
	public List<Employee> getEmp() {
		return empRepo.findAll();
	}

//	
	@Override
	public Employee getEmployee(int id) {
		return empRepo.findById(id).orElse(null);
	}

	public Employee findById(int id) {
		return empRepo.findById(id).orElse(null);
	}

	@Override
	public Employee editEmp(int id) {
		return empRepo.findById(id).orElse(null);
	}

	public List<Employee> findAll() {
		return empRepo.findAll();
	}

	public Employee getEmpById(int id) {
		return empRepo.findById(id).orElse(null);
	}

	@Override
	public Employee updateEmp(Employee emp, int id) {
		
		
		Employee existingEmp = empRepo.findById(id).orElse(null);
	
		existingEmp.setEmpName(emp.getEmpName());
		existingEmp.setEmpEmail(emp.getEmpEmail());
		existingEmp.setEmpCompanyName(emp.getEmpCompanyName());
		existingEmp.setEmpDateJoing(emp.getEmpDateJoing());
		existingEmp.setEmpAddress(emp.getEmpAddress());
		existingEmp.setEmpGender(emp.getEmpGender());
		existingEmp.setEmpDateofBirth(emp.getEmpDateofBirth());
		existingEmp.setEmpMobileNumber(emp.getEmpMobileNumber());
		existingEmp.setEmpAlterMoNum(emp.getEmpAlterMoNum());
		existingEmp.setEmpCourse(emp.getEmpCourse());
		existingEmp.setEmpTechSkill(emp.getEmpTechSkill());
		existingEmp.setSkillRating(emp.getSkillRating());

		empRepo.save(existingEmp);
	return existingEmp;
		
	
	}
	


	@Override
	public void deleteEmpId(int id) {
		empRepo.deleteById(id);
	}

	public Employee save(Employee updatedEmp) {
		return empRepo.save(updatedEmp);
	}


	@Override
	public List<Employee> getEmpDate(LocalDate empDateofBirth) {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}


	@Override
	public List<Employee> Birthday(LocalDate today) {
		// TODO Auto-generated method stub
	    return  empRepo.Birthday(today);
	}


//	@Override
//	public <empEmail> LocalDate getBirthdate(empEmail String) {
//		
//		return empRepo.findAll();
//	}
//	
//	
//	public LocalDate getBirthdate() {
//		return empRepo.findAll();
//	}
//	

//
//	public static List<Employee> getAllEmployee() {
//		// TODO Auto-generated method stub
//		return null;
//	}


//	@Override
//	public void sendBirthdayEmail(String recipientEmail) {
//		// TODO Auto-generated method stub
//		
//	}
//
//
//	@Override
//	public void sendAnniversaryEmail(String recipientEmail) {
//		// TODO Auto-generated method stub
//		
//	}
	
	
	
	
	
	
	
	
	
	
	
	
////	  private final JavaMailSender mailSender;
//
//	    @Autowired
//	    public EmpService(EmpRepository empRepo, EmpController mailSender) {
//	        this. empRepo = empRepo;
//	        this.mailSender = mailSender;
//	    }
//
//	    public void sendBirthdayNotifications() {
//	        List<Employee> employees = empRepo.findEmployeesWithTodayBirthday();
//	        for (Employee employee : employees) {
//	            String subject = "Happy Birthday, " + employee.getEmpName() + "!";
//	            String body = "Dear " + employee.getEmpName() + ",\n\n" +
//	                    "Wishing you a very happy birthday!\n\n" +
//	                    "Best regards,\n" +
//	                    "Your Company";
//
//	            sendEmail(employee.getEmpEmail(), subject, body);
//	        }
//	    }
//
//	    private void sendEmail(String to, String subject, String body) {
//	        SimpleMailMessage message = new SimpleMailMessage();
//	        message.setTo(to);
//	        message.setSubject(subject);
//	        message.setText(body);
//	        mailSender.send(message);
//	    }
//
//
//		@Override
//		public List<Employee> findEmployeesWithTodayBirthday(Employee empName) {
//			// TODO Auto-generated method stub
//			return null;
//		}
	
	
	
	
	
	
	
	
	
	
	
	
	
}






















