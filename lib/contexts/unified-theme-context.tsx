'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../types/design-systems';

type UnifiedThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const UnifiedThemeContext = createContext<UnifiedThemeContextType | undefined>(
  undefined
);

export function UnifiedThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('unified-theme') as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('unified-theme', newTheme);
    // Update document class for global styles
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <UnifiedThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </UnifiedThemeContext.Provider>
  );
}

export function useUnifiedTheme() {
  const context = useContext(UnifiedThemeContext);
  if (context === undefined) {
    throw new Error('useUnifiedTheme must be used within UnifiedThemeProvider');
  }
  return context;
}
