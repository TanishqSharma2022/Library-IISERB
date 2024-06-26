const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-email', (req, res) => {
    const formData = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'shailesh22@iiserb.ac.in',
        subject: 'Library Services Feedback',
        text: JSON.stringify(formData, null, 2),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

