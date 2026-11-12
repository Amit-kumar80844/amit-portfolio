export type DesignTheme = 
  | 'swiss-minimal'      // Clean high-end architectural white/bone, stark typography, cobalt accent (1st UI)
  | 'editorial-dark'     // Minimalist, high contrast, warm charcoal, electric lime accent (2nd UI)
  | 'terminal-sys'       // Pure engineer dark, high-density monospace, phosphor emerald, amber warnings
  | 'tokyo-night';       // Deep obsidian-indigo, cyan/violet refined accents, modern dev vibe

export interface ThemeConfig {
  id: DesignTheme;
  name: string;
  category: string;
  description: string;
  bgMain: string;
  bgSecondary: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentMuted: string;
  borderSubtle: string;
  borderStrong: string;
  fontFamilyDisplay: string;
  fontFamilyHeading: string;
  fontFamilyBody: string;
  fontFamilyMono: string;
}

export const themes: Record<DesignTheme, ThemeConfig> = {
  'swiss-minimal': {
    id: 'swiss-minimal',
    name: 'Swiss Pure / Light',
    category: 'Architectural / Minimal',
    description: 'Clean architectural canvas — stark white & warm off-white, grotesque type, cobalt blue precision accent.',
    bgMain: '#FBFBFB',
    bgSecondary: '#F3F4F6',
    bgCard: '#FFFFFF',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',
    accent: '#0284C7',
    accentHover: '#0369A1',
    accentMuted: 'rgba(2, 132, 199, 0.08)',
    borderSubtle: 'rgba(15, 23, 42, 0.08)',
    borderStrong: 'rgba(15, 23, 42, 0.16)',
    fontFamilyDisplay: "'DM Sans', -apple-system, sans-serif",
    fontFamilyHeading: "'DM Sans', -apple-system, sans-serif",
    fontFamilyBody: "'DM Sans', sans-serif",
    fontFamilyMono: "'IBM Plex Mono', monospace",
  },
  'editorial-dark': {
    id: 'editorial-dark',
    name: 'Editorial Dark',
    category: 'Taste / High Contrast',
    description: 'Charcoal canvas with warm typography and precision electric lime accents.',
    bgMain: '#090B0A',
    bgSecondary: '#101310',
    bgCard: '#141815',
    textPrimary: '#F3F4EF',
    textSecondary: '#9A9F99',
    textMuted: '#686D67',
    accent: '#B7F36B',
    accentHover: '#C9F984',
    accentMuted: 'rgba(183, 243, 107, 0.12)',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    fontFamilyDisplay: "'Inter', -apple-system, sans-serif",
    fontFamilyHeading: "'Inter', -apple-system, sans-serif",
    fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
    fontFamilyMono: "'JetBrains Mono', monospace",
  },
  'terminal-sys': {
    id: 'terminal-sys',
    name: 'Systems Monospace',
    category: 'Systems / Low-Level',
    description: 'Pitch black, phosphor emerald accents, high-density tabular monospace engineering feel.',
    bgMain: '#030704',
    bgSecondary: '#08110a',
    bgCard: '#0c170f',
    textPrimary: '#d1fae5',
    textSecondary: '#6ee7b7',
    textMuted: '#065f46',
    accent: '#10b981',
    accentHover: '#34d399',
    accentMuted: 'rgba(16, 185, 129, 0.12)',
    borderSubtle: 'rgba(16, 185, 129, 0.15)',
    borderStrong: 'rgba(16, 185, 129, 0.3)',
    fontFamilyDisplay: "'JetBrains Mono', monospace",
    fontFamilyHeading: "'JetBrains Mono', monospace",
    fontFamilyBody: "'JetBrains Mono', monospace",
    fontFamilyMono: "'JetBrains Mono', monospace",
  },
  'tokyo-night': {
    id: 'tokyo-night',
    name: 'Obsidian & Cyan',
    category: 'Modern Developer',
    description: 'Deep navy-obsidian, electric cyan accents, subtle violet ambient glow.',
    bgMain: '#0B0F19',
    bgSecondary: '#111827',
    bgCard: '#182234',
    textPrimary: '#F1F5F9',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    accent: '#38BDF8',
    accentHover: '#7DD3FC',
    accentMuted: 'rgba(56, 189, 248, 0.12)',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(56, 189, 248, 0.25)',
    fontFamilyDisplay: "'Inter', -apple-system, sans-serif",
    fontFamilyHeading: "'Inter', -apple-system, sans-serif",
    fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
    fontFamilyMono: "'JetBrains Mono', monospace",
  }
};
