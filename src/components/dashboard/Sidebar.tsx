'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      label: 'Overview',
      href: '/en/dashboard',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      label: 'Dues & Billing',
      href: '/en/dashboard/billing',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
    },
    {
      label: 'Events & RSVPs',
      href: '/en/dashboard/events',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      label: 'Treasurer & Executive',
      href: '/en/dashboard/admin',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      ),
      badge: 'Executive',
    },
  ];

  const content = (
    <div className="flex flex-col h-full bg-stone-900 text-stone-100 border-r border-stone-800 select-none">
      {/* Brand / Logo Section */}
      <div className="h-16 flex items-center px-4 sm:px-5 border-b border-stone-800 bg-stone-950 shrink-0">
        <Link href="/en" className="flex items-center gap-3">
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
            <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest block truncate">
              Canberra Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Identity Banner */}
      <div className="px-4 sm:px-5 py-2.5 bg-stone-950/60 border-b border-stone-800 flex items-center justify-between shrink-0">
        <span className="text-[11px] font-serif italic text-stone-300 truncate mr-2">
          Onye aghana nwanne ya
        </span>
        <span className="text-[9px] font-mono text-emerald-400 border border-emerald-900 bg-emerald-950 px-1.5 py-0.5 rounded-none shrink-0">
          ACT Inc.
        </span>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="px-2 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-stone-500">
          Portal Menu
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-none text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'bg-[#064e3b] text-white font-bold'
                  : 'text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={isActive ? 'text-white' : 'text-stone-400'}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-none border shrink-0 ml-2 ${
                    isActive
                      ? 'bg-emerald-950 text-emerald-200 border-emerald-800'
                      : 'bg-stone-800 text-stone-400 border-stone-700'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle & Return to Website */}
      <div className="px-3 py-3 border-t border-stone-800 space-y-2 shrink-0 bg-stone-900/90">
        <div className="flex items-center justify-between px-2 py-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
            Appearance
          </span>
          <ThemeToggle />
        </div>

        <Link
          href="/en"
          className="flex items-center justify-between px-3 py-2 rounded-none text-xs font-medium text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800 transition"
        >
          <span className="truncate">Return to Website</span>
          <svg className="w-3.5 h-3.5 text-stone-500 shrink-0 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* User Status Footer */}
      <div className="p-4 border-t border-stone-800 bg-stone-950 space-y-2.5 shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-none bg-stone-800 text-stone-200 font-serif font-bold flex items-center justify-center text-xs shrink-0 border border-stone-700">
              OO
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-stone-200 truncate">Obinna Okafor</p>
              <p className="text-[10px] font-mono text-stone-400 truncate">Family Membership</p>
            </div>
          </div>
          <Link
            href="/en/login"
            title="Sign Out"
            className="p-1.5 text-stone-500 hover:text-white hover:bg-stone-800 rounded-none transition shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </Link>
        </div>
        <div className="pt-2 border-t border-stone-900/80 flex items-center justify-between text-[10px] font-mono text-stone-500">
          <span>ICC Canberra</span>
          <span>Powered by <strong className="text-emerald-400 font-bold">MeriQTech</strong></span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 h-screen sticky top-0 z-20">
        {content}
      </aside>

      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-stone-900 text-white px-4 h-14 flex items-center justify-between border-b border-stone-800 sticky top-0 z-30">
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
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-stone-300 hover:text-white rounded-none hover:bg-stone-800 transition"
            aria-label="Toggle Navigation Sidebar"
          >
            {mobileOpen ? (
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

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-950/70 transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] h-full z-10 shadow-2xl">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
