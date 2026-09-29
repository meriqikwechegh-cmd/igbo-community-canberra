import { ReactNode } from 'react';
import Link from 'next/link';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <Link href="/en" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-850 bg-emerald-900 flex items-center justify-center text-amber-300 font-serif font-bold text-base">
              I
            </div>
            <div>
              <span className="font-serif font-bold text-sm text-slate-900 block leading-tight">Igbo Community</span>
              <span className="text-[10px] text-emerald-800 font-semibold uppercase tracking-wider">Canberra Portal</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/en/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Overview
          </Link>
          <Link
            href="/en/dashboard/billing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Dues &amp; Billing
          </Link>
          <Link
            href="/en/dashboard/events"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Events &amp; RSVPs
          </Link>
          <Link
            href="/en/dashboard/admin"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 transition"
          >
            Treasurer &amp; Executive Portal
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-200 text-xs text-slate-500">
          <p className="font-semibold text-slate-700 mb-0.5">Igbo Community Canberra</p>
          <p>Founded 2012 &middot; ACT Inc. A04821</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
              Executive Member Portal
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/en" className="text-xs font-semibold text-slate-600 hover:text-emerald-800 transition">
              View Public Website &rarr;
            </Link>
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center border border-slate-300">
              OO
            </div>
          </div>
        </header>

        <main className="p-8 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
