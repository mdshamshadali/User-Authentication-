import React, { useState } from 'react'
import Header from '../Header/Header'
import { Row, Form, Col, Button, Navbar } from "react-bootstrap";
import axios from 'axios';

import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/Login", {
        email,
        password,
        ConfirmPassword,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/MainLandingPage");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <center>
        <Form onSubmit={handleSubmit} className="registerContainer">
          <h2>Login Page</h2>
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
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="ConfirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/Register" />
            <Navbar.Brand style={{ color: "blue" }} href="/">
              Register
            </Navbar.Brand>
          </Col>
        </Row>
      </center>
    </div>
  );
}

export default Login
