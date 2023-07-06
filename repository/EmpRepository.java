package com.hrmsbackend.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hrmsbackend.app.model.Employee;

@Repository

public interface EmpRepository extends JpaRepository<Employee, Integer> {

	@Query(value = "select * from employee where getupdateEmp=?;", nativeQuery = true)
//	Employee updateEmp1(int id);

	Employee updateEmp(int id);
//	Employee updateEmp(String empName);
//	Employee searchEmp(String empskills);
//	Employee updateEmp(String empName);

}
