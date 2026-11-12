import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle2, GraduationCap } from 'lucide-react';
import { experienceData } from '../content/extraData';
import { aboutData } from '../content/profile';

export const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-24 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span 
              className="text-xs font-mono tracking-widest uppercase font-semibold block mb-3"
              style={{ color: 'var(--accent)' }}
            >
              03 — Professional Track Record
            </span>
            <h2 
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              Experience & Education.
            </h2>
          </div>
          <p 
            className="text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Verified industry engineering contributions, production mobile & backend deployments, and academic foundation at IIIT Kottayam.
          </p>
        </div>

        {/* Editorial Split Timeline */}
        <div className="space-y-12">
          
          {/* Work Experiences */}
          <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {experienceData.map((exp) => (
              <div 
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b items-start transition-colors"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                {/* Left Meta Column (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                    {exp.period}
                  </div>
                  <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {exp.location} · {exp.type}
                  </div>
                  <div className="pt-2">
                    <span 
                      className="inline-block text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{ 
                        borderColor: 'var(--border-subtle)', 
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)' 
                      }}
                    >
                      Production Migration
                    </span>
                  </div>
                </div>

                {/* Right Content Column (9 cols) */}
                <div className="lg:col-span-9 space-y-5">
                  <div>
                    <h3 
                      className="text-xl sm:text-2xl font-bold tracking-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold mt-1" style={{ color: 'var(--accent)' }}>
                      {exp.organization}
                    </div>
                  </div>

                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {exp.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2 pt-1">
                    <h4 
                      className="text-xs font-mono uppercase tracking-wider font-semibold"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Key Engineering Responsibilities:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono mr-1" style={{ color: 'var(--text-muted)' }}>Stack:</span>
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Academic Journey (Education Card) */}
          <div 
            className="p-8 rounded-lg border transition-all"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              borderColor: 'var(--border-strong)' 
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Invariants</span>
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  CGPA {aboutData.education.cgpa}
                </div>
                <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  {aboutData.education.period}
                </div>
                <div className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {aboutData.education.location}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {aboutData.education.institution}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                    {aboutData.education.degree}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider block mb-2 font-semibold" style={{ color: 'var(--text-muted)' }}>
                    Core Computer Science Curricula:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.education.coursework.map((course, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded border"
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

                <div className="pt-3 border-t space-y-2 text-xs" style={{ borderColor: 'var(--border-subtle)' }}>
                  {aboutData.education.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)' }}>▸</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
