import Link from 'next/link';

interface EventItem {
  title: string;
  date: string;
  location: string;
}

export function EventsList({ events }: { events: EventItem[] }) {
  return (
    <div className="bg-white dark:bg-stone-900 p-6 rounded-none border border-stone-200 dark:border-stone-800 flex flex-col justify-between h-full transition-colors">
      <div>
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-stone-200 dark:border-stone-800">
          <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
            Upcoming Gatherings
          </h3>
          <Link
            href="/en/dashboard/events"
            className="text-xs font-bold text-[#064e3b] dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-200 border-b border-[#064e3b] dark:border-emerald-400 pb-0.5"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="space-y-3 font-sans">
          {events.length === 0 ? (
            <p className="text-xs text-stone-500 dark:text-stone-400">No upcoming events listed.</p>
          ) : (
            events.map((evt, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between sm:items-center p-3 hover:bg-stone-50 dark:hover:bg-stone-800/60 border border-stone-200 dark:border-stone-800 rounded-none transition gap-2"
              >
                <div className="space-y-0.5 min-w-0">
                  <p className="font-bold text-stone-900 dark:text-stone-100 text-xs sm:text-sm truncate">
                    {evt.title}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-mono truncate">
                    📅 {evt.date} &middot; 📍 {evt.location}
                  </p>
                </div>
                <Link
                  href="/en/dashboard/events"
                  className="text-xs bg-[#064e3b] hover:bg-emerald-950 text-white px-3 py-1.5 rounded-none font-semibold text-center shrink-0 transition self-start sm:self-auto"
                >
                  RSVP
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
