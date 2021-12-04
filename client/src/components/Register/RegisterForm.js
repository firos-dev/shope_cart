import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";

import axios from 'axios'

/**
 * Login Form 
 * Form Fields handling using useState hook
 * @returns 
 */
function RegisterForm(props) {

    
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  

  const nameHandler = (event) => {
    setName(event.target.value)
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
    }
    
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value)
  }

  //form submit
  //name, email, password, confirmPassword
  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post('/api/register/user', {
      name,
      email,
      password
    }).then((response) => {
      console.log(response);
      props.onHide()
    })

  };

  return (
    <div>
      <h2>Register</h2>
          <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={nameHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={ passwordHandler } />
              </Form.Group>
              
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={ confirmPasswordHandler } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  )
}

export default RegisterForm;
