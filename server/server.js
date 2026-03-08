// portfolio/server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import contactRoutes from './routes/contactRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
}));
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like curl), any localhost, or the production frontend
        if (!origin ||
            /^http:\/\/localhost(:\d+)?$/.test(origin) ||
            /\.onrender\.com$/.test(origin) ||
            /\.vercel\.app$/.test(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Debug route to test email configuration on Render
import nodemailer from 'nodemailer';
app.get('/api/test-email', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            connectionTimeout: 10000,
        });
        await transporter.verify();
        res.json({ success: true, message: 'SMTP connection successful! Credentials are correct.' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message, stack: error.stack });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
