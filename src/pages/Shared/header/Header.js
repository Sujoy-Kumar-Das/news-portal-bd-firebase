import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LeftSideNav from "../leftSideNav/LeftSideNav";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">News portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#deets">Catagory</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                All news
              </Nav.Link>
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
