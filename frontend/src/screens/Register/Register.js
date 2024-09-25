import React, { useState } from 'react'
import Header from '../Header/Header'
import { Row, Form, Col, Button, Navbar, } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../Register/Register.css'
import axios from 'axios';


const Register = () => {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Confirmpassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/Register", {
        name,
        email,
        password,
        Confirmpassword,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
      navigate('/Login')
  }

return (
    <div>
      <Header />
      <center>
        <Form onSubmit={handleSubmit} className="registerContainer">
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='text'
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}            />
          </Form.Group>

          <Form.Group controlId ="confirmPassword" >
            <Form.Label>Confirm Password</Form.Label> 
            <Form.Control
              type="Confirmpassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login" />
            <Navbar.Brand style={{ color: "blue" }} href="/">
              Login
            </Navbar.Brand>
          </Col>
        </Row>
      </center>
    </div>
  )
}

export default Register
