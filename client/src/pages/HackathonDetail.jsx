import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft, FaLinkedinIn, FaTrophy,
    FaCode, FaClock, FaUsers, FaCheckCircle,
    FaCalendarAlt, FaRocket, FaLightbulb, FaStar,
    FaMapMarkerAlt
} from 'react-icons/fa';

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

const HackathonDetail = () => {
    const navigate = useNavigate();

    const timeline = [
        { time: 'Hour 0–2', title: 'Kickoff & Ideation', desc: 'Problem statement reveal, team formation, and brainstorming session to finalize project ideas.' },
        { time: 'Hour 2–8', title: 'Architecture & Setup', desc: 'System design, tech stack selection, repo setup, and task distribution among team members.' },
        { time: 'Hour 8–18', title: 'Core Development', desc: 'Intense coding sprint — building core features, integrating APIs, and wiring up the frontend/backend.' },
        { time: 'Hour 18–22', title: 'Testing & Polish', desc: 'Bug squashing, UI refinement, edge case handling, and demo preparation.' },
        { time: 'Hour 22–24', title: 'Presentation & Demo', desc: 'Final pitch to judges, live demo of the working product, Q&A session, and results announcement.' },
    ];

    const skills = [
        'Rapid prototyping and MVP development under extreme time pressure',
        'Team collaboration — dividing work efficiently across frontend, backend, and design',
        'Creative problem-solving when stuck with limited time and resources',
        'Pitching and presenting technical projects to a panel of judges',
        'Debugging and deploying under pressure with zero margin for error',
        'Prioritization — focusing on what matters for a demo vs. perfection',
    ];

    const learnings = [
        'How to make critical architecture decisions in minutes, not days',
        'Building a working product from zero to demo in under 24 hours',
        'The value of clear communication when every minute counts',
        'Managing energy and focus during a continuous 24-hour sprint',
        'How competitive environments accelerate learning and growth',
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans">
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
                    <Stat icon={<FaTrophy size={11} />} label="Event" value="HackWithVertos 1.0" />
                    <Stat icon={<FaClock size={11} />} label="Duration" value="24 Hours Non-Stop" />
                    <Stat icon={<FaCalendarAlt size={11} />} label="When" value="February 2024" />
                    <Stat icon={<FaMapMarkerAlt size={11} />} label="Organized By" value="ECHO, LPU" />
                </motion.div>

                {/* Title */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }} className="mb-10">

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full">
                            Extracurricular
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-amber-400/80 border border-amber-900/40 bg-amber-950/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <FaTrophy size={9} /> Honor & Award
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                        HackWithVertos 1.0
                    </h1>
                    <p className="text-zinc-500 text-lg font-light mb-6">
                        24-Hour Hackathon · Student Organization ECHO, Lovely Professional University · Feb 2024
                    </p>

                    <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mb-8 font-light">
                        Participated in <strong className="text-zinc-200">HackWithVertos 1.0</strong>, an intense
                        24-hour coding hackathon organized by the Student Organization ECHO at Lovely Professional University.
                        Competed against talented teams from across the university, building a fully functional product from
                        scratch under extreme time constraints — proving the ability to ideate, architect, code, and present
                        a working solution in a single sleepless sprint.
                    </p>

                    <a href="https://www.linkedin.com/in/ritik25/overlay/Honor/466894182/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold
                                   hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all">
                        <FaLinkedinIn size={13} /> View on LinkedIn
                    </a>
                </motion.div>

                {/* Hero image */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14 rounded-2xl overflow-hidden border border-zinc-800">
                    <img
                        src="/hackathon.png"
                        alt="24-hour hackathon coding event — intense collaboration and coding"
                        className="w-full h-72 sm:h-96 object-cover object-center"
                    />
                    <div className="bg-zinc-950 border-t border-zinc-800 px-5 py-3 text-xs text-zinc-600 flex items-center gap-2">
                        <FaTrophy size={11} className="text-amber-500" />
                        HackWithVertos 1.0 — 24 hours of non-stop coding, building, and pitching.
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-12">

                        <Section title="The 24-Hour Timeline" icon={<FaClock size={14} />} delay={0.15}>
                            <div className="space-y-3 relative border-l-2 border-zinc-800 pl-5">
                                {timeline.map((t, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                        className="relative pb-4">
                                        <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border-2 border-zinc-600" />
                                        <div className="flex items-baseline gap-3 mb-1">
                                            <span className="text-xs font-mono text-amber-500/70 shrink-0">{t.time}</span>
                                            <span className="text-sm font-semibold text-white">{t.title}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-relaxed ml-[calc(max(60px,_0px))]">{t.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>

                        <Section title="The Experience" icon={<FaRocket size={14} />} delay={0.3}>
                            <div className="bg-gradient-to-br from-amber-950/30 to-zinc-950 border border-amber-900/30 rounded-xl p-6">
                                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                                    There's nothing quite like a hackathon to test what you're really made of as a developer.
                                    No pre-built templates, no safety nets — just a problem, a team, a laptop, and a ticking
                                    clock. HackWithVertos 1.0 pushed me to make rapid architectural decisions, write clean code
                                    that teammates could immediately understand, and deliver under the kind of pressure that
                                    accelerates growth more than months of routine work.
                                </p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    The event was organized by <strong className="text-zinc-200">Student Organization ECHO</strong> at
                                    LPU, which brought together some of the university's strongest technical talent. Going through
                                    24 continuous hours of coding, debugging, and refining — and then pitching a working product
                                    to judges — was one of the most formative experiences of my engineering journey.
                                </p>
                            </div>
                        </Section>

                        <Section title="What I Learned" icon={<FaLightbulb size={14} />} delay={0.4}>
                            <ul className="space-y-2.5">
                                {learnings.map((l, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />{l}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Takeaways" icon={<FaStar size={14} />} delay={0.45}>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: '🏆', label: 'Competitive Spirit', desc: 'Thrived under competitive pressure against talented peers' },
                                    { icon: '⚡', label: 'Speed & Execution', desc: 'Zero to working demo in 24 hours — pure execution speed' },
                                    { icon: '🤝', label: 'Team Chemistry', desc: 'Learned to code seamlessly alongside teammates in real-time' },
                                    { icon: '🎤', label: 'Technical Pitching', desc: 'Presented and defended technical decisions to a judge panel' },
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

                        <Section title="Skills Demonstrated" icon={<FaCode size={14} />} delay={0.2}>
                            <ul className="space-y-2.5">
                                {skills.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />{s}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Event Details" icon={<FaTrophy size={14} />} delay={0.25}>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4">
                                {[
                                    { label: 'Event', value: 'HackWithVertos 1.0' },
                                    { label: 'Type', value: '24-Hour Hackathon' },
                                    { label: 'Issued By', value: 'Student Organization ECHO, LPU' },
                                    { label: 'Date', value: 'February 2024' },
                                    { label: 'Category', value: 'Honors & Awards' },
                                    { label: 'Format', value: 'Team-based, on-site competition' },
                                ].map(({ label, value }) => (
                                    <div key={label}>
                                        <p className="text-xs text-zinc-600 mb-0.5">{label}</p>
                                        <p className="text-sm text-white font-medium">{value}</p>
                                    </div>
                                ))}
                                <a href="https://www.linkedin.com/in/ritik25/overlay/Honor/466894182/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors pt-1">
                                    <FaLinkedinIn size={11} /> View on LinkedIn ↗
                                </a>
                            </div>
                        </Section>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default HackathonDetail;
