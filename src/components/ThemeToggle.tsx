'use client';

import { useState, useEffect } from 'react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = true }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('icc_theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body?.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body?.classList.remove('dark');
    }
  }, []);

  function setMode(mode: 'light' | 'dark') {
    setTheme(mode);
    localStorage.setItem('icc_theme', mode);

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body?.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body?.classList.remove('dark');
    }
  }

  if (!mounted) {
    return (
      <div className={`inline-flex items-center border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 p-0.5 rounded-none opacity-50 ${className}`}>
        <span className="w-5 h-5 block" />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/80 p-0.5 rounded-none select-none ${className}`}
      role="group"
      aria-label="Color scheme toggle"
    >
      <button
        type="button"
        onClick={() => setMode('light')}
        className={`px-1.5 py-1 rounded-none flex items-center gap-1 transition-all cursor-pointer ${
          theme === 'light'
            ? 'bg-white text-amber-500 shadow-xs font-semibold'
            : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
        }`}
        title="Light Mode"
        aria-label="Switch to Light Mode"
        aria-pressed={theme === 'light'}
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        {showLabel && <span className="text-[10px] font-mono uppercase tracking-wider">Light</span>}
      </button>

      <button
        type="button"
        onClick={() => setMode('dark')}
        className={`px-1.5 py-1 rounded-none flex items-center gap-1 transition-all cursor-pointer ${
          theme === 'dark'
            ? 'bg-stone-900 text-amber-300 shadow-xs font-semibold border border-stone-700/60'
            : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
        }`}
        title="Dark Mode"
        aria-label="Switch to Dark Mode"
        aria-pressed={theme === 'dark'}
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" />
        </svg>
        {showLabel && <span className="text-[10px] font-mono uppercase tracking-wider">Dark</span>}
      </button>
    </div>
  );
}
