import React, { useState } from "react";
import People from "./People";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutUs.css";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const person = People[currentIndex];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % People.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + People.length) % People.length);
  };

  return (
    <div>
      <img
        src={require("./IMG/Pempek/campuranPempek.jpg")}
        className="bgDwIMG"
        alt="background"
      />
      <div className="headFiller"></div>
      <div className="daWrap">
        <Container>
          <Row className="align-items-center justify-content-center text-center text-md-start">
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center mb-3 mb-md-0"
            >
              <img className="picture1" src={person.image} alt={person.name} />
            </Col>
            <Col xs={12} md={8} className="text-container">
              <h2>{person.name}</h2>
              <p>{person.info}</p>
              <p>{person.info2}</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={6} md={3} className="d-flex justify-content-between">
              <Button
                variant="primary"
                onClick={handlePrev}
                className="w-100 me-2"
              >
                Previous
              </Button>
              <Button
                variant="primary"
                onClick={handleNext}
                className="w-100 ms-2"
              >
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
