import React from 'react';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap 
} from 'lucide-react';
import { profileData, aboutData } from '../content/profile';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span 
            className="text-xs font-mono tracking-wider uppercase font-semibold block mb-2"
            style={{ color: 'var(--accent)' }}
          >
            01. Engineering Narrative
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            How I approach building backend software.
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div 
              className="space-y-4 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {aboutData.narrative.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Engineering Principles */}
            <div 
              className="mt-8 pt-6 border-t"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <h3 
                className="text-sm font-mono uppercase tracking-wider mb-4 font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Core Engineering Tenets
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {aboutData.engineeringPhilosophy.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl border flex items-start gap-3 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                    <div>
                      <h4 
                        className="text-sm font-semibold mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.principle}
                      </h4>
                      <p 
                        className="text-xs leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Academic & Focus Snapshot (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div 
              className="p-6 rounded-2xl border relative overflow-hidden transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                <span 
                  className="text-xs font-mono px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: 'var(--accent-muted)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--accent)',
                  }}
                >
                  CGPA {aboutData.education.cgpa}
                </span>
              </div>

              <h4 
                className="text-lg font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {aboutData.education.institution}
              </h4>
              <p 
                className="text-xs mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {aboutData.education.degree} · {aboutData.education.period}
              </p>

              <div className="text-xs mb-4">
                <span className="font-mono block mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Relevant Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aboutData.education.coursework.map((course, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono px-2 py-1 rounded border"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div 
                className="pt-4 border-t text-xs space-y-2"
                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
              >
                {aboutData.education.highlights.map((highlight, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }}>▸</span>
                    <span>{highlight}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Current Exploration Focus */}
            <div 
              className="p-6 rounded-2xl border transition-colors"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <h4 
                className="text-xs font-mono uppercase tracking-wider mb-3 font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                Backend & Systems Inquiries
              </h4>
              <ul className="space-y-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>·</span>
                  <span>POSIX I/O buffering mechanics & zero-copy network sockets</span>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>·</span>
                  <span>High-throughput token bucket rate limiting via Redis Lua scripts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--accent)' }}>·</span>
                  <span>LSM-Tree storage engines: SSTable compaction & tombstone invariants</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
