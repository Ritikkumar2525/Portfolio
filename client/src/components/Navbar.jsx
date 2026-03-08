import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter, FaDownload } from 'react-icons/fa';

const SOCIAL_LINKS = [
    { icon: <FaGithub size={15} />, href: 'https://github.com/Ritikkumar2525', label: 'GitHub' },
    { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/in/ritik25/', label: 'LinkedIn' },
    { icon: <FaTwitter size={15} />, href: 'https://x.com/RitikKumar2525', label: 'Twitter/X' },
];

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
];

// Silent background ping — visitor never sees this
const pingResumeDownload = () => {
    fetch('http://localhost:5001/api/resume/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }).catch(() => { }); // fail silently
};

const handleResumeDownload = () => {
    // 1. Trigger the file download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ritik_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Silently notify — no await, no feedback to visitor
    pingResumeDownload();
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-zinc-800/80' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center relative">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 22H22L12 2Z" fill="white" />
                    </svg>
                    <span className="font-semibold text-sm tracking-wide">Ritik.</span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-zinc-400">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right: Social Icons + Resume + CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 text-zinc-500 border-r border-zinc-800 pr-4">
                        {SOCIAL_LINKS.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="hover:text-white transition-colors" aria-label={s.label}>
                                {s.icon}
                            </a>
                        ))}
                    </div>

                    {/* Download Resume button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleResumeDownload}
                        className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-400
                                   hover:text-white transition-colors"
                        aria-label="Download Resume"
                    >
                        <FaDownload size={11} />
                        Resume
                    </motion.button>

                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="text-[13px] font-medium bg-zinc-900 border border-zinc-800 text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                    >
                        Hit me up
                    </button>
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white transition-colors">
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-16 left-0 w-full bg-[#09090b] border-b border-zinc-800 px-6 py-6"
                    >
                        <div className="flex flex-col gap-4 text-sm font-medium mb-6">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                                    className="text-zinc-400 hover:text-white transition-colors py-2">
                                    {link.name}
                                </a>
                            ))}
                            {/* Mobile Resume Download */}
                            <button
                                onClick={() => { handleResumeDownload(); setIsOpen(false); }}
                                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-2 text-left"
                            >
                                <FaDownload size={12} /> Download Resume
                            </button>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-500 border-t border-zinc-800 pt-4">
                            {SOCIAL_LINKS.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="hover:text-white transition-colors" aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
