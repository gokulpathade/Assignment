package com.hrmsbackend.app.service;

import java.time.LocalDate;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.hrmsbackend.app.repository.EmpRepository;

@Service
public class EmailServiceImpl implements EmailService {
	
	
	@Autowired
	private EmpRepository empService;
	@Autowired 
	private JavaMailSender javaMailSender;
	
	 @Autowired
	    public EmailServiceImpl(JavaMailSender javaMailSender) {
	        this.javaMailSender = javaMailSender;
	    }

//	    @Override
//	    public void sendBirthdayEmail(String recipientEmail) {
//	        SimpleMailMessage message = new SimpleMailMessage();
//	        message.setTo(recipientEmail);
//	        message.setSubject("Happy Birthday!");
//	        message.setText("Wishing you a fantastic birthday filled with joy and happiness!");
//
//	        javaMailSender.send(message);
//	    }
//
//	    @Override
//	    public void sendAnniversaryEmail(String recipientEmail) {
//	        SimpleMailMessage message = new SimpleMailMessage();
//	        message.setTo(recipientEmail);
//	        message.setSubject("Happy Anniversary!");
//	        message.setText("Congratulations on another year of love and togetherness!");
//
//	        javaMailSender.send(message);
//	    }
	    
	// send birthday and anniversary emails to employees
//	    public void sendBirthdayAndAnniversaryEmailsToEmployees() {
//	        // Get the current date
//	        LocalDate currentDate = LocalDate.now();

  // employee birthdays and send 
// fetch employee data
//	        List<Employee> employees = employeeService.getAllEmployees();
//
//	        for (Employee employee : employees) {
//	            LocalDate birthdate = employee.getBirthdate();
//
//	            if (birthdate.getMonth() == currentDate.getMonth() && birthdate.getDayOfMonth() == currentDate.getDayOfMonth()) {
//	                sendBirthdayEmail(employee.getEmail());
//	            }
//	        }

//employee anniversaries and send emails
//    fetch employee data
//	        List<Employee> employees = employeeService.getAllEmployees();
//
//	        for (Employee employee : employees) {
//	            LocalDate anniversaryDate = employee.getAnniversaryDate();
//
//	            if (anniversaryDate.getMonth() == currentDate.getMonth() && anniversaryDate.getDayOfMonth() == currentDate.getDayOfMonth()) {
//	                sendAnniversaryEmail(employee.getEmail());
//	            }
//	        }
//	    }
//	    
	    
	    
	    
//	    
//
	@Override
		public void sendBirthdayEmail(String recipientEmail) {
	
		}

		@Override
		public void sendAnniversaryEmail(String recipientEmail) {
			
			
		}
}
