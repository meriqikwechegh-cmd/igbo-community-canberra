import Link from 'next/link';

export function DuesCard({
  status = 'active',
  amount = '250.00',
  nextBillingDate = 'Nov 1, 2026',
}: {
  status?: string;
  amount?: string;
  nextBillingDate?: string;
}) {
  const isPastDue = status === 'past_due' || status === 'unpaid';

  return (
    <div className="bg-white dark:bg-stone-900 p-6 rounded-none border border-stone-200 dark:border-stone-800 flex flex-col justify-between h-full transition-colors">
      <div>
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-stone-100 dark:border-stone-800">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            DUES STATUS
          </span>
          <span
            className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-none border ${
              isPastDue
                ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                : 'bg-emerald-50 dark:bg-emerald-950/60 text-[#064e3b] dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
            }`}
          >
            {status.replace('_', ' ')}
          </span>
        </div>

        <div className="my-3">
          <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
            ${amount} <span className="text-xs font-sans text-stone-500 dark:text-stone-400 font-normal">AUD / year</span>
          </p>
          <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
            Family Membership &middot; Next: {nextBillingDate}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
        <Link
          href="/en/dashboard/billing"
          className={`w-full block text-center py-2.5 rounded-none font-bold text-xs uppercase tracking-wider transition ${
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
