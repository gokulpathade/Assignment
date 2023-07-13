

package com.hrmsbackend.app.controller;

//import javax.security.auth.Subject;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.hrmsbackend.app.model.Employee;
//import com.hrmsbackend.app.service.EmailService;
//

//
//@RestController
//@RequestMapping("/api")

public class EmailController {
	
//	  @Autowired
//	  private  EmailService emailService;
//
//	
////	
////	    public EmailController(EmailService emailServ) {
////	        this.emailService = emailService;
////	    }
//
//	
//	  
//	  
//	   @PostMapping("/sendbirthdayemail")
//	    public ResponseEntity<?> sendBirthdayEmail() {
//	      emailService.sendBirthdayEmail();
//		return ResponseEntity.ok(" Email sent successfully ");
//	    } 
//
//	    @PostMapping("/sendanniversaryemail")
//	    public ResponseEntity<?> sendAnniversaryEmail() {
//	    	
//	    	  emailService.sendBirthdayEmail();
//	  		return ResponseEntity.ok("Email anniversary  sent successfully");
//	       
//	    }
//	  
//	  
////	  
////	public void javaMailSender (String toEmail) {
////		emailService.sendEmail("gokuldaspathade@gmail.com", "This is the Subject", "this is the Body From Spring Boot App Hrms ");
////		
////		(toEmail:"gokuldaspathade@gmail.com";
////				Subject:"This is the Subject";
////				body:"this is the Body From Spring Boot App Hrms ");
////		("gokuldaspathade@gmail.com", "This is the Subject", "this is the Body From Spring Boot App Hrms ")
////	} 
//	    
//	    
//	  
//	  
////	
////
////	    private final EmailService emailService;
////
////	    @Autowired
////	    public EmailController(EmailService emailService) {
////	        this.emailService = emailService;
////	    }
////
////	    @PostMapping("/sendBirthdayEmail")
////	    public void sendBirthdayEmail(@RequestParam("recipientEmail") String recipientEmail) {
////	        emailService.sendBirthdayEmail(recipientEmail);
////	    }
////
////	    @PostMapping("/sendAnniversaryEmail")
////	    public void sendAnniversaryEmail(@RequestParam("recipientEmail") String recipientEmail) {
////	        emailService.sendAnniversaryEmail(recipientEmail);
////	    }
////
////	    @GetMapping("/sendBirthdayAndAnniversaryEmails")
////	    public void sendBirthdayAndAnniversaryEmails() {
////	        emailService.sendBirthdayAndAnniversaryEmailsToEmployees();
////	    }
////	    
//
//	
//	
}
