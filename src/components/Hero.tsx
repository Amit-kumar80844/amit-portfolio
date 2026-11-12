import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Terminal,
  Cpu,
  Database,
  Smartphone,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../content/profile';

interface HeroProps {
  onNavigateToProjects: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProjects, onOpenResumeModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-12 pb-20 overflow-hidden border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      {/* Background blueprint grid subtle overlay */}
      <div 
        className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* Telemetry Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 text-xs font-mono mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          <div className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span className="font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
              AVAILABLE
            </span>
          </div>
          <span aria-hidden="true">/</span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {profileData.availabilityNotice}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">/</span>
          <span className="hidden sm:inline">
            IIIT Kottayam · B.Tech CSE '27
          </span>
        </motion.div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (7 cols): Identity, Thesis & Ingress */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Eyebrow Name & Specialization */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <span 
                className="text-xs font-mono uppercase tracking-widest font-semibold px-2 py-0.5 rounded border"
                style={{ 
                  color: 'var(--accent)',
                  borderColor: 'var(--border-strong)',
                  backgroundColor: 'var(--bg-secondary)'
                }}
              >
                {profileData.name}
              </span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                {profileData.tagline}
              </span>
            </motion.div>

            {/* Main Architectural Thesis Display H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06] mb-6"
              style={{ 
                color: 'var(--text-primary)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.035em',
                textWrap: 'balance'
              }}
            >
              Building software that works <span style={{ color: 'var(--accent)' }}>beyond the happy path.</span>
            </motion.h1>

            {/* Precise Supporting Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              {profileData.supportingText}
            </motion.p>

            {/* Tactical Actions & Social Ingress */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <button
                onClick={onNavigateToProjects}
                className="group flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold rounded transition-all cursor-pointer shadow-sm hover:opacity-90"
                style={{ 
                  backgroundColor: 'var(--accent)', 
                  color: 'var(--bg-main)' 
                }}
              >
                <span>Explore Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="/Amit_Kumar_Resume.pdf"
                download="Amit_Kumar_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded border transition-all cursor-pointer hover:bg-white/[0.03]"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <Download className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                <span>Download CV</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-3.5 py-2.5 text-xs font-mono font-medium rounded border transition-all cursor-pointer hover:bg-white/[0.03]"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                }}
                title="Open interactive resume viewer & printable sheet"
              >
                <span>Interactive CV</span>
              </button>

              {/* Direct Code & Profile Ingress */}
              <div 
                className="flex items-center gap-1.5 pl-0 sm:pl-3 border-l-0 sm:border-l w-full sm:w-auto pt-2 sm:pt-0"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                {[
                  { href: profileData.github, icon: Github, label: 'GitHub (@Amit-kumar80844)' },
                  { href: profileData.linkedin, icon: Linkedin, label: 'LinkedIn (in/amit-kumar21)' },
                  { href: profileData.leetcode, icon: Code2, label: 'LeetCode (@Amit_maur)' },
                  { href: `mailto:${profileData.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                    className="p-2 rounded border transition-all hover:scale-105 focus-visible:outline-none"
                    style={{ 
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--text-secondary)' 
                    }}
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Core Domain Telemetry Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Backend</span>
                </div>
                <span className="text-[11px] block" style={{ color: 'var(--text-muted)' }}>
                  Spring Boot & Redis
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                  <Database className="w-3.5 h-3.5" />
                  <span>Distributed</span>
                </div>
                <span className="text-[11px] block" style={{ color: 'var(--text-muted)' }}>
                  Lua Tokens & Caching
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android</span>
                </div>
                <span className="text-[11px] block" style={{ color: 'var(--text-muted)' }}>
                  Compose & Jetpack
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Algorithms</span>
                </div>
                <span className="text-[11px] block" style={{ color: 'var(--text-muted)' }}>
                  750+ DSA · 1551 Peak
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column (5 cols): Studio Portrait & Technical Registry Frame */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Museum Photographic Frame */}
            <div
              className="hero-portrait border rounded-lg overflow-hidden transition-all group"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div 
                className="aspect-[4/5] w-full overflow-hidden relative"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <img
                  src={profileData.avatarUrl}
                  alt={`${profileData.name} portrait`}
                  className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Minimalist Photographic Metadata Plate */}
              <div 
                className="p-4 border-t flex flex-col gap-2"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  borderColor: 'var(--border-subtle)' 
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold block" style={{ color: 'var(--text-primary)' }}>
                      {profileData.name}
                    </span>
                    <span className="text-xs font-mono" style={{ color: 'var(--accent)' }}>
                      {profileData.role}
                    </span>
                  </div>
                  <div className="text-right text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    <span>CGPA </span>
                    <strong style={{ color: 'var(--text-primary)' }}>{profileData.cgpa}</strong>
                  </div>
                </div>

                <div 
                  className="pt-2 border-t flex items-center justify-between text-[11px] font-mono"
                  style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                >
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                    <span>IIIT Kottayam & Patna, India</span>
                  </div>
                  <span>Class of 2027</span>
                </div>
              </div>
            </div>

            {/* Quick Specialization Summary Strip */}
            <div 
              className="p-3.5 rounded border text-xs font-mono space-y-1.5"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)'
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ color: 'var(--text-muted)' }}>Undergrad:</span>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>B.Tech Computer Science</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: 'var(--text-muted)' }}>Focus Areas:</span>
                <span style={{ color: 'var(--accent)' }}>Distributed Caching & Systems</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
