import { DuesCard } from '@/components/dashboard/DuesCard';
import { EventsList } from '@/components/dashboard/EventsList';
import Link from 'next/link';

export default async function DashboardOverview() {
  const duesStatus = {
    status: 'active',
    amount: '250.00',
    nextBillingDate: 'Nov 1, 2026',
  };

  const upcomingEvents = [
    { title: 'New Yam Festival (Iri Ji 2026)', date: 'Oct 15, 2026', location: 'Canberra Community Hall' },
    { title: 'Igbo Language & Culture Immersion', date: 'Nov 2, 2026', location: 'ACT Public Library' },
    { title: 'End of Year Annual Gala Dinner', date: 'Dec 18, 2026', location: 'National Convention Centre' },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Editorial Member Welcome Banner */}
      <div className="bg-[#064e3b] text-white p-5 sm:p-8 rounded-md border border-emerald-950">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono text-emerald-200 uppercase tracking-widest border-b border-emerald-400/30 pb-0.5">
                MEMBER PORTAL &middot; ACT INC. A04821
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Nnọọ! Welcome back, Obinna
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm font-sans leading-relaxed">
              Manage your household membership dues, view event RSVPs, and connect with the Igbo Community Canberra family.
            </p>
          </div>
          <Link
            href="/en/dashboard/billing"
            className="shrink-0 bg-stone-50 hover:bg-white text-[#064e3b] font-bold text-xs px-4 py-2.5 rounded transition uppercase tracking-wider self-start md:self-auto"
          >
            View Dues Status &rarr;
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EventsList events={upcomingEvents} />
        </div>
        <div className="lg:col-span-1">
          <DuesCard {...duesStatus} />
        </div>
      </div>

      {/* Household Summary Table */}
      <div className="bg-white dark:bg-stone-900 p-5 sm:p-6 rounded-md border border-stone-200 dark:border-stone-800 transition-colors">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 pb-3 border-b border-stone-200 dark:border-stone-800 gap-2">
          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Okafor Household</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">Family Membership Dues Registered</p>
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded self-start sm:self-auto">
            Active Dues
          </span>
        </div>
        
        <div className="divide-y divide-stone-100 dark:divide-stone-800 font-sans">
          <div className="py-3 flex flex-col sm:flex-row justify-between sm:items-center text-xs sm:text-sm gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-7 h-7 rounded-sm bg-stone-900 dark:bg-stone-800 text-white font-serif font-bold text-xs flex items-center justify-center shrink-0 border border-stone-700">
                OO
              </div>
              <div className="min-w-0">
                <span className="font-bold text-stone-900 dark:text-stone-100 block truncate">Obinna Okafor</span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono truncate block">obinna@example.com</span>
              </div>
            </div>
            <span className="bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-stone-200 dark:border-stone-700 self-start sm:self-auto">
              Primary Member
            </span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row justify-between sm:items-center text-xs sm:text-sm gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-7 h-7 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-serif font-bold text-xs flex items-center justify-center shrink-0 border border-stone-300 dark:border-stone-700">
                NO
              </div>
              <div className="min-w-0">
                <span className="font-bold text-stone-900 dark:text-stone-100 block truncate">Ngozi Okafor</span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono truncate block">ngozi@example.com</span>
              </div>
            </div>
            <span className="bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-mono text-[10px] uppercase font-medium px-2 py-0.5 rounded border border-stone-200 dark:border-stone-700 self-start sm:self-auto">
              Spouse
            </span>
          </div>
        </div>

        <button className="mt-4 w-full text-xs font-semibold border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 py-2.5 rounded hover:bg-stone-50 dark:hover:bg-stone-800 transition uppercase tracking-wider cursor-pointer">
          + Add Household Member
        </button>
      </div>
    </div>
  );
}
