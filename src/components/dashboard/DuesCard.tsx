import Link from 'next/link';

export function DuesCard({ status = 'active', amount = '250.00', nextBillingDate = 'Nov 1, 2026' }: { status?: string, amount?: string, nextBillingDate?: string }) {
  const isPastDue = status === 'past_due' || status === 'unpaid';

  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Dues Status</span>
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${
            isPastDue ? 'bg-rose-100 text-rose-800 border border-rose-200' : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
          }`}>
            {status.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        <div className="my-4">
          <p className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-900 mb-1">
            ${amount} <span className="text-xs font-sans font-normal text-stone-500">AUD / year</span>
          </p>
          <p className="text-xs font-sans text-stone-500">Family Membership &middot; Next billing: {nextBillingDate}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100">
        <Link
          href="/en/dashboard/billing"
          className={`w-full block text-center py-3 rounded-xl font-semibold text-sm transition shadow-xs ${
            isPastDue
              ? 'bg-rose-700 text-white hover:bg-rose-800'
              : 'bg-emerald-900 text-white hover:bg-emerald-950'
          }`}
        >
          {isPastDue ? 'Pay Outstanding Dues' : 'Manage Dues & Billing'}
        </Link>
      </div>
    </div>
  );
}
