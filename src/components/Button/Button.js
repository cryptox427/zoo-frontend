import React from "react";
import { Nav } from "react-bootstrap";
import "./button.css";

const CButton = (props) => {
  return (
    <Nav.Link
      className="custom-button"
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
      }}
    >
      {props.value}
    </Nav.Link>
  );
};

export default CButton;
