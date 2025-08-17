const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: `"Newsletter Subscription" <${process.env.EMAIL_USER}>`,
      to: "info@toparms.com.my", // where you want to receive subscription notices
      subject: "New Newsletter Subscription",
      text: `A new user subscribed to your newsletter: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#f9f9f9; color:#333;">
          <h2 style="color:#d35400;">New Newsletter Subscription</h2>
          <p>The following email has subscribed to receive product updates and exclusive offers:</p>
          <p style="font-size:16px; font-weight:bold; color:#222;">${email}</p>
          <p style="margin-top:20px; font-size:14px; color:#555;">
            This email was generated automatically from your website footer subscription form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Subscription email sent!" });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    res.status(500).json({ success: false, message: "Failed to send subscription email." });
  }
});


app.post("/send-email", async (req, res) => {
  const { name, number, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Google App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info@toparms.com.my",
      subject: `New Contact Form Submission - ${subject}`,
      text: `
Name: ${name}
Number: ${number}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#f9f9f9; color:#333;">
          <h2 style="color:#d35400;">New Contact Inquiry</h2>
          <p>You have received a new message from your website contact form:</p>

          <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Name</td>
              <td style="padding:8px; border:1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Number</td>
              <td style="padding:8px; border:1px solid #ddd;">${number}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Email</td>
              <td style="padding:8px; border:1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Subject</td>
              <td style="padding:8px; border:1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
              <td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Message</td>
              <td style="padding:8px; border:1px solid #ddd;">${message}</td>
            </tr>
          </table>

          <p style="margin-top:20px; font-size:14px; color:#555;">
            This email was generated automatically from Top Guns contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
