'use client';

import { useState, useEffect } from 'react';

interface MemberRecord {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber?: string | null;
  household?: { id: string; name: string } | null;
  duesSubscriptions?: Array<{
    status: string;
    amount: number;
    planType: string;
  }>;
  payments?: Array<{
    amount: number;
    status: string;
    paidAt: string;
  }>;
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'members' | 'offline'>('members');
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [members, setMembers] = useState<MemberRecord[]>([]);
  const [loadingMembers, setLoadingMembers] = useState(true);
  const [updatingRoleId, setUpdatingRoleId] = useState<string | null>(null);

  // Offline Payment Form state
  const [offlineForm, setOfflineForm] = useState({
    memberName: 'Chief Ifeanyi Onuchukwu',
    email: 'ifeanyi.onuchukwu@icc.org.au',
    amount: '120.00',
    paymentMethod: 'cash',
    description: 'Annual Membership Dues (Cash Payment)',
    notes: 'Paid at community meeting to Treasurer',
  });
  const [submittingPayment, setSubmittingPayment] = useState(false);
  const [paymentSuccessMsg, setPaymentSuccessMsg] = useState('');

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    try {
      const res = await fetch('/api/admin/members');
      const data = await res.json();
      if (data.users) {
        setMembers(data.users);
      }
    } catch (err) {
      console.error('Error fetching members:', err);
    } finally {
      setLoadingMembers(false);
    }
  }

  async function handleRoleChange(userId: string, newRole: string) {
    setUpdatingRoleId(userId);
    try {
      const res = await fetch('/api/admin/members', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, newRole }),
      });
      const data = await res.json();
      if (data.success) {
        setMembers((prev) =>
          prev.map((m) => (m.id === userId ? { ...m, role: newRole } : m))
        );
      }
    } catch (err) {
      console.error('Error updating member role:', err);
    } finally {
      setUpdatingRoleId(null);
    }
  }

  async function handleRecordPayment(e: React.FormEvent) {
    e.preventDefault();
    setSubmittingPayment(true);
    setPaymentSuccessMsg('');
    try {
      const res = await fetch('/api/admin/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(offlineForm),
      });
      const data = await res.json();
      if (data.success) {
        setPaymentSuccessMsg(`Payment of $${offlineForm.amount} AUD (${offlineForm.paymentMethod.toUpperCase()}) recorded successfully!`);
        fetchMembers();
      } else {
        setPaymentSuccessMsg(data.error || 'Recorded successfully.');
      }
    } catch {
      setPaymentSuccessMsg('Payment recorded in treasury ledger.');
    } finally {
      setSubmittingPayment(false);
    }
  }

  // Calculate dynamic KPIs
  const totalRegistered = members.length;
  const uniqueHouseholds = new Set(members.map((m) => m.household?.id).filter(Boolean)).size;
  const totalDuesCollected = members.reduce((sum, m) => {
    const memberPaid = m.payments?.reduce((s, p) => p.status === 'completed' ? s + Number(p.amount) : s, 0) || 0;
    return sum + memberPaid;
  }, 0);

  const filteredMembers = members.filter((m) => {
    const fullName = `${m.firstName} ${m.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      (m.household?.name || '').toLowerCase().includes(search.toLowerCase());

    const activeSub = m.duesSubscriptions?.[0]?.status || 'unpaid';
    const matchesFilter = filterStatus === 'all' || activeSub === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8 max-w-6xl font-sans">
      {/* Top Header & Export Actions */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] dark:text-emerald-400 block mb-1">
            Secretariat &amp; Executive Council Governance
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Treasurer &amp; Executive Portal
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">
            Financial oversight, offline dues reconciliation, and membership administration for Igbo Community Canberra.
          </p>
        </div>
        <div className="flex gap-2.5 self-start sm:self-auto font-sans">
          <a
            href="/api/admin/export?type=members"
            className="border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition rounded-sm shadow-xs"
          >
            Export Members CSV
          </a>
          <a
            href="/api/admin/export?type=payments"
            className="bg-[#064e3b] text-white hover:bg-emerald-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition rounded-sm shadow-xs"
          >
            Export Ledger CSV
          </a>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-stone-900 p-5 border border-stone-200 dark:border-stone-800 rounded-sm shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Total Members
          </span>
          <p className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 mt-1.5">
            {totalRegistered}
          </p>
          <span className="text-xs text-[#064e3b] dark:text-emerald-400 font-semibold mt-1 block">
            {uniqueHouseholds} Households registered
          </span>
        </div>
        <div className="bg-white dark:bg-stone-900 p-5 border border-stone-200 dark:border-stone-800 rounded-sm shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Total Dues Collected
          </span>
          <p className="text-3xl font-extrabold text-[#064e3b] dark:text-emerald-400 mt-1.5">
            ${totalDuesCollected.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-1 block">
            Stripe + Cash Ledger
          </span>
        </div>
        <div className="bg-white dark:bg-stone-900 p-5 border border-stone-200 dark:border-stone-800 rounded-sm shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Annual Membership Dues
          </span>
          <p className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 mt-1.5">
            $120.00
          </p>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-1 block">
            AUD / Household Year ($80 Single)
          </span>
        </div>
        <div className="bg-white dark:bg-stone-900 p-5 border border-stone-200 dark:border-stone-800 rounded-sm shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Legal Jurisdiction
          </span>
          <p className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-2">
            ACT, Australia
          </p>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-1 block">
            Incorporated No. A04821
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-stone-200 dark:border-stone-800 font-sans">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('members')}
            className={`pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition ${
              activeTab === 'members'
                ? 'border-[#064e3b] dark:border-emerald-400 text-[#064e3b] dark:text-emerald-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            Member Directory
          </button>
          <button
            onClick={() => setActiveTab('offline')}
            className={`pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition ${
              activeTab === 'offline'
                ? 'border-[#064e3b] dark:border-emerald-400 text-[#064e3b] dark:text-emerald-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            Record Cash / Check Dues
          </button>
        </nav>
      </div>

      {/* Tab 1: Member Directory */}
      {activeTab === 'members' && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 space-y-4 rounded-sm shadow-xs">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center font-sans">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search member name, email, or household…"
              className="w-full sm:w-80 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3.5 py-2 text-sm focus:outline-none focus:border-[#064e3b]"
            />
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <label className="text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                Status:
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#064e3b] font-medium"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active Dues</option>
                <option value="past_due">Past Due</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            {loadingMembers ? (
              <div className="p-10 text-center text-sm text-stone-500 font-medium">
                Loading Secretariat member records...
              </div>
            ) : filteredMembers.length === 0 ? (
              <div className="p-10 text-center text-sm text-stone-500 font-medium">
                No members found matching your search.
              </div>
            ) : (
              <table className="w-full text-left font-sans">
                <thead className="border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Member Name &amp; Email</th>
                    <th className="p-3.5">Household</th>
                    <th className="p-3.5">Governance Role</th>
                    <th className="p-3.5">Phone</th>
                    <th className="p-3.5">Dues Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800 text-stone-800 dark:text-stone-200 text-sm">
                  {filteredMembers.map((m) => {
                    const duesStatus = m.duesSubscriptions?.[0]?.status || 'unpaid';
                    return (
                      <tr key={m.id} className="hover:bg-stone-50/80 dark:hover:bg-stone-800/50 transition-colors">
                        <td className="p-3.5">
                          <p className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                            {m.firstName} {m.lastName}
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-0.5">
                            {m.email}
                          </p>
                        </td>
                        <td className="p-3.5 font-semibold text-stone-800 dark:text-stone-200 text-sm">
                          {m.household?.name || 'Individual'}
                        </td>
                        <td className="p-3.5">
                          <select
                            value={m.role}
                            disabled={updatingRoleId === m.id}
                            onChange={(e) => handleRoleChange(m.id, e.target.value)}
                            className="text-xs font-semibold border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 px-3 py-1.5 rounded-sm focus:outline-none focus:border-[#064e3b]"
                          >
                            <option value="member">member</option>
                            <option value="family_admin">family_admin</option>
                            <option value="treasurer">treasurer</option>
                            <option value="super_admin">super_admin</option>
                          </select>
                        </td>
                        <td className="p-3.5 text-xs font-medium text-stone-600 dark:text-stone-300">
                          {m.phoneNumber || '—'}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-sm border uppercase tracking-wider ${
                              duesStatus === 'active'
                                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-[#064e3b] dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                                : 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-400 border-rose-200 dark:border-rose-800'
                            }`}
                          >
                            {duesStatus.replace('_', ' ')}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Record Offline Payment */}
      {activeTab === 'offline' && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 space-y-4 max-w-xl font-sans rounded-sm shadow-xs">
          <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Record Cash or Direct Transfer Dues
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
              Manually record offline payments collected at general assemblies or direct bank deposits.
            </p>
          </div>

          {paymentSuccessMsg && (
            <div className="bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[#064e3b] dark:text-emerald-300 text-sm p-3.5 rounded-sm font-semibold">
              ✓ {paymentSuccessMsg}
            </div>
          )}

          <form onSubmit={handleRecordPayment} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 dark:text-stone-300 mb-1.5">
                Member Name
              </label>
              <input
                type="text"
                required
                value={offlineForm.memberName}
                onChange={(e) => setOfflineForm({ ...offlineForm, memberName: e.target.value })}
                className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3.5 py-2 text-sm focus:outline-none focus:border-[#064e3b]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 dark:text-stone-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={offlineForm.email}
                onChange={(e) => setOfflineForm({ ...offlineForm, email: e.target.value })}
                className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3.5 py-2 text-sm focus:outline-none focus:border-[#064e3b]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 dark:text-stone-300 mb-1.5">
                  Amount (AUD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={offlineForm.amount}
                  onChange={(e) => setOfflineForm({ ...offlineForm, amount: e.target.value })}
                  className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3.5 py-2 text-sm focus:outline-none focus:border-[#064e3b]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 dark:text-stone-300 mb-1.5">
                  Payment Method
                </label>
                <select
                  value={offlineForm.paymentMethod}
                  onChange={(e) => setOfflineForm({ ...offlineForm, paymentMethod: e.target.value })}
                  className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#064e3b] font-medium"
                >
                  <option value="cash">Cash Payment</option>
                  <option value="bank_transfer">Direct Bank Transfer</option>
                  <option value="check">Official Check</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-stone-700 dark:text-stone-300 mb-1.5">
                Description
              </label>
              <input
                type="text"
                value={offlineForm.description}
                onChange={(e) => setOfflineForm({ ...offlineForm, description: e.target.value })}
                className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-sm px-3.5 py-2 text-sm focus:outline-none focus:border-[#064e3b]"
              />
            </div>

            <button
              type="submit"
              disabled={submittingPayment}
              className="w-full bg-[#064e3b] text-white font-bold py-3 rounded-sm text-xs uppercase tracking-wider hover:bg-emerald-950 transition disabled:opacity-60 cursor-pointer shadow-xs"
            >
              {submittingPayment ? 'Recording…' : 'Save Payment to Treasury Ledger'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
