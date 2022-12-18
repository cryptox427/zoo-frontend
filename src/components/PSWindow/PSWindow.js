import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PSWindow.css";
import { Web3WrapperContext } from "contexts/Web3WrapperProvider";
import CountdownTimer from "react-component-countdown-timer";
import ProgressBar from "react-bootstrap/ProgressBar";
import CButton from "../Button";
import { CopyButton, Flex, TextInput } from "@contentful/f36-components";
import { useRef, useContext } from "react";
import Footer from '../Footer/Footer'

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

const IncomingEdit = (props) => {
  return (
    <Container className="widget-container pb-3">
      <input type="edit" className="bnb-input" placeholder="Status" />
      <p className="income-label">Incoming</p>
    </Container>
  );
};

const Widgets = (props) => {
  const [progressNow, setProgress] = useState(1);
  const amountRef = useRef(0.0);
  const referralAddress1 = useRef("");
  const referralAddress2 = useRef("");
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  const buyToken = async () => {
    let amount = amountRef.current.value;
    await wrapper?.mintToken(
      amount,
      referralAddress1.current.value,
      referralAddress2.current.value
    );
  };
  const handleInputChange = (e) => {
    setProgress((e.target.value / 120) * 100);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CountdownTimer count={5432} className="countdown-timer" noPoints />
          </Col>
        </Row>
        <Row className="justify-content-md-center pt-3">
          <Col className="">
            <ProgressBar now={progressNow} />
            <p className="min-value">30 $ZOO</p>
            <p className="max-value">120 $ZOO</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="widgets">
            <Container className="widget-container">
              <input
                type="number"
                className="bnb-input"
                ref={amountRef}
                placeholder="0.00"
                onChange={handleInputChange}
              />
              <CButton
                value="MAX"
                width="46px"
                height="23px"
                fontSize="11px"
                onClick={() => {
                  setProgress(100);
                  amountRef.current.value = 120;
                }}
              />
            </Container>
            <div className="buy">
              <CButton
                value="Buy with USDT"
                width="387px"
                height="31px"
                onClick={buyToken}
              />
              <span className="title-txt" style={{ marginLeft: "160px" }}>
                {" "}
                1 $ZOO = 8 USDT
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="refferal-panel">
          <div className="refferal-compnent-container container">
            <div className="row">
              <div className="title-section">
                <p className="refferal-title">Referral Address</p>
              </div>
              <div className="clipboard-edit">
                <Flex flexDirection="column">
                  <TextInput.Group>
                    <TextInput
                      defaultValue=""
                      placeholder="Referral Address1"
                      ref={referralAddress1}
                    />
                    <TextInput
                      defaultValue=""
                      placeholder="Referral Address2"
                      ref={referralAddress2}
                    />
                  </TextInput.Group>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PSWindow;
