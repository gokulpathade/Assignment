package com.megnxt.controller;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

//import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.megnxt.modal.User;
import com.megnxt.services.UserServices;

//import com.megnxt.services.UserServices;
//
//import com.megnxt.modal.User;
//import com.megnxt.repository.UserRepository;

@RestController

@RequestMapping("/api")
public class UserController {

//	@GetMapping("/User")
//	public String getUser() {
//		User user= new User();
//
//		user.setid(01);
//		user.setfullName("GP");
//		user.set(GP);
//		user.setfullName(GP);
//		user.setfullName(GP);
//		user.setfullName(GP);
//		user.setfullName(GP);
//		user.setfullName(GP);
//		
//		
//	}
	
	@Autowired
	private UserServices userServ;

	//get user data by id 
	@GetMapping("/getbyid/{id}")
	public User getUserById(@PathVariable int id){
		return userServ.getUser(id);
		
	}
	
//	 Add user Data
	@PostMapping("/adduser")
	public User postUser(@RequestBody User user){
		return userServ.Save(user);
		
	}
	
//	 Get all user data 
      @GetMapping("/getAllUsers")
	public List<User> getAll() {
		return userServ.getAllUsers();
		
	}
	
	
//	 Update user data
      @PutMapping("/updateUserData/{id}")
      public User Update(@RequestBody User user, @PathVariable int id) {
    	  return userServ.Save(user);
      }
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@Autowired 
//	private UserServices userServices;
//	
//    @GetMapping("/user")
//    public list<user> getUser(){
//    	return this.userServices.getAllUser();
//    }
//    
    
  
//    public User getTreeById(@PathVariable int id) {
//        return userServices.findById(id);
//  }

   

	
}
