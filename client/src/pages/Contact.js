import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://svk-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus(result.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server error. Please try later.");
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Contact Us</h2>

        <div className="row g-4">
          {/* Success/Error Message */}
          {status && (
            <div className={`alert mt-3 ${status.includes("success") ? "alert-success" : "alert-danger"}`} role="alert">
              {status}
            </div>
          )}

          {/* Contact Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">Send Message</button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="col-md-6">
            <div className="mb-4">
              <h5 className="fw-semibold">📍 Our Office</h5>
              <p>SVK Web Solutions<br />Amaravathi, Andhra Pradesh, India</p>
              <p><strong>Phone:</strong> +91 9704612784</p>
              <p><strong>Email:</strong> svkwebsolutions882@gmail.com</p>
            </div>

            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.538394088173!2d78.38100451487778!3d17.433006405853803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b57c7dc5b9%3A0x78bb0b95f6c9514!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000"
                title="SVK Web Solutions Map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
