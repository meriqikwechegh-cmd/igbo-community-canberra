'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    password: '', confirmPassword: '',
    address: '', suburb: '', state: 'ACT', postcode: '',
    planType: 'annual',
  });

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      // TODO: POST to /api/auth/register with form data
      await new Promise(r => setTimeout(r, 1000));
      setStep(3); // success state
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white max-w-md w-full rounded-2xl border shadow-sm p-10 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
          <h1 className="text-2xl font-bold mb-2">Registration Submitted!</h1>
          <p className="text-gray-500 text-sm mb-6">
            Thank you for joining Igbo Community Canberra. Please check your email to verify your account. Your membership will be activated once dues are processed.
          </p>
          <Link href="/en/login" className="block bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition text-sm">
            Go to Sign In
          </Link>
        </div>
      </div>
    );
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
          Already a member?{' '}
          <Link href="/en/login" className="text-green-700 font-semibold hover:underline">Sign in</Link>
        </p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {['Your Details', 'Address & Plan'].map((label, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${step > i + 1 ? 'bg-green-700 text-white' : step === i + 1 ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`text-xs font-medium ${step === i + 1 ? 'text-green-700' : 'text-gray-400'}`}>{label}</span>
                {i < 1 && <div className={`flex-1 h-px ${step > 1 ? 'bg-green-700' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <h1 className="text-xl font-bold text-gray-900 mb-1">
            {step === 1 ? 'Create your account' : 'Address & Membership Plan'}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            {step === 1 ? 'Join Igbo Community Canberra as a member.' : 'Almost done — choose your membership plan.'}
          </p>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">{error}</div>
          )}

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handleSubmit} className="space-y-4">
            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input required value={form.firstName} onChange={e => update('firstName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Obinna" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input required value={form.lastName} onChange={e => update('lastName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Okafor" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input type="email" required value={form.email} onChange={e => update('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="04xx xxx xxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" required minLength={8} value={form.password} onChange={e => update('password', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Min. 8 characters" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input type="password" required value={form.confirmPassword} onChange={e => update('confirmPassword', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="••••••••" />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input required value={form.address} onChange={e => update('address', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="123 Example Street" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Suburb</label>
                    <input required value={form.suburb} onChange={e => update('suburb', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Belconnen" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <select value={form.state} onChange={e => update('state', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600">
                      <option>ACT</option><option>NSW</option><option>VIC</option><option>QLD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                    <input required value={form.postcode} onChange={e => update('postcode', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="2617" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Membership Plan</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: 'monthly', label: 'Monthly', price: '$25/mo', sub: 'Billed monthly' },
                      { key: 'annual', label: 'Annual', price: '$250/yr', sub: 'Save $50 — best value' },
                    ].map(plan => (
                      <label key={plan.key} className={`border-2 rounded-xl p-4 cursor-pointer transition ${form.planType === plan.key ? 'border-green-700 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <input type="radio" className="sr-only" value={plan.key} checked={form.planType === plan.key} onChange={() => update('planType', plan.key)} />
                        <p className="font-bold text-gray-900">{plan.label}</p>
                        <p className="text-green-700 font-semibold text-lg">{plan.price}</p>
                        <p className="text-xs text-gray-500 mt-1">{plan.sub}</p>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3 pt-2">
              {step === 2 && (
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition text-sm">
                  Back
                </button>
              )}
              <button type="submit" disabled={loading}
                className="flex-1 bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition disabled:opacity-60 text-sm">
                {loading ? 'Processing…' : step === 1 ? 'Continue →' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
