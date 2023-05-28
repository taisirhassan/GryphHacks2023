import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Options() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={3}>
          <h1>Start Chatting</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <Link to="/documents">
            <Button variant="primary" className="w-100 mb-3">
              Documents
            </Button>
          </Link>
          <Link to="/videos">
            <Button variant="primary" className="w-100">
              Videos
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Options;
