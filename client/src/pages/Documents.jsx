import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function DocumentsPage() {
  const [chatText, setChatText] = useState("");

  const handleUpload = () => {
    // Logic for handling document upload
    console.log("Upload button clicked");
  };

  const handleSubmit = () => {
    // Logic for handling document submission
    console.log("Submit button clicked");
  };

  const handleChatChange = (event) => {
    setChatText(event.target.value);
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    // Logic for handling chat submission
    console.log("Chat submitted:", chatText);
    setChatText("");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center">Documents Page</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={6} className="d-flex justify-content-around">
          <Button variant="primary" className="mr-3" onClick={handleUpload}>
            Upload
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>Chat Output</h5>
              <Form onSubmit={handleChatSubmit}>
                <Form.Group controlId="chatInput">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={chatText}
                    onChange={handleChatChange}
                    placeholder="Enter text..."
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DocumentsPage;
