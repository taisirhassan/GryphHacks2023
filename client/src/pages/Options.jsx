import React from 'react';
import './Options.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";


function Options() {
  return (
    <>
      <Navbar />

      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

      <div className="card chat-app">
        <div id="plist" className="people-list">

          <div className="logo-container">
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Logo" className="logo" />
          </div>

          <ul className="list-unstyled chat-list mt-2 mb-0">

            <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
              <div className="about">
                <div className="name">Video</div>
                <div className="status"> <i className="fa fa-circle online"></i> Active </div>
              </div>
            </li>

            <li className="clearfix active">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
              <div className="about">
                <div className="name">Document</div>
                <div className="status"> <i className="fa fa-circle online"></i> Active </div>
              </div>
            </li>

          </ul>
        </div>

        <div className="chat">
          <div className="chat-header clearfix">
            <div className="row">
              <div className="col-lg-6">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                </a>
                <div className="chat-about">
                  <h6 className="m-b-0">Aiden Chavez</h6>
                  <small>Last seen: 2 hours ago</small>
                </div>
              </div>
              <div className="col-lg-4  text-right logo-link">
                <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
              </div>
            </div>
          </div>
          <Container>
            <Row className="justify-content-center mt-5">
              <Col md={6}>
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

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Options;
