'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PublicHeaderProps {
  memberLoginText?: string;
  joinText?: string;
  contactText?: string;
}

export function PublicHeader({
  memberLoginText = 'Member Portal',
  joinText = 'Apply for Membership',
  contactText = 'Contact Us',
}: PublicHeaderProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const links = [
    { label: "President's Welcome", href: '#welcome' },
    { label: 'Charter & Mission', href: '#charter' },
    { label: 'Cultural Calendar', href: '#events' },
    { label: 'Executive Council', href: '#leadership' },
    { label: 'Membership Plans', href: '#membership' },
    { label: contactText, href: '#contact' },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-stone-200 shrink-0 bg-white">
            <Image
              src="/logo.jpg"
              alt="Igbo Community Canberra Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="font-display font-bold text-xl text-stone-900 block leading-tight tracking-tight">
              Igbo Community Canberra
            </span>
            <span className="font-sans text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block mt-0.5">
              Cultural Association Inc.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-800 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/en/login"
            className="font-sans text-sm font-semibold text-stone-700 hover:text-emerald-800 border border-stone-300 hover:border-emerald-800 px-4 py-2 rounded-lg transition"
          >
            {memberLoginText}
          </Link>
          <Link
            href="/en/register"
            className="font-sans text-sm font-semibold bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2 rounded-lg shadow-sm transition"
          >
            {joinText}
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-emerald-800 rounded-lg hover:bg-stone-100 transition"
          aria-label="Open Navigation Sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-Out Navigation Sidebar Drawer */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-emerald-950 text-stone-100 h-full shadow-2xl z-10 flex flex-col justify-between">
            <div>
              {/* Drawer Top Branding */}
              <div className="p-6 border-b border-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400 shrink-0 bg-white">
                    <Image
                      src="/logo.jpg"
                      alt="ICC Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-stone-50 block leading-tight">Igbo Community</span>
                    <span className="text-[10px] font-sans text-amber-300 font-semibold uppercase tracking-wider block">Canberra Inc.</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 text-stone-300 hover:text-white rounded-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="p-4 space-y-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-stone-200 hover:bg-emerald-900 hover:text-amber-200 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Action CTA */}
            <div className="p-6 border-t border-emerald-900 space-y-3 bg-emerald-950">
              <Link
                href="/en/login"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full block text-center font-sans text-sm font-semibold text-amber-200 border border-amber-400/40 py-2.5 rounded-xl hover:bg-emerald-900 transition"
              >
                {memberLoginText}
              </Link>
              <Link
                href="/en/register"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full block text-center font-sans text-sm font-bold bg-amber-400 text-emerald-950 py-2.5 rounded-xl shadow-sm hover:bg-amber-300 transition"
              >
                {joinText}
              </Link>
              <p className="text-[11px] text-center text-stone-400 pt-2 font-serif italic">
                Onye aghana nwanne ya
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
