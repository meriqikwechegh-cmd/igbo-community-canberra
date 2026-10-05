'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PublicSidebar } from '@/components/PublicSidebar';

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  category: string;
  title: string;
  version?: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  category,
  title,
  version = 'Version 1.0 (Draft)',
  lastUpdated = 'October 2026',
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-[#064e3b] selection:text-white transition-colors">
      {/* Persistent Left Sidebar */}
      <PublicSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Notice Bar */}
        <div className="bg-stone-900 text-stone-400 text-xs py-2 px-4 sm:px-6 border-b border-stone-800 shrink-0">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs">
                Official Institutional Documentation · ACT Inc. A04821
              </span>
            </div>
            <Link
              href="/en"
              className="text-[11px] font-mono text-stone-400 hover:text-white underline"
            >
              ← Back to Portal Home
            </Link>
          </div>
        </div>

        {/* Header Banner */}
        <section className="bg-[#064e3b] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-emerald-950">
          <div className="max-w-4xl mx-auto space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-300 font-bold block">
              {category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-50">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-200/80 pt-2">
              <span>{version}</span>
              <span>·</span>
              <span>Effective: {lastUpdated}</span>
              <span>·</span>
              <span className="bg-emerald-900/60 px-2 py-0.5 border border-emerald-700/50">
                Jurisdiction: ACT, Australia
              </span>
            </div>
          </div>
        </section>

        {/* Verification Placeholder Callout */}
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-8 pt-8">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-300 text-xs rounded-none">
            <div className="flex items-start gap-2.5">
              <span className="font-bold shrink-0 font-mono">[ICC VERIFICATION PLACEHOLDER]</span>
              <p className="leading-relaxed">
                This document reflects the foundational privacy and governance framework of Igbo Community Canberra Inc. (ACT Reg. A04821). All policy statements, retention periods, officer contacts, and storage procedures are presented in accordance with the Privacy Act 1988 (Cth) and are pending formal verification and ratification by the ICC Executive Council.
              </p>
            </div>
          </div>
        </div>

        {/* Document Body */}
        <main className="max-w-4xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 space-y-10 flex-1">
          {sections.map((section, idx) => (
            <article
              key={section.title}
              className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/70 p-6 sm:p-8 rounded-none shadow-xs"
            >
              <div className="flex items-center gap-3 pb-3 mb-4 border-b border-stone-100 dark:border-stone-800">
                <span className="font-mono text-xs text-[#064e3b] dark:text-emerald-400 font-bold">
                  § {(idx + 1).toString().padStart(2, '0')}
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                  {section.title}
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-3">
                {section.content}
              </div>
            </article>
          ))}
        </main>

        {/* Structured Footer */}
        <footer className="bg-stone-900 text-stone-400 py-10 px-4 sm:px-8 border-t border-stone-800 mt-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
            <p>© {new Date().getFullYear()} Igbo Community Canberra Inc. · ABN 48 192 840 129</p>
            <div className="flex flex-wrap gap-4 text-stone-400">
              <Link href="/en/privacy-policy" className="hover:text-white underline">Privacy</Link>
              <Link href="/en/terms-of-use" className="hover:text-white underline">Terms</Link>
              <Link href="/en/photo-video-consent" className="hover:text-white underline">Photo Consent</Link>
              <Link href="/en/accessibility" className="hover:text-white underline">Accessibility</Link>
              <Link href="/en/membership-terms" className="hover:text-white underline">Membership</Link>
              <Link href="/en/contact" className="hover:text-white underline">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
