import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold">Our Services</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold">🌐 Website Development</h5>
              <p className="card-text">We develop static and dynamic websites that are fast, secure, and SEO-friendly using modern tech stacks.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold">🛒 E-commerce Solutions</h5>
              <p className="card-text">Custom e-commerce websites with integrated payment gateways, admin panels, and shopping experiences.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold">📈 SEO & Analytics</h5>
              <p className="card-text">Optimize your website’s visibility and performance with our expert SEO strategies and analytics integration.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold">🎨 UI/UX & Branding</h5>
              <p className="card-text">Professional design services including logo creation, wireframes, prototypes, and brand identity development.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold">🧠 MERN Stack Development</h5>
              <p className="card-text">Full-stack development using MongoDB, Express.js, React, and Node.js to power scalable web applications.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold">☁️ Deployment & Hosting</h5>
              <p className="card-text">Deployment on Netlify, Vercel, or VPS with domain setup, HTTPS configuration, and CI/CD integration.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="/contact" className="btn btn-primary btn-lg">Get a Free Quote</a>
      </div>
    </div>
  </section>
);

export default Services;
