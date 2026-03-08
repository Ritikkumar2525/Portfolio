import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft, FaExternalLinkAlt, FaLinkedinIn,
    FaCode, FaUsers, FaHeart, FaBriefcase, FaCalendarAlt,
    FaMapMarkerAlt, FaLightbulb, FaRocket, FaCheckCircle,
    FaGlobe, FaHandsHelping
} from 'react-icons/fa';

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

// ─── Stat card ───────────────────────────────────────────────────────────────
const Stat = ({ icon, label, value }) => (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-1">{icon} {label}</div>
        <div className="text-white font-semibold text-sm">{value}</div>
    </div>
);

const InternshipDetail = () => {
    const navigate = useNavigate();

    const techStack = ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'];

    const features = [
        {
            title: 'Responsive Website Design',
            desc: 'Developed a fully responsive web layout ensuring seamless experience across all device sizes — from mobile phones to desktop monitors — improving accessibility for the foundation\'s diverse audience.',
        },
        {
            title: 'Informational Pages & Content Architecture',
            desc: 'Designed and built key sections: Home, About the Foundation, Programs & Initiatives, Volunteer Information, and a Contact section — giving visitors a complete picture of the organization\'s mission.',
        },
        {
            title: 'Intuitive Navigation System',
            desc: 'Implemented a clean, minimal navigation bar with smooth scroll and anchor links, enabling users to explore all sections without friction or confusion.',
        },
        {
            title: 'Accessible & Clean UI',
            desc: 'Designed the interface with readability and accessibility in mind — strong contrast ratios, semantic HTML markup, and logical information hierarchy that helps users find what they need instantly.',
        },
    ];

    const socialImpact = [
        'Supporting underprivileged communities through technology-driven outreach',
        'Improving the organization\'s digital presence to attract more volunteers and donors',
        'Spreading awareness about education and community development initiatives',
        'Helping bridge the digital gap for non-profit organizations through modern web practices',
    ];

    const technicalSkills = [
        'Frontend web development with real-world constraints',
        'Responsive UI design across mobile, tablet, and desktop',
        'Website architecture planning and information design',
        'Semantic HTML for accessibility and SEO',
        'CSS layout techniques — Flexbox, responsive breakpoints',
    ];

    const professionalSkills = [
        'Cross-functional team collaboration with volunteers and developers',
        'Professional communication in a remote work environment',
        'Understanding how technology amplifies social impact',
        'Time management and delivering under real project deadlines',
        'Empathy-driven design for non-technical end users',
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

                {/* Info cards row */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Stat icon={<FaBriefcase size={11} />} label="Role" value="Web Development Intern" />
                    <Stat icon={<FaCalendarAlt size={11} />} label="Duration" value="Aug 2024 – Sep 2024 · 1 Month" />
                    <Stat icon={<FaMapMarkerAlt size={11} />} label="Location" value="Remote" />
                    <Stat icon={<FaGlobe size={11} />} label="Sector" value="Non-Profit / Social Impact" />
                </motion.div>

                {/* Title + hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }} className="mb-10">

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full">
                            Internship
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-green-500/80 border border-green-900/40 bg-green-950/30 px-3 py-1 rounded-full">
                            Social Impact
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                        Suvidha Foundation
                    </h1>
                    <p className="text-zinc-500 text-lg font-light mb-6">Web Development Internship · August – September 2024</p>

                    <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mb-8 font-light">
                        Suvidha Foundation is a non-profit organization dedicated to social welfare, community development, and education.
                        As a Web Development Intern, I contributed to building the foundation's digital presence — creating a platform
                        that amplifies their mission and connects them with volunteers, donors, and the communities they serve.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a href="https://www.linkedin.com/in/ritik25/overlay/Position/2689559230/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold
                                       hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all">
                            <FaLinkedinIn size={13} /> View on LinkedIn
                        </a>
                        <a href="https://suvidhafoundationedutech.org/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-white text-sm font-semibold
                                       hover:border-zinc-500 hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all">
                            <FaExternalLinkAlt size={11} /> Visit Organization
                        </a>
                    </div>
                </motion.div>

                {/* Hero image */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14 rounded-2xl overflow-hidden border border-zinc-800">
                    <img
                        src="/suvidha-social.png"
                        alt="Community volunteers working together — reflecting Suvidha Foundation's mission"
                        className="w-full h-72 sm:h-96 object-cover object-center"
                    />
                    <div className="bg-zinc-950 border-t border-zinc-800 px-5 py-3 text-xs text-zinc-600 flex items-center gap-2">
                        <FaHandsHelping size={11} className="text-green-600" />
                        Community development work — the mission Suvidha Foundation serves every day.
                    </div>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-12">

                        <Section title="The Challenge" icon={<FaLightbulb size={14} />} delay={0.15}>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Non-profit organizations like Suvidha Foundation operate on limited resources yet need a strong online presence
                                to attract volunteers, reach donors, and communicate their impact to a wider audience. Without a well-structured,
                                accessible website, even the most meaningful work remains invisible to those who could help the most.
                                My role was to solve that — building a digital home for the foundation's mission.
                            </p>
                        </Section>

                        <Section title="Website Development Work" icon={<FaCode size={14} />} delay={0.2}>
                            <div className="space-y-4">
                                {features.map((f, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                                        className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
                                        <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-zinc-500 shrink-0">{i + 1}</span>
                                            {f.title}
                                        </h3>
                                        <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>

                        <Section title="Social Work & Community Contribution" icon={<FaHeart size={14} />} delay={0.35}>
                            <div className="bg-gradient-to-br from-green-950/30 to-zinc-950 border border-green-900/30 rounded-xl p-6 mb-5">
                                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                                    Beyond the technical work, this internship gave me something more meaningful — a front-row view of how
                                    technology can directly amplify social good. Suvidha Foundation operates at the intersection of
                                    community development, education access, and volunteer mobilization. Being part of that ecosystem
                                    reshaped how I think about who I build software for.
                                </p>
                                <ul className="space-y-3">
                                    {socialImpact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Section>

                        <Section title="Impact of the Internship" icon={<FaRocket size={14} />} delay={0.4}>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                                This internship was my first experience delivering a real project for real users with real stakes.
                                It shifted my perspective from building things in isolation to building things that solve actual human problems.
                                Working in a non-profit environment where every hour of effort directly translates to social value made me
                                a more intentional, purpose-driven developer.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: '🌐', label: 'Real-world deployment', desc: 'Shipped code that real users visit and navigate' },
                                    { icon: '🤝', label: 'Team collaboration', desc: 'Worked with volunteers, developers, and coordinators' },
                                    { icon: '📱', label: 'Responsive mastery', desc: 'Multi-device UI for non-technical audiences' },
                                    { icon: '💡', label: 'Purpose-driven engineering', desc: 'Technology as a force for social good' },
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

                        <Section title="Technologies Used" icon={<FaCode size={14} />} delay={0.2}>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono
                                                              hover:border-zinc-600 hover:text-white transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Section>

                        <Section title="Technical Skills Gained" icon={<FaCheckCircle size={14} />} delay={0.25}>
                            <ul className="space-y-2.5">
                                {technicalSkills.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />{s}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Professional Skills Gained" icon={<FaUsers size={14} />} delay={0.3}>
                            <ul className="space-y-2.5">
                                {professionalSkills.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />{s}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Organization" icon={<FaHandsHelping size={14} />} delay={0.35}>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-3">
                                <div>
                                    <p className="text-xs text-zinc-600 mb-0.5">Organization</p>
                                    <p className="text-sm text-white font-medium">Suvidha Foundation</p>
                                    <p className="text-xs text-zinc-500">(Suvidha Mahila Mandal)</p>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-600 mb-0.5">Focus Area</p>
                                    <p className="text-xs text-zinc-400">Social welfare, education & community development</p>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-600 mb-0.5">Work Mode</p>
                                    <p className="text-xs text-zinc-400">Remote Internship</p>
                                </div>
                                <a href="https://www.linkedin.com/in/ritik25/overlay/Position/2689559230/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors mt-2">
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

export default InternshipDetail;
