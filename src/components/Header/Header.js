import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "./Logo_letters1.png";
import "./header.css";
import "@fontsource/ubuntu";
import CButton from "../Button";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">
          <img src={mainLogo} alt="logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="home" href="/home">
              Home
            </Nav.Link>
            <Nav.Link href="/private_sale">Private Sale</Nav.Link>
            <Nav.Link href="/sw ap">Swap</Nav.Link>
            <Nav.Link href="/zooNFTs">Crazy Zoo NFT</Nav.Link>
            <Nav.Link href="/staking">Staking</Nav.Link>
            <Nav.Link href="/connect_wallet">Connect Wallet</Nav.Link>
            <CButton
              value="Connect Wallet"
              width="156px"
              height="40px"
            ></CButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
