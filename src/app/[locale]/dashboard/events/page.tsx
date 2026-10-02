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
      description: 'The annual cultural gathering celebrating the yam harvest, traditional Igbo masquerades, authentic delicacies, and cultural performances.',
      tag: 'Major Festival',
    },
    {
      id: '2',
      title: 'Igbo Language & Culture Immersion Workshop',
      eventDate: '2026-11-02T14:00',
      formattedDate: 'Sunday, 2 November 2026 • 2:00 PM',
      location: 'ACT Public Library, Seminar Room 1',
      capacityLimit: 30,
      yesCount: 30, // Full capacity
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

    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    }).catch(() => {});
  }

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#064e3b]">SECRETARIAT EVENTS</span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">Community Events &amp; RSVPs</h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Browse upcoming Igbo Community Canberra festivals, workshops, and general assemblies.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-[#064e3b] text-white hover:bg-emerald-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition self-start sm:self-auto"
        >
          + Create New Event
        </button>
      </div>

      {actionMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-[#064e3b] text-xs font-sans p-3.5 rounded-md flex justify-between items-center">
          <span>{actionMessage}</span>
          <button onClick={() => setActionMessage(null)} className="text-[#064e3b] font-bold ml-4">✕</button>
        </div>
      )}

      {/* Household RSVP Setting */}
      <div className="bg-white border border-stone-200 rounded-md p-4 flex items-center justify-between font-sans">
        <div>
          <p className="font-bold text-xs text-stone-900 uppercase tracking-wider font-mono">Household Auto-RSVP</p>
          <p className="text-xs text-stone-500 mt-0.5">Automatically register all linked family members when you RSVP &quot;Yes&quot;</p>
        </div>
        <label className="flex items-center gap-2 text-xs font-bold text-stone-700 cursor-pointer">
          <input
            type="checkbox"
            checked={includeFamily}
            onChange={e => setIncludeFamily(e.target.checked)}
            className="w-3.5 h-3.5 text-[#064e3b] rounded border-stone-300 focus:ring-0"
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
            <div key={evt.id} className="bg-white rounded-md border border-stone-200 p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-stone-100 pb-3">
                <div>
                  <span className="bg-stone-100 text-stone-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-stone-200 uppercase">
                    {evt.tag}
                  </span>
                  <h2 className="text-xl font-serif font-bold text-stone-900 mt-2">{evt.title}</h2>
                  <p className="text-xs text-stone-500 mt-1 font-mono">📅 {evt.formattedDate}</p>
                  <p className="text-xs text-stone-500 font-mono">📍 {evt.location}</p>
                </div>

                <div className="text-right shrink-0">
                  <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded border uppercase ${
                    isFull ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-emerald-50 text-[#064e3b] border-emerald-200'
                  }`}>
                    {evt.yesCount} / {evt.capacityLimit} Attending {isFull ? '(FULL)' : ''}
                  </span>
                  {evt.fee > 0 && (
                    <p className="text-xs font-serif font-bold text-[#064e3b] mt-1">${evt.fee} AUD / person</p>
                  )}
                </div>
              </div>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-sans">{evt.description}</p>

              {/* RSVP Action Bar */}
              <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-wider mr-1">Your RSVP:</span>
                  <button
                    onClick={() => handleRSVP(evt.id, 'yes')}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition uppercase tracking-wider ${
                      currentRsvp === 'yes'
                        ? 'bg-[#064e3b] text-white'
                        : isFull
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'border border-stone-300 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {isFull && currentRsvp !== 'yes' ? 'Waitlist' : 'Attending'}
                  </button>

                  <button
                    onClick={() => handleRSVP(evt.id, 'maybe')}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition uppercase tracking-wider ${
                      currentRsvp === 'maybe'
                        ? 'bg-stone-800 text-white'
                        : 'border border-stone-300 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Tentative
                  </button>

                  <button
                    onClick={() => handleRSVP(evt.id, 'no')}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition uppercase tracking-wider ${
                      currentRsvp === 'no'
                        ? 'bg-rose-800 text-white'
                        : 'border border-stone-300 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Declined
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {currentRsvp === 'waitlist' && (
                    <span className="text-[10px] font-mono bg-amber-50 text-amber-900 font-bold px-2 py-1 rounded border border-amber-200">
                      Waitlisted (#3)
                    </span>
                  )}
                  <a
                    href={`/api/events/${evt.id}/export`}
                    className="text-xs text-stone-500 hover:text-[#064e3b] font-medium underline"
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
        <div className="fixed inset-0 bg-stone-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-md p-6 max-w-lg w-full border border-stone-300 font-sans space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <h2 className="text-base font-serif font-bold text-stone-900">Create Community Event</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-stone-400 hover:text-stone-700 text-lg font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Igbo Cultural Day & Masquerade"
                  value={newEvent.title}
                  onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Date &amp; Time</label>
                  <input
                    type="datetime-local"
                    required
                    value={newEvent.eventDate}
                    onChange={e => setNewEvent({ ...newEvent, eventDate: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Capacity</label>
                  <input
                    type="number"
                    value={newEvent.capacityLimit}
                    onChange={e => setNewEvent({ ...newEvent, capacityLimit: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="Venue / Address"
                    value={newEvent.location}
                    onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Fee (AUD)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newEvent.fee}
                    onChange={e => setNewEvent({ ...newEvent, fee: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Event details, schedule, food and dress code instructions..."
                  value={newEvent.description}
                  onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 border border-stone-300 text-stone-700 font-bold py-2 rounded text-xs hover:bg-stone-50 uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#064e3b] text-white font-bold py-2 rounded text-xs hover:bg-emerald-950 uppercase tracking-wider"
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
