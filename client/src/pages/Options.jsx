import React from "react";
import "./Options.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

function Options() {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <Navbar />

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="card chat-app">
        <div id="plist" className="people-list">
          <div className="logo-container">
            <h1 className="text-center"> Summarizer</h1>
            <img
              src="https://th.bing.com/th/id/OIG.F3vFIW_eL7tZoghCHVe2?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn"
              alt="Logo"
              className="logo"
              size="5px"
              roundedCircle="true"
            />
          </div>

          <ul className="list-unstyled chat-list mt-2 mb-0">
            <li className="clearfix" style={{ width: '600px' }}>
              <img
                src="https://th.bing.com/th/id/OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa?pid=ImgDet&rs=1"
                alt="avatar"
              />
              <div className="about">
                <div className="name">Video</div>
                <div className="status">
                  {" "}
                  <i className="fa fa-circle online"></i> Active{" "}
                </div>
              </div>
            </li>

            <li className="clearfix active" style={{ width: '600px' }}>
              <img
                src="https://th.bing.com/th/id/OIP.cYFSITHDuw6eXv-8Z8AOTQHaHa?pid=ImgDet&rs=1"
                alt="avatar"
              />
              <div className="about">
                <div className="name">Document</div>
                <div className="status">
                  {" "}
                  <i className="fa fa-circle online"></i> Active{" "}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="chat">
          <div className="chat-header clearfix">
            <div className="row">
              <div className="col-lg-6">
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#view_info"
                ></a>
              </div>
            </div>
          </div>
          <Container>
            <Row className="justify-content-center mt-5">
              <Col md={6}>
                <h1 className="text-center">Start Chatting</h1>
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
      <Footer />
    </>
  );
}

export default Options;
