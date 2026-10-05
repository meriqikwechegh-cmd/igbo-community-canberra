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

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('icc_theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body?.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body?.classList.remove('dark');
    }
  }

  if (!mounted) {
    return (
      <div className={`p-1.5 rounded-none border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-xs font-mono opacity-50 flex items-center gap-1.5 ${className}`}>
        <span className="w-3.5 h-3.5 block" />
        {showLabel && <span className="text-[10px]">Theme</span>}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-1.5 rounded-none text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 transition flex items-center gap-1.5 text-xs font-mono cursor-pointer ${className}`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      aria-label="Toggle Theme Mode"
    >
      {theme === 'light' ? (
        <>
          <svg className="w-3.5 h-3.5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          {showLabel && <span className="text-[10px] font-semibold">Dark</span>}
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0h-2.25m15.003-5.657l-1.591 1.59m-11.314 11.314l-1.59 1.591m15.804 0l-1.591-1.59m-11.314-11.314l-1.59-1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>
          {showLabel && <span className="text-[10px] font-semibold">Light</span>}
        </>
      )}
    </button>
  );
}
