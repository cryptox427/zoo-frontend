import React from "react";
import { Container } from "react-bootstrap";
import frame1 from "./Frame1.png";
import frame2 from "./Frame2.png";
import frame3 from "./Frame3.png";
import frame4 from "./background.png";
import "./backimg.css";

const BackImg = (props) => {
  return (
    <>
      <img src={frame1} alt="frame1" className="frame1" />
      <img src={frame2} alt="frame2" className="frame2" />
      <img src={frame3} alt="frame3" className="frame3" />
      <img src={frame4} alt="frame3" className="frame4" />
    </>
  );
};

export default BackImg;
