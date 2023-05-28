import React, { useState } from "react";
import "./Videos.css";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function Videos() {
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
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="card chat-app">
        <div id="plist" className="people-list">
          {/* <div className="logo-container">
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Logo" className="logo" />
          </div> */}
        </div>

        <div className="chat">
          <div className="chat-header clearfix">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-4  text-right logo-link">
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-secondary"
                >
                  <i className="fa fa-camera"></i>
                </a>
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-primary"
                >
                  <i className="fa fa-image"></i>
                </a>
                <a href="javascript:void(0);" className="btn btn-outline-info">
                  <i className="fa fa-cogs"></i>
                </a>
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-warning"
                >
                  <i className="fa fa-question"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="chat-history">
            <ul className="m-b-0">
              <Container className="mt-100">
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
              </Container>
            </ul>
          </div>

          <div className="chat-message clearfix">
            <div className="input-group mb-0">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-send"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter text here..."
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Videos;
