import React from 'react';
import { skillsData } from '../content/extraData';

export const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
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
            04. Technical Capabilities
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills & Core Tooling
          </h2>
          <p 
            className="text-xs font-mono mt-2 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Grouped by functional engineering domain. No artificial progress bars or fabricated percentages.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border transition-all flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div>
                <h3 
                  className="text-sm font-mono font-semibold tracking-wide uppercase mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => {
                    const isHighlighted = skill.highlight;
                    return (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors"
                        style={{
                          backgroundColor: isHighlighted ? 'var(--accent-muted)' : 'var(--bg-secondary)',
                          borderColor: isHighlighted ? 'var(--border-strong)' : 'var(--border-subtle)',
                          color: isHighlighted ? 'var(--text-primary)' : 'var(--text-secondary)',
                          fontWeight: isHighlighted ? 600 : 400,
                        }}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div 
                className="mt-6 pt-3 border-t text-[11px] font-mono"
                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
              >
                {group.skills.filter(s => s.highlight).length} primary specializations
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
