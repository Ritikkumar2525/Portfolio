import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft, FaExternalLinkAlt, FaLinkedinIn,
    FaCode, FaJava, FaBriefcase, FaCalendarAlt,
    FaCheckCircle, FaRocket, FaLightbulb, FaStar,
    FaLayerGroup, FaGithub, FaBook
} from 'react-icons/fa';
import { SiCodingninjas } from 'react-icons/si';

// ─── Section wrapper ─────────────────────────────────────────────────────────
const Section = ({ title, icon, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="mb-12"
    >
        <div className="flex items-center gap-2.5 mb-5">
            <span className="text-zinc-500">{icon}</span>
            <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        {children}
    </motion.div>
);

const Stat = ({ icon, label, value }) => (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-1">{icon} {label}</div>
        <div className="text-white font-semibold text-sm">{value}</div>
    </div>
);

const TrainingDetail = () => {
    const navigate = useNavigate();

    const topics = [
        { title: 'Arrays & Strings', desc: 'Sliding window, two pointers, prefix sums, and in-place manipulation patterns.' },
        { title: 'Linked Lists', desc: 'Singly & doubly linked lists, reversal, cycle detection (Floyd\'s algorithm), merge operations.' },
        { title: 'Stacks & Queues', desc: 'Monotonic stacks, circular queues, implementing stacks using queues and vice versa.' },
        { title: 'Trees & Binary Search Trees', desc: 'Traversals (in/pre/post/level order), BST operations, LCA, diameter, and height problems.' },
        { title: 'Graphs', desc: 'BFS, DFS, Dijkstra\'s shortest path, topological sort, cycle detection, and connected components.' },
        { title: 'Recursion & Dynamic Programming', desc: 'Memoization vs tabulation, knapsack, LCS, LIS, matrix DP, and recursive backtracking.' },
        { title: 'Sorting & Searching', desc: 'Merge sort, quick sort, binary search variants, and search in rotated sorted arrays.' },
        { title: 'Hashing & Heaps', desc: 'HashMap/HashSet problem patterns, priority queues, and top-K element problems.' },
    ];

    const skills = [
        'Object-Oriented Programming with Java — classes, inheritance, polymorphism',
        'Deep understanding of time and space complexity (Big O analysis)',
        'Systematic problem-solving approach for DSA interview questions',
        'Java Collections Framework — ArrayList, HashMap, PriorityQueue, Stack',
        'Java-specific patterns — generics, iterators, Comparable/Comparator',
        'Writing clean, readable, well-commented Java code under time constraints',
    ];

    const projectHighlights = [
        'Modelled mental states using Java OOP — State design pattern for mood transitions',
        'Built a simulation engine tracking emotional patterns across user sessions',
        'Implemented graph-based state transitions for realistic mental health scenarios',
        'Designed a CLI interface with structured input validation and error handling',
        'Applied DSA concepts (graphs, queues, maps) in a real Java application context',
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans">
            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-800/80">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <button onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                        <FaArrowLeft size={12} /> Back
                    </button>
                    <Link to="/" className="font-semibold text-sm tracking-wide text-white">Ritik.</Link>
                </div>
            </header>

            <main className="pt-24 pb-24 px-6 max-w-5xl mx-auto">

                {/* Stat cards */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Stat icon={<FaBook size={11} />} label="Program" value="DSA using Java" />
                    <Stat icon={<FaCalendarAlt size={11} />} label="Duration" value="2 Months" />
                    <Stat icon={<FaJava size={11} />} label="Language" value="Java" />
                    <Stat icon={<FaLayerGroup size={11} />} label="Type" value="Technical Training" />
                </motion.div>

                {/* Title */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }} className="mb-10">

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full">
                            Training
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-blue-400/80 border border-blue-900/40 bg-blue-950/30 px-3 py-1 rounded-full">
                            Certified
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                        CipherSchools
                    </h1>
                    <p className="text-zinc-500 text-lg font-light mb-6">
                        Data Structures & Algorithms using Java · Certified Training Program
                    </p>

                    <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mb-8 font-light">
                        Completed a rigorous, structured training program on Data Structures & Algorithms taught in Java
                        through CipherSchools — covering everything from arrays and linked lists to graphs and dynamic
                        programming. The program included hands-on problem-solving and culminated in building the
                        <strong className="text-zinc-200"> Mental Health Simulator</strong>, a Java-based project that
                        applied DSA concepts to a real-world problem domain.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a href="https://www.linkedin.com/in/ritik25/overlay/Position/2689554823/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold
                                       hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all">
                            <FaLinkedinIn size={13} /> View Certificate
                        </a>
                        <a href="https://www.cipherschools.com/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-white text-sm font-semibold
                                       hover:border-zinc-500 hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all">
                            <FaExternalLinkAlt size={11} /> CipherSchools
                        </a>
                        <a href="https://github.com/Ritikkumar2525/Mental_Health_Simulation"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-white text-sm font-semibold
                                       hover:border-zinc-500 hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all">
                            <FaGithub size={13} /> Project on GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Hero image */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14 rounded-2xl overflow-hidden border border-zinc-800">
                    <img
                        src="/cipher-training.png"
                        alt="Data Structures & Algorithms training — Java programming environment"
                        className="w-full h-72 sm:h-96 object-cover object-center"
                    />
                    <div className="bg-zinc-950 border-t border-zinc-800 px-5 py-3 text-xs text-zinc-600 flex items-center gap-2">
                        <FaCode size={11} className="text-blue-500" />
                        Deep-diving into DSA, binary trees, and graph algorithms in Java.
                    </div>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-12">

                        <Section title="What I Studied" icon={<FaBook size={14} />} delay={0.15}>
                            <div className="space-y-3">
                                {topics.map((t, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                                        className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs text-zinc-500 shrink-0 mt-0.5">{i + 1}</span>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white mb-1">{t.title}</h3>
                                            <p className="text-xs text-zinc-500 leading-relaxed">{t.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>

                        {/* Project built during training */}
                        <Section title="Project Built During Training" icon={<FaRocket size={14} />} delay={0.35}>
                            <div className="bg-gradient-to-br from-blue-950/30 to-zinc-950 border border-blue-900/30 rounded-2xl p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Mental Health Simulator</h3>
                                        <p className="text-xs text-zinc-500 font-mono">Java · OOP · Graph-based State Machine</p>
                                    </div>
                                    <a href="https://github.com/Ritikkumar2525/Mental_Health_Simulation"
                                        target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-xs hover:text-white hover:border-zinc-500 transition-all">
                                        <FaGithub size={11} /> GitHub
                                    </a>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                                    A Java-based simulation tool that models mental health states and emotional patterns using
                                    Object-Oriented Programming and graph-based state transitions. The simulator allows users
                                    to interact with various mental health scenarios, tracking mood shifts and providing awareness
                                    feedback — a meaningful application of DSA concepts to real-world mental wellness awareness.
                                </p>
                                <ul className="space-y-2.5">
                                    {projectHighlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />{h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {['Java', 'OOP', 'Graphs', 'State Machine', 'CLI'].map(tag => (
                                        <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Section>

                        <Section title="Impact & Takeaways" icon={<FaStar size={14} />} delay={0.45}>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: '🧠', label: 'Problem-Solving Mindset', desc: 'Trained to break down any problem systematically before writing a single line' },
                                    { icon: '⚡', label: 'Algorithmic Efficiency', desc: 'Learned to always think in terms of time and space complexity trade-offs' },
                                    { icon: '☕', label: 'Java Proficiency', desc: 'Deep hands-on experience with Java\'s OOP model and Collections framework' },
                                    { icon: '🏗️', label: 'Real Project Delivery', desc: 'Shipped a working Java project applying DSA concepts to a meaningful domain' },
                                ].map((item) => (
                                    <div key={item.label} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors">
                                        <div className="text-lg mb-2">{item.icon}</div>
                                        <p className="text-xs font-semibold text-white mb-1">{item.label}</p>
                                        <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">

                        <Section title="Skills Gained" icon={<FaCheckCircle size={14} />} delay={0.2}>
                            <ul className="space-y-2.5">
                                {skills.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />{s}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Training Details" icon={<FaBriefcase size={14} />} delay={0.25}>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4">
                                {[
                                    { label: 'Platform', value: 'CipherSchools' },
                                    { label: 'Course', value: 'Data Structures & Algorithms' },
                                    { label: 'Language', value: 'Java' },
                                    { label: 'Type', value: 'Certified Training Program' },
                                    { label: 'Project', value: 'Mental Health Simulator' },
                                    { label: 'Certificate', value: 'Issued on LinkedIn' },
                                ].map(({ label, value }) => (
                                    <div key={label}>
                                        <p className="text-xs text-zinc-600 mb-0.5">{label}</p>
                                        <p className="text-sm text-white font-medium">{value}</p>
                                    </div>
                                ))}
                                <a href="https://www.linkedin.com/in/ritik25/details/certifications/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors pt-1">
                                    <FaLinkedinIn size={11} /> View Certificate ↗
                                </a>
                            </div>
                        </Section>

                        <Section title="Topics Covered" icon={<FaCode size={14} />} delay={0.3}>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Queues',
                                    'Trees', 'BST', 'Graphs', 'BFS/DFS', 'Recursion',
                                    'Dynamic Programming', 'Sorting', 'Binary Search', 'Hashing', 'Heaps'
                                ].map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono
                                                              hover:border-zinc-600 hover:text-white transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Section>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default TrainingDetail;
