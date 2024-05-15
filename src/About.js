import People from "./People";
import Person from "./Person";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <div className="background">
      <img src={require("./IMG/Pempek/campuranPempek.jpg")} className="bgIMG" />
      <div className="headFiller"></div>
      <div className="daWrap">
        <Container>
          <Row>
            {People.map((person, index) => (
              <Col key={index} sm={6}>
                <Person
                  name={person.name}
                  image={person.image}
                  info={person.info}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
