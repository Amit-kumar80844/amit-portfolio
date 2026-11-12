import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
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
      className="border-t py-16 transition-colors"
      style={{
        backgroundColor: 'var(--bg-main)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="space-y-2">
            <h3 
              className="font-heading font-bold text-xl tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {profileData.name}
            </h3>
            <p 
              className="text-xs sm:text-sm max-w-md leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Backend & Systems Engineer specializing in distributed concurrency, Redis primitives, and high-performance Android architecture.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div 
            className="flex flex-wrap items-center gap-6 text-xs font-mono"
            style={{ color: 'var(--text-secondary)' }}
          >
            {[
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'experience' },
              { label: 'Skills', id: 'skills' },
              { label: 'Engineering', id: 'engineering' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="transition-colors cursor-pointer hover:underline"
                style={{ color: 'var(--text-secondary)' }}
              >
                {label}
              </button>
            ))}
            
            <button
              onClick={onOpenResumeModal}
              className="font-semibold cursor-pointer hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              Resume PDF
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded border text-xs font-mono transition-colors cursor-pointer hover:opacity-80"
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

        {/* Bottom Tier: Verified Profiles & Copyright */}
        <div 
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
        >
          <div>
            © {currentYear} Amit Kumar · Built with React 19 & Tailwind CSS
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-80 flex items-center gap-1.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-80 flex items-center gap-1.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-80 flex items-center gap-1.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>
            {profileData.codeforces && (
              <a
                href={profileData.codeforces}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                Codeforces
              </a>
            )}
            {profileData.geeksforgeeks && (
              <a
                href={profileData.geeksforgeeks}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                GeeksforGeeks
              </a>
            )}
            <a
              href={`mailto:${profileData.email}`}
              className="transition-colors hover:opacity-80 flex items-center gap-1.5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profileData.email}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
