import { Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  return (
    <div className="App bg-dark text-light">
      <header>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to TaskifyMe</h1>
              <p>
                TaskifyMe is a simple task management system that helps you keep
                track of your tasks and deadlines.
              </p>
            </Col>
            <Col>
              <img src="/taskifyme-logo.png" alt="TaskifyMe logo" />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Header;
