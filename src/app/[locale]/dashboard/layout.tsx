import { ReactNode } from 'react';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect('/login');
  // }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="h-16 flex items-center px-6 border-b font-bold text-lg">
          Member Portal
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="/dashboard" className="block px-4 py-2 rounded bg-blue-50 text-blue-700 font-medium">Overview</a>
          <a href="/dashboard/household" className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700">Household</a>
          <a href="/dashboard/events" className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700">My RSVPs</a>
          <a href="/dashboard/billing" className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700">Payment History</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            {/* User Profile Dropdown Placeholder */}
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {/* {session?.user?.name?.charAt(0) || 'U'} */}
              U
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
