'use client';

import { useState } from 'react';

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  role: string;
}

interface HouseholdProps {
  household: {
    id: string;
    name: string;
    addressLine1?: string | null;
    city?: string | null;
    state?: string | null;
    postalCode?: string | null;
    members: Member[];
  } | null;
  currentUserId?: string;
  duesActive?: boolean;
}

export function HouseholdMembers({
  household,
  currentUserId,
  duesActive = true,
}: HouseholdProps) {
  const [members, setMembers] = useState<Member[]>(household?.members || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    relationship: 'Spouse',
  });

  function getInitials(first: string, last: string) {
    return `${(first?.[0] || '').toUpperCase()}${(last?.[0] || '').toUpperCase()}`;
  }

  async function handleAddMember(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch('/api/household/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to add family member.');
        return;
      }

      setMembers((prev) => [...prev, data.member]);
      setSuccess(`${form.firstName} ${form.lastName} has been added to your household.`);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        relationship: 'Spouse',
      });
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccess('');
      }, 1500);
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white dark:bg-stone-900 p-5 sm:p-6 rounded-none border border-stone-200 dark:border-stone-800 transition-colors">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 pb-3 border-b border-stone-200 dark:border-stone-800 gap-2">
        <div>
          <h3 className="font-sans font-bold text-base text-stone-900 dark:text-stone-100">
            {household?.name || 'My Household'}
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-sans mt-0.5">
            {household?.addressLine1 ? `${household.addressLine1}, ${household.city || 'Canberra'} ${household.state || 'ACT'}` : 'Family Membership Registered'}
          </p>
        </div>
        <span
          className={`text-[11px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-none border self-start sm:self-auto ${
            duesActive
              ? 'text-[#064e3b] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
              : 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800'
          }`}
        >
          {duesActive ? 'Active Dues' : 'Dues Pending'}
        </span>
      </div>

      <div className="divide-y divide-stone-100 dark:divide-stone-800 font-sans">
        {members.length === 0 ? (
          <div className="py-6 text-center text-xs text-stone-500">
            No family members currently attached to this household.
          </div>
        ) : (
          members.map((member) => {
            const isPrimary = member.id === currentUserId || member.role === 'family_admin';
            return (
              <div
                key={member.id}
                className="py-3 flex flex-col sm:flex-row justify-between sm:items-center text-xs sm:text-sm gap-2"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-none font-sans font-bold text-xs flex items-center justify-center shrink-0 border ${
                      isPrimary
                        ? 'bg-stone-900 dark:bg-stone-800 text-white border-stone-700'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                    }`}
                  >
                    {getInitials(member.firstName, member.lastName)}
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-stone-900 dark:text-stone-100 block truncate">
                      {member.firstName} {member.lastName}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-sans truncate block">
                      {member.email} {member.phoneNumber ? `· ${member.phoneNumber}` : ''}
                    </span>
                  </div>
                </div>
                <span
                  className={`font-sans text-[11px] uppercase px-2 py-0.5 rounded-none border self-start sm:self-auto ${
                    isPrimary
                      ? 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold border-stone-200 dark:border-stone-700'
                      : 'bg-stone-50 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 font-medium border-stone-200 dark:border-stone-800'
                  }`}
                >
                  {isPrimary ? 'Primary Member' : 'Household Member'}
                </span>
              </div>
            );
          })
        )}
      </div>

      <button
        type="button"
        onClick={() => {
          setError('');
          setSuccess('');
          setIsModalOpen(true);
        }}
        className="mt-4 w-full text-xs font-semibold border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 py-2.5 rounded-none hover:bg-stone-50 dark:hover:bg-stone-800 transition uppercase tracking-wider cursor-pointer"
      >
        + Add Household Member
      </button>

      {/* Add Member Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 max-w-md w-full p-6 shadow-2xl rounded-none">
            <div className="flex justify-between items-center pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-wide text-[#064e3b] dark:text-emerald-400 font-bold">
                  HOUSEHOLD MANAGEMENT
                </span>
                <h4 className="font-sans font-bold text-lg text-stone-900 dark:text-stone-100">
                  Add Family Member
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1"
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs p-3">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs p-3">
                {success}
              </div>
            )}

            <form onSubmit={handleAddMember} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sans font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-none focus:outline-none focus:border-[#064e3b]"
                    placeholder="e.g. Amaka"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-none focus:outline-none focus:border-[#064e3b]"
                    placeholder="e.g. Okafor"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-none focus:outline-none focus:border-[#064e3b]"
                  placeholder="amaka@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-none focus:outline-none focus:border-[#064e3b]"
                  placeholder="0400 000 000"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Relationship
                </label>
                <select
                  value={form.relationship}
                  onChange={(e) => setForm({ ...form, relationship: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-none focus:outline-none focus:border-[#064e3b]"
                >
                  <option value="Spouse">Spouse / Partner</option>
                  <option value="Child">Child / Dependent</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Other">Other Relative</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-stone-200 dark:border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 uppercase tracking-wider rounded-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-xs font-semibold bg-[#064e3b] hover:bg-emerald-950 text-white uppercase tracking-wider transition disabled:opacity-50 rounded-none"
                >
                  {loading ? 'Adding...' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
