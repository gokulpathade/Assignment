package com.hrmsbackend.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailNotificationService {

  @Autowired
  private JavaMailSender javaMailSender;

  public void sendNotification(String recipient, String subject, String content) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(recipient);
    message.setSubject(subject);
    message.setText(content);
    javaMailSender.send(message);
    System.out.println("Emaill send Successfully........");
  }
}
