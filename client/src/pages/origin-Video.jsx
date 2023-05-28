import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function VideosPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleLinkChange = (event) => {
    const link = event.target.value;
    setVideoLink(link);
  };

  const handleFileSubmit = () => {
    // Logic for handling video file submission
    console.log("Video file submitted");
    // Set output text
    setOutputText("Video file submitted");
  };

  const handleLinkSubmit = () => {
    // Logic for handling video link submission
    console.log("Video link submitted");
    // Set output text
    setOutputText("Video link submitted");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Videos Page</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Card className="p-4">
            <h2 className="mb-3">Upload Video</h2>
            <Form>
              <Form.Group controlId="videoFile">
                <Form.Label>Choose a video file:</Form.Label>
                <Form.Control
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </Form.Group>
              <div className="mt-3">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleFileSubmit}
                  disabled={!videoFile}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Card className="p-4">
            <h2 className="mb-3">Enter Video Link</h2>
            <Form>
              <Form.Group controlId="videoLink">
                <Form.Label>Enter video link:</Form.Label>
                <Form.Control
                  type="text"
                  value={videoLink}
                  onChange={handleLinkChange}
                />
              </Form.Group>
              <div className="mt-3">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleLinkSubmit}
                  disabled={!videoLink}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>Chat Output</h5>
              {outputText && <p>{outputText}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default VideosPage;
