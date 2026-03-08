import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaGithub, FaExternalLinkAlt, FaArrowLeft,
    FaStar, FaCodeBranch, FaEye, FaCalendarAlt,
    FaCheckCircle, FaLightbulb, FaRocket, FaCode,
    FaUser, FaClock, FaLayerGroup, FaTools
} from 'react-icons/fa';

const GITHUB_USER = 'Ritikkumar2525';

// ─── All project content with real demo links ─────────────────────────────────
const PROJECT_CONTENT = {
    'Collabri-X': {
        infoCard: {
            type: 'Full Stack Web Application',
            role: 'Full Stack Developer',
            duration: '3 Weeks',
            tech: 'React · Node.js · Socket.io · WebRTC · MongoDB',
        },
        overview: `Collabri-X is a real-time collaboration platform designed for teams to brainstorm, communicate, and work together seamlessly from anywhere. It combines interactive whiteboards, video conferencing, and live document sharing into a single unified workspace — built for speed and low latency.`,
        problem: `Distributed teams often juggle multiple disconnected tools — one for video calls, another for notes, another for whiteboards. This fragmentation slows productivity and creates communication gaps. Collabri-X consolidates these into one seamless environment, eliminating context-switching.`,
        motivation: `Inspired by the challenges of remote pair-programming sessions where switching between Zoom, Notion, and a shared editor constantly broke flow. I wanted to build a single environment where engineers could think, discuss, and build in real-time without ever leaving the page.`,
        features: [
            'Real-time interactive whiteboard with drawing and shape tools',
            'Video conferencing powered by WebRTC peer-to-peer connections',
            'Live document editing with presence indicators (typing cursors)',
            'Room-based sessions — create or join with a link',
            'Low-latency messaging using raw WebSockets',
            'User authentication with persistent session management',
            'Responsive design for desktop and tablet',
        ],
        tech: {
            Frontend: ['React.js', 'Tailwind CSS', 'Socket.io-client', 'Canvas API'],
            Backend: ['Node.js', 'Express.js', 'Socket.io', 'WebRTC Signaling Server'],
            Database: ['MongoDB', 'Mongoose'],
            Tools: ['JWT Authentication', 'Nodemon', 'Vercel', 'Git'],
        },
        role: `I designed and developed the entire application end-to-end as a solo project. This included system architecture design, React component development, WebSocket event architecture, WebRTC signaling logic, RESTful API design, MongoDB schema design, and deployment.`,
        timeline: {
            duration: '3 Weeks',
            weeks: [
                { label: 'Week 1', desc: 'Planning, system design, UI wireframes, and project scaffolding' },
                { label: 'Week 2', desc: 'Core feature development — whiteboard, WebSocket events, WebRTC integration' },
                { label: 'Week 3', desc: 'Document sharing, auth, UI polish, testing, and deployment' },
            ],
        },
        challenges: [
            {
                title: 'WebRTC Peer Connection Management',
                desc: 'Managing multiple simultaneous peer connections without memory leaks required careful cleanup of RTCPeerConnection instances on user disconnect. Solved by implementing a cleanup hook that terminates tracks and closes connections on socket disconnect events.',
            },
            {
                title: 'Whiteboard State Synchronization',
                desc: 'Keeping the canvas in sync across all users with minimal latency required delta-based updates instead of broadcasting the full canvas state. Implemented an event queue that batches small drawing deltas and flushes them at 60fps.',
            },
        ],
        learnings: [
            'Deep understanding of WebRTC signaling, STUN/TURN server configuration',
            'Event-driven architecture with Socket.io rooms and namespaces',
            'Canvas API and real-time delta synchronization strategies',
            'Handling concurrent users and race conditions in real-time systems',
            'Optimizing WebSocket payload sizes for minimal latency',
        ],
        future: [
            'Add recording functionality for sessions using the MediaRecorder API',
            'Implement voice-only lightweight communication mode',
            'Add a code editor panel with Monaco Editor',
            'Scale with Redis pub/sub for multi-server deployments',
            'Mobile app using React Native with simplified whiteboard',
        ],
        github: 'https://github.com/Ritikkumar2525/Collabri-X',
        demo: 'https://collabri-x.vercel.app',
    },

    'Software-Platform-To-Combat-Hunger': {
        infoCard: {
            type: 'Full Stack Web Application',
            role: 'Full Stack Developer',
            duration: '4 Weeks',
            tech: 'MERN Stack · Google Maps API · Tailwind CSS',
        },
        overview: `A socially impactful web platform bridging the gap between surplus food donors — restaurants, households, events — and registered NGOs that redistribute food to those in need. Streamlines the donation lifecycle from listing to pickup coordination.`,
        problem: `Tonnes of edible food are wasted daily while millions go hungry — not from a lack of food, but a lack of redistribution infrastructure. Donors have no easy way to find nearby NGOs, and NGOs have no centralized view of available food in real time.`,
        motivation: `During a local volunteer event, I witnessed volunteers manually coordinating food pickups via WhatsApp groups — chaotic, slow, and prone to errors. I built this to automate that coordination layer and make food sharing as easy as placing an online order.`,
        features: [
            'Donors can list surplus food with quantity, location, and pickup window',
            'NGOs receive real-time notifications for nearby donations',
            'Location-based matching using Google Maps API',
            'Role-based authentication (Donor, NGO, Admin)',
            'Admin dashboard for monitoring donations and users',
            'Inventory tracker for NGOs to manage claimed donations',
            'Email notifications on donation claim and pickup confirmation',
            'Responsive design optimized for mobile field workers',
        ],
        tech: {
            Frontend: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
            Backend: ['Node.js', 'Express.js', 'Nodemailer'],
            Database: ['MongoDB', 'Mongoose'],
            Tools: ['JWT Authentication', 'bcrypt', 'dotenv', 'Vercel', 'Git'],
        },
        role: `Led the complete development including database schema design for multi-role users, RESTful API development, geolocation-based matching, admin dashboard, notification system, and the full responsive frontend.`,
        timeline: {
            duration: '4 Weeks',
            weeks: [
                { label: 'Week 1', desc: 'Requirements, ER diagram, system design, and UI wireframes' },
                { label: 'Week 2', desc: 'Backend API — auth, roles, donation CRUD, Maps API integration' },
                { label: 'Week 3', desc: 'Frontend, role dashboards, notifications, and map rendering' },
                { label: 'Week 4', desc: 'Admin panel, testing, UI refinement, and deployment' },
            ],
        },
        challenges: [
            {
                title: 'Location-Based NGO Matching',
                desc: 'Implementing efficient radius-based filtering required MongoDB geospatial queries using $geoNear with 2dsphere indexes. This reduced query time from O(n) linear scans to sub-10ms indexed lookups.',
            },
            {
                title: 'Multi-Role Authentication & Authorization',
                desc: 'Designing a clean authorization model where Donors, NGOs, and Admins have distinct permissions without duplication required building a middleware-based role guard system with route-level permission decorators.',
            },
        ],
        learnings: [
            'MongoDB geospatial indexing and $geoNear aggregation queries',
            'Role-based access control design patterns in Express.js',
            'Google Maps API — geocoding, distance matrix, and map rendering',
            'Real-world system design for multi-stakeholder platforms',
            'Building notification systems with Nodemailer and HTML email templates',
        ],
        future: [
            'Real-time donation feed using WebSockets for live NGO dashboards',
            'Mobile app for NGO volunteers with GPS route optimization',
            'AI-powered demand forecasting to pre-position food resources',
            'Integration with government food bank APIs for wider reach',
            'Analytics dashboard with donation heatmaps per city',
        ],
        github: 'https://github.com/Ritikkumar2525/Software-Platform-To-Combat-Hunger',
        demo: 'https://software-platform-to-combat-hunger.vercel.app',
    },

    'InteractX': {
        infoCard: {
            type: 'Frontend Web Application',
            role: 'Full Stack Developer',
            duration: '2 Weeks',
            tech: 'React · Socket.io · Canvas API · Node.js',
        },
        overview: `InteractX is a real-time collaborative whiteboard application that allows multiple users to draw, annotate, and brainstorm together on a shared infinite canvas. Built for teams that need a fast, lightweight visual collaboration tool.`,
        problem: `Most collaborative tools are bloated with features that slow down the core whiteboard experience. Teams need a minimal, fast, zero-setup whiteboard they can open instantly and start drawing — without accounts or downloads.`,
        motivation: `Built as a focused real-time experiment to explore WebSocket-driven canvas synchronization — a more minimal take on the collaboration problem compared to the full-featured Collabri-X platform.`,
        features: [
            'Infinite canvas with real-time multi-user drawing sync',
            'Drawing tools — pen, shapes, text, eraser',
            'Room-based sessions with shareable URL',
            'Color picker and stroke width controls',
            'Undo/redo with distributed state reconciliation',
            'Export canvas as PNG image',
        ],
        tech: {
            Frontend: ['React.js', 'Canvas API', 'Socket.io-client'],
            Backend: ['Node.js', 'Express.js', 'Socket.io'],
            Database: ['In-memory session store'],
            Tools: ['Vercel', 'Git', 'VS Code'],
        },
        role: `Designed and built the full-stack application — frontend canvas rendering engine, WebSocket event system, room management logic, and UI controls. Deployed independently on Vercel.`,
        timeline: {
            duration: '2 Weeks',
            weeks: [
                { label: 'Week 1', desc: 'Canvas rendering engine, drawing tools, and real-time Socket.io sync' },
                { label: 'Week 2', desc: 'Room management, undo/redo, UI polish, and Vercel deployment' },
            ],
        },
        challenges: [
            {
                title: 'Canvas Event Ordering',
                desc: 'With multiple users drawing simultaneously, ensuring event ordering consistency required implementing a timestamp-based event queue that discards stale events and applies them in the correct sequence.',
            },
            {
                title: 'Infinite Canvas Performance',
                desc: 'Rendering thousands of strokes without frame drops required batching redraws using requestAnimationFrame and only re-rendering the dirty region of the canvas instead of clearing and redrawing the full canvas on every event.',
            },
        ],
        learnings: [
            'Canvas API rendering optimization — dirty rect tracking and batched redraws',
            'WebSocket event ordering strategies for multi-user systems',
            'Room-based WebSocket architecture with Socket.io namespaces',
        ],
        future: [
            'Add sticky notes and image import',
            'Persistent sessions with MongoDB storage',
            'PDF export for whiteboard content',
            'Mobile touch support with pressure-sensitive drawing',
        ],
        github: 'https://github.com/Ritikkumar2525/InteractX',
        demo: 'https://collaborative-whiteboard-bice-two.vercel.app',
    },

    'team-aventus-esports-platform': {
        infoCard: {
            type: 'Frontend Web Application',
            role: 'Frontend Developer',
            duration: '2 Weeks',
            tech: 'React · Tailwind CSS · Framer Motion',
        },
        overview: `Team Aventus Esports Platform is a professional gaming team website showcasing the team roster, tournament achievements, match schedules, and team branding. Built for real competitive gaming organizations to establish a strong digital presence.`,
        problem: `Esports teams lack professional web presences comparable to traditional sports organizations. Most rely on social media alone, missing a centralized, branded hub for fans, sponsors, and recruits.`,
        motivation: `Built for the Team Aventus gaming organization to give them a professional platform showcasing their identity, roster, and competitive achievements in a visually impressive format.`,
        features: [
            'Professional team branding with animated hero section',
            'Interactive roster cards with player profiles and stats',
            'Tournament history and achievement showcase',
            'Match schedule and upcoming events calendar',
            'Sponsors section with tier-based display',
            'Recruitment / "Join the team" application section',
            'Fully responsive and mobile-optimized',
        ],
        tech: {
            Frontend: ['React.js', 'Tailwind CSS', 'Framer Motion'],
            Backend: ['Static / No backend'],
            Database: ['None (JSON data files)'],
            Tools: ['Vite', 'Vercel', 'Git'],
        },
        role: `Designed and developed the full frontend — including the hero animation, player roster system, tournament timeline, responsive grid layouts, and Vercel deployment.`,
        timeline: {
            duration: '2 Weeks',
            weeks: [
                { label: 'Week 1', desc: 'Brand design, hero section, player roster cards, and responsive layout' },
                { label: 'Week 2', desc: 'Tournament section, sponsors, recruitment form, animations, and deployment' },
            ],
        },
        challenges: [
            {
                title: 'Esports Aesthetic on the Web',
                desc: 'Matching the aggressive, high-contrast visual language of esports brands while maintaining clean, readable UI required a custom design system built on dark backgrounds, neon accents, and sharp typography.',
            },
        ],
        learnings: [
            'Building brand-specific design systems from scratch',
            'Framer Motion complex entrance animations and stagger effects',
            'Responsive grid layouts for card-heavy content',
        ],
        future: [
            'Live match results integration via esports API',
            'Backend CMS for team admins to update roster and events',
            'Live stream embed for match broadcasts',
        ],
        github: 'https://github.com/Ritikkumar2525/team-aventus-esports-platform',
        demo: 'https://team-aventus-esports-platform.vercel.app',
    },

    'Flipkart-Clone': {
        infoCard: {
            type: 'Frontend Web Application',
            role: 'Frontend Developer',
            duration: '1 Week',
            tech: 'HTML · CSS · JavaScript',
        },
        overview: `A pixel-accurate front-end clone of Flipkart, India's largest e-commerce platform. Replicates the homepage, product listing pages, product detail pages, and cart UI — built purely with HTML, CSS, and vanilla JavaScript.`,
        problem: `Frontend cloning exercises are one of the most effective ways to develop real-world CSS layout skills, responsive design proficiency, and an eye for UI detail. Flipkart's complex multi-column layout makes it an excellent challenge.`,
        motivation: `Built as a learning project to master CSS Flexbox, Grid, and responsive breakpoints by recreating a production-grade e-commerce UI without any framework crutch.`,
        features: [
            'Fully responsive homepage with promotional banners',
            'Product listing grid with filter and sort controls',
            'Product detail page with image carousel',
            'Cart with item quantity controls and price summary',
            'Navigation header with search bar and account icons',
            'CSS hover effects and transition animations',
        ],
        tech: {
            Frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
            Backend: ['None (static frontend)'],
            Database: ['None'],
            Tools: ['VS Code', 'Vercel', 'Git'],
        },
        role: `Designed and built the entire frontend solo — all HTML structure, CSS styling (Flexbox + Grid), responsive breakpoints, and JavaScript interactions.`,
        timeline: {
            duration: '1 Week',
            weeks: [
                { label: 'Days 1–3', desc: 'Homepage, navigation, and product listing grid' },
                { label: 'Days 4–5', desc: 'Product detail page, cart UI, and JavaScript interactions' },
                { label: 'Days 6–7', desc: 'Responsive design, polish, and Vercel deployment' },
            ],
        },
        challenges: [
            {
                title: 'Pixel-Perfect Responsive Layout',
                desc: 'Matching Flipkart\'s complex mixed-width grid on all screen sizes required combining CSS Grid for the outer layout with Flexbox for inner component alignment — and careful use of percentage widths and min-width constraints.',
            },
        ],
        learnings: [
            'Advanced CSS Grid and Flexbox layout techniques',
            'Responsive design with media queries and fluid typography',
            'UI cloning as a technique to study production-grade design systems',
        ],
        future: [
            'Add a working search with JavaScript array filtering',
            'Connect to a product API for real data',
            'Build out checkout flow with form validation',
        ],
        github: 'https://github.com/Ritikkumar2525/Flipkart-Clone',
        demo: 'https://flipkart-clone-eight-puce.vercel.app',
    },

    'anonymous-confession-wall': {
        infoCard: {
            type: 'Frontend Web Application',
            role: 'Solo Developer',
            duration: '3 Days',
            tech: 'HTML · CSS · JavaScript · LocalStorage',
        },
        overview: `An anonymous confession wall where users can post and read anonymous confessions publicly without creating an account. Think of it as a digital bulletin board for thoughts people are afraid to say under their real name.`,
        problem: `People often have thoughts, feelings, or stories they want to share but feel unable to due to social stigma or fear of judgment. A truly anonymous platform with no accounts, no tracking, and no login removes that barrier completely.`,
        motivation: `Built as a fun social experiment to explore anonymous expression on the web — how people behave and what they say when completely free of identity. Also a great exercise in pure frontend state management with no backend.`,
        features: [
            'Post anonymous confessions without any account or login',
            'Confessions are stored and displayed in a public feed',
            'Upvote/react to confessions anonymously',
            'Category tagging for confession type',
            'Filter confessions by category or popularity',
            'Responsive card-based UI',
        ],
        tech: {
            Frontend: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
            Backend: ['None (pure frontend)'],
            Database: ['Browser LocalStorage'],
            Tools: ['VS Code', 'Git'],
        },
        role: `Designed and built the entire application solo — UI design, JavaScript logic, LocalStorage state management, and all frontend interactions.`,
        timeline: {
            duration: '3 Days',
            weeks: [
                { label: 'Day 1', desc: 'UI design, confessions feed layout, and LocalStorage integration' },
                { label: 'Day 2', desc: 'Post submission, reactions, and category filtering' },
                { label: 'Day 3', desc: 'Polish, responsive design, and final testing' },
            ],
        },
        challenges: [
            {
                title: 'Anonymous State Without a Backend',
                desc: 'Maintaining confession data and reaction counts persistently across sessions without any server required a clean LocalStorage schema with versioned data migration logic to handle schema changes without breaking existing entries.',
            },
        ],
        learnings: [
            'LocalStorage as a lightweight persistence layer for frontend-only apps',
            'Designing for anonymous UX — removing all identity friction',
            'Pure vanilla JS state management without React',
        ],
        future: [
            'Add a real backend with Node.js for true public sharing',
            'Moderation system to flag inappropriate content',
            'Real-time feed updates with WebSockets',
            'Trending confessions algorithm based on recency and reactions',
        ],
        github: 'https://github.com/Ritikkumar2525/anonymous-confession-wall',
        demo: null,
    },

    Portfolio: {
        infoCard: {
            type: 'Frontend Web Application',
            role: 'Full Stack Developer & Designer',
            duration: '2 Weeks',
            tech: 'React · Three.js · React Three Fiber · Tailwind CSS · Framer Motion',
        },
        overview: `A premium personal developer portfolio showcasing projects, certifications, skills, and experience. Features an interactive 3D Rubik's cube animation in the hero section, smooth scroll transitions, GitHub API integration, and a fully functional contact form system.`,
        problem: `Standard portfolio templates feel generic and fail to communicate engineering depth. A developer who works in real-time systems and 3D graphics should demonstrate that capability directly in their portfolio.`,
        motivation: `I wanted a portfolio that itself is a project — demonstrating advanced frontend engineering, 3D rendering, animation design, and visual detail. Inspired by Resend.com's hero section and premium SaaS aesthetics.`,
        features: [
            'Interactive 3D Rubik\'s cube with kinematic slice rotation physics',
            'Mouse parallax, idle float, and drag-to-rotate cube interactions',
            'Live GitHub repository feed with intelligent fallback data',
            'Project detail pages with language breakdown progress bars',
            'Certifications section with LinkedIn deep-links',
            'Contact form with Nodemailer email delivery',
            'Smooth scroll animations powered by Framer Motion',
            'Fully responsive across desktop, tablet, and mobile',
        ],
        tech: {
            Frontend: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber', 'Three.js'],
            Backend: ['Node.js', 'Express.js', 'Nodemailer'],
            Database: ['None (stateless)'],
            Tools: ['Vite', 'GitHub API', 'Git', 'VS Code'],
        },
        role: `Designed and built the entire portfolio from scratch — including the 3D shader materials, Rubik's cube physics engine, GitHub API integration, animated card components, and the contact backend.`,
        timeline: {
            duration: '2 Weeks',
            weeks: [
                { label: 'Week 1', desc: '3D cube animation, hero section, design system, and core components' },
                { label: 'Week 2', desc: 'GitHub feed, project detail pages, certifications, contact form, and polish' },
            ],
        },
        challenges: [
            {
                title: 'Rubik\'s Cube Kinematic Physics',
                desc: 'Tracking each mini-cube\'s position in a logical 3D grid and applying quaternion-based rotations per slice — while running idle floating and drag interactions concurrently — required a custom physics engine built on top of Three.js object groups.',
            },
            {
                title: 'GitHub API Rate Limiting',
                desc: 'Unauthenticated GitHub API requests are limited to 60/hour. Implemented graceful fallback that detects rate limit responses and silently swaps in curated hardcoded projects — so visitors always see content.',
            },
        ],
        learnings: [
            'React Three Fiber — declarative 3D scene management in React',
            'Three.js quaternion math for 3D slice rotation',
            'PBR materials — metalness, roughness, clearcoat',
            'Framer Motion advanced patterns — whileInView, AnimatePresence',
            'Building production-quality fallback strategies for third-party APIs',
        ],
        future: [
            'Add a blog section with MDX-powered articles',
            'Dark/light theme toggle',
            'GitHub contribution heatmap visualization',
            'Deploy to custom domain with CDN optimization',
        ],
        github: 'https://github.com/Ritikkumar2525/Portfolio',
        demo: null,
    },
};

