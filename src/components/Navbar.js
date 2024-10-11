import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Image } from 'react-bootstrap';
import logo from '../images/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <BootstrapNavbar 
      expand="lg" 
      style={{ 
        background: 'linear-gradient(135deg, #6200EA, #A92FF3)' 
      }} 
      className="navbar-dark"
    >
      <Container>
        {/* Logo with Brand Name */}
        <BootstrapNavbar.Brand href="#" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '30px' }}>
          <Image src={logo} alt="Logo" width="35" height="30" style={{ marginRight: '10px' }} />
          AT Digital
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services" style={{ color: 'white' }}>Services</Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>About Us</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white' }}>Contact</Nav.Link>
            <Nav.Link href="#careers" style={{ color: 'white' }}>Careers</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
