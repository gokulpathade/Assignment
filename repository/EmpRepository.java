package com.hrmsbackend.app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hrmsbackend.app.model.Employee;

@Repository

public interface EmpRepository extends JpaRepository<Employee, Integer> {

	@Query(value = "select * from employee where getupdateEmp=?;", nativeQuery = true)


	Employee updateEmp(int id);
	

//	@Query(value = "select * from employee where getSendEmailEmp=?;", nativeQuery = true)
//	Employee SendEmailEmp(String empEmail);

	@Query(value =" select * from employee where empEmail =?;", nativeQuery = true)
	Employee empEmail(String empEmail);
	
	
	

}
