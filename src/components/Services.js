import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../images/image 1.png'; // Adjust the path as per your structure
import image2 from '../images/image 2.png'; // Adjust the path as per your structure

const Services = () => {
  return (
    <section id="services" style={{ padding: '60px 0' }}>
      <Container>
        <Row className="mb-5">
          {/* Optional Section Title */}
          {/* <Col className="text-center">
            <h2>Our Services</h2>
          </Col> */}
        </Row>
        <Row>
          {/* First Card */}
          <Col xs={12} md={12} lg={12}> {/* Full width on all screens */}
            <Card className="mb-4" style={{ border: 'none' }}>
              <Row className="g-0">
                <Col xs={12} md={5}> {/* Adjust image column to occupy full width */}
                  <Card.Img 
                    src={image1} 
                    alt="Web & Mobile App Development" 
                    style={{ height: '220px', width: '300px', objectFit: 'cover' }} // Full width and adjustable height
                  />
                </Col>
                <Col xs={12} md={7}>
                  <Card.Body>
                    <Card.Title style={{ color: '#6f42c1', fontWeight: 'bold' }}>Web & Mobile App Development</Card.Title>
                    <Card.Text>
                    Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                    </Card.Text>
                    <Button style={{ backgroundColor: '#ff9800', borderColor: '#ff9800' }}>Learn More</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Second Card */}
          <Col xs={12} md={12} lg={12}> {/* Full width on all screens */}
            <Card className="mb-4" style={{ border: 'none' }}>
              <Row className="g-0">
                <Col xs={12} md={7}>
                  <Card.Body>
                    <Card.Title style={{ color: '#6f42c1', fontWeight: 'bold' }}>Digital Strategy Consulting</Card.Title>
                    <Card.Text>
                    Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.                    </Card.Text>
                    <Button style={{ backgroundColor: '#ff9800', borderColor: '#ff9800' }}>Learn More</Button>
                  </Card.Body>
                </Col>
                <Col xs={12} md={5}> {/* Adjust image column to occupy full width */}
                  <Card.Img 
                    src={image2} 
                    alt="Digital Strategy Consulting" 
                    style={{ height: '250px', width: '360px', objectFit: 'cover' }}                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
