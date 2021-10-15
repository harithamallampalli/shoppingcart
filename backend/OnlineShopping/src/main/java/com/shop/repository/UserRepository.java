package com.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.shop.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>
{
	Boolean existsByEmail(String email);
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	@Modifying
	@Query(value = "update User u set u.password =:password where u.email =:email")
	void updateUser(@Param("email") String email,@Param("password") String password);


}
