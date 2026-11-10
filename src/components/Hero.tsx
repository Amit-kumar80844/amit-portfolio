import React from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Terminal, 
  Cpu, 
  Smartphone, 
  Database,
  Download,
  Code2
} from 'lucide-react';
import { profileData } from '../content/profile';

interface HeroProps {
  onNavigateToProjects: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onNavigateToProjects, 
  onOpenResumeModal 
}) => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-20 border-b overflow-hidden transition-colors"
      style={{
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Subtle blueprint grid overlay & soft radial ambient glow */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[-10%] right-[10%] w-[550px] h-[550px] rounded-full blur-[120px] pointer-events-none transition-all duration-500" 
        style={{
          background: 'radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)',
          opacity: 0.65,
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Availability bar - Clean unboxed text with typographic separators */}
        <div 
          className="flex items-center gap-2 text-xs font-mono mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>Available</span>
          <span aria-hidden="true">·</span>
          <span>{profileData.availabilityNotice}</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Graduation 2027</span>
        </div>

        {/* Asymmetric 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Typography, Identity & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-4">
              <span 
                className="text-sm font-mono tracking-wider uppercase font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                {profileData.tagline}
              </span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6" 
              style={{ textWrap: 'balance', color: 'var(--text-primary)' }}
            >
              Building software that works <span style={{ color: 'var(--accent)' }}>beyond the happy path.</span>
            </h1>

            <p 
              className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              {profileData.supportingText}
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3 text-sm font-semibold rounded-xl active:scale-95 transition-all shadow-lg cursor-pointer"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg-main)',
                }}
              >
                Explore Selected Projects
              </button>

              <a
                href="/Amit_Kumar_Resume.pdf"
                download="Amit_Kumar_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border transition-all cursor-pointer shadow-sm hover:opacity-95"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <Download className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-1.5 px-4 py-3 text-xs font-mono font-medium rounded-xl border transition-all cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
                title="Open interactive CV viewer and print mode"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View / Print CV</span>
              </button>

              <div className="flex items-center gap-1 pl-2 border-l" style={{ borderColor: 'var(--border-subtle)' }}>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg transition-colors hover:scale-105"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg transition-colors hover:scale-105"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profileData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg transition-colors hover:scale-105"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <Code2 className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-lg transition-colors hover:scale-105"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Core Domain Badges */}
            <div 
              className="pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--accent)' }}>
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Backend</span>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Spring Boot & Redis</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--accent)' }}>
                  <Database className="w-3.5 h-3.5" />
                  <span>Distributed</span>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Caching & Tokens</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--accent)' }}>
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android</span>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Compose & Jetpack</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono mb-1 font-semibold" style={{ color: 'var(--accent)' }}>
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Systems</span>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>POSIX & Storage</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Editorial Visual Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div 
              className="relative w-full max-w-sm rounded-2xl overflow-hidden border shadow-2xl group transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              {/* Studio Portrait Asset */}
              <div className="aspect-square w-full overflow-hidden relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src={profileData.avatarUrl}
                  alt="Amit Kumar portrait in studio lighting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" 
                />
              </div>

              {/* Identity Snapshot Card Footer */}
              <div 
                className="p-5 border-t"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {profileData.name}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                    <MapPin className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                    <span>India</span>
                  </div>
                </div>

                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  B.Tech CSE @ IIIT Kottayam · Class of 2027
                </div>

                <div 
                  className="mt-3 pt-3 border-t flex items-center justify-between text-[11px] font-mono"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>Role: <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>Backend Engineer</strong></span>
                  <span>CGPA: <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{profileData.cgpa}</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
