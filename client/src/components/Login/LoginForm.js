import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";

import axios from 'axios'

/**
 * Login Form 
 * Field handling with useState hook
 * @returns 
 */
function LoginForm(props) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
    console.log(password);
  }



  //form submit
  //name, email, password, confirmPassword
  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post('/api/register/user', {
      email,
      password
    }).then((response) => {
      console.log(response);
      props.onHide()
    })

  };
  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={ passwordHandler } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
