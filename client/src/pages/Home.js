import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; // move Contact form to a separate file if not already

const Home = () => (
  <div>

   <section
  className="text-white text-center"
  style={{
    backgroundImage: 'url("/images/1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "540px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  <div>
    <h1 className="display-4 fw-bold">Welcome to SVK Web Solutions</h1>
    <p className="lead mt-3">
      Empowering your digital presence with stunning, fast, and scalable websites.
    </p>
    <a href="/services" className="btn btn-light btn-lg mt-4">
      Explore Our Services
    </a>
  </div>
</section>


    {/* WHY CHOOSE US */}
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Why Choose Us?</h2>
        <div className="row g-4">
          {[
            { title: "⚡ Fast Performance", desc: "We craft websites that load quickly and provide an excellent user experience." },
            { title: "🔒 Secure & Reliable", desc: "Built with security best practices and hosted on trusted platforms." },
            { title: "💼 Professional Design", desc: "Pixel-perfect UI with responsive and engaging layouts for every device." }
          ].map((feature, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT SECTION */}
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-center">About SVK Web Solutions</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <p className="lead">
            SVK Web Solutions, founded by <strong>Setti Veera Konda</strong>, delivers exceptional web experiences using cutting-edge technologies.
          </p>
          <p>
            We build modern, scalable, and secure websites using React.js, Node.js, MongoDB, and cloud platforms. Our focus is on clean design, fast performance, and SEO.
          </p>
        </div>
        <div className="col-md-6">
          <div className="bg-white border rounded p-4 shadow-sm h-100">
            <h5 className="fw-semibold">🌟 Our Core Values</h5>
            <ul className="list-unstyled mt-3">
              <li>✔️ Client-Centered Development</li>
              <li>✔️ Clean & Scalable Code</li>
              <li>✔️ Timely Delivery with Quality</li>
              <li>✔️ Innovation & Learning</li>
              <li>✔️ Transparent Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* SERVICES SECTION */}
    <div className="container mb-5">
      <h2 className="text-center mb-5 fw-bold">Our Services</h2>
      <div className="row g-4">
        {[
          { icon: "🌐", title: "Website Development", desc: "Static and dynamic websites that are fast, secure, and SEO-optimized." },
          { icon: "🛒", title: "E-commerce Solutions", desc: "Custom online stores with secure payment, admin panels, and product management." },
          { icon: "📈", title: "SEO & Analytics", desc: "Improve visibility and performance with SEO and real-time analytics." },
          { icon: "🎨", title: "UI/UX & Branding", desc: "Logos, wireframes, branding kits, and user-friendly interfaces." },
          { icon: "🧠", title: "MERN Stack Apps", desc: "Scalable full-stack apps using MongoDB, Express, React, and Node.js." },
          { icon: "☁️", title: "Deployment & Hosting", desc: "CI/CD, Netlify/Vercel/VPS deployment, domain & HTTPS setup." },
        ].map((service, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{service.icon} {service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CONTACT SECTION */}
    <Contact />

  </div>
);

export default Home;
