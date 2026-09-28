export function EventsList({ events }: { events: any[] }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Upcoming Events</h3>
        <a href="/dashboard/events" className="text-sm text-blue-600 font-medium hover:underline">View All</a>
      </div>
      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-sm text-gray-500">No upcoming events.</p>
        ) : (
          events.map((evt, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border">
              <div>
                <p className="font-medium text-gray-900">{evt.title}</p>
                <p className="text-xs text-gray-500">{evt.date} • {evt.location}</p>
              </div>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded-md font-medium hover:bg-gray-200">
                RSVP
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
