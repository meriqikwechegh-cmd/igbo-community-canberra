'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      label: 'Overview',
      href: '/en/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      label: 'Dues & Billing',
      href: '/en/dashboard/billing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Events & RSVPs',
      href: '/en/dashboard/events',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Treasurer & Executive',
      href: '/en/dashboard/admin',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: 'Executive',
    },
  ];

  const content = (
    <div className="flex flex-col h-full bg-emerald-950 text-stone-100 border-r border-emerald-900/80">
      {/* Brand / Logo Section */}
      <div className="h-20 flex items-center px-6 border-b border-emerald-900/80 bg-emerald-950/80">
        <Link href="/en" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/80 shrink-0 bg-white shadow-md">
            <Image
              src="/logo.jpg"
              alt="Igbo Community Canberra Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-base text-stone-50 block leading-tight tracking-tight group-hover:text-amber-200 transition">
              Igbo Community
            </span>
            <span className="text-[10px] font-sans font-bold text-amber-300 uppercase tracking-widest block mt-0.5">
              Canberra Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Identity Banner */}
      <div className="px-5 py-3.5 bg-emerald-900/40 border-b border-emerald-900/60 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-xs font-serif italic text-amber-200/90 font-medium">
          Onye aghana nwanne ya
        </span>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400/80">
          Member Dashboard
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                isActive
                  ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                  : 'text-stone-300 hover:bg-emerald-900/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? 'text-emerald-950' : 'text-emerald-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border ${
                    isActive
                      ? 'bg-emerald-950 text-amber-300 border-emerald-900'
                      : 'bg-amber-400/20 text-amber-300 border-amber-400/30'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Public Site Switcher */}
      <div className="px-4 py-3 border-t border-emerald-900/80">
        <Link
          href="/en"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold text-emerald-200 bg-emerald-900/30 hover:bg-emerald-900/70 border border-emerald-800/50 transition"
        >
          <span>Return to Website</span>
          <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* User Profile / Status Footer */}
      <div className="p-4 border-t border-emerald-900/80 bg-emerald-950">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-emerald-950 font-serif font-bold flex items-center justify-center text-sm shrink-0 border border-amber-300">
              OO
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-stone-100 truncate">Obinna Okafor</p>
              <p className="text-[11px] text-amber-300/90 font-medium truncate">Family Membership</p>
            </div>
          </div>
          <Link
            href="/en/login"
            title="Sign Out"
            className="p-2 text-stone-400 hover:text-white hover:bg-emerald-900/60 rounded-lg transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 h-screen sticky top-0 shadow-xl z-20">
        {content}
      </aside>

      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-emerald-950 text-white px-4 py-3 flex items-center justify-between border-b border-emerald-900 sticky top-0 z-30 shadow-md">
        <Link href="/en" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-400/80 shrink-0 bg-white">
            <Image
              src="/logo.jpg"
              alt="ICC Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif font-bold text-sm text-stone-100">Igbo Community Canberra</span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-stone-200 hover:text-white hover:bg-emerald-900 rounded-lg transition"
          aria-label="Toggle Navigation Sidebar"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[80vw] h-full shadow-2xl z-10">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
