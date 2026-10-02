import Link from 'next/link';

export function DuesCard({ status = 'active', amount = '250.00', nextBillingDate = 'Nov 1, 2026' }: { status?: string, amount?: string, nextBillingDate?: string }) {
  const isPastDue = status === 'past_due' || status === 'unpaid';

  return (
    <div className="bg-white p-6 rounded-md border border-stone-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-stone-100">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">DUES STATUS</span>
          <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded border ${
            isPastDue ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-emerald-50 text-[#064e3b] border-emerald-200'
          }`}>
            {status.replace('_', ' ')}
          </span>
        </div>

        <div className="my-3">
          <p className="text-3xl font-serif font-bold text-stone-900 mb-1">
            ${amount} <span className="text-xs font-sans text-stone-500 font-normal">AUD / year</span>
          </p>
          <p className="text-xs font-mono text-stone-500">Family Membership &middot; Next: {nextBillingDate}</p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100">
        <Link
          href="/en/dashboard/billing"
          className={`w-full block text-center py-2.5 rounded font-bold text-xs uppercase tracking-wider transition ${
            isPastDue
              ? 'bg-rose-800 text-white hover:bg-rose-900'
              : 'bg-[#064e3b] text-white hover:bg-emerald-950'
          }`}
        >
          {isPastDue ? 'Pay Outstanding Dues' : 'Manage Dues & Billing'}
        </Link>
      </div>
    </div>
  );
}
