import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft, FaLinkedinIn, FaHeart,
    FaHandsHelping, FaUsers, FaCheckCircle,
    FaGlobe, FaLightbulb, FaStar
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

const VolunteerDetail = () => {
    const navigate = useNavigate();

    const activities = [
        'Actively assisted in local community development programs and grassroots initiatives',
        'Participated in social awareness drives to promote education and digital literacy',
        'Supported organization of community events and volunteer coordination efforts',
        'Contributed to clean-up drives and environment awareness campaigns in local areas',
        'Helped bridge the gap between underprivileged communities and available social resources',
        'Collaborated with fellow volunteers to plan and execute community outreach programs',
    ];

    const impact = [
        {
            title: 'Community Outreach',
            desc: 'Directly engaged with local communities to understand their needs and facilitate support through organized volunteer activities.',
        },
        {
            title: 'Education Support',
            desc: 'Assisted in initiatives aimed at spreading awareness about education opportunities and digital literacy among underserved groups.',
        },
        {
            title: 'Environment Awareness',
            desc: 'Participated in local environment campaigns to promote sustainable practices and community responsibility.',
        },
    ];

    const skills = [
        'Leadership and team coordination in volunteer settings',
        'Effective communication with diverse community groups',
        'Event planning and grassroots activity management',
        'Empathy-driven problem solving for social challenges',
        'Time management while balancing academics and service',
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
                    <Stat icon={<FaHeart size={11} />} label="Type" value="Volunteer Work" />
                    <Stat icon={<FaUsers size={11} />} label="Focus" value="Community Development" />
                    <Stat icon={<FaGlobe size={11} />} label="Scope" value="Local & Grassroots" />
                    <Stat icon={<FaHandsHelping size={11} />} label="Category" value="Social Service" />
                </motion.div>

                {/* Title */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }} className="mb-10">

                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full">
                            Extracurricular
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-green-500/80 border border-green-900/40 bg-green-950/30 px-3 py-1 rounded-full">
                            Volunteer
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                        Community Volunteer
                    </h1>
                    <p className="text-zinc-500 text-lg font-light mb-6">
                        Supporting community development through active grassroots participation
                    </p>

                    <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mb-8 font-light">
                        As a committed community volunteer, I actively support local development initiatives through hands-on
                        assistance in grassroots activities. From education outreach to environmental awareness campaigns,
                        my volunteer work reflects a deep belief that technology professionals have a responsibility to give
                        back to the communities that shape them — using both technical skills and human effort to create
                        tangible social impact.
                    </p>

                    <a href="https://www.linkedin.com/in/ritik25/overlay/VolunteerExperience/467299265/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
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
                        src="/volunteer.png"
                        alt="Community volunteers working together in a local grassroots initiative"
                        className="w-full h-72 sm:h-96 object-cover object-center"
                    />
                    <div className="bg-zinc-950 border-t border-zinc-800 px-5 py-3 text-xs text-zinc-600 flex items-center gap-2">
                        <FaHandsHelping size={11} className="text-green-500" />
                        Community development — making a difference one initiative at a time.
                    </div>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-12">

                        <Section title="What I Do" icon={<FaCheckCircle size={14} />} delay={0.15}>
                            <ul className="space-y-3">
                                {activities.map((a, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{a}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Areas of Impact" icon={<FaGlobe size={14} />} delay={0.25}>
                            <div className="space-y-4">
                                {impact.map((item, i) => (
                                    <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
                                        <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-green-950 border border-green-900/50 flex items-center justify-center text-xs text-green-500 shrink-0">{i + 1}</span>
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section title="Why I Volunteer" icon={<FaLightbulb size={14} />} delay={0.35}>
                            <div className="bg-gradient-to-br from-green-950/30 to-zinc-950 border border-green-900/30 rounded-xl p-6">
                                <p className="text-zinc-300 text-sm leading-relaxed">
                                    As someone focused on building technology for impact, I believe volunteering is a direct way to
                                    understand the problems that matter most. Working at the grassroots level gives me perspective
                                    that no amount of coding can — it connects the dots between the software I build and the people
                                    whose lives it should improve. Every hour spent volunteering makes me a more thoughtful,
                                    empathetic engineer.
                                </p>
                            </div>
                        </Section>

                        <Section title="Takeaways" icon={<FaStar size={14} />} delay={0.4}>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: '🤝', label: 'Community Connection', desc: 'Built meaningful relationships with people from diverse backgrounds' },
                                    { icon: '💡', label: 'Empathy in Engineering', desc: 'Learned to design solutions with real human needs in mind' },
                                    { icon: '🌱', label: 'Social Responsibility', desc: 'Developed a strong sense of giving back to the community' },
                                    { icon: '🎯', label: 'Leadership Growth', desc: 'Grew as a leader through organizing and coordinating volunteer work' },
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

                        <Section title="Skills Developed" icon={<FaUsers size={14} />} delay={0.2}>
                            <ul className="space-y-2.5">
                                {skills.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />{s}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Details" icon={<FaHandsHelping size={14} />} delay={0.25}>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 space-y-4">
                                {[
                                    { label: 'Role', value: 'Community Volunteer' },
                                    { label: 'Focus', value: 'Community Development' },
                                    { label: 'Activities', value: 'Grassroots initiatives, awareness drives, outreach programs' },
                                    { label: 'Scope', value: 'Local community service' },
                                ].map(({ label, value }) => (
                                    <div key={label}>
                                        <p className="text-xs text-zinc-600 mb-0.5">{label}</p>
                                        <p className="text-sm text-white font-medium">{value}</p>
                                    </div>
                                ))}
                                <a href="https://www.linkedin.com/in/ritik25/overlay/VolunteerExperience/467299265/treasury/?profileId=ACoAAEWu-PwBCou5J_n6nppA57T8DMpgcwIzwzI"
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

export default VolunteerDetail;
