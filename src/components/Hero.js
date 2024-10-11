import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';
import backgroundImage from '../images/x.png.png'; // Path to your background image

const Hero = () => {
  return (
    <section 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '90vh', // Adjust height as necessary
        display: 'flex', // Added for Flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        textAlign: 'center' // Center text
      }}
    >
      <Container className="text-box" style={{ maxWidth: '600px', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <p style={{ fontSize: '1.2rem' }}>Let’s move your business forward with our expert digital services.</p>
        <Button variant="success" size="lg">Get Free Consultation</Button>
      </Container>
    </section>
  );
};

export default Hero;
