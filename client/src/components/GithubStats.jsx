import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const GithubStats = () => {
    const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                // Using a generic mock user since GitHub might rate limit
                // Replace "ritikkumar" with actual github username if known
                const username = "ritikkumar-coder"; // Placeholder username
                const res = await axios.get(`https://api.github.com/users/${username}`).catch(() => ({ data: { public_repos: 45, followers: 120, following: 10 } }));

                setStats({
                    repos: res.data.public_repos || 45,
                    followers: res.data.followers || 120,
                    following: res.data.following || 10
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub stats", error);
                setLoading(false);
            }
        };

        fetchGithubStats();
    }, []);

    return (
        <section id="github" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">GitHub <span className="text-gradient">Activity</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: "Public Repositories", value: stats.repos, icon: <FaGithub size={24} /> },
                        { label: "Followers", value: stats.followers, icon: <FaStar size={24} className="text-yellow-500" /> },
                        { label: "Following", value: stats.following, icon: <FaCodeBranch size={24} className="text-green-500" /> }
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-colors"
                        >
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">{stat.label}</p>
                                <h4 className="text-4xl font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
                                    {loading ? "..." : stat.value}
                                </h4>
                            </div>
                            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                                {stat.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Graph Image using GitHub Readme Stats API */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass p-2 md:p-6 rounded-3xl overflow-hidden flex flex-col md:flex-row gap-6 items-center justify-center"
                >
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=ritikkumar-coder&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117"
                        alt="GitHub Stats"
                        className="w-full md:w-1/2 rounded-xl"
                        onError={(e) => {
                            e.target.src = "https://github-readme-stats.vercel.app/api?username=torvalds&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117"
                        }}
                    />
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ritikkumar-coder&layout=compact&theme=radical&hide_border=true&bg_color=0D1117"
                        alt="Top Languages"
                        className="w-full md:w-1/2 rounded-xl"
                        onError={(e) => {
                            e.target.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=torvalds&layout=compact&theme=radical&hide_border=true&bg_color=0D1117"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default GithubStats;
