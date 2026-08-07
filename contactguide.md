# Contact Form Backend Setup Guide

This guide contains everything you need to recreate the contact form backend from this terminal portfolio project in another project.

## 1. Tech Stack
- **Node.js & Express:** For creating the server and API endpoint.
- **Nodemailer:** For sending the email through a Gmail account.
- **Cors:** To allow cross-origin requests from the frontend.
- **Dotenv:** To securely manage environment variables (like passwords).

## 2. Setup the Backend Directory

First, create a backend folder (e.g., `api/` or `server/`), initialize a Node project, and install the required dependencies.

```bash
mkdir api
cd api
npm init -y
npm install express nodemailer cors dotenv
npm install --save-dev nodemon
```

### `package.json` setup
Your `package.json` should look like this. Add the `start` and `dev` scripts to run the server.

```json
{
  "name": "term-port-backend",
  "version": "1.0.0",
  "description": "Backend for terminal portfolio contact form",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "nodemailer": "^6.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

## 3. Environment Variables (`.env`)

Create a `.env` file in your backend folder. You will need a Gmail App Password, NOT your regular Gmail password. 
*Note: Never commit your `.env` file to GitHub.*

```env
# Put your Gmail address here
EMAIL_USER=your_email@gmail.com

# Put your Gmail App Password here
# To get this: 
# 1. Enable 2-Step Verification on your Google Account
# 2. Go to Security > App Passwords
# 3. Select 'Mail' and 'Other' (or give it a name like 'Portfolio')
# 4. Copy the 16-character code and paste it below without spaces
EMAIL_PASS=your_16_character_app_password

PORT=5000
```

## 4. The Server Code (`server.js`)

Create a `server.js` file and add the following code. This file creates the express server, configures the `/api/contact` POST endpoint, and uses Nodemailer to send the email with a nicely formatted HTML template.

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route for health check
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    // These fields should match what you send from your frontend
    const { fullName, mobileNumber, workEmail, subject, message } = req.body;

    if (!fullName || !workEmail || !subject) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Create Transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS // App Password should be used here
            }
        });

        const mailOptions = {
            from: workEmail,
            to: process.env.EMAIL_USER, // Sends email to yourself
            subject: `New Message from Portfolio: ${subject}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
                    <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">New Inquiry Received</h2>
                    
                    <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin-top: 20px;">
                        <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${fullName}</p>
                        <p style="margin: 5px 0;"><strong>📞 Mobile:</strong> ${mobileNumber}</p>
                        <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${workEmail}</p>
                    </div>

                    <div style="margin-top: 20px; padding: 15px; background-color: #ecf0f1; border-left: 5px solid #3498db; border-radius: 3px;">
                        <h4 style="margin-top: 0; color: #2980b9;">Message Content:</h4>
                        <p style="color: #34495e; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message body provided.'}</p>
                    </div>

                    <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${workEmail}?subject=find your inquiry from portfolio" 
                           style="display: inline-block; padding: 12px 25px; background-color: #3498db; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
                            Reply to ${fullName}
                        </a>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ error: 'Failed to send email. Check backend logs.' });
    }
});

// Run server locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(\`Server is running on port \${PORT}\`);
    });
}

module.exports = app;
```

## 5. Frontend Integration (React Example)

Here is how you can call this API from your frontend. Ensure that you match the keys in the body (`fullName`, `mobileNumber`, `workEmail`, `subject`, `message`) to what the backend expects.

```javascript
const sendContactMessage = async (formData) => {
    try {
        // Use localhost in dev, and relative path in production
        const API_URL = process.env.NODE_ENV === 'production' 
            ? '/api/contact' 
            : 'http://localhost:5000/api/contact';
            
        // Final payload to send to backend
        const finalData = { 
            fullName: formData.name,
            mobileNumber: formData.phone,
            workEmail: formData.email,
            subject: 'Inquiry',
            message: formData.message 
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
        });

        if (response.ok) {
            console.log('Message sent successfully!');
        } else {
            const data = await response.json();
            throw new Error(data.error || 'Failed to send message');
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
};
```

## 6. How to Run

1. Open your terminal and navigate to the backend folder (`cd api`).
2. Run `npm run dev` to start the server with Nodemon (auto-reloads on save).
3. The server will start on `http://localhost:5000`.
4. Run your frontend in a separate terminal.
```
