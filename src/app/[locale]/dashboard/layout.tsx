import { ReactNode } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/dashboard/Sidebar';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] text-stone-900 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-stone-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-stone-600 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded">
              Member Portal &middot; ACT Inc. A04821
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/en"
              className="text-xs font-semibold text-stone-600 hover:text-[#064e3b] transition flex items-center gap-1.5"
            >
              <span>View Public Website</span>
              <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <div className="h-3.5 w-px bg-stone-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-sm bg-stone-900 text-stone-100 text-xs font-serif font-bold flex items-center justify-center border border-stone-800">
                OO
              </div>
              <span className="text-xs font-semibold text-stone-800 hidden sm:inline">Obinna Okafor</span>
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-8 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
