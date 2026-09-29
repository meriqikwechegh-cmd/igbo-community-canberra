import { ReactNode } from 'react';
import Link from 'next/link';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/en" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <div>
              <span className="font-bold text-sm text-green-900 block leading-tight">Igbo Community</span>
              <span className="text-[10px] text-green-600 font-semibold uppercase tracking-wider">Canberra Portal</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1.5">
          <Link
            href="/en/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            📊 Overview
          </Link>
          <Link
            href="/en/dashboard/billing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            💳 Dues & Billing
          </Link>
          <Link
            href="/en/dashboard/events"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            📅 Events & RSVPs
          </Link>
          <Link
            href="/en/dashboard/admin"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-green-800 bg-green-50/70 hover:bg-green-100 transition"
          >
            🏛️ Treasurer & Admin
          </Link>
        </nav>

        <div className="p-4 border-t text-xs text-gray-400">
          <p className="font-semibold text-gray-600 mb-0.5">Igbo Community Canberra</p>
          <p>ACT Incorporated Association</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-green-100 text-green-800 font-bold px-2.5 py-1 rounded-full">
              Member Portal
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/en" className="text-xs font-semibold text-gray-500 hover:text-green-700">
              View Public Website ↗
            </Link>
            <div className="w-8 h-8 rounded-full bg-green-700 text-white text-xs font-bold flex items-center justify-center">
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
