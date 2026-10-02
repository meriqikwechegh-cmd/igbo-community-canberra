import Link from 'next/link';

export function EventsList({ events }: { events: any[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-stone-100">
          <h3 className="font-serif font-bold text-lg text-stone-900">Upcoming Cultural Gatherings</h3>
          <Link href="/en/dashboard/events" className="text-xs font-bold text-emerald-900 hover:text-emerald-700 underline">
            View All Events &rarr;
          </Link>
        </div>
        <div className="space-y-3">
          {events.length === 0 ? (
            <p className="text-sm text-stone-500">No upcoming events listed.</p>
          ) : (
            events.map((evt, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center p-3.5 hover:bg-stone-50 rounded-xl border border-stone-200/80 transition gap-3">
                <div className="space-y-0.5">
                  <p className="font-semibold text-stone-900 text-sm">{evt.title}</p>
                  <p className="text-xs text-stone-500">📅 {evt.date} &middot; 📍 {evt.location}</p>
                </div>
                <Link
                  href="/en/dashboard/events"
                  className="text-xs bg-emerald-900 text-stone-50 px-3.5 py-2 rounded-lg font-semibold hover:bg-emerald-950 transition text-center shrink-0"
                >
                  RSVP &amp; Details
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
