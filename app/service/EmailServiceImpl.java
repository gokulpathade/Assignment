package com.hrmsbackend.app.service;

////import java.time.LocalDate;
//
////import org.hibernate.mapping.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.mail.javamail.JavaMailSender;
////import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
//
//import com.hrmsbackend.app.model.Employee;
//import com.hrmsbackend.app.repository.EmpRepository;
//
//
//
//import com.hrmsbackend.app.service.EmailService;
//
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.MailSender;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.time.Month;
//import java.time.format.DateTimeFormatter;
//import java.util.List;

//@Service

public class EmailServiceImpl implements EmailService {
	
	
	
//	private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd MMMM");
//
//	
//	
//	@Autowired
//	 private JavaMailSender javaMailSender;
//	 
////	 @Autowired
////	    public EmailServiceImpl(JavaMailSender javaMailSender) {
////	        this.javaMailSender = javaMailSender;
////	    }
//
//	 @Value("${spring.mail.username}")
//     private String sender;    
//	 
//	 
//	 
//	@Override
//	public void sendBirthdayEmail() {
//		// TODO Auto-generated method stub
//		SimpleMailMessage message = new SimpleMailMessage();
//		message.setTo("gokuldaspathade@gmail.com");
//		message.setSubject("Happy Birthday!");
//		message.setText("Wishing you a fantastic birthday filled with joy and happiness!");
//		javaMailSender.send(message);
//
//		
////		  MimeMessage message = javaMailSender.createMimeMessage();
////	   MimeMessageHelper helper= new MimeMessageHelper(message);
////		  
////	  try {
////           helper.setTo(empEmail);
////            helper.setSubject("Happy Birthday, " + empName + "!");
////	            helper.setText("Dear " + empName + ",\n\nWishing you a fantastic birthday filled with joy and happiness!\n\nBest regards,\nYour Company");
////
////             javaMailSender.send(message);
////        
////        } catch (MessagingException e) {
//////             Handle the exception // error message
////        }
//		
//		
//		
//	}
////	sendBirthdayEmail() closed Here 
//
//	@Override
//	  public void sendAnniversaryEmail() {
//	        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo("gokuldaspathade@gmail.com");
//        message.setSubject("Happy Anniversary!");
//        message.setText("Congratulations on another year of love and togetherness!");
//        
//        javaMailSender.send(message);
//    }
//	
//	
//	
//	
//	
//	
//	
//	
////	
////	
////	   @Scheduled(cron = "0 0 9 * * *") // Runs at 9:00 AM every day
////	    public void sendBirthdayAndAnniversaryEmails() {
////	        List<Employee> emp = EmpService.findAll();
////	        EmailService.sendBirthdayAndAnniversaryEmails(emp);
////	    }
////	
//	
//	
//	
//	
//	
////	message.setFrom(sender);
////	message.setTo(empEmail.sender);
//	
//	
//	
//	
//	
////	
////	public void sendEmail(String toEmail, String subject, String body) {
////		SimpleMailMessage message= new SimpleMailMessage();
////		message.setFrom("gokulpathade1@gmail.com");
////		message.setTo(toEmail);
////		message.setText(body);
////          message.setSubject(subject);
////          javaMailSender.send(message);
////          System.out.println("Mail send Successfully.....");
////          
////	}
//
//
//
////
////	@Override
////	public void sendAnniversaryEmail(String empName, String empEmail) {
////		// TODO Auto-generated method stub
////		
////	}
////	
////	
//	
//	
//	
//	
//	
////	@Service
//	public class EmailNotificationService {
//	  
//	  @Autowired
//	  private JavaMailSender javaMailSender;
//	  
//	  public void sendNotification(String recipient, String subject, String content) {
//	    SimpleMailMessage message = new SimpleMailMessage();
//	    message.setTo(recipient);
//	    message.setSubject(subject);
//	    message.setText(content);
//	    javaMailSender.send(message);
//	  }
//	}
//
//	@Component
//	public class BirthdayAnniversaryScheduler {
//	  
//	  @Autowired
//	  private EmailServiceImpl emailServiceImpl;
//	  
//	  @Scheduled(cron = "0 0 9 * * *") // Runs every day at 9:00 AM
//	  public void sendBirthdayAnniversaryNotifications() {
//	    // Fetch upcoming birthdays and anniversaries from the database
//	    List<Employee> emps = EmpRepository.findUpcomingBirthdaysAndAnniversaries();
//	    
//	    // Iterate over the users and send email notifications
//	    for (Employee emp : emps) {
//	      String recipient = emp.getEmpEmail();
//	      String subject = "Happy Birthday!";
//	      String content = "Dear " + emp.getEmpName() + ",\n\nWishing you a very happy birthday!";
//	      emailServiceImpl.sendBirthdayEmail();
//	    }
//	  }
//	}
//
//		  
//		  
//		  
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//
////    private final JavaMailSender javaMailSender;
////    
////    
////    @Autowired 
////    private EmpService empService;
////    
////    @Autowired 
////    Employee  emp;
////    
//// 
////    @Autowired
////    public EmailServiceImpl(JavaMailSender javaMailSender) {
////        this.javaMailSender = javaMailSender;
////    }
////
////    @Override
////    public void sendBirthdayEmail(String recipientEmail) {
////        SimpleMailMessage message = new SimpleMailMessage();
////        message.setTo(recipientEmail);
////        message.setSubject("Happy Birthday!");
////        message.setText("Wishing you a fantastic birthday filled with joy and happiness!");
////
////        javaMailSender.send(message);
////    }
////
////    @Override
////    public void sendAnniversaryEmail(String recipientEmail) {
////        SimpleMailMessage message = new SimpleMailMessage();
////        message.setTo(recipientEmail);
////        message.setSubject("Happy Anniversary!");
////        message.setText("Congratulations on another year of love and togetherness!");
////
////        javaMailSender.send(message);
////    }
////
////    // Method to check and send birthday and anniversary emails to employees
////    public void sendBirthdayAndAnniversaryEmailsToEmployees() {
////        // Get the current date
////        LocalDate currentDate = LocalDate.now();
////
////        // Check for employee birthdays and send emails
////        // Assuming you have a method to fetch employee data
////        List<Employee> employeeBirth = empService.getEmp();
////
////        for (Employee employee : employeeBirth) {
////            LocalDate birthdate = employee.getBirthdate();
////
////            if (birthdate.getMonth() == currentDate.getMonth() && birthdate.getDayOfMonth() == currentDate.getDayOfMonth()) {
////                sendBirthdayEmail(employee.getEmail());
////            }
////        }
////
////        // Check for employee anniversaries and send emails
////        // Assuming you have a method to fetch employee data
////        List<Employee> employeeAnniversary = empService.getEmp();
////
////        for (Employee employee : employeeBirth) {
////            LocalDate anniversaryDate = employee.getAnniversaryDate();
////
////            if (anniversaryDate.getMonth() == currentDate.getMonth() && anniversaryDate.getDayOfMonth() == currentDate.getDayOfMonth()) {
////                sendAnniversaryEmail(employee.getEmail());
////            }
////        }
////    }
}
