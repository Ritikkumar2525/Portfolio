import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import InternshipDetail from './pages/InternshipDetail';
import TrainingDetail from './pages/TrainingDetail';
import VolunteerDetail from './pages/VolunteerDetail';
import HackathonDetail from './pages/HackathonDetail';

// Main portfolio one-pager
const Portfolio = () => (
  <div className="min-h-screen relative overflow-hidden font-sans bg-black text-zinc-100">
    {/* Subtle top glow matching Resend's aesthetic */}
    <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-radial-glow pointer-events-none opacity-50"></div>
    <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:projectName" element={<ProjectDetail />} />
        <Route path="/internship" element={<InternshipDetail />} />
        <Route path="/training" element={<TrainingDetail />} />
        <Route path="/volunteer" element={<VolunteerDetail />} />
        <Route path="/hackathon" element={<HackathonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
