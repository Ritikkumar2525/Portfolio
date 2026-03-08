import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import CubeScene from './CubeScene';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-8 pb-12 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10">

                {/* Left Side: Typography */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full max-w-2xl text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-semibold tracking-wide text-zinc-300">
                            Available for work
                        </span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 leading-none">
                        Ritik <span className="text-zinc-500">Kumar.</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-300 mb-8">
                        Full Stack MERN Developer
                    </h2>

                    <p className="max-w-xl text-lg text-zinc-400 font-light mb-10 leading-relaxed mx-auto lg:mx-0">
                        Hello! I'm Ritik Kumar, a passionate and dedicated Full Stack MERN Developer with a knack for building robust, scalable web applications. My journey in tech is driven by an insatiable curiosity and a desire to create impactful digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                        <a href="#work" className="btn-primary w-full sm:w-auto">
                            View projects
                        </a>
                        <a href="#about" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                            My journey
                        </a>
                    </div>

                    {/* Social Links Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-center gap-5 mt-6 justify-center lg:justify-start"
                    >
                        {[
                            { icon: <FaGithub size={18} />, href: 'https://github.com/Ritikkumar2525', label: 'GitHub' },
                            { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/ritik25/', label: 'LinkedIn' },
                            { icon: <FaTwitter size={18} />, href: 'https://x.com/RitikKumar2525', label: 'Twitter' },
                            { icon: <FaEnvelope size={18} />, href: 'mailto:ritikrajkeshari0@gmail.com', label: 'Email' },
                        ].map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors" aria-label={s.label}>
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side: Interactive WebGL 3D Cube Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex-1 w-full lg:w-1/2 flex items-center justify-center z-20"
                >
                    <CubeScene />
                </motion.div>

            </div>
            {/* Minimal grid lines bleeding out from center */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent via-zinc-800 to-transparent"></div>
        </section>
    );
};

export default Hero;
