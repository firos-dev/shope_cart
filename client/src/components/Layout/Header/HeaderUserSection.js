import React, { useState } from "react";

import { Dropdown } from "react-bootstrap";

import { FaUserCircle } from "react-icons/fa";

import Login from "../../Login/Login";

import Register from './../../Register/Register';

import axios from 'axios'


function HeaderUserSection() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    
  //Auth0 Login
  const loginHandler = () => {
    window.location.href = 'http://localhost:3001/login'
  }
  
  //Auth0 Logout
  const logoutHandler = () => {
    window.location.href = 'http://localhost:3001/logout'
  }

  return (
      <div>
          {showLogin ?
              <Login show={showLogin} onHide={() => setShowLogin(false)} /> : null
          }
          {showRegister ?
              <Register show={showLogin} onHide={() => setShowRegister(false)} /> : null
          }
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="border-0 bg-transparent mt-1 shadow-none"
        >
          <button className="border-0 bg-transparent">
            <FaUserCircle fontSize="1.75rem" style={{color: '#000'}}/>
          </button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={loginHandler}>
            Login
          </Dropdown.Item>
          <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default HeaderUserSection;
