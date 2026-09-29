'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BillingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('25.00');

  async function handleSubscribe(planType: 'monthly' | 'annual') {
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
    } catch (err) {
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
    } catch (err) {
      alert('Checkout error. Please try again.');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Membership Dues & Billing</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your subscription, pay annual/monthly dues, or record contributions for your household.
        </p>
      </div>

      {/* Subscription Plans Card */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Automated Dues Subscription</h2>
        <p className="text-sm text-gray-500 mb-6">
          Set up automated recurring dues via Stripe Billing to keep your membership in good standing.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-green-700 bg-green-50/50 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-green-800 uppercase tracking-wider">Annual Membership</span>
                <span className="bg-green-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">Save $50</span>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">$250 <span className="text-sm font-normal text-gray-500">AUD / year</span></p>
              <p className="text-xs text-gray-600 mb-4">Covers primary member & linked household family members for 12 months.</p>
            </div>
            <button
              onClick={() => handleSubscribe('annual')}
              disabled={loading !== null}
              className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition disabled:opacity-60 text-sm"
            >
              {loading === 'annual' ? 'Redirecting to Stripe…' : 'Subscribe Annual ($250/yr)'}
            </button>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Monthly Membership</span>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">$25 <span className="text-sm font-normal text-gray-500">AUD / month</span></p>
              <p className="text-xs text-gray-600 mb-4">Flexible monthly dues auto-debited on the 1st of every month.</p>
            </div>
            <button
              onClick={() => handleSubscribe('monthly')}
              disabled={loading !== null}
              className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-60 text-sm"
            >
              {loading === 'monthly' ? 'Redirecting to Stripe…' : 'Subscribe Monthly ($25/mo)'}
            </button>
          </div>
        </div>
      </div>

      {/* One-off payment / Donation */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-1">One-Time Dues or Contribution</h2>
        <p className="text-sm text-gray-500 mb-4">
          Pay a custom dues amount, settle outstanding arrears, or make a community building levy contribution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center max-w-md">
          <div className="relative w-full">
            <span className="absolute left-3 top-2.5 text-gray-500 font-semibold">$</span>
            <input
              type="number"
              min="5"
              step="5"
              value={customAmount}
              onChange={e => setCustomAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Amount in AUD"
            />
          </div>
          <button
            onClick={handleOneTimePayment}
            disabled={loading !== null}
            className="w-full sm:w-auto whitespace-nowrap bg-green-700 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-800 transition disabled:opacity-60"
          >
            {loading === 'onetime' ? 'Processing…' : 'Pay via Stripe Checkout'}
          </button>
        </div>
      </div>

      {/* Payment History & Receipts */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Payment History & Receipts</h2>
          <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-full">Official Records</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Description</th>
                <th className="p-3">Method</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-700">
              <tr>
                <td className="p-3">2026-09-15</td>
                <td className="p-3 font-medium">Annual Membership Dues (2026/2027)</td>
                <td className="p-3">Stripe Card</td>
                <td className="p-3 font-bold text-green-700">$250.00 AUD</td>
                <td className="p-3"><span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">Completed</span></td>
                <td className="p-3 text-right">
                  <button onClick={() => window.print()} className="text-green-700 hover:underline text-xs font-semibold">
                    Download PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-3">2026-08-01</td>
                <td className="p-3 font-medium">New Yam Festival Cultural Levy</td>
                <td className="p-3">Direct Transfer</td>
                <td className="p-3 font-bold text-green-700">$50.00 AUD</td>
                <td className="p-3"><span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">Completed</span></td>
                <td className="p-3 text-right">
                  <button onClick={() => window.print()} className="text-green-700 hover:underline text-xs font-semibold">
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
