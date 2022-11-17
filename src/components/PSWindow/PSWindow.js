import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PSWindow.css";
import CountdownTimer from "react-component-countdown-timer";
import ProgressBar from "react-bootstrap/ProgressBar";
import CButton from "../Button";
import BackImg from "../BackImg/BackImg";

const Title = (props) => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="ps-title ">
            <span className="title-txt">Private Sale starts in</span>
          </Col>
          <br />
          <br />
        </Row>
      </Container>
    </>
  );
};

const BNBEdit = (props) => {
  return (
    <Container className="widget-container">
      <input type="edit" className="bnb-input" />
      <CButton value="MAX" width="46px" height="23px" fontSize="11px" />
    </Container>
  );
};

const IncomingEdit = (props) => {
  return (
    <Container className="widget-container pb-3">
      <input type="edit" className="bnb-input" placeholder="Status" />
      <p className="income-label">Incoming</p>
    </Container>
  );
};

const Widgets = (props) => {
  const progressNow = 1;
  return (
    <Container>
      <Row>
        <Col>
          <CountdownTimer count={5432} className="countdown-timer" noPoints />
        </Col>
      </Row>
      <Row className="justify-content-md-center pt-3">
        <Col className="">
          <ProgressBar now={progressNow} />
          <p className="min-value">0 BNB</p>
          <p className="max-value">40 BNB</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="widgets">
          <BNBEdit />
          <div className="buy">
            <CButton value="Buy with BNB" width="387px" height="31px" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const PSWindow = (props) => {
  return (
    <>
      <BackImg />
      <div className="main-panel">
        <Title />
        <Widgets className="widget-container" />
      </div>
      <div className="main-panel-incoming">
        <Container>
          <IncomingEdit />
          <span>
            <p className="min-max-buy">Minimum Buy</p>
            <p className="price">0.01 BNB</p>
          </span>
          <span>
            <p className="min-max-buy">Maximum Buy</p>
            <p className="price">1 BNB</p>
          </span>
        </Container>
      </div>
    </>
  );
};

export default PSWindow;
