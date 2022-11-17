import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
// import BackImg from "./components/BackImg";
import PSWindow from "./components/PSWindow";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
          <PSWindow />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
