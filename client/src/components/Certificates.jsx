import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ALL_CERTIFICATES = [
    // Initially visible (first 4)
    {
        id: 1,
        title: 'Data Structures & Algorithms using Java',
        issuer: 'CipherSchools',
        date: '2023',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
        color: '#f97316',
    },
    {
        id: 2,
        title: 'Language Principles & Finite Automata',
        issuer: 'Infosys Springboard',
        date: '2023',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
        color: '#3b82f6',
    },
    {
        id: 3,
        title: 'Fundamentals of Network Communication',
        issuer: 'Coursera',
        date: '2023',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
        color: '#06b6d4',
    },
    {
        id: 4,
        title: 'Master Generative AI',
        issuer: 'Udemy',
        date: '2024',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        color: '#a855f7',
    },
    // Additional (hidden until Show More)
    {
        id: 5,
        title: 'Introduction to Web Development',
        issuer: 'Coursera',
        date: '2022',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
        color: '#10b981',
    },
    {
        id: 6,
        title: 'Python Programming Fundamentals',
        issuer: 'Infosys Springboard',
        date: '2022',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
        color: '#eab308',
    },
    {
        id: 7,
        title: 'Database Management & SQL',
        issuer: 'CipherSchools',
        date: '2023',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
        color: '#ef4444',
    },
    {
        id: 8,
        title: 'Cloud Computing Foundations',
        issuer: 'Coursera',
        date: '2024',
        link: 'https://www.linkedin.com/in/ritik25/details/certifications/',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        color: '#6366f1',
    },
];

const INITIAL_SHOW = 4;

const CertCard = ({ cert, index }) => (
    <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % INITIAL_SHOW) * 0.08 }}
        className="group block"
    >
        <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl overflow-hidden
                        hover:border-zinc-700 transition-all duration-300
                        hover:shadow-2xl hover:shadow-black/70">

            <div className="relative h-36 overflow-hidden bg-zinc-900">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105
                               transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold
                                bg-black/60 backdrop-blur border border-zinc-700/40 text-zinc-300 tracking-wide">
                    {cert.issuer}
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur border border-zinc-700/40
                                flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                    <FaExternalLinkAlt size={11} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: cert.color, opacity: 0.6 }} />
            </div>

            <div className="p-5">
                <h3 className="text-sm font-semibold text-white leading-snug mb-3 group-hover:text-zinc-200 transition-colors">
                    {cert.title}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600 font-mono">{cert.date}</span>
                    <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors font-mono">
                        View cert →
                    </span>
                </div>
            </div>
        </div>
    </motion.a>
);

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);

    const visible = showAll ? ALL_CERTIFICATES : ALL_CERTIFICATES.slice(0, INITIAL_SHOW);
    const hiddenCount = ALL_CERTIFICATES.length - INITIAL_SHOW;

    return (
        <section id="certificates" className="py-24 px-6 relative max-w-6xl mx-auto">
            <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Certifications</h2>
                    <p className="text-zinc-400 text-base max-w-xl font-light">
                        Courses and certifications earned to sharpen my skills.
                    </p>
                </div>
                <a
                    href="https://www.linkedin.com/in/ritik25/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm shrink-0"
                >
                    View on LinkedIn
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {visible.map((cert, idx) => (
                    <CertCard key={cert.id} cert={cert} index={idx} />
                ))}
            </div>

            {/* Animated expand for extra certs */}
            <AnimatePresence />

            {/* Show More / Less button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-10"
            >
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setShowAll(prev => !prev)}
                    className="flex items-center gap-2 px-8 py-3 rounded-full border border-zinc-700
                               text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white
                               hover:bg-zinc-900 transition-all duration-200"
                >
                    {showAll ? (
                        <><span>Show Less</span><span className="text-zinc-500">↑</span></>
                    ) : (
                        <><span>Show More Certificates</span><span className="text-zinc-500 font-mono text-xs">+{hiddenCount} more</span></>
                    )}
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Certificates;
