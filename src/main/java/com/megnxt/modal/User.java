package com.megnxt.modal;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class User {
	
	@Id
	@Column
	
	private int id;
	private String fullName;
	private String address;
	private long mobileNumber;
	private String gender;
	private  String course;
	private String email;
	
	
public User() {
	super();
	
}

public User(int id, String fullName, String address, String gender, long mobileNumber, String course, String email)
{
this.id=id;
this.fullName=fullName;
this.address=address;
this.mobileNumber=mobileNumber;
this.gender=gender;
this.course=course;
this.email=email;
	
}

public void setId(int setId) {
	this.id = setId;
	}

public int getId() {
	return this.id;
	}

public void SetfullName(String setfullName)
{
	this.fullName=setfullName;
	}

public String getfullName() {
return this.fullName;
	}

public void setaddress(String setaddress) {
	this.address= setaddress;
	}

public String getaddress() {
	return this.address;
	}

public void setmobileNumber(long setmobileNumber)
{
	this.mobileNumber=setmobileNumber;
	
}

public long getMobileNumber () {
	return this.mobileNumber;
	
}
public void setgender(String setgender) {
	this.gender=setgender;
	
}
public String getgender() {
	return this.gender;
	
}


public void setcourse(String setcourse) {
	this.course=setcourse;
}

public String getcourse() {
		return this.course;
}
public void setemail(String setemail) {
	this.email=setemail;
	}

public String getemail()
{
	return this.email;
	}

@Override
public String toString() {
	return "User [id=" + id + ", fullName=" + fullName + ", address=" + address + ", mobileNumber=" + mobileNumber
			+ ", gender=" + gender + ", course=" + course + ", email=" + email + "]";
}






//
//public List<User> findAll(User user) {
//	// TODO Auto-generated method stub
//	return null;
//}

//public Object save(User user) {
//	// TODO Auto-generated method stub
//	return null;
//}
//




}
