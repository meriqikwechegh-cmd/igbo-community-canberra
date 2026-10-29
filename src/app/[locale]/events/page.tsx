'use client';

import Link from 'next/link';
import { PublicSidebar } from '@/components/PublicSidebar';
import { PublicHeader } from '@/components/PublicHeader';

const upcomingEvents = [
  {
    tag: 'Cultural Harvest',
    title: 'New Yam Festival (Iri Ji 2026)',
    date: 'Saturday, 15 November 2026',
    time: '10:00 AM – 6:00 PM',
    venue: 'Canberra Community Hall, ACT',
    description: 'The premier annual cultural celebration of thanksgiving, Igbo masquerade displays, traditional dance, authentic cuisine, and cultural pageant. All Canberra residents and friends of the community are welcome.',
    fee: 'Free Community Entry',
    badge: 'Flagship Event',
  },
  {
    tag: 'Youth & Heritage',
    title: 'Igbo Language & Culture Immersion',
    date: 'Saturday, 5 December 2026',
    time: '2:00 PM – 5:00 PM',
    venue: 'ACT Public Library, Civic Centre',
    description: 'Interactive cultural and linguistic immersion for children, youth, and interested adults. Led by cultural instructors focusing on conversational Igbo, folklore, proverbs, and musical instruments.',
    fee: '$15 / Participant (Free for Financial Members)',
    badge: 'Education',
  },
  {
    tag: 'Civic Celebration',
    title: 'End of Year Annual Gala Dinner',
    date: 'Saturday, 19 December 2026',
    time: '6:00 PM – Late',
    venue: 'National Convention Centre Canberra',
    description: 'An elegant formal banquet evening celebrating our collective achievements, honoring outstanding community leaders, enjoying traditional live performances, and networking across the ACT diaspora.',
    fee: '$65 / Adult Ticket',
    badge: 'Formal Banquet',
  },
  {
    tag: 'Governance',
    title: 'Quarterly General Assembly Meeting',
    date: 'Sunday, 31 January 2027',
    time: '3:00 PM – 6:00 PM',
    venue: 'Acton Community Centre, ACT',
    description: 'Deliberation of community business, presentation of the quarterly financial statement by the Treasurer, welcome of new members, and planning for cultural outreach.',
    fee: 'Members Only',
    badge: 'General Assembly',
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-[#064e3b] selection:text-white transition-colors">
      <PublicSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <PublicHeader />

        {/* Notice Bar */}
        <div className="bg-stone-900 text-stone-400 text-xs py-2.5 px-4 sm:px-6 border-b border-stone-800 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
              <span className="font-sans text-xs">
                Official Calendar of Activities · Igbo Community Canberra Inc.
              </span>
            </div>
            <Link href="/en/membership" className="text-stone-300 hover:text-white underline text-xs font-semibold">
              Members Receive Priority RSVPs →
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#064e3b] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-emerald-950">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block bg-emerald-900/80 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase tracking-wider px-3.5 py-1">
              COMMUNITY GATHERINGS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Events &amp; Cultural Calendar
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore upcoming cultural festivals, educational workshops, General Assembly meetings, and fellowship banquets in the Australian Capital Territory.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 space-y-12">
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.title}
                className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-stone-100 dark:border-stone-800 mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#064e3b] dark:text-emerald-400">
                      {evt.tag}
                    </span>
                    <span className="text-[11px] font-bold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2.5 py-1">
                      {evt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100 mb-2">
                    {evt.title}
                  </h3>

                  <div className="space-y-2 text-xs text-stone-600 dark:text-stone-300 mb-4 font-semibold">
                    <p className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold">
                      <svg className="w-4 h-4 text-[#064e3b] dark:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {evt.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {evt.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-stone-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {evt.venue}
                    </p>
                  </div>

                  <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    {evt.fee}
                  </span>
                  <Link
                    href="/en/dashboard/events"
                    className="w-full sm:w-auto text-center bg-[#064e3b] hover:bg-emerald-950 text-white font-extrabold text-xs px-5 py-2.5 uppercase tracking-wider transition"
                  >
                    RSVP in Portal →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Member Registration Banner */}
          <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
                COMMUNITY ENGAGEMENT
              </span>
              <h4 className="text-xl font-extrabold text-stone-900 dark:text-stone-100">
                Want to propose an event or cultural workshop?
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm mt-1 max-w-xl">
                The Office of the Social Secretary welcomes community ideas, youth initiatives, and cultural collaborations.
              </p>
            </div>
            <Link
              href="/en/contact"
              className="bg-[#064e3b] hover:bg-emerald-950 text-white font-extrabold text-xs px-6 py-3.5 uppercase tracking-wider transition whitespace-nowrap"
            >
              Contact Social Secretary →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
