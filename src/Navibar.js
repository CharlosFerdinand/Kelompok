import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";
const CustomNavbar = () => {
  const [time, setTime] = useState(null);
  // utk fetch data dr API
  useEffect(() => {
    getTime();
  }, []);

  function getTime() {
    const url =
      "https://api.weatherapi.com/v1/current.json?key=70a4b36e34664c10aca61607241305&q=Tangerang&aqi=no";
    axios
      .get(url)
      .then((response) => {
        setTime(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Weather">Weather</Nav.Link>
            <Nav.Link href="/Recipe">Recipe</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
          </Nav>
          <Navbar.Brand href="/">
            {time && `Local Time : ${time.location.localtime}`}
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
