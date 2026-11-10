import React from 'react';
import { 
  GitPullRequest, 
  GitMerge, 
  ExternalLink, 
  Github, 
  Trophy 
} from 'lucide-react';
import { openSourceData, achievementsData } from '../content/extraData';
import { profileData } from '../content/profile';

export const CredentialsSection: React.FC = () => {
  return (
    <section 
      id="credentials" 
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
            06. Proof & Credentials
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Open Source & Algorithmic Milestones
          </h2>
          <p 
            className="text-xs font-mono mt-2 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Verifiable public repositories, competitive programming metrics, and open-source contributions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (6 cols): Open Source */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 
                className="text-lg font-bold flex items-center gap-2"
                style={{ color: 'var(--text-primary)' }}
              >
                <GitPullRequest className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                <span>Open-Source Track Record</span>
              </h3>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono hover:underline flex items-center gap-1 font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-4">
              {openSourceData.map((item) => (
                <div 
                  key={item.id}
                  className="p-6 rounded-2xl border transition-all flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-strong)',
                  }}
                >
                  <div>
                    <div 
                      className="flex items-center justify-between text-xs font-mono mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <div className="flex items-center gap-1.5 font-semibold" style={{ color: 'var(--accent)' }}>
                        <GitMerge className="w-3.5 h-3.5" />
                        <span>{item.project}</span>
                      </div>
                      <span 
                        className="px-2 py-0.5 rounded border text-[11px] font-semibold"
                        style={{
                          backgroundColor: 'var(--accent-muted)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--accent)',
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4 
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h4>

                    <p 
                      className="text-xs leading-relaxed mb-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div 
                    className="pt-3 border-t flex items-center justify-between"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((t, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {item.prUrl && (
                        <a
                          href={item.prUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono hover:underline flex items-center gap-1 font-semibold"
                          style={{ color: 'var(--accent)' }}
                        >
                          <span>{item.id === 'algo-university-dp' ? 'View Certificate' : (item.prNumber || 'Pull Request')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {item.repoUrl && item.repoUrl !== item.prUrl && (
                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono hover:underline flex items-center gap-1"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span>Repository</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Static GitHub Profile Card */}
            <div 
              className="p-6 rounded-2xl border flex items-center justify-between"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="flex items-center gap-3">
                <Github className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
                <div>
                  <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>@Amit-kumar80844</h4>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                    Public Repositories · Backend Systems & Android Code
                  </span>
                </div>
              </div>

              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 text-xs font-mono rounded-lg font-medium transition-colors"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg-main)',
                }}
              >
                Visit GitHub
              </a>
            </div>

          </div>

          {/* Right Column (6 cols): Competitive Programming & Milestones */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 
              className="text-lg font-bold flex items-center gap-2"
              style={{ color: 'var(--text-primary)' }}
            >
              <Trophy className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              <span>Algorithmic & Academic Milestones</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((item) => (
                <div 
                  key={item.id}
                  className="p-5 rounded-2xl border flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-strong)',
                  }}
                >
                  <div>
                    <span 
                      className="text-[11px] font-mono uppercase block mb-1 font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {item.category}
                    </span>
                    <div 
                      className="text-2xl font-bold font-mono tracking-tight mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.metric}
                    </div>
                    <h4 
                      className="text-xs font-semibold mb-2"
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
                    <div 
                      className="mt-4 pt-3 border-t"
                      style={{ borderColor: 'var(--border-subtle)' }}
                    >
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono hover:underline flex items-center gap-1 font-semibold"
                        style={{ color: 'var(--accent)' }}
                      >
                        <span>Verify Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Coding Profiles Bar */}
            <div 
              className="p-5 rounded-2xl border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <span className="text-[11px] font-mono uppercase block mb-3 font-semibold" style={{ color: 'var(--accent)' }}>
                Verified Competitive Programming Profiles
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <a
                  href={profileData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>LeetCode</span>
                  <span className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--accent)' }}>@Amit_maur</span>
                </a>
                <a
                  href={profileData.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Codeforces</span>
                  <span className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--accent)' }}>@amitsingh80020</span>
                </a>
                <a
                  href={profileData.geeksforgeeks}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>GeeksforGeeks</span>
                  <span className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--accent)' }}>@amitkumar2023</span>
                </a>
                <a
                  href={profileData.codolio}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Codolio</span>
                  <span className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--accent)' }}>@amitkumar21</span>
                </a>
              </div>
            </div>

            {/* Verification Notice */}
            <div 
              className="p-5 rounded-2xl border text-xs leading-relaxed"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
            >
              <span className="font-semibold block mb-1 font-mono" style={{ color: 'var(--text-primary)' }}>
                Verification & Data Integrity
              </span>
              All figures reflect verified milestones on public platforms (LeetCode, IIIT Kottayam academic grade registers, and GitHub commit histories).
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
