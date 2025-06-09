// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// // Email endpoint
// app.post('/api/send-email', async (req, res) => {
//   const { name, email, phone, course, message } = req.body;

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Contact Form Submission - ${course}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Course:</strong> ${course}</p>
//         <p><strong>Message:</strong> ${message || 'No message provided'}</p>
//       `
//     });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Email error:', error);
//     res.status(500).json({ success: false, message: 'Failed to send email' });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const dotenv = require('dotenv').default;
// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow only frontend origin
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(express.json());

// // Validate environment variables
// const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASSWORD', 'RECIPIENT_EMAIL'];
// const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

// if (missingVars.length > 0) {
//   console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
//   process.exit(1);
// }

// // Email transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// // Test transporter connection (optional)
// transporter.verify(function (error) {
//   if (error) {
//     console.log('Nodemailer transport error:', error);
//   } else {
//     console.log("Nodemailer is ready to send emails");
//   }
// });

// // Email endpoint
// app.post('/api/send-email', async (req, res) => {
//   const { name, email, phone, course, message } = req.body;

//   // Basic input validation
//   if (!name || !email || !phone || !course) {
//     return res.status(400).json({ success: false, message: 'Missing required fields' });
//   }

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Contact Form Submission - ${course}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Course:</strong> ${course}</p>
//         <p><strong>Message:</strong> ${message ? message : 'No message provided'}</p>
//       `
//     });

//     res.status(200).json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Email sending failed:', error);
//     res.status(500).json({ success: false, message: 'Failed to send email' });
//   }
// });

// // Basic health check route
// app.get('/', (req, res) => {
//   res.json({ status: 'Server is running' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server is running on http://localhost:${PORT}`);
// });







require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow only frontend origin
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Validate environment variables
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASSWORD', 'RECIPIENT_EMAIL'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
  process.exit(1);
}

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Test transporter connection (optional)
transporter.verify(function (error) {
  if (error) {
    console.log('Nodemailer transport error:', error);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  // Basic input validation
  if (!name || !email || !phone || !course) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission - ${course}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Message:</strong> ${message ? message : 'No message provided'}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Basic health check route
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});