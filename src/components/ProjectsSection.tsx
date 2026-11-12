import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projectsData } from '../content/projects';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const categories: ProjectCategory[] = ['All', 'Backend', 'Android', 'AI / ML', 'Data Engineering'];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const featuredProjects = projectsData.filter((project) => project.featured);
  const additionalProjects = projectsData.filter((project) => !project.featured);
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <article className={`group flex h-full flex-col border p-6 transition-all ${featured ? 'rounded-lg' : 'rounded-md'}`} style={{ borderColor: 'var(--border-strong)', backgroundColor: 'var(--bg-card)' }}>
      {project.coverImage && featured && (
        <div className="-mx-6 -mt-6 mb-6 overflow-hidden border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <img src={project.coverImage} alt="" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        </div>
      )}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>{project.category}</span>
          <h3 className={`${featured ? 'mt-2 text-xl sm:text-2xl' : 'mt-1 text-base'} font-bold leading-tight`} style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
        </div>
        <span className="shrink-0 font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>{String(project.order).padStart(2, '0')}</span>
      </div>
      <p className={`${featured ? 'text-sm' : 'text-xs'} mb-6 leading-relaxed`} style={{ color: 'var(--text-secondary)' }}>{project.oneLiner}</p>
      {project.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <span key={tag} className="rounded border px-2 py-0.5 font-mono text-[10px]" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>{tag}</span>)}
        </div>
      )}
      <div className="mt-auto flex items-center justify-between gap-4 border-t pt-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>Source repository</span>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-mono text-xs transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>
          <Github className="h-3.5 w-3.5" /> GitHub <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );

  return (
    <section id="projects" className="relative border-b transition-colors" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>02 — Selected Work</span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>/ Projects & repositories</span>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Projects with a point of view.</h2>
            <p className="max-w-lg text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>A focused selection of backend, Android and data systems, linked directly to their source repositories.</p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} featured />)}
        </div>

        <div className="border-t pt-10" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Additional projects</span>
              <h3 className="mt-2 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>The complete repository index.</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className="rounded border px-2.5 py-1.5 font-mono text-[10px] transition-colors" style={{ borderColor: activeCategory === category ? 'var(--accent)' : 'var(--border-subtle)', color: activeCategory === category ? 'var(--accent)' : 'var(--text-muted)', backgroundColor: activeCategory === category ? 'var(--accent-muted)' : 'transparent' }}>{category}</button>)}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
            {filteredProjects.filter((project) => !project.featured).map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
