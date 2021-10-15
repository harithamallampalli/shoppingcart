import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Signin.css';
import {Link} from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users={email,password};  
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/login',
      data: users
  })
  .then(function (response) {
    if(response.data==='SUCCESS')
    {
      localStorage.setItem('user',email);
      history.push("/products");
      window.location.reload();

    }
    else
    {
      alert("User Not Exists");
      history.push("/signup");
    }
  })
  .catch(function (error) {
      console.log(error);
  });     
     
    
    
  }

  return (
    // <div>
    // <div className="header">
    // <div><h1><Link to="/" className="Logo">ONLINE SHOPPING CART</Link></h1></div>
    // <div className="header-links">
    // <ul><li><Link to="/">Home</Link></li></ul>
    // <ul><li><Link to="/signin">signin</Link></li></ul>
    // <ul><li><Link to="/signup">signup</Link></li></ul>
    // </div>
    // </div>
    
    <div className="Login1">
      <Form  className="a" onSubmit={handleSubmit}>
        <Form.Group  size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <p>
          
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
        
          />
          </p>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label><p>
          <Form.Control
            type="password"
            value={password}
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </p>
          
        </Form.Group>
        
        <Button  className="b1" block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <br></br>
        <p>
        <Link to="/forgotpassword">
        <Button  className="b1" block size="lg" type="submit">
          Forget Password
        </Button>
        </Link>
        </p>
       
      </Form>
    </div>
    // </div>
    
  );
}


