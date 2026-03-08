import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        company: "Suvidha Foundation",
        role: "Web Development Intern",
        duration: "Aug 2024 – Sep 2024",
        location: "Remote",
        description: [
            "Built dynamic and responsive UI components using React and fundamental web technologies.",
            "Improved website accessibility, ensuring compliance with modern web standards.",
            "Optimized front-end performance, reducing load times by implementing lazy loading and asset minimization.",
            "Collaborated with cross-functional teams to integrate APIs and enhance user experience."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Experience</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-4 border-blue-500/30 ml-4 md:ml-0">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="mb-12 pl-8 md:pl-12 relative"
                        >
                            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-[18px] top-0 border-4 border-slate-100 dark:border-slate-900 shadow-lg flex items-center justify-center">
                                <FaBriefcase className="text-white text-xs" />
                            </div>

                            <div className="glass p-8 rounded-2xl transform transition hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                <h4 className="text-lg font-semibold text-blue-500 mb-4">{exp.company}</h4>

                                <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt /> {exp.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt /> {exp.location}
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                            <span className="text-blue-500 mt-1.5 min-w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
