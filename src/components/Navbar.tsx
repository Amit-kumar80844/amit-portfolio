import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Layers, 
  FolderGit2, 
  Award, 
  Send 
} from 'lucide-react';
import { profileData } from '../content/profile';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate, 
  onOpenResumeModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Engineering', id: 'engineering' },
    { label: 'Credentials', id: 'credentials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group flex items-center gap-2 cursor-pointer focus-visible:outline-none"
        >
          <span 
            className="font-heading font-bold text-lg tracking-tight transition-colors whitespace-nowrap shrink-0"
            style={{ color: 'var(--text-primary)' }}
          >
            {profileData.name}
          </span>
          <span className="text-xs font-mono hidden sm:inline whitespace-nowrap shrink-0" style={{ color: 'var(--text-muted)' }}>
            / IIIT Kottayam '27
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="transition-colors whitespace-nowrap shrink-0 relative py-1 hover:opacity-100"
                style={{
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {link.label}
                {isActive && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" 
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Dynamic Theme Selector */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeSelector />

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-main)',
            }}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9A9F99] hover:text-[#F3F4EF] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101310] border-b border-white/[0.08] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                activeSection === link.id
                  ? 'bg-white/5 text-[#b7f36b] font-semibold'
                  : 'text-[#9A9F99] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-xs text-[#9A9F99] font-mono">amitsingh80020@gmail.com</span>
            <a
              href="https://github.com/Amit-kumar80844"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#b7f36b] flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
