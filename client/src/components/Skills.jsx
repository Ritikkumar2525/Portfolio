import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaServer, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiBootstrap, SiExpress, SiMysql } from 'react-icons/si';

const skillsData = [
    {
        category: "Frontend",
        icon: <FaReact className="text-blue-500" size={32} />,
        skills: [
            { name: "React", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "HTML & CSS", level: 90 },
            { name: "Bootstrap", level: 80 },
        ]
    },
    {
        category: "Backend",
        icon: <FaServer className="text-green-500" size={32} />,
        skills: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 85 },
            { name: "MongoDB", level: 75 },
            { name: "MySQL", level: 70 },
        ]
    },
    {
        category: "Tools",
        icon: <FaGithub className="text-slate-700 dark:text-slate-300" size={32} />,
        skills: [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 90 },
            { name: "VS Code", level: 95 },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="glass p-8 rounded-3xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-inner">
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{group.category}</h3>
                            </div>

                            <div className="flex flex-col gap-6">
                                {group.skills.map(skill => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                                            <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                                            >
                                                <div className="absolute top-0 right-0 w-4 h-full bg-white/30 blur-[2px]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
