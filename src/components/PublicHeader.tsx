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
  memberLoginText = 'Member Login',
  joinText = 'Registration',
  contactText = 'Contact Us',
}: PublicHeaderProps = {}) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const links = [
    { label: 'About Us', href: '#welcome' },
    { label: 'Activities', href: '#events' },
    { label: 'Membership', href: '#membership' },
    { label: 'Leadership', href: '#leadership' },
    { label: contactText, href: '#contact' },
  ];

  return (
    <header className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-40 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <Link href="/en" className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden border border-stone-300 dark:border-stone-700 shrink-0 bg-white rounded-none">
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
            <span className="font-mono text-[9px] sm:text-[10px] font-semibold text-[#064e3b] dark:text-emerald-400 uppercase tracking-widest leading-none mt-0.5 truncate">
              Cultural Association Inc. · A04821
            </span>
          </div>
        </Link>

        {/* Upfront Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider uppercase text-stone-700 dark:text-stone-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#064e3b] dark:hover:text-emerald-400 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#064e3b] dark:hover:border-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Area: ThemeToggle, Login & Registration */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <ThemeToggle showLabel={false} />
          
          <Link
            href="/en/login"
            className="font-sans text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-[#064e3b] dark:hover:text-white border border-stone-300 dark:border-stone-700 px-3.5 py-2 rounded-none hover:bg-stone-50 dark:hover:bg-stone-800 transition whitespace-nowrap"
          >
            {memberLoginText}
          </Link>

          <Link
            href="/en/register"
            className="font-sans text-xs font-bold bg-[#064e3b] hover:bg-emerald-950 text-white px-4 py-2 rounded-none transition whitespace-nowrap shadow-xs"
          >
            {joinText}
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle showLabel={false} />
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-2 text-stone-800 dark:text-stone-200 hover:text-[#064e3b] dark:hover:text-white rounded-none hover:bg-stone-100 dark:hover:bg-stone-800 transition shrink-0"
            aria-label="Toggle Navigation Menu"
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

      {/* Mobile Slide-Down / Slide-Out Menu */}
      {mobileDrawerOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileDrawerOpen(false)}
                className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-none transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-2">
            <Link
              href="/en/login"
              onClick={() => setMobileDrawerOpen(false)}
              className="w-full text-center font-sans text-xs font-semibold text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 py-2.5 rounded-none hover:bg-stone-50 dark:hover:bg-stone-800 transition"
            >
              {memberLoginText}
            </Link>
            <Link
              href="/en/register"
              onClick={() => setMobileDrawerOpen(false)}
              className="w-full text-center font-sans text-xs font-bold bg-[#064e3b] text-white py-2.5 rounded-none hover:bg-emerald-950 transition"
            >
              {joinText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
