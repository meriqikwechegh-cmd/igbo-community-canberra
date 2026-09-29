'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">I</div>
          <div>
            <span className="font-bold text-green-800 block text-sm leading-tight">Igbo Community</span>
            <span className="text-xs text-green-600">Canberra</span>
          </div>
        </Link>
        <p className="text-sm text-gray-500">
          No account?{' '}
          <Link href="/en/register" className="text-green-700 font-semibold hover:underline">Register</Link>
        </p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
            <p className="text-gray-500 text-sm">Sign in to your member account</p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
              <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <Link href="/en/forgot-password" className="text-xs text-green-700 hover:underline">Forgot password?</Link>
              </div>
              <input id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition disabled:opacity-60">
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-sm text-gray-500">
              Not a member yet?{' '}
              <Link href="/en/register" className="text-green-700 font-semibold hover:underline">Join Igbo Community Canberra</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
