import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaPython, FaTrophy, FaHeart, FaHandsHelping, FaChevronDown } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiMysql, SiExpress, SiBootstrap, SiVite } from 'react-icons/si';

const BentoBox = ({ title, children, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`bg-[#09090b] border border-[#27272a] rounded-2xl p-6 flex flex-col ${className} hover:border-zinc-700 transition-colors`}
    >
        {title && <h3 className="text-zinc-400 text-sm font-medium tracking-wide mb-4">{title}</h3>}
        {children}
    </motion.div>
);

const About = () => {
    const navigate = useNavigate();
    const [showExtras, setShowExtras] = useState(false);
    return (
        <section id="about" className="py-24 px-6 relative max-w-5xl mx-auto">

            <div className="mb-16">
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Engineering focus</h2>
                <p className="text-zinc-400 text-lg max-w-2xl font-light">
                    I believe in building software that is not just functional, but exceptional. Deeply focused on the intersection of intuitive front-end design and robust backend architecture.
                </p>
            </div>

            {/* Minimalist Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Main Intro Box with Experience */}
                <BentoBox className="md:col-span-2 md:row-span-2 justify-between" delay={0.1}>
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
                            Bridging the gap between <span className="text-zinc-500">vision</span> and <span className="text-zinc-500">execution.</span>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light max-w-xl">
                            A passionate full-stack developer with hands-on experience in building real-time collaboration platforms, social impact applications, and production-grade web systems. Skilled in the MERN stack, WebRTC, Socket.io, and modern frontend frameworks — with professional internship experience and certified training in Data Structures & Algorithms.
                        </p>
                    </div>

                    <div className="mt-auto space-y-3">
                        <h4 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Recent Experience & Training</h4>

                        {/* Internship */}
                        <motion.a
                            onClick={() => navigate('/internship')}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex justify-between items-start border-l-2 border-zinc-700 pl-4 py-1
                                       hover:border-white transition-colors duration-200 group cursor-pointer"
                        >
                            <div>
                                <h5 className="text-white font-medium group-hover:text-zinc-100 transition-colors">
                                    Web Development Intern
                                    <span className="ml-2 text-zinc-600 text-xs group-hover:text-zinc-400 transition-colors">↗</span>
                                </h5>
                                <p className="text-zinc-500 text-sm">Suvidha Foundation (Suvidha Mahila Mandal)</p>
                            </div>
                            <span className="text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors shrink-0">1 Month</span>
                        </motion.a>

                        {/* Training */}
                        <motion.a
                            onClick={() => navigate('/training')}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex justify-between items-start border-l-2 border-zinc-700 pl-4 py-1
                                       hover:border-blue-500 transition-colors duration-200 group cursor-pointer"
                        >
                            <div>
                                <h5 className="text-white font-medium group-hover:text-zinc-100 transition-colors">
                                    DSA using Java · Training
                                    <span className="ml-2 text-zinc-600 text-xs group-hover:text-zinc-400 transition-colors">↗</span>
                                </h5>
                                <p className="text-zinc-500 text-sm">CipherSchools · Certified</p>
                            </div>
                            <span className="text-blue-600 text-xs font-medium group-hover:text-blue-400 transition-colors shrink-0 mt-0.5">2 Months</span>
                        </motion.a>
                    </div>
                </BentoBox>

                {/* Tech Stack Boxes - Frontend */}
                <BentoBox title="FRONT-END" delay={0.2} className="justify-center">
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { icon: <FaReact size={20} />, name: "React" },
                            { icon: <SiNextdotjs size={20} />, name: "Next.js" },
                            { icon: <SiTypescript size={20} />, name: "TS" },
                            { icon: <SiJavascript size={20} />, name: "JS" },
                            { icon: <SiTailwindcss size={20} />, name: "Tailwind" },
                            { icon: <SiBootstrap size={20} />, name: "Bootstrap" },
                            { icon: <FaHtml5 size={20} />, name: "HTML" },
                            { icon: <FaCss3Alt size={20} />, name: "CSS" },
                        ].map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center justify-center gap-2 group cursor-default" title={tech.name}>
                                <div className="text-zinc-500 group-hover:text-white transition-colors">{tech.icon}</div>
                            </div>
                        ))}
                    </div>
                </BentoBox>

                {/* Tech Stack Boxes - Backend/Core */}
                <BentoBox title="BACKEND & CORE" delay={0.3}>
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {[
                            { icon: <FaNodeJs size={20} />, name: "Node.js" },
                            { icon: <SiExpress size={20} />, name: "Express" },
                            { icon: <FaJava size={20} />, name: "Java" },
                            { icon: <FaPython size={20} />, name: "Python" },
                            { icon: <SiMongodb size={20} />, name: "MongoDB" },
                            { icon: <SiMysql size={20} />, name: "MySQL" },
                            { icon: <FaGithub size={20} />, name: "GitHub" },
                            { icon: <SiVite size={20} />, name: "Vite" },
                        ].map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center justify-center gap-2 group cursor-default" title={tech.name}>
                                <div className="text-zinc-500 group-hover:text-white transition-colors">{tech.icon}</div>
                            </div>
                        ))}
                    </div>
                </BentoBox>

                {/* Certifications Box */}
                <BentoBox className="md:col-span-3 items-center flex-col sm:flex-row justify-between gap-6" delay={0.4}>
                    <div>
                        <h4 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-3">Certifications</h4>
                        <div className="flex flex-wrap gap-3 text-sm">
                            {[
                                { label: 'Coursera', href: 'https://www.linkedin.com/in/ritik25/details/certifications/' },
                                { label: 'Udemy', href: 'https://www.linkedin.com/in/ritik25/details/certifications/' },
                                { label: 'Infosys Springboard', href: 'https://www.linkedin.com/in/ritik25/details/certifications/' },
                                { label: 'CipherSchools', href: 'https://www.linkedin.com/in/ritik25/details/certifications/' },
                            ].map(({ label, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.06, y: -2 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md
                                               hover:border-zinc-600 hover:text-white hover:bg-zinc-800
                                               transition-colors duration-200 cursor-pointer"
                                >
                                    {label}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-medium tracking-wide text-zinc-300">Available for new opportunities</span>
                    </div>
                </BentoBox>

                {/* Extracurricular Activities */}
                <BentoBox className="md:col-span-3" delay={0.5}>
                    <motion.button
                        onClick={() => setShowExtras(!showExtras)}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-between cursor-pointer group"
                    >
                        <div className="flex items-center gap-2">
                            <FaHandsHelping size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                            <h4 className="text-zinc-400 text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                                Extracurricular Activities
                            </h4>
                            <span className="text-xs text-zinc-700 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full ml-1">2</span>
                        </div>
                        <motion.div
                            animate={{ rotate: showExtras ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-zinc-600 group-hover:text-white transition-colors"
                        >
                            <FaChevronDown size={12} />
                        </motion.div>
                    </motion.button>

                    <AnimatePresence>
                        {showExtras && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-3 mt-5">
                                    {/* Volunteer */}
                                    <motion.a
                                        onClick={() => navigate('/volunteer')}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex justify-between items-start border-l-2 border-zinc-700 pl-4 py-2
                                                   hover:border-green-500 transition-colors duration-200 group cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3">
                                            <FaHeart size={12} className="text-green-600 mt-1 shrink-0" />
                                            <div>
                                                <h5 className="text-white font-medium text-sm group-hover:text-zinc-100 transition-colors">
                                                    Community Volunteer
                                                    <span className="ml-2 text-zinc-600 text-xs group-hover:text-zinc-400 transition-colors">↗</span>
                                                </h5>
                                                <p className="text-zinc-500 text-xs mt-0.5">Supporting community development initiatives through active grassroots assistance</p>
                                            </div>
                                        </div>
                                        <span className="text-green-700 text-xs font-medium group-hover:text-green-500 transition-colors shrink-0 mt-0.5">Volunteer</span>
                                    </motion.a>

                                    {/* Hackathon */}
                                    <motion.a
                                        onClick={() => navigate('/hackathon')}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex justify-between items-start border-l-2 border-zinc-700 pl-4 py-2
                                                   hover:border-amber-500 transition-colors duration-200 group cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3">
                                            <FaTrophy size={12} className="text-amber-600 mt-1 shrink-0" />
                                            <div>
                                                <h5 className="text-white font-medium text-sm group-hover:text-zinc-100 transition-colors">
                                                    HackWithVertos 1.0
                                                    <span className="ml-2 text-zinc-600 text-xs group-hover:text-zinc-400 transition-colors">↗</span>
                                                </h5>
                                                <p className="text-zinc-500 text-xs mt-0.5">24-Hour Hackathon · Student Organization ECHO, LPU · Feb 2024</p>
                                            </div>
                                        </div>
                                        <span className="text-amber-700 text-xs font-medium group-hover:text-amber-500 transition-colors shrink-0 mt-0.5">Award</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </BentoBox>

            </div>
        </section>
    );
};

export default About;
