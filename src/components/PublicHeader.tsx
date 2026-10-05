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
    <header className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link href="/en" className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
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
            <span className="font-sans text-[9px] sm:text-[10px] font-semibold text-[#064e3b] dark:text-emerald-400 uppercase tracking-widest leading-none mt-0.5 truncate">
              Cultural Association Inc.
            </span>
          </div>
        </Link>

        {/* Editorial Navigation Links (Desktop xl+) */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold tracking-wide uppercase text-stone-700 dark:text-stone-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#064e3b] dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons — Clean, NO ThemeToggle crowding top navbar */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <Link
            href="/en/login"
            className="font-sans text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-[#064e3b] dark:hover:text-white border border-stone-300 dark:border-stone-700 px-3.5 py-2 rounded-none transition whitespace-nowrap"
          >
            {memberLoginText}
          </Link>
          <Link
            href="/en/register"
            className="font-sans text-xs font-semibold bg-[#064e3b] hover:bg-emerald-950 text-white px-4 py-2 rounded-none transition whitespace-nowrap"
          >
            {joinText}
          </Link>
        </div>

        {/* Hamburger / Sidebar Drawer Trigger */}
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="xl:hidden p-2 text-stone-800 dark:text-stone-200 hover:text-[#064e3b] dark:hover:text-white rounded-none hover:bg-stone-100 dark:hover:bg-stone-800 transition shrink-0"
          aria-label="Toggle Navigation Sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Slide-Out Navigation Sidebar Drawer */}
      {mobileDrawerOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] bg-stone-900 text-stone-100 h-full z-10 flex flex-col justify-between border-r border-stone-800 shadow-2xl">
            <div className="overflow-y-auto">
              {/* Sidebar Drawer Header */}
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
                <div className="px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-stone-500">
                  Navigation Menu
                </div>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white hover:bg-stone-800 rounded-none transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar Drawer Footer with Appearance Theme Toggle & Action Buttons */}
            <div className="p-4 sm:p-5 border-t border-stone-800 space-y-3 bg-stone-950 shrink-0">
              <div className="flex items-center justify-between pb-2.5 border-b border-stone-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  Appearance Mode
                </span>
                <ThemeToggle />
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/en/login"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-full block text-center font-sans text-xs font-semibold text-stone-200 border border-stone-700 py-2.5 rounded-none hover:bg-stone-800 transition"
                >
                  {memberLoginText}
                </Link>
                <Link
                  href="/en/register"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-full block text-center font-sans text-xs font-bold bg-[#064e3b] text-white py-2.5 rounded-none hover:bg-emerald-900 transition"
                >
                  {joinText}
                </Link>
              </div>

              <div className="pt-2 text-center text-[10px] font-mono text-stone-500">
                Powered by <strong className="text-emerald-400 font-bold">MeriQTech</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
