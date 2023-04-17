import { Container, Row, Col } from "react-bootstrap";
import AddTaskButton from "./AddTaskButton";

function Header() {
  return (
    <div>
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
        <AddTaskButton />
      </header>
    </div>
  );
}

export default Header;
