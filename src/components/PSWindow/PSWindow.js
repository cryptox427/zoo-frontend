import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PSWindow.css";
import CountdownTimer from "react-component-countdown-timer";
import ProgressBar from "react-bootstrap/ProgressBar";
import CButton from "../Button";
import { CopyButton, Flex, TextInput } from "@contentful/f36-components";

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
      <input type="edit" className="bnb-input" value="0.00" />
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
          <p className="min-value">0 USDT</p>
          <p className="max-value">40 USDT</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="widgets">
          <BNBEdit />
          <div className="buy">
            <CButton value="Buy with USDT" width="387px" height="31px" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ClipboardEdit = (props) => {
  return (
    <Flex flexDirection="column">
      <TextInput.Group>
        <TextInput isDisabled isReadOnly defaultValue={props.val} />
        <CopyButton
          value={props.value}
          tooltipProps={{ placement: "right", usePortal: true }}
        />
      </TextInput.Group>
    </Flex>
  );
};

const RefferalLink = (props) => {
  return (
    <div className="refferal-compnent-container container">
      <div className="row">
        <div className="title-section">
          <p className="refferal-title">Refferal Link</p>
        </div>
        <div className="clipboard-edit">
          <ClipboardEdit value="https://refferallink.com" />
        </div>
      </div>
    </div>
  );
};

const PSWindow = (props) => {
  return (
    <>
      <div className="main-panel">
        <Title />
        <Widgets className="widget-container" />
      </div>
      <div className="main-panel-incoming">
        <Container>
          <IncomingEdit />
          <span>
            <p className="min-max-buy">Minimum Buy</p>
            <p className="price">30 $ZOO</p>
          </span>
          <span>
            <p className="min-max-buy">Maximum Buy</p>
            <p className="price">120 $ZOO</p>
          </span>
        </Container>
      </div>
      <div className="refferal-panel">
        <Container>
          <RefferalLink />
        </Container>
      </div>
    </>
  );
};

export default PSWindow;
