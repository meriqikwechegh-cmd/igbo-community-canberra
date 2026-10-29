'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

interface PublicSidebarProps {
  memberLoginText?: string;
  joinText?: string;
  contactText?: string;
}

const navItems = [
  {
    label: 'Home',
    href: '/en',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: 'Membership',
    href: '/en/membership',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    label: 'Executive Council',
    href: '/en/leadership',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    label: 'Constitution',
    href: '/en/constitution',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    label: 'Activities',
    href: '/en/events',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    label: 'Contact Us',
    href: '/en/contact',
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export function PublicSidebar({
  memberLoginText = 'Member Login',
  joinText = 'Registration',
}: PublicSidebarProps = {}) {
  // Automatically collapsible: collapsed by default, expands on hover, or can be pinned
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);

  const collapsed = !pinned && !hovered;

  const sidebarContent = (
    <div className="flex flex-col h-full bg-stone-900 text-stone-100 border-r border-stone-800 select-none transition-all duration-300 ease-in-out">
      {/* Brand Header */}
      <div className="h-16 flex items-center border-b border-stone-800 bg-stone-950 shrink-0 overflow-hidden">
        {collapsed ? (
          /* Collapsed: just logo icon, centred */
          <div className="flex-1 flex justify-center">
            <div className="relative w-8 h-8 border border-stone-700 bg-white shrink-0">
              <Image src="/logo.jpg" alt="ICC Logo" fill className="object-contain" />
            </div>
          </div>
        ) : (
          <Link href="/en" className="flex items-center gap-3 px-5 min-w-0">
            <div className="relative w-8 h-8 border border-stone-700 bg-white shrink-0">
              <Image src="/logo.jpg" alt="Igbo Community Canberra Logo" fill className="object-contain" />
            </div>
            <div className="min-w-0">
              <span className="font-sans font-bold text-sm text-stone-100 block leading-tight truncate">
                Igbo Community
              </span>
              <span className="text-[11px] font-sans font-semibold text-emerald-400 uppercase tracking-wider block truncate">
                Canberra Inc. · A04821
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Motto banner — hidden when collapsed */}
      {!collapsed && (
        <div className="px-5 py-2.5 bg-stone-950/60 border-b border-stone-800 flex items-center justify-between shrink-0">
          <span className="text-xs font-sans font-medium text-stone-200 truncate">
            Onye aghana nwanne ya
          </span>
          <span className="text-[11px] font-sans font-bold text-emerald-300 border border-emerald-800/80 bg-emerald-950 px-2 py-0.5 shrink-0 ml-2">
            Est. 2012
          </span>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto font-sans">
        {!collapsed && (
          <div className="px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider text-stone-400">
            Website Navigation
          </div>
        )}

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            title={collapsed ? item.label : undefined}
            className={`flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-stone-300 hover:bg-stone-800 hover:text-white transition-colors ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <span className="text-stone-400 shrink-0">{item.icon}</span>
            {!collapsed && <span className="truncate">{item.label}</span>}
          </Link>
        ))}

        {/* Member Access buttons — hidden when collapsed */}
        {!collapsed && (
          <>
            <div className="pt-4 px-3 pb-1.5 text-xs font-sans font-bold uppercase tracking-wider text-stone-400">
              Member Access
            </div>
            <div className="space-y-1.5 px-1 pb-2">
              <Link
                href="/en/login"
                className="block text-center font-sans text-xs font-semibold text-stone-200 border border-stone-700 py-2 rounded-none hover:bg-stone-800 transition"
              >
                {memberLoginText}
              </Link>
              <Link
                href="/en/register"
                className="block text-center font-sans text-xs font-bold bg-[#064e3b] text-white py-2 rounded-none hover:bg-emerald-900 transition"
              >
                {joinText}
              </Link>
            </div>
          </>
        )}
      </nav>

      {/* Appearance / Theme Toggle */}
      <div className={`px-3 py-3 border-t border-stone-800 bg-stone-900/90 shrink-0 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <ThemeToggle showLabel={false} />
        ) : (
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-sans font-medium text-stone-300">
              Appearance
            </span>
            <ThemeToggle showLabel={false} />
          </div>
        )}
      </div>

      {/* Pin / Unpin (Auto-collapse) Toggle Button */}
      <div className="px-3 py-2.5 border-t border-stone-800 bg-stone-950 shrink-0">
        <button
          type="button"
          onClick={() => setPinned(!pinned)}
          className={`w-full flex items-center gap-2 px-2 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-stone-400 hover:text-white hover:bg-stone-800 transition ${
            collapsed ? 'justify-center' : 'justify-between'
          }`}
          title={pinned ? 'Unpin Sidebar (Auto-collapse on)' : 'Pin Sidebar (Keep expanded)'}
        >
          {!collapsed && <span>{pinned ? 'Unpin Sidebar' : 'Auto-Collapse: Off'}</span>}
          {pinned ? (
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          )}
        </button>

        {/* MeriQTech branding */}
        {!collapsed && (
          <div className="mt-2 flex items-center justify-between text-xs font-sans text-stone-400 px-2">
            <span>ICC Canberra</span>
            <span>
              Powered by <strong className="text-emerald-400 font-bold">MeriQTech</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Sidebar: automatically collapses when mouse leaves */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`hidden lg:block shrink-0 h-screen sticky top-0 z-30 transition-all duration-300 ease-in-out ${
          collapsed ? 'w-[64px]' : 'w-72'
        }`}
        aria-label="Navigation Sidebar"
      >
        {sidebarContent}
      </aside>
    </>
  );
}
