import { DuesCard } from '@/components/dashboard/DuesCard';
import { EventsList } from '@/components/dashboard/EventsList';
// import prisma from '@/lib/db/prisma';

export default async function DashboardOverview() {
  // Mock data to simulate database fetch
  const duesStatus = {
    status: 'active',
    amount: '25.00',
    nextBillingDate: 'Nov 1, 2026'
  };

  const upcomingEvents = [
    { title: 'New Yam Festival (Iri Ji)', date: 'Oct 15, 2026', location: 'Community Center' },
    { title: 'End of Year Gala', date: 'Dec 18, 2026', location: 'Grand Ballroom' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          {/* Welcome Banner */}
          <div className="bg-blue-600 text-white p-8 rounded-xl shadow-sm h-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">Nnọọ, welcome back!</h1>
            <p className="text-blue-100 max-w-lg">
              Manage your household dues, view your payment history, and stay up to date with our community gatherings.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <DuesCard {...duesStatus} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EventsList events={upcomingEvents} />
        
        {/* Placeholder for Household Summary */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="font-semibold text-lg mb-4">My Household</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm">
              <span className="font-medium">Obinna Okafor</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Primary</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="font-medium">Ngozi Okafor</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Spouse</span>
            </li>
          </ul>
          <button className="mt-6 w-full text-sm border py-2 rounded-lg font-medium hover:bg-gray-50">Manage Family Members</button>
        </div>
      </div>
    </div>
  );
}