// ─── Alias map: all GitHub repo name variants → content key ──────────────────
const ALIASES = {
    'collabri-x': 'Collabri-X',
    'collabrix': 'Collabri-X',
    'software-platform-to-combat-hunger': 'Software-Platform-To-Combat-Hunger',
    'food-platform': 'Software-Platform-To-Combat-Hunger',
    'foodplatform': 'Software-Platform-To-Combat-Hunger',
    'interactx': 'InteractX',
    'interact-x': 'InteractX',
    'team-aventus-esports-platform': 'team-aventus-esports-platform',
    'teamaventus': 'team-aventus-esports-platform',
    'flipkart-clone': 'Flipkart-Clone',
    'flipkartclone': 'Flipkart-Clone',
    'anonymous-confession-wall': 'anonymous-confession-wall',
    'anonymousconfessionwall': 'anonymous-confession-wall',
    'portfolio': 'Portfolio',
};

const findContent = (rawName) => {
    if (!rawName) return null;
    const lower = rawName.toLowerCase();
    if (ALIASES[lower]) return PROJECT_CONTENT[ALIASES[lower]];
    // fuzzy: strip non-alpha and compare
    const stripped = rawName.replace(/[-_\s]/g, '').toLowerCase();
    const match = Object.keys(PROJECT_CONTENT).find(
        k => k.replace(/[-_\s]/g, '').toLowerCase() === stripped
    );
    return match ? PROJECT_CONTENT[match] : null;
};

