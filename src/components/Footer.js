import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Import Image from react-bootstrap
import logo from '../images/logo.png'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #6200EA, #A92FF3)'  }} className="text-white py-4">
      <Container>
        <Row>
          <Col md={4} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={logo} alt="Logo" width="35" height="30" style={{ marginRight: '10px' }} />
              <h5>AT Digital</h5>
            </div>
            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
          </Col>
          <Col md={4}>
            <h5>Our Technologies</h5>
            <ul className="list-unstyled" >
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NodeJS</li>
              <li>NextJS</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 >Our Services</h5>
            <ul className="list-unstyled">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </Col>
        </Row>
        {/* Privacy Policy and Terms & Conditions Links */}
        <Row className="justify-content-center align-items-center mt-3">
          <Col md={6} className="text-center">
            <hr style={{ borderTop: '3px solid white', margin: '20px 0' }} />
            <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
              Privacy Policy
            </a>
            <span style={{ color: 'white' }}> | </span>
            <a href="/terms-conditions" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
              Terms & Conditions
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
