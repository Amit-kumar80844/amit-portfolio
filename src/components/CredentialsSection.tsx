import React from 'react';
import { 
  GitPullRequest, 
  GitMerge, 
  ExternalLink, 
  Github, 
  Trophy,
  Award,
  CheckCircle2,
  Code2,
  ArrowUpRight
} from 'lucide-react';
import { openSourceData, achievementsData } from '../content/extraData';
import { profileData } from '../content/profile';

export const CredentialsSection: React.FC = () => {
  return (
    <section 
      id="credentials" 
      className="py-24 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span 
              className="text-xs font-mono tracking-widest uppercase font-semibold"
              style={{ color: 'var(--accent)' }}
            >
              06 — Verified Proof & Credentials
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>/ Algorithmic Rigor & Open Source</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 
              className="text-4xl sm:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              Milestones & Open Source.
            </h2>
            <p 
              className="text-sm max-w-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Verified competitive programming standing, merged open-source codebases, and national algorithmic fellowships.
            </p>
          </div>
        </div>

        {/* 1. Large Metric-Forward Achievement Board */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l mb-20"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {achievementsData.slice(0, 4).map((item) => (
            <div 
              key={item.id}
              className="p-6 sm:p-8 border-r border-b flex flex-col justify-between transition-colors hover:bg-white/[0.01]"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div>
                <span 
                  className="text-[10px] font-mono uppercase tracking-widest block mb-2 font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  {item.category}
                </span>
                <div 
                  className="text-3xl sm:text-4xl font-bold font-mono tracking-tight mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.metric}
                </div>
                <h4 
                  className="text-sm font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.description}
                </p>
              </div>

              {item.verificationUrl && (
                <div className="mt-6 pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium transition-colors hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    <span>Verify Record</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 2. Open Source Merged Contributions */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <GitPullRequest className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Open-Source Contributions
              </h3>
            </div>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-semibold flex items-center gap-1 transition-opacity hover:opacity-80"
              style={{ color: 'var(--accent)' }}
            >
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {openSourceData.map((item) => (
              <div 
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b items-start transition-colors"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                {/* Project Tag */}
                <div className="md:col-span-3 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                    <GitMerge className="w-3.5 h-3.5" />
                    <span>{item.project}</span>
                  </div>
                  <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    Status: <strong style={{ color: 'var(--text-primary)' }}>{item.status}</strong> · {item.date}
                  </div>
                </div>

                {/* Contribution details */}
                <div className="md:col-span-7 space-y-2">
                  <h4 className="text-sm sm:text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded border"
                        style={{ 
                          backgroundColor: 'var(--bg-secondary)', 
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-muted)' 
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External links */}
                <div className="md:col-span-2 flex items-center justify-end gap-3 pt-1">
                  {item.prUrl && (
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono font-semibold flex items-center gap-1 transition-colors hover:underline"
                      style={{ color: 'var(--accent)' }}
                    >
                      <span>{item.id === 'algo-university-dp' ? 'Certificate' : item.prNumber || 'Pull Request'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 3. Verified Coding Profiles Bar */}
        <div 
          className="p-8 rounded-lg border transition-all"
          style={{ 
            backgroundColor: 'var(--bg-card)', 
            borderColor: 'var(--border-strong)' 
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-semibold block mb-1" style={{ color: 'var(--accent)' }}>
                Verified Algorithmic Profiles
              </span>
              <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Competitive Programming & Problem Solving Standing
              </h4>
            </div>
            <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              750+ Solved · 1551 LeetCode Peak · C++ & Java
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { platform: 'LeetCode', handle: '@Amit_maur', url: profileData.leetcode, stat: '1551 Rating' },
              { platform: 'Codeforces', handle: '@amitsingh80020', url: profileData.codeforces || '#', stat: 'Contestant' },
              { platform: 'GeeksforGeeks', handle: '@amitkumar2023', url: profileData.geeksforgeeks || '#', stat: 'DSA Track' },
              { platform: 'Codolio', handle: '@amitkumar21', url: profileData.codolio || '#', stat: 'Portfolio' },
            ].map(({ platform, handle, url, stat }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded border transition-all hover:scale-[1.02] flex flex-col justify-between group"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{platform}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
                  </div>
                  <span className="text-xs font-mono block mt-1" style={{ color: 'var(--text-muted)' }}>{handle}</span>
                </div>
                <div className="text-[11px] font-mono mt-3 font-semibold" style={{ color: 'var(--accent)' }}>
                  {stat}
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
