export interface Profile {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  supportingText: string;
  status: string;
  availabilityNotice: string;
  location: string;
  institution: string;
  degree: string;
  graduationYear: string;
  cgpa: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  codeforces?: string;
  geeksforgeeks?: string;
  codolio?: string;
  resumePdfUrl?: string;
  avatarUrl: string;
  coreFocus: string[];
}

export type ProjectCategory = 
  | 'All'
  | 'Backend'
  | 'Android'
  | 'Systems'
  | 'AI / ML'
  | 'Data Engineering';

export interface ArchitectureComponent {
  name: string;
  role: string;
  tech: string;
}

export interface ProjectCaseStudy {
  problemStatement: string;
  whyIBuiltIt: string;
  productOverview: string;
  architectureComponents: ArchitectureComponent[];
  techRationale: { tech: string; reason: string }[];
  coreFeatures: string[];
  backendDesign?: string;
  databaseDesign?: string;
  engineeringChallenges: { challenge: string; solution: string; tradeoff: string }[];
  learnings: string[];
  futureImprovements: string[];
  codeExcerpt?: {
    filename: string;
    language: string;
    snippet: string;
    explanation: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  oneLiner: string;
  category: ProjectCategory;
  tags: string[];
  coverImage?: string;
  githubUrl?: string;
  demoUrl?: string;
  status: 'Production' | 'Active Development' | 'Prototype' | 'Completed';
  featured: boolean;
  order: number;
  caseStudy: ProjectCaseStudy;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Open Source' | 'Research';
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  links?: { label: string; url: string }[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; iconName?: string; highlight?: boolean }[];
}

export interface OpenSourceContribution {
  id: string;
  project: string;
  title: string;
  prNumber?: string;
  prUrl: string;
  repoUrl: string;
  description: string;
  technologies: string[];
  status: 'Merged' | 'Open' | 'Under Review';
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Competitive Programming' | 'Academics' | 'Open Source' | 'Certifications';
  metric: string;
  description: string;
  verificationUrl?: string;
  certificateUrl?: string;
  date?: string;
}

export interface TechnicalArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  isDraft: boolean;
  contentMarkdown: string;
}
