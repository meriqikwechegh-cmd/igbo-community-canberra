import { DuesCard } from '@/components/dashboard/DuesCard';
import { EventsList } from '@/components/dashboard/EventsList';
import { HouseholdMembers } from '@/components/dashboard/HouseholdMembers';
import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';
import Link from 'next/link';

export default async function DashboardOverview() {
  const session = await auth();

  // Find user in database, or find first user as fallback for preview
  const user = session?.user?.id
    ? await prisma.user.findUnique({
        where: { id: session.user.id },
        include: {
          household: {
            include: {
              members: {
                orderBy: { createdAt: 'asc' },
              },
              subscriptions: {
                orderBy: { createdAt: 'desc' },
                take: 1,
              },
            },
          },
          duesSubscriptions: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      })
    : await prisma.user.findFirst({
        include: {
          household: {
            include: {
              members: {
                orderBy: { createdAt: 'asc' },
              },
              subscriptions: {
                orderBy: { createdAt: 'desc' },
                take: 1,
              },
            },
          },
          duesSubscriptions: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      });

  // Fetch upcoming events from database
  const eventsData = await prisma.event.findMany({
    orderBy: { eventDate: 'asc' },
    take: 4,
  });

  const formattedEvents = eventsData.map((evt) => ({
    title: evt.title,
    date: new Intl.DateTimeFormat('en-AU', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(evt.eventDate)),
    location: evt.location || 'Canberra, ACT',
  }));

  const activeSubscription = user?.household?.subscriptions?.[0] || user?.duesSubscriptions?.[0];
  const duesAmount = activeSubscription?.amount ? Number(activeSubscription.amount).toFixed(2) : '250.00';
  const duesStatus = activeSubscription?.status || 'active';
  const nextBillingDate = activeSubscription?.nextBillingDate
    ? new Intl.DateTimeFormat('en-AU', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(activeSubscription.nextBillingDate))
    : 'Nov 1, 2026';

  const firstName = user?.firstName || 'Member';

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Editorial Member Welcome Banner */}
      <div className="bg-[#064e3b] text-white p-5 sm:p-8 rounded-none border border-emerald-950">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-emerald-200 uppercase tracking-wider font-extrabold border-b border-emerald-400/40 pb-0.5">
                MEMBER PORTAL &middot; ACT INC. A04821
              </span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Nnọọ! Welcome back, {firstName}
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm font-sans leading-relaxed">
              Manage your household membership dues, view event RSVPs, and connect with the Igbo Community Canberra family.
            </p>
          </div>
          <Link
            href="/en/dashboard/billing"
            className="shrink-0 bg-stone-50 hover:bg-white text-[#064e3b] font-bold text-xs px-4 py-2.5 rounded-none transition uppercase tracking-wider self-start md:self-auto"
          >
            View Dues Status &rarr;
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EventsList events={formattedEvents} />
        </div>
        <div className="lg:col-span-1">
          <DuesCard
            status={duesStatus}
            amount={duesAmount}
            nextBillingDate={nextBillingDate}
          />
        </div>
      </div>

      {/* Household Summary Table & Add Member Modal */}
      <HouseholdMembers
        household={user?.household || null}
        currentUserId={user?.id}
        duesActive={duesStatus === 'active'}
      />
    </div>
  );
}
