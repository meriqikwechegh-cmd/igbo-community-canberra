'use client';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-center">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl font-bold text-slate-900 mb-2">Payment Successfully Confirmed</h1>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Daalụ. Your transaction has been processed securely via Stripe. Your membership ledger and household status have been updated.
        </p>

        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-left text-xs text-slate-600 space-y-1.5 mb-6">
          <p className="font-semibold text-slate-800">Transaction Summary:</p>
          <p>&bull; An official electronic receipt has been dispatched to your primary email address.</p>
          <p>&bull; Your household membership remains in good standing under the Association By-Laws.</p>
        </div>

        <div className="flex gap-3 justify-center">
          <Link
            href="/en/dashboard/billing"
            className="border border-slate-300 text-slate-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-50 transition text-xs uppercase tracking-wider"
          >
            Review Ledger &amp; Invoices
          </Link>
          <Link
            href="/en/dashboard"
            className="bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-900 transition text-xs uppercase tracking-wider"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
