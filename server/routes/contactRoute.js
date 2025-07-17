const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, phone, message });
    await newContact.save();

    // 2️⃣ Send Email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "setti.veera9652@gmail.com",
        pass: "ihbk djel qkfb diiy", 
      },
    });

    const mailOptions = {
      from: "setti.veera9652@gmail.com",
      to: "setti.veera9652@gmail.com",
      subject: "🌿 New Contact Form Submission",
      text: `
You have a new contact form submission:

👤 Name: ${name}
📞 Phone: ${phone}
💬 Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to Gmail.");

    res.status(201).json({ success: true, message: "Message saved & email sent!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Server error. Try again." });
  }
});

module.exports = router;
