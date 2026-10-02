import { ReactNode } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/dashboard/Sidebar';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-stone-100 text-stone-900 font-sans">
      {/* Sidebar Navigation (Desktop sticky sidebar + Mobile drawer) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-6 sm:px-8 shrink-0 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 bg-amber-400/20 border border-amber-400/40 px-3 py-1 rounded-md">
              Member Portal &middot; ACT Inc. A04821
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/en"
              className="text-xs font-semibold text-stone-600 hover:text-emerald-900 transition flex items-center gap-1.5"
            >
              <span>View Public Site</span>
              <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <div className="h-4 w-px bg-stone-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-950 text-amber-300 text-xs font-serif font-bold flex items-center justify-center border border-emerald-900">
                OO
              </div>
              <span className="text-xs font-semibold text-stone-700 hidden sm:inline">Obinna Okafor</span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-8 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
