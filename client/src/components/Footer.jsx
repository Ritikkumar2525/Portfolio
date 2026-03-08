import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/Ritikkumar2525', label: 'GitHub' },
    { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/ritik25/', label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, href: 'https://x.com/RitikKumar2525', label: 'Twitter/X' },
];

const Footer = () => (
    <footer className="border-t border-[#18181b] bg-[#000000] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 22H22L12 2Z" fill="white" />
                    </svg>
                    <span className="font-semibold text-sm tracking-wide text-white">Ritik.</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2 font-light tracking-wide">
                    Full Stack MERN Developer
                </p>
                <p className="text-xs text-zinc-600 font-light">Built with React, Three.js & Tailwind CSS.</p>
            </div>

            {/* Quick Links */}
            <div className="hidden md:flex flex-col gap-2 text-sm">
                <span className="text-zinc-600 text-xs font-medium uppercase tracking-widest mb-1">Navigate</span>
                {['#home', '#about', '#work', '#certificates', '#contact'].map((href) => (
                    <a key={href} href={href} className="text-zinc-500 hover:text-white transition-colors capitalize">
                        {href.replace('#', '')}
                    </a>
                ))}
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 text-sm text-zinc-400 font-medium">
                <div className="flex gap-5 mb-2">
                    {socialLinks.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            className="hover:text-white transition-colors" aria-label={s.label}>
                            {s.icon}
                        </a>
                    ))}
                    <a href="mailto:ritikrajkeshari0@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
                        <FaEnvelope size={18} />
                    </a>
                </div>
                <div className="text-xs text-zinc-600 font-light">
                    © {new Date().getFullYear()} Ritik Kumar. All rights reserved.
                </div>
            </div>

        </div>
    </footer>
);

export default Footer;
