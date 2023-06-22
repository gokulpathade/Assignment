package com.EmployeeManagementSystem.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.EmployeeManagementSystem.model.Employee;





@Repository
public interface EmpRepository extends JpaRepository<Employee, Integer>{

	@Query(value = "select * from employee where empId=?;", nativeQuery = true)
	Employee findByEmployeeId(int emp_Id);


	
	
	

}
