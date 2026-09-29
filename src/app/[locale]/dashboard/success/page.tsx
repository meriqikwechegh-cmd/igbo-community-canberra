'use client';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-center">
      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          🎉
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 text-sm mb-6">
          Daalụ! Your transaction has been confirmed by Stripe. Your membership dues status has been updated in our records.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-left text-xs text-gray-500 space-y-1 mb-6">
          <p>• A receipt has been dispatched to your registered email address.</p>
          <p>• Your household membership is now active for upcoming community events and festivals.</p>
        </div>

        <div className="flex gap-3 justify-center">
          <Link
            href="/en/dashboard/billing"
            className="border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            View Billing History
          </Link>
          <Link
            href="/en/dashboard"
            className="bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-800 transition text-sm"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
