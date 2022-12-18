import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Twitter, Telegram, Discord, Medium } from 'react-bootstrap-icons';

import "./footer.css";

const Footer = (props) => {
  return (
    <div className="footer_menu">
      <div className="social_buttons">
        <Twitter />
        <Telegram />
        <Discord />
        <Medium />
      </div>
      <div className="social_texts">
        © 2022 Crazy Zoo. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
