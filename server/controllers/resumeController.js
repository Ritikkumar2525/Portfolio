import nodemailer from 'nodemailer';

export const notifyResumeDownload = async (req, res) => {
    // Immediately respond so the visitor never waits
    res.status(200).json({ ok: true });

    // Fire email in the background — don't await for response
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS ||
        process.env.EMAIL_PASS === 'your_gmail_app_password_here') {
        return; // silently skip if not configured
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 15000,
        });

        const now = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short',
        });

        // Collect some visitor metadata for context
        const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'Unknown';
        const ua = req.headers['user-agent'] || 'Unknown';
        const ref = req.headers['referer'] || 'Direct';

        await transporter.sendMail({
            from: `"Portfolio Tracker" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `📄 Resume Downloaded — ${now}`,
            html: `
                <div style="font-family:sans-serif;max-width:560px;padding:28px;
                            background:#09090b;color:#fafafa;border-radius:12px;">
                    <h2 style="margin:0 0 4px;font-size:18px;">Resume Downloaded</h2>
                    <p style="color:#71717a;margin:0 0 24px;font-size:13px;">${now} IST</p>
                    <table style="width:100%;border-collapse:collapse;font-size:13px;">
                        <tr>
                            <td style="padding:8px 0;color:#a1a1aa;width:90px;">IP</td>
                            <td style="padding:8px 0;color:#fafafa;">${ip}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#a1a1aa;">Referrer</td>
                            <td style="padding:8px 0;color:#fafafa;">${ref}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Browser</td>
                            <td style="padding:8px 0;color:#71717a;font-size:11px;word-break:break-all;">${ua}</td>
                        </tr>
                    </table>
                    <hr style="border:none;border-top:1px solid #27272a;margin:20px 0;" />
                    <p style="color:#52525b;font-size:11px;margin:0;">
                        Sent automatically by your portfolio tracker. The downloader has no idea.
                    </p>
                </div>
            `,
        });
    } catch (err) {
        // Fail silently — never surface errors to the browser
        console.error('[Resume notify] email failed:', err.message);
    }
};
