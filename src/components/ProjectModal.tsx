import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  Code, 
  FileCode, 
  ArrowLeft,
  Server,
  Zap,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl border rounded-lg shadow-2xl my-6 overflow-hidden max-h-[92vh] flex flex-col transition-all"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-strong)',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Header */}
        <div 
          className="p-5 sm:p-6 border-b flex flex-wrap items-center justify-between gap-4 shrink-0"
          style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            borderColor: 'var(--border-subtle)' 
          }}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-1">
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                {project.category} Engineering Deep-Dive
              </span>
              <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>·</span>
              <span style={{ color: 'var(--text-muted)' }}>{project.status}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Demo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded border transition-colors cursor-pointer ml-1 hover:opacity-80"
              style={{
                backgroundColor: 'var(--bg-main)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label="Close case study dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          
          {/* 1. Problem & Motivation */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded border"
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              borderColor: 'var(--border-subtle)' 
            }}
          >
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--accent)' }}>
                Problem Invariant
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {caseStudy.problemStatement}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--accent)' }}>
                Technical Motivation
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {caseStudy.whyIBuiltIt}
              </p>
            </div>
          </div>

          {/* 2. Architecture Breakdown */}
          <div>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Layers className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              <span>Architectural Modules & Subsystems</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.architectureComponents.map((comp, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded border transition-colors"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderColor: 'var(--border-subtle)' 
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{comp.name}</span>
                    <span 
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{ 
                        backgroundColor: 'var(--bg-main)', 
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--accent)' 
                      }}
                    >
                      {comp.tech}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {comp.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Technology Rationale */}
          <div>
            <h3 className="text-base font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Technology Decisions & Engineering Trade-Offs
            </h3>
            <div className="space-y-3">
              {caseStudy.techRationale.map((rationale, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded border flex items-start gap-3"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderColor: 'var(--border-subtle)' 
                  }}
                >
                  <span className="text-xs font-mono font-semibold shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>
                    {rationale.tech}
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {rationale.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Engineering Challenges & Trade-offs */}
          <div>
            <h3 className="text-base font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <AlertTriangle className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              <span>Hard Engineering Edge Cases</span>
            </h3>

            <div className="space-y-4">
              {caseStudy.engineeringChallenges.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded border"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderColor: 'var(--border-subtle)' 
                  }}
                >
                  <div className="text-xs font-semibold mb-2 flex items-start gap-2" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent)' }}>Challenge:</span>
                    <span>{item.challenge}</span>
                  </div>
                  <div 
                    className="text-xs mb-2 pl-4 border-l"
                    style={{ borderColor: 'var(--accent)', color: 'var(--text-secondary)' }}
                  >
                    <span className="font-mono font-semibold" style={{ color: 'var(--text-primary)' }}>Solution: </span>
                    {item.solution}
                  </div>
                  <div 
                    className="text-xs pl-4 border-l border-amber-500/40"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="text-amber-400 font-mono font-semibold">Trade-off: </span>
                    {item.tradeoff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Code Excerpt if present */}
          {caseStudy.codeExcerpt && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
                  <FileCode className="w-3.5 h-3.5" />
                  <span>{caseStudy.codeExcerpt.filename}</span>
                </span>
                <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                  {caseStudy.codeExcerpt.language.toUpperCase()}
                </span>
              </div>

              <div 
                className="p-4 rounded border font-mono text-xs overflow-x-auto"
                style={{ 
                  backgroundColor: 'var(--bg-main)', 
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)' 
                }}
              >
                <pre>{caseStudy.codeExcerpt.snippet}</pre>
              </div>
              <p className="text-xs mt-2 italic" style={{ color: 'var(--text-muted)' }}>
                {caseStudy.codeExcerpt.explanation}
              </p>
            </div>
          )}

          {/* 6. What I Learned & Future Improvements */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Core Learnings
              </h4>
              <ul className="space-y-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                {caseStudy.learnings.map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }}>✓</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                Future Roadmap
              </h4>
              <ul className="space-y-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                {caseStudy.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div 
          className="p-4 border-t flex items-center justify-between shrink-0"
          style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            borderColor: 'var(--border-subtle)' 
          }}
        >
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            Engineering case study by Amit Kumar
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-semibold rounded transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-main)',
            }}
          >
            Close Deep-Dive
          </button>
        </div>

      </div>
    </div>
  );
};
