
package com.shop.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shop.model.Login;
import com.shop.model.Status;
import com.shop.model.User;
import com.shop.repository.UserRepository;
import com.shop.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController
{
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/user/register")
     public Status registerUser(@RequestBody User newUser)
    {
    	if(userService.existsByEmail(newUser.getEmail()))
    	{
    		return Status.USER_ALREADY_EXISTS;
    	}
        return this.userService.registerUser(newUser);
    }

    //this method is for validating the user when user logs in
    @PostMapping("/user/login")
    
    public Status authenticate(@RequestBody Login loginDto) {
        
    	if (userService.isCredentialValid(loginDto.getEmail(), loginDto.getPassword())) {
            return Status.SUCCESS;
            }
        else {
            return Status.FAILURE;
            }
    }
    @PutMapping("/user/forgotpassword")
    public Status changePassword(@RequestBody User user)
    {
    	if(userService.existsByEmail(user.getEmail()))
    	{
    		userService.changePassword(user.getEmail(),user.getPassword());
    		return Status.SUCCESS;
    	}
    	return Status.FAILURE;
    	
    }
    /*
    @PostMapping("/user/cart")
    public Status addtoCart(@RequestBody Cart cart)
    {
    
    }*/
    
   

}



