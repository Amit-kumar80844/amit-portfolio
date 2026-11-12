import React, { useState, useEffect } from 'react';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { profileData } from '../content/profile';
import { useTheme } from '../context/ThemeProvider';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenResumeModal }) => {
  const { currentTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = currentTheme === 'editorial-dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Writing', id: 'engineering' },
    { label: 'Credentials', id: 'credentials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg-main)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        {/* Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left cursor-pointer focus-visible:outline-none group"
          aria-label="Go to top"
        >
          <span
            className="font-heading font-bold text-base tracking-tight transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            {profileData.name.split(' ')[0]}
            <span className="font-light" style={{ color: 'var(--text-secondary)' }}>
              {' '}{profileData.name.split(' ')[1]}
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative px-3 py-1.5 text-sm transition-colors cursor-pointer focus-visible:outline-none rounded-md"
                style={{
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 400,
                  backgroundColor: isActive ? 'var(--accent-muted)' : 'transparent',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setTheme(isDark ? 'swiss-minimal' : 'editorial-dark')}
            className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={onOpenResumeModal}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-main)',
            }}
            aria-label="View resume"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md transition-colors cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: 'var(--bg-main)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-3 rounded-md text-sm transition-colors cursor-pointer"
                style={{
                  color: activeSection === link.id ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: activeSection === link.id ? 600 : 400,
                  backgroundColor: activeSection === link.id ? 'var(--accent-muted)' : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
            <div
              className="mt-2 pt-3 border-t flex items-center justify-between"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                {profileData.email}
              </span>
              <button
                onClick={onOpenResumeModal}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-md cursor-pointer"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-main)' }}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
