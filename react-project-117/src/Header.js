import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ user, setUser }) {

  
  function handleLoginClick() {
    setUser({
      id: 1,
      username: "Reid",
    });
  }

  function handleLogoutClick() {
    setUser(null);
  }

  return (
    
    <header>
    <div className="divname">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
                <Nav.Link as={Link} to="/petform">
                  Pet Form
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      <h1>PetLand</h1>
      <nav>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
