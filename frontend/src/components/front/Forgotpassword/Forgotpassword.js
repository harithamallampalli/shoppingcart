import './Forgotpassword.css';
import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function Forgotpassword() {
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
        method: 'put',
        url: 'http://localhost:8080/user/forgotpassword',
        data: users
    })
    .then(function (response) {
      if(response.data==='SUCCESS')
      {
          alert("PASSWORD CHANGED SUCCESSFULLY");
        history.push("/signin");
  
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
              placeholder="enter  new password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </p>
            
          </Form.Group>
          
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Set password
          </Button>
          <br></br>
          
        </Form>
      </div>
    
       
    );
  }
  