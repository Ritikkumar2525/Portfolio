import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const GITHUB_USER = 'Ritikkumar2525';

// Smart keyword → Unsplash image map
const KEYWORD_IMAGES = [
    // Collaboration / real-time
    {
        keys: ['collab', 'chat', 'message', 'realtime', 'socket', 'whiteboard', 'video', 'conference', 'meet'],
        url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'
    },
    // Food / NGO / social good
    {
        keys: ['food', 'ngo', 'hunger', 'donate', 'restaurant', 'meal', 'grocery'],
        url: 'https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=800&q=80'
    },
    // Portfolio / personal site
    {
        keys: ['portfolio', 'personal', 'website', 'profile'],
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80'
    },
    // AI / ML / LLM
    {
        keys: ['ai', 'ml', 'machine', 'learning', 'gpt', 'llm', 'generative', 'neural', 'model', 'nlp'],
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    // E-commerce / shop
    {
        keys: ['shop', 'store', 'ecommerce', 'commerce', 'cart', 'product', 'order'],
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
    },
    // Authentication / security
    {
        keys: ['auth', 'login', 'security', 'jwt', 'oauth', 'password', 'register'],
        url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
    },
    // Blog / CMS / writing
    {
        keys: ['blog', 'cms', 'content', 'post', 'article', 'write', 'note'],
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
    },
    // Dashboard / analytics
    {
        keys: ['dashboard', 'analytics', 'chart', 'stats', 'report', 'admin', 'panel'],
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    // Game
    {
        keys: ['game', 'quiz', 'puzzle', 'play', 'chess', 'snake'],
        url: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80'
    },
    // API / backend
    {
        keys: ['api', 'backend', 'server', 'rest', 'graphql', 'microservice', 'express', 'node'],
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    // Mobile / app
    {
        keys: ['mobile', 'app', 'android', 'ios', 'flutter', 'react-native'],
        url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
    },
    // Database
    {
        keys: ['database', 'db', 'sql', 'mongo', 'postgres', 'redis'],
        url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80'
    },
    // Network / cloud / devops
    {
        keys: ['cloud', 'network', 'devops', 'docker', 'kubernetes', 'aws', 'deploy', 'ci'],
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    // Automation / scraping
    {
        keys: ['scrape', 'crawler', 'automat', 'bot', 'script'],
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    // Finance / crypto
    {
        keys: ['finance', 'crypto', 'bitcoin', 'stock', 'invest', 'wallet', 'payment'],
        url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    },
    // Social media
    {
        keys: ['social', 'twitter', 'instagram', 'feed', 'post', 'like', 'follow', 'user'],
        url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80'
    },
    // Java / DSA / algo
    {
        keys: ['java', 'dsa', 'algo', 'data-structure', 'leetcode', 'competitive'],
        url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80'
    },
    // Python
    {
        keys: ['python', 'django', 'flask', 'fastapi', 'pandas', 'numpy'],
        url: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80'
    },
    // React / frontend
    {
        keys: ['react', 'frontend', 'next', 'vue', 'angular', 'ui', 'component', 'tailwind'],
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
    },
    // 3D / WebGL
    {
        keys: ['3d', 'three', 'webgl', 'animation', 'canvas', 'spline'],
        url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80'
    },
];

// Pick the best image by searching name + description for keywords
const getRepoImage = (repo) => {
    const haystack = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();
    for (const { keys, url } of KEYWORD_IMAGES) {
        if (keys.some(k => haystack.includes(k))) return url;
    }
    // Language fallback
    const langImages = {
        Python: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
        Java: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
        TypeScript: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
        CSS: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
        HTML: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    };
    return langImages[repo.language] || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80';
};

// Fallback data
const FALLBACK_REPOS = [
    {
        id: 1,
        name: 'Collabrix',
        description: 'A comprehensive real-time collaboration app — interactive whiteboards, video conferencing, and real-time document sharing built with raw WebSockets.',
        html_url: 'https://github.com/Ritikkumar2525',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 0,
        forks_count: 0,
        fork: false,
    },
    {
        id: 2,
        name: 'Food-Platform',
        description: 'A web platform connecting food donors with NGOs. Features location-based matching, secure user auth, and an inventory tracking dashboard.',
        html_url: 'https://github.com/Ritikkumar2525',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 0,
        forks_count: 0,
        fork: false,
    },
    {
        id: 3,
        name: 'Portfolio',
        description: 'Personal developer portfolio built with React, Three.js, and Tailwind CSS. Features an interactive 3D Rubik\'s cube animation.',
        html_url: 'https://github.com/Ritikkumar2525',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 0,
        forks_count: 0,
        fork: false,
    },
];

const LANG_COLORS = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3776ab',
    Java: '#b07219',
    CSS: '#563d7c',
    HTML: '#e34c26',
    default: '#58a6ff',
};

// Skeleton loader
const SkeletonCard = () => (
    <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl overflow-hidden animate-pulse">
        <div className="h-44 bg-zinc-900" />
        <div className="p-5">
            <div className="h-4 bg-zinc-800 rounded w-1/2 mb-3" />
            <div className="h-3 bg-zinc-800 rounded mb-2" />
            <div className="h-3 bg-zinc-800 rounded w-3/4" />
        </div>
    </div>
);

const ProjectCard = ({ repo, index }) => {
    const navigate = useNavigate();
    const langColor = LANG_COLORS[repo.language] || LANG_COLORS.default;
    const imgSrc = getRepoImage(repo);

    const handleClick = (e) => {
        if (e.target.closest('a')) return;
        navigate(`/project/${repo.name}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            onClick={handleClick}
            className="group cursor-pointer"
        >
            <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-2xl overflow-hidden
                            hover:border-zinc-700 transition-all duration-300
                            hover:shadow-2xl hover:shadow-black/70">

                {/* Image Preview */}
                <div className="relative h-44 overflow-hidden bg-zinc-900">
                    <img
                        src={imgSrc}
                        alt={repo.name}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105
                                   transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                    {/* Top right quick links */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <a href={repo.html_url} onClick={e => e.stopPropagation()}
                            target="_blank" rel="noopener noreferrer"
                            className="w-7 h-7 rounded-full bg-black/70 backdrop-blur flex items-center justify-center text-zinc-300 hover:text-white transition-colors border border-zinc-700/50"
                            aria-label="GitHub">
                            <FaGithub size={13} />
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} onClick={e => e.stopPropagation()}
                                target="_blank" rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-black/70 backdrop-blur flex items-center justify-center text-zinc-300 hover:text-white transition-colors border border-zinc-700/50"
                                aria-label="Demo">
                                <FaExternalLinkAlt size={11} />
                            </a>
                        )}
                    </div>

                    {/* Language badge */}
                    {repo.language && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur border border-zinc-700/40 text-xs font-mono text-zinc-300">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} />
                            {repo.language}
                        </div>
                    )}
                </div>

                {/* Card content */}
                <div className="p-5">
                    <h3 className="text-sm font-semibold text-white tracking-tight mb-1.5 group-hover:text-zinc-200">
                        {repo.name.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-light mb-4">
                        {repo.description || 'No description provided.'}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 text-xs text-zinc-600">
                            {repo.stargazers_count > 0 && (
                                <span className="flex items-center gap-1"><FaStar size={9} />{repo.stargazers_count}</span>
                            )}
                            {repo.forks_count > 0 && (
                                <span className="flex items-center gap-1"><FaCodeBranch size={9} />{repo.forks_count}</span>
                            )}
                        </div>
                        <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors font-mono">
                            View details →
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const INITIAL_SHOW = 3;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`,
                    { headers: { Accept: 'application/vnd.github+json' } }
                );
                if (!res.ok) throw new Error('Rate limited');
                const data = await res.json();
                const filtered = data.filter(r => !r.fork);
                if (filtered.length === 0) throw new Error('No repos');
                setRepos(filtered);
            } catch {
                setRepos(FALLBACK_REPOS);
                setUsingFallback(true);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    return (
        <section id="work" className="py-24 px-6 relative max-w-6xl mx-auto">
            <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">GitHub Projects</h2>
                    <p className="text-zinc-400 text-base max-w-xl font-light">
                        Live feed from my GitHub — all repositories, constantly updated.
                    </p>
                </div>
                <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary text-sm flex items-center gap-2 shrink-0">
                    <FaGithub size={14} />
                    View GitHub Profile
                </a>
            </div>

            {usingFallback && (
                <div className="flex items-center gap-2 text-zinc-600 text-xs mb-8 px-4 py-2.5 bg-zinc-900/40 border border-zinc-800/50 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70 shrink-0" />
                    GitHub API rate limit reached — showing featured projects.{' '}
                    <a href={`https://github.com/${GITHUB_USER}`} className="text-zinc-400 hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">
                        View all on GitHub →
                    </a>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading
                    ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
                    : (showAll ? repos : repos.slice(0, INITIAL_SHOW)).map((repo, idx) => (
                        <ProjectCard key={repo.id} repo={repo} index={idx} />
                    ))
                }
            </div>

            {/* Show More / Less button */}
            {!loading && repos.length > INITIAL_SHOW && (
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
                            <><span>Show More Projects</span><span className="text-zinc-500 font-mono text-xs">+{repos.length - INITIAL_SHOW} more</span></>
                        )}
                    </motion.button>
                </motion.div>
            )}
        </section>
    );
};

export default Projects;
