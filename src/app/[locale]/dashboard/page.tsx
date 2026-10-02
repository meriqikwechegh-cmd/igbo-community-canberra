import { DuesCard } from '@/components/dashboard/DuesCard';
import { EventsList } from '@/components/dashboard/EventsList';
import Link from 'next/link';

export default async function DashboardOverview() {
  const duesStatus = {
    status: 'active',
    amount: '250.00',
    nextBillingDate: 'Nov 1, 2026'
  };

  const upcomingEvents = [
    { title: 'New Yam Festival (Iri Ji 2026)', date: 'Oct 15, 2026', location: 'Canberra Community Hall' },
    { title: 'Igbo Language & Culture Immersion', date: 'Nov 2, 2026', location: 'ACT Public Library' },
    { title: 'End of Year Annual Gala Dinner', date: 'Dec 18, 2026', location: 'National Convention Centre' }
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Igbo Community Canberra Cultural Welcome Banner */}
      <div className="relative bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-stone-50 p-8 rounded-2xl shadow-md overflow-hidden border border-emerald-800/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif italic text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Onye aghana nwanne ya
              </span>
              <span className="text-xs font-sans text-emerald-300 font-medium hidden sm:inline">
                &middot; ACT Reg. A04821
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Nnọọ! <span className="text-amber-200 font-normal italic">Welcome back, Obinna</span>
            </h1>
            <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
              Manage your household membership dues, view event RSVPs, and connect with the Igbo Community Canberra family.
            </p>
          </div>
          <Link
            href="/en/dashboard/billing"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm px-5 py-3 rounded-xl shadow-sm transition flex items-center gap-2"
          >
            <span>View Dues Status</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
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

      {/* Household Summary Card */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-stone-100">
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900">Okafor Household</h3>
            <p className="text-xs text-stone-500 font-sans">Family Membership Dues Registered</p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Active Dues
          </span>
        </div>
        <ul className="divide-y divide-stone-100">
          <li className="py-3 flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950 text-amber-300 text-xs font-bold flex items-center justify-center font-serif">
                OO
              </div>
              <div>
                <span className="font-semibold text-stone-900 block">Obinna Okafor</span>
                <span className="text-xs text-stone-500">obinna@example.com</span>
              </div>
            </div>
            <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded text-xs">Primary Member</span>
          </li>
          <li className="py-3 flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 text-xs font-bold flex items-center justify-center font-serif">
                NO
              </div>
              <div>
                <span className="font-semibold text-stone-900 block">Ngozi Okafor</span>
                <span className="text-xs text-stone-500">ngozi@example.com</span>
              </div>
            </div>
            <span className="bg-stone-100 text-stone-700 font-medium px-2.5 py-0.5 rounded text-xs">Spouse</span>
          </li>
        </ul>
        <button className="mt-5 w-full text-sm border border-stone-300 text-stone-700 font-semibold py-2.5 rounded-xl hover:bg-stone-50 transition">
          + Add Household Member
        </button>
      </div>
    </div>
  );
}
