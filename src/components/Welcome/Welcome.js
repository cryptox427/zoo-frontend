import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./welcome.css";
import BackImg from "../BackImg/BackImg";
import WalletConnect from "../WalletConnect";
import CButton from "../Button";

const connectWallet = (e) => {};

const Welcome = (props) => {
  return (
    <>
      <BackImg />
      <Container className="">
        <Row>
          <Col>
            <div className="welcome-panel">
              <Container>
                <Row className="justify-content-center">
                  <h1 className="welcome-title">
                    Welcome to Crazy Zoo Private Sale!
                  </h1>
                </Row>
                <Row className="justify-content-center">
                  <p className="welcome-explanation">
                    To proceed futher connect your wallet and get start!
                  </p>
                </Row>
                <WalletConnect />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
