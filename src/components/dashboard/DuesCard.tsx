export function DuesCard({ status, amount, nextBillingDate }: { status: string, amount: string, nextBillingDate: string }) {
  const isPastDue = status === 'past_due' || status === 'unpaid';

  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col justify-between h-full">
      <div>
        <h3 className="text-gray-500 font-medium mb-1">Dues Status</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${isPastDue ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status.replace('_', ' ').toUpperCase()}
          </span>
        </div>
        <p className="text-3xl font-bold mb-1">${amount} <span className="text-sm font-normal text-gray-500">/ month</span></p>
        <p className="text-sm text-gray-500">Next billing date: {nextBillingDate}</p>
      </div>

      <div className="mt-6 flex gap-3">
        {isPastDue ? (
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700">Pay Balance</button>
        ) : (
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Manage Subscription</button>
        )}
      </div>
    </div>
  );
}
