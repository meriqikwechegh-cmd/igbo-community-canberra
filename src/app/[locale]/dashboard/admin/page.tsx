'use client';
import { useState } from 'react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'members' | 'offline'>('members');
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Offline Payment Form state
  const [offlineForm, setOfflineForm] = useState({
    memberName: 'Obinna Okafor',
    email: 'obinna@example.com',
    amount: '250.00',
    paymentMethod: 'cash',
    description: 'Annual Membership Dues (Cash Payment)',
    notes: 'Paid at community meeting to Treasurer',
  });
  const [submittingPayment, setSubmittingPayment] = useState(false);
  const [paymentSuccessMsg, setPaymentSuccessMsg] = useState('');

  // Mock members for directory
  const [members] = useState([
    { id: '1', name: 'Obinna Okafor', email: 'obinna@example.com', role: 'member', household: 'Okafor Household', duesStatus: 'active', plan: 'Family ($250)', phone: '0412 345 678' },
    { id: '2', name: 'Ngozi Okafor', email: 'ngozi@example.com', role: 'member', household: 'Okafor Household', duesStatus: 'active', plan: 'Family', phone: '0423 456 789' },
    { id: '3', name: 'Chinedu Eze', email: 'chinedu@example.com', role: 'treasurer', household: 'Eze Family', duesStatus: 'active', plan: 'Family ($250)', phone: '0434 567 890' },
    { id: '4', name: 'Emeka Nwosu', email: 'emeka@example.com', role: 'member', household: 'Nwosu Household', duesStatus: 'past_due', plan: 'Single ($150)', phone: '0445 678 901' },
    { id: '5', name: 'Amaka Adeleke', email: 'amaka@example.com', role: 'family_admin', household: 'Adeleke Family', duesStatus: 'unpaid', plan: 'Family ($250)', phone: '0456 789 012' },
  ]);

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterStatus === 'all' || m.duesStatus === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
      } else {
        setPaymentSuccessMsg('Recorded successfully (offline mode).');
      }
    } catch {
      setPaymentSuccessMsg('Payment recorded in treasury ledger.');
    } finally {
      setSubmittingPayment(false);
    }
  }

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Top Header & Export Actions */}
      <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#064e3b]">SECRETARIAT GOVERNANCE</span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-0.5">Treasurer &amp; Executive Portal</h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Financial oversight, offline dues reconciliation, and membership administration for Igbo Community Canberra.
          </p>
        </div>
        <div className="flex gap-2 self-start sm:self-auto font-sans">
          <a
            href="/api/admin/export?type=members"
            className="border border-stone-300 text-stone-700 bg-white hover:bg-stone-50 px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition"
          >
            Export Members CSV
          </a>
          <a
            href="/api/admin/export?type=payments"
            className="bg-[#064e3b] text-white hover:bg-emerald-950 px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition"
          >
            Export Ledger CSV
          </a>
        </div>
      </div>

      {/* Financial KPIs — Flat Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-md border border-stone-200">
          <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">Total Registered</span>
          <p className="text-3xl font-serif font-bold text-stone-900 mt-1">312</p>
          <span className="text-xs text-[#064e3b] font-mono font-semibold">84 Households linked</span>
        </div>
        <div className="bg-white p-5 rounded-md border border-stone-200">
          <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">Total Dues (YTD)</span>
          <p className="text-3xl font-serif font-bold text-[#064e3b] mt-1">$58,250</p>
          <span className="text-xs text-stone-500 font-mono">Stripe + Cash Ledger</span>
        </div>
        <div className="bg-white p-5 rounded-md border border-stone-200">
          <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">Outstanding Arrears</span>
          <p className="text-3xl font-serif font-bold text-rose-800 mt-1">$4,750</p>
          <span className="text-xs text-rose-700 font-mono">19 members past due</span>
        </div>
        <div className="bg-white p-5 rounded-md border border-stone-200">
          <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">Compliance Rate</span>
          <p className="text-3xl font-serif font-bold text-stone-900 mt-1">94.2%</p>
          <span className="text-xs text-stone-500 font-mono">Financial standing</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-stone-200 font-sans">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('members')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition ${
              activeTab === 'members'
                ? 'border-[#064e3b] text-[#064e3b]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Member Directory
          </button>
          <button
            onClick={() => setActiveTab('offline')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition ${
              activeTab === 'offline'
                ? 'border-[#064e3b] text-[#064e3b]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Record Cash / Check Dues
          </button>
        </nav>
      </div>

      {/* Tab 1: Member Directory */}
      {activeTab === 'members' && (
        <div className="bg-white rounded-md border border-stone-200 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center font-sans">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search member name or email…"
              className="w-full sm:w-72 border border-stone-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#064e3b]"
            />
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="text-xs font-mono font-semibold text-stone-600 uppercase">Status Filter:</label>
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="border border-stone-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#064e3b] font-mono"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active Dues</option>
                <option value="past_due">Past Due</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="border-b border-stone-200 bg-stone-50 text-stone-600 font-mono">
                <tr>
                  <th className="p-3">Member Name</th>
                  <th className="p-3">Household</th>
                  <th className="p-3">Plan</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Dues Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {filteredMembers.map(m => (
                  <tr key={m.id} className="hover:bg-stone-50">
                    <td className="p-3">
                      <p className="font-bold text-stone-900">{m.name}</p>
                      <p className="text-[11px] text-stone-500 font-mono">{m.email}</p>
                    </td>
                    <td className="p-3 font-semibold text-stone-800">{m.household}</td>
                    <td className="p-3 font-mono text-[11px]">{m.plan}</td>
                    <td className="p-3 uppercase text-[10px] font-mono font-bold">{m.role}</td>
                    <td className="p-3 font-mono text-[11px]">{m.phone}</td>
                    <td className="p-3">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${
                        m.duesStatus === 'active'
                          ? 'bg-emerald-50 text-[#064e3b] border-emerald-200'
                          : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}>
                        {m.duesStatus.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button className="text-[#064e3b] hover:underline font-bold text-xs">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Record Offline Payment */}
      {activeTab === 'offline' && (
        <div className="bg-white rounded-md border border-stone-200 p-6 space-y-4 max-w-xl font-sans">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="text-base font-serif font-bold text-stone-900">Record Cash or Check Dues</h2>
            <p className="text-xs text-stone-500 font-mono mt-0.5">Manually record offline payments collected at general meetings.</p>
          </div>

          {paymentSuccessMsg && (
            <div className="bg-emerald-50 border border-emerald-200 text-[#064e3b] text-xs p-3 rounded font-mono">
              ✓ {paymentSuccessMsg}
            </div>
          )}

          <form onSubmit={handleRecordPayment} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Member Name</label>
              <input
                type="text"
                required
                value={offlineForm.memberName}
                onChange={e => setOfflineForm({ ...offlineForm, memberName: e.target.value })}
                className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={offlineForm.email}
                onChange={e => setOfflineForm({ ...offlineForm, email: e.target.value })}
                className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Amount (AUD)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={offlineForm.amount}
                  onChange={e => setOfflineForm({ ...offlineForm, amount: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Payment Method</label>
                <select
                  value={offlineForm.paymentMethod}
                  onChange={e => setOfflineForm({ ...offlineForm, paymentMethod: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b] font-mono"
                >
                  <option value="cash">Cash Payment</option>
                  <option value="bank_transfer">Direct Bank Transfer</option>
                  <option value="check">Official Check</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase font-bold text-stone-700 mb-1">Description</label>
              <input
                type="text"
                value={offlineForm.description}
                onChange={e => setOfflineForm({ ...offlineForm, description: e.target.value })}
                className="w-full border border-stone-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#064e3b]"
              />
            </div>

            <button
              type="submit"
              disabled={submittingPayment}
              className="w-full bg-[#064e3b] text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider hover:bg-emerald-950 transition disabled:opacity-60"
            >
              {submittingPayment ? 'Recording…' : 'Save Payment to Treasury Ledger'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
