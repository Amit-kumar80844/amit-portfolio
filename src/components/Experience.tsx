import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle } from 'lucide-react';
import { experienceData } from '../content/extraData';

export const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span 
              className="text-xs font-mono tracking-wider uppercase font-semibold block mb-2"
              style={{ color: 'var(--accent)' }}
            >
              03. Professional Track Record
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Engineering Journey & Experience
            </h2>
          </div>
          <p 
            className="text-xs font-mono max-w-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            Real industry work, verifiable responsibilities, and production mobile & backend implementations.
          </p>
        </div>

        {/* Timeline container */}
        <div 
          className="relative border-l pl-6 ml-2 sm:ml-4 space-y-12"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Dot */}
              <div 
                className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-4"
                style={{
                  backgroundColor: 'var(--accent)',
                  borderColor: 'var(--bg-main)',
                }}
              />

              <div 
                className="p-6 sm:p-8 rounded-2xl border transition-all"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                }}
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 
                      className="text-xl font-bold transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </h3>
                    <div 
                      className="flex items-center gap-2 text-sm mt-0.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.organization}</span>
                      <span aria-hidden="true">·</span>
                      <span 
                        className="text-xs font-mono px-2 py-0.5 rounded border font-semibold"
                        style={{
                          backgroundColor: 'var(--accent-muted)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--accent)',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div 
                    className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-xs font-mono"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p 
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 
                    className="text-xs font-mono uppercase tracking-wider mb-3 font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Key Engineering Contributions:
                  </h4>
                  <ul 
                    className="space-y-2 text-xs sm:text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1 shrink-0" style={{ color: 'var(--accent)' }}>▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div 
                  className="pt-4 border-t flex flex-wrap items-center gap-2"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <span className="text-xs font-mono mr-1" style={{ color: 'var(--text-muted)' }}>Stack:</span>
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border"
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

      </div>
    </section>
  );
};