// ─── Language colors ──────────────────────────────────────────────────────────
const LANG_COLORS = {
    JavaScript: '#f7df1e', TypeScript: '#3178c6', Python: '#3776ab',
    Java: '#b07219', CSS: '#563d7c', HTML: '#e34c26', default: '#58a6ff',
};

// ─── Section wrapper ──────────────────────────────────────────────────────────
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

// ─── Generic repo page (for repos without full content) ───────────────────────
const GenericRepoPage = ({ projectName, githubRepo, languages }) => {
    const navigate = useNavigate();
    const techStack = Object.keys(languages);
    const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
    const repoUrl = `https://github.com/${GITHUB_USER}/${projectName}`;
    const demoUrl = githubRepo?.homepage || null;
    const displayName = projectName.replace(/-/g, ' ');

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans">
            <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-800/80">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                        <FaArrowLeft size={12} /> Back
                    </button>
                    <Link to="/" className="font-semibold text-sm tracking-wide text-white">Ritik.</Link>
                </div>
            </header>
            <main className="pt-24 pb-24 px-6 max-w-5xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">{displayName}</h1>
                    {githubRepo?.description && (
                        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl mb-8">{githubRepo.description}</p>
                    )}
                    <div className="flex flex-wrap gap-3 mb-14">
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all">
                            <FaGithub size={14} /> View on GitHub
                        </a>
                        {demoUrl && (
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-white text-sm font-semibold hover:border-zinc-500 hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all">
                                <FaExternalLinkAlt size={12} /> Live Demo
                            </a>
                        )}
                    </div>

                    {githubRepo && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
                            {[
                                { icon: <FaStar size={12} />, label: 'Stars', value: githubRepo.stargazers_count },
                                { icon: <FaCodeBranch size={12} />, label: 'Forks', value: githubRepo.forks_count },
                                { icon: <FaEye size={12} />, label: 'Watchers', value: githubRepo.watchers_count },
                                { icon: <FaCalendarAlt size={12} />, label: 'Updated', value: new Date(githubRepo.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) },
                            ].map(s => (
                                <div key={s.label} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
                                    <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-1">{s.icon}{s.label}</div>
                                    <div className="text-white font-semibold">{s.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {techStack.length > 0 && (
                        <div className="max-w-sm">
                            <h2 className="text-lg font-semibold text-white mb-5">Language Breakdown</h2>
                            <div className="space-y-3">
                                {techStack.map(lang => {
                                    const pct = Math.round((languages[lang] / totalBytes) * 100);
                                    const color = LANG_COLORS[lang] || LANG_COLORS.default;
                                    return (
                                        <div key={lang}>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="flex items-center gap-1.5 text-zinc-300">
                                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                                                    {lang}
                                                </span>
                                                <span className="text-zinc-600 font-mono">{pct}%</span>
                                            </div>
                                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                                                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                                                    className="h-full rounded-full" style={{ backgroundColor: color }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
};

// ─── Main component ───────────────────────────────────────────────────────────
const ProjectDetail = () => {
    const { projectName } = useParams();
    const navigate = useNavigate();
    const [githubRepo, setGithubRepo] = useState(null);
    const [languages, setLanguages] = useState({});

    const content = findContent(projectName);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://api.github.com/repos/${GITHUB_USER}/${projectName}`)
            .then(r => r.ok ? r.json() : null)
            .then(data => { if (data) setGithubRepo(data); })
            .catch(() => { });
        fetch(`https://api.github.com/repos/${GITHUB_USER}/${projectName}/languages`)
            .then(r => r.ok ? r.json() : null)
            .then(data => { if (data) setLanguages(data); })
            .catch(() => { });
    }, [projectName]);

    // No custom content → render generic GitHub data page  
    if (!content) {
        return <GenericRepoPage projectName={projectName} githubRepo={githubRepo} languages={languages} />;
    }

    const techStack = Object.keys(languages);
    const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);

    // Use live GitHub homepage if available and content.demo is null
    const demoUrl = content.demo || githubRepo?.homepage || null;

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
                {/* Info Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { icon: <FaLayerGroup size={12} />, label: 'Project Type', value: content.infoCard.type },
                        { icon: <FaUser size={12} />, label: 'Role', value: content.infoCard.role },
                        { icon: <FaClock size={12} />, label: 'Duration', value: content.infoCard.duration },
                        { icon: <FaTools size={12} />, label: 'Tech Stack', value: content.infoCard.tech },
                    ].map(item => (
                        <div key={item.label} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
                            <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-2">{item.icon} {item.label}</div>
                            <p className="text-white text-xs font-medium leading-relaxed">{item.value}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Title & CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }} className="mb-14">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
                        {projectName.replace(/-/g, ' ')}
                    </h1>
                    <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl mb-8">{content.overview}</p>
                    <div className="flex flex-wrap gap-3">
                        <a href={content.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all">
                            <FaGithub size={14} /> View on GitHub
                        </a>
                        {demoUrl ? (
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-white text-sm font-semibold hover:border-zinc-500 hover:bg-zinc-900 hover:scale-105 active:scale-95 transition-all">
                                <FaExternalLinkAlt size={12} /> Live Demo
                            </a>
                        ) : (
                            <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-600 text-sm cursor-not-allowed">
                                <FaExternalLinkAlt size={12} /> Live Demo — Coming Soon
                            </span>
                        )}
                    </div>
                </motion.div>

                {/* GitHub Stats */}
                {githubRepo && (
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
                        {[
                            { icon: <FaStar size={12} />, label: 'Stars', value: githubRepo.stargazers_count },
                            { icon: <FaCodeBranch size={12} />, label: 'Forks', value: githubRepo.forks_count },
                            { icon: <FaEye size={12} />, label: 'Watchers', value: githubRepo.watchers_count },
                            { icon: <FaCalendarAlt size={12} />, label: 'Updated', value: new Date(githubRepo.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) },
                        ].map(s => (
                            <div key={s.label} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
                                <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-1">{s.icon}{s.label}</div>
                                <div className="text-white font-semibold">{s.value}</div>
                            </div>
                        ))}
                    </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column */}
                    <div className="lg:col-span-2 space-y-12">
                        <Section title="Problem Statement" icon={<FaLightbulb size={14} />} delay={0.15}>
                            <p className="text-zinc-400 text-sm leading-relaxed">{content.problem}</p>
                        </Section>
                        <Section title="Why I Built This" icon={<FaRocket size={14} />} delay={0.2}>
                            <p className="text-zinc-400 text-sm leading-relaxed">{content.motivation}</p>
                        </Section>
                        <Section title="Key Features" icon={<FaCheckCircle size={14} />} delay={0.25}>
                            <ul className="space-y-2.5">
                                {content.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                        </Section>
                        <Section title="Challenges Faced" icon={<FaCode size={14} />} delay={0.3}>
                            <div className="space-y-5">
                                {content.challenges.map((c, i) => (
                                    <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
                                        <h3 className="text-sm font-semibold text-white mb-2">{c.title}</h3>
                                        <p className="text-xs text-zinc-500 leading-relaxed">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                        <Section title="What I Learned" icon={<FaLightbulb size={14} />} delay={0.35}>
                            <ul className="space-y-2.5">
                                {content.learnings.map((l, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />{l}
                                    </li>
                                ))}
                            </ul>
                        </Section>
                        <Section title="Future Improvements" icon={<FaRocket size={14} />} delay={0.4}>
                            <ul className="space-y-2.5">
                                {content.future.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />{f}
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    </div>

                    {/* Right sidebar */}
                    <div className="space-y-8">
                        <Section title="Technologies Used" icon={<FaTools size={14} />} delay={0.2}>
                            <div className="space-y-5">
                                {Object.entries(content.tech).map(([cat, items]) => (
                                    <div key={cat}>
                                        <p className="text-xs text-zinc-600 font-medium uppercase tracking-widest mb-2">{cat}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map(t => (
                                                <span key={t} className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {techStack.length > 0 && (
                            <Section title="Language Breakdown" icon={<FaCode size={14} />} delay={0.25}>
                                <div className="space-y-3">
                                    {techStack.map(lang => {
                                        const pct = Math.round((languages[lang] / totalBytes) * 100);
                                        const color = LANG_COLORS[lang] || LANG_COLORS.default;
                                        return (
                                            <div key={lang}>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="flex items-center gap-1.5 text-zinc-300">
                                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />{lang}
                                                    </span>
                                                    <span className="text-zinc-600 font-mono">{pct}%</span>
                                                </div>
                                                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                                                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                                                        className="h-full rounded-full" style={{ backgroundColor: color }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Section>
                        )}

                        <Section title="My Role" icon={<FaUser size={14} />} delay={0.3}>
                            <p className="text-xs text-zinc-400 leading-relaxed">{content.role}</p>
                        </Section>

                        <Section title="Development Timeline" icon={<FaClock size={14} />} delay={0.35}>
                            <p className="text-xs font-semibold text-white mb-4">Duration: {content.timeline.duration}</p>
                            <div className="space-y-3 relative border-l border-zinc-800 pl-4">
                                {content.timeline.weeks.map((w, i) => (
                                    <div key={i} className="relative">
                                        <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-600" />
                                        <p className="text-xs font-semibold text-zinc-300">{w.label}</p>
                                        <p className="text-xs text-zinc-600 mt-0.5">{w.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section title="Project Links" icon={<FaExternalLinkAlt size={12} />} delay={0.4}>
                            <div className="flex flex-col gap-3">
                                <a href={content.github} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm hover:border-zinc-600 hover:text-white transition-all">
                                    <FaGithub size={15} /> GitHub Repository
                                </a>
                                {demoUrl ? (
                                    <a href={demoUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm hover:border-zinc-600 hover:text-white transition-all">
                                        <FaExternalLinkAlt size={13} /> Live Demo
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800/50 text-zinc-600 text-sm cursor-not-allowed">
                                        <FaExternalLinkAlt size={13} /> Live Demo — Coming Soon
                                    </div>
                                )}
                            </div>
                        </Section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetail;
