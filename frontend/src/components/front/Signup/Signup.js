import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";

import './Signup.css';


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName,setUserName]=useState("");
  const history=useHistory();
  const [mobile,setMobile]=useState("");



  function validateForm() {
    return email.length > 0 && password.length > 0 && mobile.length===10;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users={userName,mobile,email,password};        
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/register',
      data: users
  })
  .then(function (response) {
    if(response.data==='SUCCESS')
    {
      alert("Registration Successfull");
      history.push("/signin");

    }
    else
    {
      alert("User Already Exists");
      history.push("/signin");
    }
  })
  .catch(function (error) {
      console.log(error);
  });     
    


  }

  return (
    // <div>
    //     <div className="header">
    //     <div><h1><Link to="/" className="Logo">ONLINE SHOPPING CART</Link></h1></div>
    //     <div className="header-links">
    //     <ul><li><Link to="/">Home</Link></li></ul>
    //     <ul><li><Link to="/signin">signin</Link></li></ul>
    //     <ul><li><Link to="/signup">signup</Link></li></ul>
    //     </div>
    //     </div>
        
       
    <div className="Login">
      <Form className="form" onSubmit={handleSubmit}>
      <Form.Group  size="lg" controlId="userName">
          <Form.Label>UserName</Form.Label><p>
          <Form.Control 
            autoFocus
            type="text"
            placeholder="enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          </p>
        </Form.Group>         
                    
        <Form.Group  size="lg" controlId="mobile">
          <Form.Label>Mobile</Form.Label><p>
          <Form.Control 
            type="number"
            placeholder="enter mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          </p>
        </Form.Group>         
      
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>

          <p>
          <Form.Control
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
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </p>
          
        </Form.Group>
        <Button  block size="lg" type="submit" disabled={!validateForm()}>
          Signup
        </Button>
      </Form>
    </div>
    // </div>
     
  );
}
