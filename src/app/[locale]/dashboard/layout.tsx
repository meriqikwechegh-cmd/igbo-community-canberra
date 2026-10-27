import { ReactNode } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { UserMenu } from '@/components/dashboard/UserMenu';
import { auth } from '@/auth';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  const userName = session?.user?.name || 'Obinna Okafor';
  const userEmail = session?.user?.email || 'obinna@example.com';
  const userRole = (session?.user as any)?.role || 'member';

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans transition-colors">
      {/* Sidebar Navigation */}
      <Sidebar user={{ name: userName, email: userEmail, role: userRole }} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between px-4 sm:px-6 shrink-0 transition-colors">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="text-xs font-sans uppercase tracking-wider font-bold text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-sm truncate">
              Member Portal &middot; ACT Inc. A04821
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/en"
              className="text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-[#064e3b] dark:hover:text-emerald-400 transition flex items-center gap-1.5"
            >
              <span>Public Site</span>
              <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <div className="h-3.5 w-px bg-stone-200 dark:bg-stone-800 hidden sm:block"></div>
            <UserMenu name={userName} email={userEmail} role={userRole} />
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
