import React, { useState } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider';
import { DesignTheme } from '../context/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-primary)',
        }}
        title="Switch UI Aesthetic Style"
      >
        <Palette className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
        <span className="hidden sm:inline">UI:</span>
        <span className="font-semibold" style={{ color: 'var(--accent)' }}>
          {allThemes.find((t) => t.id === currentTheme)?.name.split(' ')[0]}
        </span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div
            className="absolute right-0 mt-2 w-72 p-2 rounded-xl border shadow-2xl z-50 transition-all text-left"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div className="px-3 py-2 border-b mb-1 flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: 'var(--accent)' }}>
                  Design System Switcher
                </span>
                <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                  Choose Active Aesthetic
                </span>
              </div>
            </div>

            <div className="space-y-1">
              {allThemes.map((theme) => {
                const isSelected = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id as DesignTheme);
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-lg transition-all flex items-start justify-between cursor-pointer group"
                    style={{
                      backgroundColor: isSelected ? 'var(--accent-muted)' : 'transparent',
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span 
                          className="w-2.5 h-2.5 rounded-full border shrink-0"
                          style={{ 
                            backgroundColor: theme.accent, 
                            borderColor: theme.borderStrong 
                          }}
                        />
                        <span 
                          className="text-xs font-semibold"
                          style={{ color: isSelected ? 'var(--accent)' : 'var(--text-primary)' }}
                        >
                          {theme.name}
                        </span>
                      </div>
                      <p className="text-[11px] leading-tight pl-4" style={{ color: 'var(--text-secondary)' }}>
                        {theme.description}
                      </p>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="px-2 pt-2 pb-1 border-t mt-2 text-[10px] font-mono text-center" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
              Built with UI/UX Pro Max architecture
            </div>
          </div>
        </>
      )}
    </div>
  );
};
