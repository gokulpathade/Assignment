package com.megnxt.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.megnxt.controller.list;
import com.megnxt.modal.User;
import com.megnxt.repository.UserRepository;

//import com.megnxt.controller.user;

//import com.megnxt.repository.UserRepository;

@Service
@Transactional
public class UserServices implements UserServiceInterface {


	@Autowired
	UserRepository userRepo;

//	save operation 

	@Override
	public User Save(User user) {
		// TODO Auto-generated method stub
		return  userRepo.save(user);
	}


//	 Find all users  operation
	@Override
	public List<User> read(User user) {
	
		return userRepo.findAll();
	}

	
//	get By id Operation
	@Override
	public User getUser(int id) {
		 
		return userRepo.findByUserId(id);
		
	}

	
//	get All User Data 
	@Override
	public List<User> getAllUsers() {
	
		return userRepo.findAll();
	}

	
//  Update user data 


@Override
public User updateUserData(User user, int id) {
	// TODO Auto-generated method stub
	return userRepo.save(user);
}}
