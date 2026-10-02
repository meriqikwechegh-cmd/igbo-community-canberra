import Link from 'next/link';

export function EventsList({ events }: { events: any[] }) {
  return (
    <div className="bg-white p-6 rounded-md border border-stone-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-stone-200">
          <h3 className="font-serif font-bold text-base text-stone-900">Upcoming Gatherings</h3>
          <Link href="/en/dashboard/events" className="text-xs font-bold text-[#064e3b] hover:text-emerald-950 border-b border-[#064e3b] pb-0.5">
            View All &rarr;
          </Link>
        </div>
        <div className="space-y-3 font-sans">
          {events.length === 0 ? (
            <p className="text-xs text-stone-500">No upcoming events listed.</p>
          ) : (
            events.map((evt, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center p-3 hover:bg-stone-50 border border-stone-200 rounded transition gap-2">
                <div className="space-y-0.5">
                  <p className="font-bold text-stone-900 text-xs sm:text-sm">{evt.title}</p>
                  <p className="text-xs text-stone-500 font-mono">📅 {evt.date} &middot; 📍 {evt.location}</p>
                </div>
                <Link
                  href="/en/dashboard/events"
                  className="text-xs bg-[#064e3b] hover:bg-emerald-950 text-white px-3 py-1.5 rounded font-semibold text-center shrink-0 transition"
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
