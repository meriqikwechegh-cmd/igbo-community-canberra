'use client';

import { signOut } from 'next-auth/react';

interface UserMenuProps {
  name: string;
  email?: string;
  role?: string;
}

export function UserMenu({ name, email, role }: UserMenuProps) {
  const names = name.trim().split(' ');
  const initials = `${(names[0]?.[0] || 'U').toUpperCase()}${(names[1]?.[0] || '').toUpperCase()}`;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-none bg-stone-900 dark:bg-stone-800 text-stone-100 text-xs font-sans font-bold flex items-center justify-center border border-stone-700">
          {initials}
        </div>
        <div className="hidden md:flex flex-col text-left leading-tight">
          <span className="text-xs font-semibold text-stone-800 dark:text-stone-200 truncate max-w-[140px]">
            {name}
          </span>
          {role && (
            <span className="text-[11px] font-sans font-semibold uppercase text-stone-500 dark:text-stone-400">
              {role.replace('_', ' ')}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/en/login' })}
        title="Sign Out"
        className="text-xs font-sans font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 border border-stone-300 dark:border-stone-700 px-2.5 py-1 rounded-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition"
      >
        Sign Out
      </button>
    </div>
  );
}
