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
  ArrowLeft 
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0e110f] border border-white/10 rounded-2xl shadow-2xl my-8 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#141815] shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#b7f36b] mb-1">
              <span>{project.category} Case Study</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#9A9F99]">{project.status}</span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold text-[#F3F4EF]">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#F3F4EF] bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#9A9F99] hover:text-[#F3F4EF] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Close case study dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#9A9F99] text-sm leading-relaxed">
          
          {/* 1. Problem & Motivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-[#141815] border border-white/[0.06]">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#b7f36b] mb-2">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-[#F3F4EF] leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#b7f36b] mb-2">
                Why I Engineered This
              </h4>
              <p className="text-xs sm:text-sm text-[#F3F4EF] leading-relaxed">
                {caseStudy.whyIBuiltIt}
              </p>
            </div>
          </div>

          {/* 2. Architecture Breakdown */}
          <div>
            <h3 className="text-base font-bold text-[#F3F4EF] mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#b7f36b]" />
              <span>Architectural Modules</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.architectureComponents.map((comp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#101310] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-[#F3F4EF]">{comp.name}</span>
                    <span className="text-[10px] font-mono text-[#b7f36b] px-1.5 py-0.5 rounded bg-white/5">
                      {comp.tech}
                    </span>
                  </div>
                  <p className="text-xs text-[#9A9F99] leading-relaxed">
                    {comp.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Technology Rationale */}
          <div>
            <h3 className="text-base font-bold text-[#F3F4EF] mb-4">
              Technology Decisions & Justification
            </h3>
            <div className="space-y-3">
              {caseStudy.techRationale.map((rationale, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#141815] border border-white/[0.04] flex items-start gap-3">
                  <span className="text-xs font-mono font-semibold text-[#b7f36b] shrink-0 mt-0.5">
                    {rationale.tech}
                  </span>
                  <p className="text-xs text-[#9A9F99] leading-relaxed">
                    {rationale.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Engineering Challenges & Trade-offs */}
          <div>
            <h3 className="text-base font-bold text-[#F3F4EF] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#b7f36b]" />
              <span>Hard Engineering Challenges & Trade-offs</span>
            </h3>

            <div className="space-y-4">
              {caseStudy.engineeringChallenges.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#141815] border border-white/[0.06]">
                  <div className="text-xs font-semibold text-[#F3F4EF] mb-2 flex items-start gap-2">
                    <span className="text-[#b7f36b]">Challenge:</span>
                    <span>{item.challenge}</span>
                  </div>
                  <div className="text-xs text-[#9A9F99] mb-2 pl-4 border-l border-[#b7f36b]/30">
                    <span className="text-white font-mono">Solution:</span> {item.solution}
                  </div>
                  <div className="text-xs text-[#9A9F99] pl-4 border-l border-amber-500/30">
                    <span className="text-amber-400 font-mono">Trade-off:</span> {item.tradeoff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Code Excerpt if present */}
          {caseStudy.codeExcerpt && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#b7f36b] flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5" />
                  <span>{caseStudy.codeExcerpt.filename}</span>
                </span>
                <span className="text-[11px] font-mono text-[#9A9F99]">
                  {caseStudy.codeExcerpt.language.toUpperCase()}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#080a08] border border-white/10 font-mono text-xs overflow-x-auto text-[#e2e8f0]">
                <pre>{caseStudy.codeExcerpt.snippet}</pre>
              </div>
              <p className="text-xs text-[#9A9F99] mt-2 italic">
                {caseStudy.codeExcerpt.explanation}
              </p>
            </div>
          )}

          {/* 6. What I Learned & Future Improvements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3F4EF] mb-2">
                Engineering Learnings
              </h4>
              <ul className="space-y-1.5 text-xs text-[#9A9F99]">
                {caseStudy.learnings.map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#b7f36b]">✓</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3F4EF] mb-2">
                Future Improvements
              </h4>
              <ul className="space-y-1.5 text-xs text-[#9A9F99]">
                {caseStudy.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#9A9F99]">→</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#141815] flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-[#9A9F99]">
            Case study by Amit Kumar
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#090B0A] bg-[#b7f36b] hover:bg-[#c9f984] font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
