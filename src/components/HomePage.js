import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typed from "react-typed";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div id="home">
      <div className="content">
        <Container>
          <Row>
            <Col xl={8} md={12}>
              <div className="text-container">
                <h1 className="title">
                  Kord
                  <br />
                  Boniadi
                </h1>
                <h4 className="typed-text">
                  <Typed
                    strings={[
                      "Coder",
                      "Full Stack",
                      "Programmer",
                      "Student",
                      "Software Engineer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </h4>
                <div className="d-flex flex-row flex-wrap">
                  <Button type="button" variant="outline-primary" href="../assets/kord-boniadi-resume.pdf" target="_blank" className="btn button primary-button mr-4 text-uppercase">Resume</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
