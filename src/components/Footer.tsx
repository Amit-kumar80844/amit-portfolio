import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../content/profile';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResumeModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="border-t py-12 transition-colors"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <h3 
              className="font-heading font-bold text-lg"
              style={{ color: 'var(--text-primary)' }}
            >
              {profileData.name}
            </h3>
            <p 
              className="text-xs mt-1 max-w-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              Backend Engineer building scalable microservices, distributed storage engines, and high-performance Android applications.
            </p>
          </div>

          {/* Quick Links */}
          <div 
            className="flex flex-wrap items-center gap-6 text-xs font-mono"
            style={{ color: 'var(--text-secondary)' }}
          >
            <button
              onClick={() => onNavigate('about')}
              className="hover:opacity-100 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:opacity-100 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="hover:opacity-100 transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:opacity-100 transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('engineering')}
              className="hover:opacity-100 transition-colors cursor-pointer"
            >
              Engineering
            </button>
            <button
              onClick={onOpenResumeModal}
              className="hover:underline cursor-pointer font-semibold"
              style={{ color: 'var(--accent)' }}
            >
              Resume
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg border text-xs font-mono transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          </button>
        </div>

        {/* Bottom row: Legal & Socials */}
        <div 
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
        >
          <div>
            © {currentYear} Amit Kumar · Portfolio
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-100 flex items-center gap-1"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-100 flex items-center gap-1"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-100"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              LeetCode
            </a>
            {profileData.codeforces && (
              <a
                href={profileData.codeforces}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Codeforces"
                title="Codeforces Profile"
              >
                Codeforces
              </a>
            )}
            {profileData.geeksforgeeks && (
              <a
                href={profileData.geeksforgeeks}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="GeeksforGeeks"
                title="GeeksforGeeks Profile"
              >
                GFG
              </a>
            )}
            {profileData.codolio && (
              <a
                href={profileData.codolio}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Codolio"
                title="Codolio Profile"
              >
                Codolio
              </a>
            )}
            <a
              href={`mailto:${profileData.email}`}
              className="transition-colors hover:opacity-100 flex items-center gap-1"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
