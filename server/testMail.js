const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "setti.veera9652@gmail.com",
    pass: "ihbk djel qkfb diiy", // Replace with 16-digit Gmail App Password (no spaces)
  },
});

const mailOptions = {
  from: "setti.veera9652@gmail.com",
  to: "setti.veera9652@gmail.com",
  subject: "✅ Test Email from SVK Website",
  text: "This is a test message to verify your email setup is working!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.error("❌ Failed to send mail:", err);
  }
  console.log("✅ Email sent successfully:", info.response);
});
