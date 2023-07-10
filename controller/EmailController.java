package com.hrmsbackend.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hrmsbackend.app.service.EmailService;

@RestController
public class EmailController {
	
	

	    private final EmailService emailService;

	    @Autowired
	    public EmailController(EmailService emailService) {
	        this.emailService = emailService;
	    }

	    @PostMapping("/sendBirthdayEmail")
	    public void sendBirthdayEmail(@RequestParam("recipientEmail") String recipientEmail) {
	        emailService.sendBirthdayEmail(recipientEmail);
	    }

	    @PostMapping("/sendAnniversaryEmail")
	    public void sendAnniversaryEmail(@RequestParam("recipientEmail") String recipientEmail) {
	        emailService.sendAnniversaryEmail(recipientEmail);
	    }

}
