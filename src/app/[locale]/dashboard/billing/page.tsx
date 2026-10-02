'use client';
import { useState } from 'react';

export default function BillingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('25.00');

  async function handleSubscribe(planType: 'family' | 'single') {
    setLoading(planType);
    try {
      const res = await fetch('/api/checkout/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planType }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Unable to start checkout. Please ensure Stripe keys are configured.');
      }
    } catch {
      alert('Checkout error. Please try again.');
    } finally {
      setLoading(null);
    }
  }

  async function handleOneTimePayment() {
    setLoading('onetime');
    try {
      const res = await fetch('/api/checkout/one-time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(customAmount),
          description: 'Community Dues / Contribution Payment',
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Unable to start checkout.');
      }
    } catch {
      alert('Checkout error. Please try again.');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl">
      <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#064e3b] dark:text-emerald-400">
          SECRETARIAT TREASURY
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-0.5">
          Membership Dues &amp; Billing
        </h1>
        <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm mt-1">
          Manage your membership subscription — Family ($250/yr) or Single ($150/yr) — and track official payment records.
        </p>
      </div>

      {/* Subscription Plans */}
      <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-stone-800 p-5 sm:p-6 transition-colors">
        <h2 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
          Automated Dues Subscription
        </h2>
        <p className="text-xs text-stone-500 dark:text-stone-400 mb-6 font-mono">
          Set up automated recurring dues via Stripe Billing to keep your membership in good standing.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Family Plan */}
          <div className="border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900/60 rounded-md p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                  Family Membership
                </span>
                <span className="bg-[#064e3b] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  Recommended
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                $250 <span className="text-xs font-sans font-normal text-stone-500 dark:text-stone-400">AUD / year</span>
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-6 font-sans">
                Covers primary member &amp; linked household family members for 12 months.
              </p>
            </div>
            <button
              onClick={() => handleSubscribe('family')}
              disabled={loading !== null}
              className="w-full bg-[#064e3b] text-white font-bold py-2.5 rounded hover:bg-emerald-950 transition disabled:opacity-60 text-xs uppercase tracking-wider cursor-pointer"
            >
              {loading === 'family' ? 'Redirecting to Stripe…' : 'Subscribe — Family ($250/yr)'}
            </button>
          </div>

          {/* Single Plan */}
          <div className="border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900/60 rounded-md p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                  Single Membership
                </span>
                <span className="border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  Individual
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                $150 <span className="text-xs font-sans font-normal text-stone-500 dark:text-stone-400">AUD / year</span>
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-6 font-sans">
                Individual annual membership for one adult member.
              </p>
            </div>
            <button
              onClick={() => handleSubscribe('single')}
              disabled={loading !== null}
              className="w-full bg-stone-900 dark:bg-stone-800 text-white font-bold py-2.5 rounded hover:bg-stone-800 dark:hover:bg-stone-700 transition disabled:opacity-60 text-xs uppercase tracking-wider cursor-pointer"
            >
              {loading === 'single' ? 'Redirecting to Stripe…' : 'Subscribe — Single ($150/yr)'}
            </button>
          </div>
        </div>
      </div>

      {/* One-off payment */}
      <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-stone-800 p-5 sm:p-6 transition-colors">
        <h2 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
          One-Time Dues or Contribution
        </h2>
        <p className="text-xs text-stone-500 dark:text-stone-400 mb-4 font-mono">
          Pay a custom dues amount, settle outstanding arrears, or make a community levy contribution.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center max-w-md">
          <div className="relative w-full">
            <span className="absolute left-3 top-2.5 text-stone-500 dark:text-stone-400 font-mono text-xs">$</span>
            <input
              type="number"
              min="5"
              step="5"
              value={customAmount}
              onChange={e => setCustomAmount(e.target.value)}
              className="w-full pl-7 pr-3 py-2 border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded text-xs font-mono focus:outline-none focus:border-[#064e3b]"
              placeholder="Amount in AUD"
            />
          </div>
          <button
            onClick={handleOneTimePayment}
            disabled={loading !== null}
            className="w-full sm:w-auto whitespace-nowrap bg-[#064e3b] text-white px-5 py-2 rounded font-bold text-xs uppercase tracking-wider hover:bg-emerald-950 transition disabled:opacity-60 cursor-pointer"
          >
            {loading === 'onetime' ? 'Processing…' : 'Pay via Stripe'}
          </button>
        </div>
      </div>

      {/* Payment Receipts Table */}
      <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-stone-800 p-5 sm:p-6 transition-colors">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-stone-200 dark:border-stone-800">
          <h2 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
            Payment History &amp; Receipts
          </h2>
          <span className="text-[10px] font-mono uppercase text-stone-500 dark:text-stone-400 font-semibold">
            Official Records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans min-w-[500px]">
            <thead className="border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 font-mono">
              <tr>
                <th className="p-2.5">Date</th>
                <th className="p-2.5">Description</th>
                <th className="p-2.5">Method</th>
                <th className="p-2.5">Amount</th>
                <th className="p-2.5">Status</th>
                <th className="p-2.5 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-stone-800 text-stone-700 dark:text-stone-300">
              <tr>
                <td className="p-2.5 font-mono text-[11px]">2026-09-15</td>
                <td className="p-2.5 font-semibold text-stone-900 dark:text-stone-100">Annual Family Dues (2026/2027)</td>
                <td className="p-2.5 font-mono text-[11px]">Stripe Card</td>
                <td className="p-2.5 font-serif font-bold text-[#064e3b] dark:text-emerald-400">$250.00 AUD</td>
                <td className="p-2.5">
                  <span className="bg-emerald-50 dark:bg-emerald-950/60 text-[#064e3b] dark:text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold border border-emerald-200 dark:border-emerald-800">
                    Completed
                  </span>
                </td>
                <td className="p-2.5 text-right">
                  <button onClick={() => window.print()} className="text-[#064e3b] dark:text-emerald-400 hover:underline text-xs font-semibold cursor-pointer">
                    Download PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono text-[11px]">2026-08-01</td>
                <td className="p-2.5 font-semibold text-stone-900 dark:text-stone-100">New Yam Festival Cultural Levy</td>
                <td className="p-2.5 font-mono text-[11px]">Direct Transfer</td>
                <td className="p-2.5 font-serif font-bold text-[#064e3b] dark:text-emerald-400">$50.00 AUD</td>
                <td className="p-2.5">
                  <span className="bg-emerald-50 dark:bg-emerald-950/60 text-[#064e3b] dark:text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold border border-emerald-200 dark:border-emerald-800">
                    Completed
                  </span>
                </td>
                <td className="p-2.5 text-right">
                  <button onClick={() => window.print()} className="text-[#064e3b] dark:text-emerald-400 hover:underline text-xs font-semibold cursor-pointer">
                    Download PDF
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
