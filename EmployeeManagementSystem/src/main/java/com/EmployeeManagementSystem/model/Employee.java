package com.EmployeeManagementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Employee {

	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column
	private int empId;
	
	@Column
	private String empName;
	@Column
	private String empCompanyName;
	@Column
	private String empJoingMonth; 
	@Column
	private String empAddress;
	@Column
	private String empGender;
	@Column
	private long   empMobileNumber;
	@Column
	private String empCourse;
	@Column
	private String empSkill;
	
	
	
//	private long    empDob;
//	private int empRateing;
	
	public Employee(int empId, String empName, String empCompanyName,
			String empJoingMonth, String empAddress, String empGender, long empMobileNumber,
			String empCourse, String empSkill) {
		
	                                             }
//	constructor
	public Employee() {
		super(); 
	}

	
//	getter And Setter
	public int getEmpId() {
		return empId;
	}



	public String getEmpName() {
		return empName;
	}


	public String getEmpCompanyName() {
		return empCompanyName;
	}

	public String getEmpJoingMonth() {
		return empJoingMonth;
	}

	public String getEmpAddress() {
		return empAddress;
	}

	public String getEmpGender() {
		return empGender;
	}
	
	public long getEmpMobileNumber() {
		return empMobileNumber;
	}

	public String getEmpCourse() {
		return empCourse;
	}
      public String getEmpSkill() {
		return empSkill;
	}

	

	
	
//	Setter 
	
	
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public void setEmpCompanyName(String empCompanyName) {
		this.empCompanyName = empCompanyName;
	}

	public void setEmpJoingMonth(String empJoingMonth) {
		this.empJoingMonth = empJoingMonth;
	}

	public void setEmpGender(String empGender) {
		this.empGender = empGender;
	}

	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}
	
	public void setEmpMobileNumber(long empMobileNumber) {
		this.empMobileNumber = empMobileNumber;
	}

	
	public void setEmpCourse(String empCourse) {
		this.empCourse = empCourse;
	} 
	

	public void setEmpSkill(String empSkill) {
		this.empSkill = empSkill;
	}
	
	
//	Get String 
	
	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", empCompanyName=" + empCompanyName
				+ ", empJoingMonth=" + empJoingMonth + ", empAddress=" + empAddress + ", empGender=" + empGender
				+ ", empMobileNumber=" + empMobileNumber + ", empCourse=" + empCourse + ", empSkill=" + empSkill + "]";
	}
	
	
	
	
	
	
	
}
