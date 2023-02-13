import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftSideNav from "../leftSideNav/LeftSideNav";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to='/'>News portal</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link to='/catagory'>Catagory</Nav.Link>
              <Nav.Link to=''>All news</Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
