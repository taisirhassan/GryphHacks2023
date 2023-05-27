import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-4" id="mainNav">
    <div className="container-md"><a className="navbar-brand d-flex align-items-center" href="/">
    <img className='image-fluid' src='./src/assets/img/logo.webp' />
    </a>
    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
    <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/#">Home</a></li>
          <li className="nav-item">
            <a className="nav-link" href="/#pdf">PDF Summarizer</a></li>
          <li className="nav-item">
            <a className="nav-link" href="/#video">Video Summarizer</a></li>
          <li className="nav-item">
            <a className="nav-link" href="/#faqs">FAQs</a></li>
        </ul><a className="btn btn-primary shadow" role="button" href="/#contact" >Contact Us</a>
      </div>
    </div>
  </nav>


   </>
  )
}

export default Navbar