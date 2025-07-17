import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4 fw-bold text-center">About SVK Web Solutions</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <p className="lead">
            SVK Web Solutions, founded by <strong>Setti Veera Konda</strong>, is committed to delivering
            exceptional web experiences using cutting-edge technologies. Our mission is to empower startups,
            small businesses, and professionals with digital platforms that drive success.
          </p>
          <p>
            We specialize in building modern, scalable, and secure websites and web apps using the latest tools
            like React.js, Node.js, MongoDB, and cloud technologies. We ensure every project is responsive,
            user-friendly, and SEO-optimized.
          </p>
        </div>

        <div className="col-md-6">
          <div className="bg-white border rounded p-4 shadow-sm h-100">
            <h5 className="fw-semibold">🌟 Our Core Values</h5>
            <ul className="list-unstyled mt-3">
              <li>✔️ Client-Centered Design & Development</li>
              <li>✔️ Clean Code & Scalable Architecture</li>
              <li>✔️ On-time Delivery with Quality Assurance</li>
              <li>✔️ Constant Innovation & Learning</li>
              <li>✔️ Strong Ethical and Transparent Communication</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="fw-bold">Let’s work together to build your online presence!</h4>
        <a href="/contact" className="btn btn-primary mt-3">Contact SVK</a>
      </div>
    </div>
  </section>
);

export default About;
