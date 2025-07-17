import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header className="bg-primary text-white py-3 shadow-sm">
    <div className="container d-flex justify-content-between align-items-center">
      {/* Logo and Brand */}
      <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
        <img
          src="/images/Logo.png"
          alt="SVK Logo"
          style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "10px" }}
        />
        <span className="fs-5 fw-bold">SVK Web Solutions</span>
      </Link>

      {/* Navigation */}
      <nav>
        <Link to="/" className="text-white text-decoration-none me-3">Home</Link>
        <Link to="/about" className="text-white text-decoration-none me-3">About</Link>
        <Link to="/services" className="text-white text-decoration-none me-3">Services</Link>
        <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
