import nodemailer from 'nodemailer';

export const sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
    }

    // Guard: make sure email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your_gmail_app_password_here') {
        console.error('Email not configured — set EMAIL_USER and EMAIL_PASS in server/.env');
        return res.status(500).json({
            success: false,
            message: 'Email service not configured. Please contact me directly at ritikrajkeshari0@gmail.com'
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            html: `
                <div style="font-family:sans-serif;max-width:600px;padding:24px;background:#09090b;color:#fafafa;border-radius:12px;">
                    <h2 style="margin:0 0 16px;font-size:20px;">New message from your portfolio</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#a1a1aa;">${email}</a></p>
                    <hr style="border-color:#27272a;margin:20px 0;" />
                    <p style="color:#a1a1aa;white-space:pre-wrap;">${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent! I'll get back to you soon." });
    } catch (error) {
        console.error('Email send error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send. Please email me at ritikrajkeshari0@gmail.com'
        });
    }
};
