import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

const Navigation = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">pawtio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
);

export default Navigation;
