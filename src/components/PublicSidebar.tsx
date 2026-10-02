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

export function PublicSidebar({
  memberLoginText = 'Member Portal',
  joinText = 'Apply for Membership',
  contactText = 'Contact Secretariat',
}: PublicSidebarProps = {}) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navItems = [
    {
      label: "President's Address",
      href: '#welcome',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      label: 'Charter & Pillars',
      href: '#charter',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5" />
        </svg>
      ),
    },
    {
      label: 'Cultural Calendar',
      href: '#events',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      label: 'Executive Council',
      href: '#leadership',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      label: 'Membership Dues',
      href: '#membership',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
    },
    {
      label: contactText,
      href: '#contact',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-stone-900 text-stone-100 border-r border-stone-800 select-none">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-5 border-b border-stone-800 bg-stone-950 shrink-0">
        <Link href="/en" className="flex items-center gap-3 min-w-0">
          <div className="relative w-8 h-8 border border-stone-700 bg-white shrink-0">
            <Image
              src="/logo.jpg"
              alt="Igbo Community Canberra Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="font-serif font-bold text-sm text-stone-100 block leading-tight truncate">
              Igbo Community
            </span>
            <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block truncate">
              Canberra Inc. (ACT A04821)
            </span>
          </div>
        </Link>
      </div>

      {/* Motto Identity Banner */}
      <div className="px-5 py-2.5 bg-stone-950/60 border-b border-stone-800 flex items-center justify-between shrink-0">
        <span className="text-[11px] font-serif italic text-stone-300 truncate">
          Onye aghana nwanne ya
        </span>
        <span className="text-[9px] font-mono text-emerald-400 border border-emerald-900 bg-emerald-950 px-1.5 py-0.5 rounded shrink-0 ml-2">
          Est. 2012
        </span>
      </div>

      {/* Main Website Section Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-stone-500">
          Website Navigation
        </div>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileDrawerOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold text-stone-300 hover:bg-stone-800 hover:text-white transition-colors"
          >
            <span className="text-stone-400">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </a>
        ))}

        <div className="pt-4 px-3 text-[9px] font-mono font-bold uppercase tracking-widest text-stone-500">
          Member Access
        </div>
        <div className="space-y-1.5 pt-1 px-1">
          <Link
            href="/en/login"
            onClick={() => setMobileDrawerOpen(false)}
            className="block text-center font-sans text-xs font-semibold text-stone-200 border border-stone-700 py-2 rounded hover:bg-stone-800 transition"
          >
            {memberLoginText}
          </Link>
          <Link
            href="/en/register"
            onClick={() => setMobileDrawerOpen(false)}
            className="block text-center font-sans text-xs font-bold bg-[#064e3b] text-white py-2 rounded hover:bg-emerald-900 transition"
          >
            {joinText}
          </Link>
        </div>
      </nav>

      {/* Theme Toggle Section */}
      <div className="px-4 py-3 border-t border-stone-800 bg-stone-900/90 shrink-0 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
            Appearance
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* Footer Branding Tag */}
      <div className="p-4 border-t border-stone-800 bg-stone-950 text-[10px] font-mono text-stone-500 shrink-0 flex items-center justify-between">
        <span>ICC Canberra</span>
        <span>Powered by <strong className="text-emerald-400 font-bold">MeriQTech</strong></span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Sidebar (Visible on lg+) */}
      <aside className="hidden lg:block w-64 xl:w-72 shrink-0 h-screen sticky top-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Top Bar (< lg) */}
      <div className="lg:hidden bg-stone-900 text-white px-4 h-14 flex items-center justify-between border-b border-stone-800 sticky top-0 z-40">
        <Link href="/en" className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-6 h-6 border border-stone-700 bg-white shrink-0">
            <Image
              src="/logo.jpg"
              alt="ICC Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif font-bold text-xs text-stone-100 truncate">Igbo Community Canberra</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle showLabel={false} />
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-1.5 text-stone-300 hover:text-white rounded hover:bg-stone-800 transition"
            aria-label="Toggle Navigation Sidebar"
          >
            {mobileDrawerOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Sidebar Drawer */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] h-full z-10 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
