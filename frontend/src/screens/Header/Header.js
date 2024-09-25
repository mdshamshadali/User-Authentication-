import React from 'react'
import { Container, Form,  Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Navbar.Brand href="/Regiser">Register</Navbar.Brand>
              <Navbar.Brand href="/Login">Login</Navbar.Brand>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header
