import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";
import Header from "../Header/Header";
// import BackImg from "./components/BackImg";
import PSWindow from "../PSWindow/PSWindow";
import Welcome from "../Welcome/Welcome";

const TotalContainer = (props) => {
  return (
    <>
      <MediaQuery minWidth={925}>
        <Container fluid>
          <Row>
            <Col>
              <Header />
              <PSWindow />
            </Col>
          </Row>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={924}>
        <Welcome />
      </MediaQuery>
    </>
  );
};

export default TotalContainer;
