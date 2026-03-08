import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const QUICK_LINKS = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/Ritikkumar2525', label: 'GitHub' },
    { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/ritik25/', label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, href: 'https://x.com/RitikKumar2525', label: 'Twitter/X' },
    { icon: <FaEnvelope size={18} />, href: 'mailto:ritikrajkeshari0@gmail.com', label: 'Email' },
    { icon: <FaPhone size={18} />, href: 'tel:+91XXXXXXXXXX', label: 'Phone' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await axios.post(`${API}/api/contact`, formData);
            if (res.data.success) {
                setStatus({ type: 'success', message: 'Message sent successfully.' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Something went wrong.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Get in touch</h2>
                <p className="text-zinc-400 text-lg font-light">
                    Have a question or want to work together? Reach out directly.
                </p>

                {/* Quick social links */}
                <div className="flex items-center justify-center gap-5 mt-8">
                    {QUICK_LINKS.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
                            aria-label={s.label}>
                            {s.icon}
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#09090b] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl"
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[13px] font-medium text-zinc-400">Name</label>
                            <input
                                type="text" id="name" name="name"
                                value={formData.name} onChange={handleChange}
                                placeholder="Your name" required
                                className="px-4 py-2.5 rounded-lg bg-black border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm text-white placeholder-zinc-600"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[13px] font-medium text-zinc-400">Email</label>
                            <input
                                type="email" id="email" name="email"
                                value={formData.email} onChange={handleChange}
                                placeholder="you@domain.com" required
                                className="px-4 py-2.5 rounded-lg bg-black border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm text-white placeholder-zinc-600"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-[13px] font-medium text-zinc-400">Message</label>
                        <textarea
                            name="message" id="message"
                            value={formData.message} onChange={handleChange}
                            placeholder="How can I help?"
                            rows="4" required
                            className="px-4 py-3 rounded-lg bg-black border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-sm text-white placeholder-zinc-600 resize-none font-sans"
                        />
                    </div>

                    {status.message && (
                        <div className={`p-3 rounded-lg text-xs font-medium ${status.type === 'success' ? 'bg-zinc-800 text-white' : 'bg-red-950/50 text-red-400 border border-red-900/50'}`}>
                            {status.message}
                        </div>
                    )}

                    <button type="submit" disabled={isLoading} className="btn-primary w-full mt-2">
                        {isLoading ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
