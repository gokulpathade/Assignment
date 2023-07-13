package com.hrmsbackend.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.hrmsbackend.app.model.Employee;
//import com.hrmsbackend.app.repository.EmpRepository;

@Component
public class BirthdayAnniversaryScheduler {
	
  @Autowired
  private EmailNotificationService emailNotificationService;
  
  @Autowired
  private EmpService empServies ;
  
  @Scheduled(cron = "0 0 9 * * *") // Runs every day at 9:00 AM
  
  public void sendBirthdayAnniversaryNotifications() {
    // Get today's date
    LocalDate today = LocalDate.now();
    
    // Get List Fetch upcoming birthdays and anniversaries from the database
    List<Employee> employees =  empServies.Birthday(today);
    
    //check date of list Employee and send email notifications
    for (Employee employee : employees) {
      String recipient = employee.getEmpEmail();
      String subject = "";
      String content = "";
      
      if (isBirthday(employee.getEmpDateofBirth(), today)) {
        subject = "Happy Birthday!";
        content = "Dear " + employee.getEmpName() + ",\n\nWishing you a very happy birthday!";
      } 
      
      else if (isAnniversary(employee.getEmpDateJoing(), today)) {
        subject = "Happy Anniversary!";
        content = "Dear " + employee.getEmpName() + ",\n\nCongratulations on your anniversary!";
      }
      
      if (!subject.isEmpty() && !content.isEmpty()) {
        emailNotificationService.sendNotification(recipient, subject, content);
        System.out.println("Mail sent successfully.....");
      }
    }
  }
  
  
  
  private boolean isBirthday(LocalDate birthdate, LocalDate currentDate) {
    return birthdate.getMonth() == currentDate.getMonth() && birthdate.getDayOfMonth() == currentDate.getDayOfMonth();
  }
  
  private boolean isAnniversary(LocalDate anniversaryDate, LocalDate currentDate) {
    return anniversaryDate.getMonth() == currentDate.getMonth() && anniversaryDate.getDayOfMonth() == currentDate.getDayOfMonth();
  }
}
