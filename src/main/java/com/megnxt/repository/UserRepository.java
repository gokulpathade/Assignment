package com.megnxt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.megnxt.modal.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value = "select * from user where id=?;", nativeQuery = true)
	User findByUserId(int id);
}
