'use client';

import Link from 'next/link';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-none shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-gray-600">Content coming soon. Please check back later.</p>
        <div className="mt-4 text-center">
          <Link href="/en" className="text-emerald-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
