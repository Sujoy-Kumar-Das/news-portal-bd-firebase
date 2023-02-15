import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../leftSideNav/LeftSideNav";
import Image from 'react-bootstrap/Image'
import {FaUser } from 'react-icons/fa';
const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/' className="text-decoration-none">News portal bd</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' className="text-decoration-none">Home</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none" to='/'>News</Link></Nav.Link>
          </Nav>
          <Nav>
            <div>
              {user && user.uid ? <Image roundedCircle src={user.photoURL} style={{height:'40px'}}></Image>:<FaUser></FaUser> }
            </div>
            <Nav.Link eventKey={2}>
              login/singup
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
