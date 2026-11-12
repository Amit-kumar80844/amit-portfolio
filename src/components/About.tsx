import React from 'react';
import { GraduationCap } from 'lucide-react';
import { aboutData } from '../content/profile';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span
              className="text-xs font-mono tracking-widest uppercase font-semibold block mb-3"
              style={{ color: 'var(--accent)' }}
            >
              01 — Engineering Thesis & Background
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              Philosophy & Focus.
            </h2>
          </div>
          <p 
            className="text-sm max-w-md leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            How I approach distributed systems, concurrency control, and the engineering invariants that keep services resilient under stress.
          </p>
        </div>

        {/* Main grid: 7 + 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Narrative + Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-10">

            {/* Narrative text */}
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {aboutData.narrative.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Engineering philosophy — inline annotation style */}
            <div>
              <h3
                className="text-xs font-mono tracking-widest uppercase font-semibold mb-6"
                style={{ color: 'var(--text-muted)' }}
              >
                Engineering Tenets
              </h3>
              <div className="space-y-0">
                {aboutData.engineeringPhilosophy.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 gap-6 py-5 border-t"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <div className="col-span-1 text-xs font-mono tabular-nums pt-0.5" style={{ color: 'var(--accent)' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="col-span-11">
                      <h4
                        className="text-sm font-semibold mb-1.5"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.principle}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Education + Current Focus */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Education & Academic Foundation block */}
            <div 
              className="p-6 rounded-lg border transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span className="text-xs font-mono uppercase tracking-widest font-semibold" style={{ color: 'var(--accent)' }}>
                  Academic Foundation
                </span>
              </div>

              <div
                className="pb-4 border-b mb-4"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <h4 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {aboutData.education.institution}
                </h4>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {aboutData.education.degree}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span style={{ color: 'var(--text-muted)' }}>{aboutData.education.period}</span>
                  <span
                    className="font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    CGPA {aboutData.education.cgpa}
                  </span>
                </div>
              </div>

              {/* Core engineering focus areas */}
              <div className="space-y-2.5 text-xs font-mono">
                <span className="text-[11px] uppercase tracking-wider block font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Specialization Tracks:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Distributed Concurrency',
                    'Memory & Cache Locality',
                    'Asynchronous I/O',
                    'Android Lifecycle Runtimes',
                  ].map((track, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {track}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Current exploration */}
            <div
              className="border-t pt-6"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <h4
                className="text-xs font-mono uppercase tracking-widest mb-4 font-semibold"
                style={{ color: 'var(--text-muted)' }}
              >
                Currently Exploring
              </h4>
              <ul className="space-y-3">
                {[
                  'POSIX I/O buffering mechanics & zero-copy network sockets',
                  'High-throughput token bucket rate limiting via Redis Lua scripts',
                  'LSM-Tree storage engines: SSTable compaction & tombstone invariants',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span className="shrink-0 mt-2 w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--border-strong)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
