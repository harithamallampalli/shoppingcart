package com.shop.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

   private int id;

    private String userName;
    private String mobile;
    private String email;
    private String password;

    

    public User(){
    }

    public User(String userName, String mobile,String email,String password) {
        this.userName = userName;
        this.mobile=mobile;
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", mobile=" + mobile + ", email=" + email + ", password="
				+ password + "]";
	}
    
    

   }
