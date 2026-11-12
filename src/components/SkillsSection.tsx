import React from 'react';
import { skillsData } from '../content/extraData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
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
              04 — Technical Capabilities
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              Core Competencies.
            </h2>
          </div>
          <p
            className="text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Structured by systems layer. No arbitrary percentages or progress bars — only verified production languages, frameworks, and low-level primitives.
          </p>
        </div>

        {/* Skills table — editorial row layout */}
        <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b items-start"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              {/* Domain label */}
              <div className="md:col-span-3">
                <span
                  className="text-xs font-mono uppercase tracking-widest font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills — inline text, not badges */}
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-sm font-mono transition-colors"
                      style={{
                        color: skill.highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: skill.highlight ? 500 : 400,
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-8 text-xs font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          Highlighted entries are primary day-to-day tools. All others are actively used or studied.
        </div>

      </div>
    </section>
  );
};
