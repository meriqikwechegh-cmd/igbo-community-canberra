'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError('Invalid email or password. Please try again.');
      } else {
        router.push('/en/dashboard');
      }
    } catch {
      setError('Something went wrong. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans">
      <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-6 py-4 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-3">
          <div className="relative w-8 h-8 border border-stone-300 dark:border-stone-700 bg-white shrink-0 rounded-none">
            <Image src="/logo.jpg" alt="ICC Logo" fill className="object-contain" />
          </div>
          <div>
            <span className="font-serif font-bold text-stone-900 dark:text-stone-100 block text-sm leading-tight">
              Igbo Community
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Canberra Inc. · A04821
            </span>
          </div>
        </Link>
        <p className="text-xs text-stone-500">
          Not yet a member?{' '}
          <Link href="/en/register" className="text-[#064e3b] dark:text-emerald-400 font-semibold underline hover:text-emerald-950">
            Apply
          </Link>
        </p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white dark:bg-stone-900 w-full max-w-md rounded-none border border-stone-200 dark:border-stone-800 shadow-sm p-6 sm:p-10">
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#064e3b] dark:text-emerald-400 font-bold block mb-1">
              PORTAL ACCESS
            </span>
            <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">
              Member Sign In
            </h1>
            <p className="text-stone-500 text-xs">
              Access your household directory, dues history, and official RSVPs.
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="mb-6 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs p-3.5 rounded-none flex items-start gap-2"
            >
              <span className="font-bold">Error:</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1" htmlFor="email">
                Registered Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400" htmlFor="password">
                  Password
                </label>
                <Link href="/en/contact" className="text-[11px] text-stone-500 hover:text-stone-800 underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#064e3b] hover:bg-emerald-950 text-white font-bold py-3 rounded-none transition disabled:opacity-60 text-xs uppercase tracking-widest cursor-pointer"
            >
              {loading ? 'Authenticating…' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800 text-center">
            <p className="text-xs text-stone-500">
              Not a member yet?{' '}
              <Link href="/en/register" className="text-[#064e3b] dark:text-emerald-400 font-semibold underline hover:text-emerald-950">
                Submit Membership Application
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
