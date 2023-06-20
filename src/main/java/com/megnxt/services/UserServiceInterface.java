package com.megnxt.services;

import java.util.List;

//import org.springframework.beans.factory.annotation.Autowired;

import com.megnxt.modal.User;

public interface UserServiceInterface {

	
	
//	save operation 
	public User Save(User user);
	
//	Read operation 
	List<User> read (User user); 
	
//	get user operation 
	public User getUser(int Id);

	
	
//  get all user data 
	public List<User> getAllUsers();
	
//  Update user data 
	public User updateUserData(User user, int id);
	
	
}
