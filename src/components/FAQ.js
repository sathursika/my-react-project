import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Ensure you have these imports

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null); // State to track the active accordion item

  const handleToggle = (key) => {
    // Toggle the active key to show/hide the answer
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section id="faq" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="mb-4 text-center" style={{ color: '#6f42c1', fontWeight: 'bold' }}>
          Frequently Asked Questions
        </h2>
        <Accordion activeKey={activeKey} >
          {[
            { question: 'What is digital strategy consulting?', answer: 'Digital strategy consulting helps businesses build a roadmap for digital transformation to achieve their goals.' },
            { question: 'How much do your services cost?', answer: 'We offer custom solutions that fit your budget and requirements.' },
            { question: 'What industries do you serve?', answer: 'Our services cater to a diverse range of industries, including e-commerce, healthcare, finance, and more.' },
            { question: 'How long does a project take?', answer: 'Project timelines vary based on the complexity and scope of work, but we strive to deliver on time.' },
            { question: 'Do you offer ongoing support?', answer: 'Yes, we provide ongoing support and maintenance packages tailored to your needs.' },
          ].map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} style={{backgroundColor:'rgb(200, 176, 220)'}}>
              <Accordion.Header onClick={() => handleToggle(index.toString())} style={{ color: '#6f42c1' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  {activeKey === index.toString() ? (
                    <AiOutlineMinus style={{ marginRight: '10px', color: '#6f42c1' }} />
                  ) : (
                    <AiOutlinePlus style={{ marginRight: '10px', color: '#6f42c1' }} />
                  )}
                  {item.question}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
