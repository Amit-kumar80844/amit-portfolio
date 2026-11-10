import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Smartphone, 
  Database, 
  Binary, 
  BookOpen 
} from 'lucide-react';
import { projectsData } from '../content/projects';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Backend',
    'Android',
    'Systems',
    'AI / ML',
    'Data Engineering'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-20 border-b transition-colors"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span 
              className="text-xs font-mono tracking-wider uppercase font-semibold block mb-2"
              style={{ color: 'var(--accent)' }}
            >
              02. Architecture & Code
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Selected Engineering Projects
            </h2>
          </div>
          <p 
            className="text-xs font-mono max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            Complete technical implementations with architecture rationales, failure trade-offs, and verifiable source repositories.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          className="flex items-center gap-1.5 p-1.5 border rounded-xl overflow-x-auto max-w-full mb-12"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer"
                style={{
                  backgroundColor: isActive ? 'var(--bg-card)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  borderWidth: '1px',
                  borderColor: isActive ? 'var(--border-strong)' : 'transparent',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: cards flow naturally without reserving empty bento cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border transition-all overflow-hidden group"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                {/* Visual Cover Banner if available */}
                {project.coverImage && (
                  <div 
                    className="aspect-[16/8] w-full overflow-hidden relative border-b"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <img
                      src={project.coverImage}
                      alt={`${project.title} architecture visual`}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata line: Category & Status */}
                    <div 
                      className="flex items-center justify-between text-xs font-mono mb-3"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="font-semibold" style={{ color: 'var(--accent)' }}>{project.category}</span>
                      <div className="flex items-center gap-1.5">
                        <span>{project.status}</span>
                      </div>
                    </div>

                    <h3 
                      className="text-xl font-bold mb-2 transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>

                    <p 
                      className="text-xs sm:text-sm leading-relaxed mb-6"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.oneLiner}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div 
                    className="pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1.5 text-xs font-mono font-medium cursor-pointer transition-colors"
                      style={{ color: 'var(--accent)' }}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Deep Dive Case Study</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                          aria-label={`View ${project.title} GitHub repo`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                          aria-label={`View ${project.title} Live Demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
