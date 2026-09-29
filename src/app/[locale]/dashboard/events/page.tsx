'use client';
import { useState } from 'react';

export default function EventsPortalPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    eventDate: '',
    location: '',
    capacityLimit: '150',
    fee: '0.00',
    description: '',
  });

  const [rsvpStates, setRsvpStates] = useState<Record<string, string>>({
    '1': 'yes',
    '2': 'none',
    '3': 'none',
  });

  const [includeFamily, setIncludeFamily] = useState(true);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'New Yam Festival (Iri Ji 2026)',
      eventDate: '2026-10-15T10:00',
      formattedDate: 'Saturday, 15 October 2026 • 10:00 AM',
      location: 'Canberra Community Hall, Acton ACT',
      capacityLimit: 250,
      yesCount: 184,
      fee: 0,
      description: 'The premier annual cultural gathering celebrating the yam harvest, traditional Igbo masquerades, authentic delicacies, and cultural performances.',
      tag: 'Major Festival',
    },
    {
      id: '2',
      title: 'Igbo Language & Culture Immersion Workshop',
      eventDate: '2026-11-02T14:00',
      formattedDate: 'Sunday, 2 November 2026 • 2:00 PM',
      location: 'ACT Public Library, Seminar Room 1',
      capacityLimit: 30,
      yesCount: 30, // Full capacity to test waitlist!
      fee: 15,
      description: 'Interactive language learning, Igbo proverb discussions, and storytelling for children and youth.',
      tag: 'Education',
    },
    {
      id: '3',
      title: 'End of Year Annual Gala Dinner',
      eventDate: '2026-12-18T18:30',
      formattedDate: 'Friday, 18 December 2026 • 6:30 PM',
      location: 'National Convention Centre Canberra',
      capacityLimit: 300,
      yesCount: 120,
      fee: 65,
      description: 'Formal dinner gala celebrating achievements, community awards, cultural dances, and networking.',
      tag: 'Gala Dinner',
    },
  ]);

  async function handleRSVP(eventId: string, status: string) {
    const targetEvent = events.find(e => e.id === eventId);
    if (!targetEvent) return;

    if (status === 'yes' && targetEvent.yesCount >= targetEvent.capacityLimit) {
      setRsvpStates(prev => ({ ...prev, [eventId]: 'waitlist' }));
      setActionMessage(`Notice: "${targetEvent.title}" is currently at full capacity (${targetEvent.capacityLimit}/${targetEvent.capacityLimit}). You have been added to the Priority Waitlist.`);
      return;
    }

    setRsvpStates(prev => ({ ...prev, [eventId]: status }));
    setActionMessage(
      status === 'yes'
        ? `RSVP Confirmed for "${targetEvent.title}" ${includeFamily ? '(including household members)' : ''}!`
        : `RSVP updated to "${status.toUpperCase()}".`
    );

    // Call API in background
    fetch(`/api/events/${eventId}/rsvp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rsvpStatus: status }),
    }).catch(() => {});
  }

  async function handleCreateEvent(e: React.FormEvent) {
    e.preventDefault();
    const created = {
      id: String(Date.now()),
      title: newEvent.title,
      eventDate: newEvent.eventDate,
      formattedDate: new Date(newEvent.eventDate).toLocaleString('en-AU', { dateStyle: 'full', timeStyle: 'short' }),
      location: newEvent.location || 'Canberra, ACT',
      capacityLimit: parseInt(newEvent.capacityLimit) || 100,
      yesCount: 1,
      fee: parseFloat(newEvent.fee) || 0,
      description: newEvent.description,
      tag: 'Community Event',
    };

    setEvents([created, ...events]);
    setShowCreateModal(false);
    setActionMessage(`Event "${created.title}" published successfully!`);

    // Call API in background
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    }).catch(() => {});
  }

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Community Events & RSVPs</h1>
          <p className="text-gray-500 text-sm mt-1">
            Browse upcoming Igbo Community Canberra festivals, workshops, and gatherings.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-700 text-white hover:bg-green-800 px-4 py-2.5 rounded-lg text-sm font-semibold transition"
        >
          + Create New Event (Admin)
        </button>
      </div>

      {actionMessage && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-sm p-4 rounded-xl flex justify-between items-center">
          <span>{actionMessage}</span>
          <button onClick={() => setActionMessage(null)} className="text-green-800 font-bold ml-4">✕</button>
        </div>
      )}

      {/* Household RSVP Setting */}
      <div className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-gray-900">Household RSVP Mode</p>
          <p className="text-xs text-gray-500">Automatically register all linked family members when you RSVP &quot;Yes&quot;</p>
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            checked={includeFamily}
            onChange={e => setIncludeFamily(e.target.checked)}
            className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
          />
          Include Family
        </label>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {events.map(evt => {
          const currentRsvp = rsvpStates[evt.id] || 'none';
          const isFull = evt.yesCount >= evt.capacityLimit;

          return (
            <div key={evt.id} className="bg-white rounded-2xl border p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {evt.tag}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mt-2">{evt.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">📅 {evt.formattedDate}</p>
                  <p className="text-sm text-gray-500">📍 {evt.location}</p>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 sm:justify-end">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isFull ? 'bg-red-100 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
                      {evt.yesCount} / {evt.capacityLimit} Attending {isFull ? '(FULL)' : ''}
                    </span>
                  </div>
                  {evt.fee > 0 && (
                    <p className="text-xs font-bold text-green-700 mt-1">${evt.fee} AUD / person</p>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{evt.description}</p>

              {/* RSVP Action Bar */}
              <div className="pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Your RSVP:</span>
                  <button
                    onClick={() => handleRSVP(evt.id, 'yes')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                      currentRsvp === 'yes'
                        ? 'bg-green-700 text-white'
                        : isFull
                        ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {isFull && currentRsvp !== 'yes' ? 'Join Waitlist' : '✓ Going'}
                  </button>

                  <button
                    onClick={() => handleRSVP(evt.id, 'maybe')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                      currentRsvp === 'maybe'
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    ? Maybe
                  </button>

                  <button
                    onClick={() => handleRSVP(evt.id, 'no')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                      currentRsvp === 'no'
                        ? 'bg-gray-800 text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    ✕ Can&apos;t Go
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {currentRsvp === 'waitlist' && (
                    <span className="text-xs bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full">
                      Waitlisted (#3 in queue)
                    </span>
                  )}
                  <a
                    href={`/api/events/${evt.id}/export`}
                    className="text-xs text-gray-500 hover:text-green-700 font-medium underline"
                  >
                    Export Attendee List (CSV)
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Admin Event Creation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-bold text-gray-900">Create Community Event</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600 text-xl font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Igbo Cultural Day & Children's Masquerade"
                  value={newEvent.title}
                  onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                  <input
                    type="datetime-local"
                    required
                    value={newEvent.eventDate}
                    onChange={e => setNewEvent({ ...newEvent, eventDate: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Capacity Limit</label>
                  <input
                    type="number"
                    value={newEvent.capacityLimit}
                    onChange={e => setNewEvent({ ...newEvent, capacityLimit: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="Venue / Address"
                    value={newEvent.location}
                    onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fee (AUD)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newEvent.fee}
                    onChange={e => setNewEvent({ ...newEvent, fee: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Event details, schedule, food and dress code instructions..."
                  value={newEvent.description}
                  onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 border text-gray-700 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-700 text-white font-semibold py-2.5 rounded-lg text-sm hover:bg-green-800"
                >
                  Publish Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
