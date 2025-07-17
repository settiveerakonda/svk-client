import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer className="bg-light text-dark pt-4 mt-5 border-top">
    <div className="container text-center text-md-start">
      <div className="row">
        {/* Brand Info */}
        <div className="col-md-4 mb-3">
          <h5 className="fw-bold">SVK Web Solutions</h5>
          <p>Empowering businesses with modern, scalable, and secure web solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-3">
          <h6 className="fw-semibold">Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none text-dark">Home</a></li>
            <li><a href="/about" className="text-decoration-none text-dark">About</a></li>
            <li><a href="/services" className="text-decoration-none text-dark">Services</a></li>
            <li><a href="/contact" className="text-decoration-none text-dark">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-md-4 mb-3">
          <h6 className="fw-semibold">Contact</h6>
          <p>Email: svkwebsolutions882@gmail.com</p>
          <p>Phone: +91 97046 12784</p>
          <p>Location: Amarvathi, India</p>
        </div>
      </div>

      <div className="text-center py-3 border-top mt-3 text-secondary">
        © 2025 SVK Web Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
