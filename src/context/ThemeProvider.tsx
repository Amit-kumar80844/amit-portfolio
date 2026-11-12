import React, { createContext, useContext, useState, useEffect } from 'react';
import { DesignTheme, ThemeConfig, themes } from './ThemeContext';

interface ThemeContextType {
  currentTheme: DesignTheme;
  themeConfig: ThemeConfig;
  setTheme: (theme: DesignTheme) => void;
  allThemes: ThemeConfig[];
}

const ThemeContextInstance = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<DesignTheme>('swiss-minimal');

  const themeConfig = themes[currentTheme] || themes['swiss-minimal'];

  useEffect(() => {
    // Apply CSS variables to root
    const root = document.documentElement;
    root.style.setProperty('--bg-main', themeConfig.bgMain);
    root.style.setProperty('--bg-secondary', themeConfig.bgSecondary);
    root.style.setProperty('--bg-card', themeConfig.bgCard);
    root.style.setProperty('--text-primary', themeConfig.textPrimary);
    root.style.setProperty('--text-secondary', themeConfig.textSecondary);
    root.style.setProperty('--text-muted', themeConfig.textMuted);
    root.style.setProperty('--accent', themeConfig.accent);
    root.style.setProperty('--accent-hover', themeConfig.accentHover);
    root.style.setProperty('--accent-muted', themeConfig.accentMuted);
    root.style.setProperty('--border-subtle', themeConfig.borderSubtle);
    root.style.setProperty('--border-strong', themeConfig.borderStrong);
    root.style.setProperty('--font-display', themeConfig.fontFamilyDisplay);
    root.style.setProperty('--font-heading', themeConfig.fontFamilyHeading);
    root.style.setProperty('--font-body', themeConfig.fontFamilyBody);
    root.style.setProperty('--font-mono', themeConfig.fontFamilyMono);

    // Apply dark class condition
    if (currentTheme === 'swiss-minimal') {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = themeConfig.bgMain;
      document.body.style.color = themeConfig.textPrimary;
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.style.backgroundColor = themeConfig.bgMain;
      document.body.style.color = themeConfig.textPrimary;
    }

    // Scroll progress bar
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (scrolled / total) * 100 : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentTheme, themeConfig]);

  return (
    <ThemeContextInstance.Provider
      value={{
        currentTheme,
        themeConfig,
        setTheme: setCurrentTheme,
        allThemes: Object.values(themes),
      }}
    >
      {children}
    </ThemeContextInstance.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContextInstance);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
