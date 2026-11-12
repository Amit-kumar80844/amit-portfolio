import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { EngineeringSection } from './components/EngineeringSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types/portfolio';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Active section scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'engineering', 'credentials', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-200"
      style={{
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Scroll progress indicator */}
      <div
        className="scroll-progress"
        style={{ width: 'var(--scroll-progress, 0%)' }}
        aria-hidden="true"
      />

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={navigateToSection}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onNavigateToProjects={() => navigateToSection('projects')}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
        <About />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceSection />
        <SkillsSection />
        <EngineeringSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateToSection}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
