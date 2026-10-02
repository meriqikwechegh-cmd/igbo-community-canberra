'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

interface PublicHeaderProps {
  memberLoginText?: string;
  joinText?: string;
  contactText?: string;
}

export function PublicHeader({
  memberLoginText = 'Member Portal',
  joinText = 'Apply for Membership',
  contactText = 'Contact',
}: PublicHeaderProps = {}) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const links = [
    { label: "President's Address", href: '#welcome' },
    { label: 'Charter & Pillars', href: '#charter' },
    { label: 'Cultural Calendar', href: '#events' },
    { label: 'Executive Council', href: '#leadership' },
    { label: 'Membership Dues', href: '#membership' },
    { label: contactText, href: '#contact' },
  ];

  return (
    <header className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/en" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden border border-stone-300 dark:border-stone-700 shrink-0 bg-white">
            <Image
              src="/logo.jpg"
              alt="Igbo Community Canberra Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 tracking-tight leading-tight truncate">
              Igbo Community Canberra
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] font-semibold text-emerald-900 dark:text-emerald-400 uppercase tracking-widest leading-none mt-0.5 truncate">
              Cultural Association Inc.
            </span>
          </div>
        </Link>

        {/* Editorial Navigation Links (Desktop lg+) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wide uppercase text-stone-700 dark:text-stone-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-900 dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 sm:gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/en/login"
            className="font-sans text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-emerald-900 dark:hover:text-white border border-stone-300 dark:border-stone-700 px-3 py-2 rounded transition whitespace-nowrap"
          >
            {memberLoginText}
          </Link>
          <Link
            href="/en/register"
            className="font-sans text-xs font-semibold bg-[#064e3b] hover:bg-emerald-950 text-white px-3.5 py-2 rounded transition whitespace-nowrap"
          >
            {joinText}
          </Link>
        </div>

        {/* Mobile Action + Hamburger Button */}
        <div className="flex sm:hidden items-center gap-1.5">
          <ThemeToggle showLabel={false} />
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-1.5 text-stone-800 dark:text-stone-200 hover:text-emerald-900 dark:hover:text-white rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Tablet Hamburger (sm to lg) */}
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="hidden sm:block lg:hidden p-2 text-stone-800 dark:text-stone-200 hover:text-emerald-900 dark:hover:text-white rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition ml-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-Out Drawer (Sidebar on mobile) */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] bg-stone-900 text-stone-100 h-full z-10 flex flex-col justify-between border-r border-stone-800 shadow-2xl">
            <div className="overflow-y-auto">
              <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-8 h-8 overflow-hidden border border-stone-700 bg-white shrink-0">
                    <Image
                      src="/logo.jpg"
                      alt="ICC Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-serif font-bold text-xs text-stone-100 block truncate">Igbo Community</span>
                    <span className="text-[9px] font-sans text-stone-400 uppercase tracking-widest block truncate">Canberra Inc.</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 text-stone-400 hover:text-white shrink-0 ml-2"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-3 space-y-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white hover:bg-stone-800 rounded transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar Drawer Footer with Theme Toggle & Action Links */}
            <div className="p-4 sm:p-5 border-t border-stone-800 space-y-2.5 bg-stone-950 shrink-0">
              <div className="flex items-center justify-between pb-2 border-b border-stone-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Appearance
                </span>
                <ThemeToggle />
              </div>

              <Link
                href="/en/login"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full block text-center font-sans text-xs font-semibold text-stone-200 border border-stone-700 py-2.5 rounded hover:bg-stone-800 transition"
              >
                {memberLoginText}
              </Link>
              <Link
                href="/en/register"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full block text-center font-sans text-xs font-bold bg-[#064e3b] text-white py-2.5 rounded hover:bg-emerald-900 transition"
              >
                {joinText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
