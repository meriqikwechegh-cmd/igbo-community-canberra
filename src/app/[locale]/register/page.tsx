'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConsentCheckbox from '@/components/ConsentCheckbox';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    suburb: '',
    state: 'ACT',
    postcode: '',
    planType: 'family',
    privacyConsent: false,
    hp_field: '', // Honeypot field for bot spam prevention
  });

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.privacyConsent) {
      setError('You must review and consent to the ICC Privacy Policy and Membership Terms to complete registration.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Registration failed. Please try again.');
        return;
      }
      setStep(3); // success state
    } catch {
      setError('Registration failed. Please check your secure connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-stone-100 dark:bg-stone-950 flex items-center justify-center px-4 py-12">
        <div className="bg-white dark:bg-stone-900 max-w-lg w-full rounded-none border border-stone-300 dark:border-stone-800 shadow-sm p-8 sm:p-10 text-center">
          <div className="w-14 h-14 bg-emerald-900/20 text-[#064e3b] dark:text-emerald-400 border border-[#064e3b]/30 flex items-center justify-center mx-auto mb-5 rounded-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            Membership Application Received
          </h1>
          <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm mb-6 leading-relaxed">
            Thank you for applying to join Igbo Community Canberra. Your household submission has been logged securely with the Secretariat. In compliance with our privacy standards, your information is protected and stored strictly for institutional administration.
          </p>
          <Link
            href="/en/login"
            className="block w-full bg-[#064e3b] hover:bg-emerald-950 text-white font-bold py-3 rounded-none transition text-xs uppercase tracking-widest text-center"
          >
            Proceed to Member Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans">
      {/* Header */}
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
          Already registered?{' '}
          <Link href="/en/login" className="text-[#064e3b] dark:text-emerald-400 font-semibold underline hover:text-emerald-950">
            Sign in
          </Link>
        </p>
      </header>

      {/* Main form */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white dark:bg-stone-900 w-full max-w-xl rounded-none border border-stone-200 dark:border-stone-800 shadow-sm p-6 sm:p-10">
          
          {/* Step indicator (sharp rectangular badges) */}
          <div className="flex items-center gap-2 mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
            {['1. Primary Member', '2. Household & Dues'].map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-6 h-6 flex items-center justify-center text-xs font-mono font-bold rounded-none border transition ${
                    step > i + 1
                      ? 'bg-[#064e3b] border-[#064e3b] text-white'
                      : step === i + 1
                      ? 'bg-[#064e3b] border-[#064e3b] text-white'
                      : 'bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-400'
                  }`}
                >
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span
                  className={`text-xs font-medium uppercase tracking-wider font-mono ${
                    step === i + 1 ? 'text-[#064e3b] dark:text-emerald-400 font-bold' : 'text-stone-400'
                  }`}
                >
                  {label}
                </span>
                {i < 1 && <div className={`flex-1 h-px ${step > 1 ? 'bg-[#064e3b]' : 'bg-stone-200 dark:bg-stone-800'}`} />}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              {step === 1 ? 'Primary Member Registration' : 'Address, Plan & Privacy Consent'}
            </h1>
            <p className="text-stone-500 text-xs mt-1">
              {step === 1
                ? 'Register your primary member profile with Igbo Community Canberra.'
                : 'Confirm household details and select annual dues structure.'}
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="mb-6 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs p-3.5 rounded-none flex items-start gap-2"
            >
              <span className="font-bold">Notice:</span>
              <span>{error}</span>
            </div>
          )}

          <form
            onSubmit={
              step === 1
                ? (e) => {
                    e.preventDefault();
                    if (!form.firstName || !form.lastName || !form.email || !form.password) {
                      setError('Please fill in all required fields.');
                      return;
                    }
                    if (form.password !== form.confirmPassword) {
                      setError('Passwords do not match.');
                      return;
                    }
                    if (form.password.length < 8) {
                      setError('Password must be at least 8 characters long.');
                      return;
                    }
                    setError('');
                    setStep(2);
                  }
                : handleSubmit
            }
            className="space-y-4"
          >
            {/* Honeypot field - hidden from human users */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_field">Do not fill this field</label>
              <input
                type="text"
                id="hp_field"
                name="hp_field"
                tabIndex={-1}
                autoComplete="off"
                value={form.hp_field}
                onChange={(e) => update('hp_field', e.target.value)}
              />
            </div>

            {step === 1 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      First Name *
                    </label>
                    <input
                      required
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      placeholder="e.g. Obinna"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Last Name *
                    </label>
                    <input
                      required
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      placeholder="e.g. Okafor"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                    Email Address (Official Member Account) *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                    Contact Phone (For Secretariat Communications)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    placeholder="04xx xxx xxx"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Password (Min. 8 characters) *
                    </label>
                    <input
                      type="password"
                      required
                      minLength={8}
                      value={form.password}
                      onChange={(e) => update('password', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={form.confirmPassword}
                      onChange={(e) => update('confirmPassword', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                    Street Address (Household Residence) *
                  </label>
                  <input
                    required
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    placeholder="e.g. 14 Constitution Avenue"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Suburb *
                    </label>
                    <input
                      required
                      value={form.suburb}
                      onChange={(e) => update('suburb', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      placeholder="Acton"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      State *
                    </label>
                    <select
                      value={form.state}
                      onChange={(e) => update('state', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    >
                      <option value="ACT">ACT</option>
                      <option value="NSW">NSW</option>
                      <option value="VIC">VIC</option>
                      <option value="QLD">QLD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Postcode *
                    </label>
                    <input
                      required
                      value={form.postcode}
                      onChange={(e) => update('postcode', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      placeholder="2601"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                    Select Membership Dues Category *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        key: 'family',
                        label: 'Family Membership',
                        price: '$250 AUD / year',
                        sub: 'Primary Member + Household Dependents',
                      },
                      {
                        key: 'single',
                        label: 'Single Membership',
                        price: '$150 AUD / year',
                        sub: 'Individual Adult Member',
                      },
                    ].map((plan) => (
                      <label
                        key={plan.key}
                        className={`border p-4 cursor-pointer transition rounded-none select-none ${
                          form.planType === plan.key
                            ? 'border-[#064e3b] bg-emerald-950/10 dark:bg-emerald-950/30'
                            : 'border-stone-300 dark:border-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <input
                          type="radio"
                          className="sr-only"
                          value={plan.key}
                          checked={form.planType === plan.key}
                          onChange={() => update('planType', plan.key)}
                        />
                        <p className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                          {plan.label}
                        </p>
                        <p className="text-[#064e3b] dark:text-emerald-400 font-mono font-bold text-base mt-0.5">
                          {plan.price}
                        </p>
                        <p className="text-[11px] text-stone-500 mt-1">{plan.sub}</p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consent Checkbox */}
                <ConsentCheckbox
                  checked={form.privacyConsent}
                  onChange={(c) => update('privacyConsent', c)}
                  required
                />
              </>
            )}

            <div className="flex gap-3 pt-3">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold py-3 rounded-none hover:bg-stone-100 dark:hover:bg-stone-800 transition text-xs tracking-wider uppercase"
                >
                  ← Back to Details
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#064e3b] hover:bg-emerald-950 text-white font-bold py-3 rounded-none transition disabled:opacity-60 text-xs tracking-wider uppercase cursor-pointer"
              >
                {loading ? 'Processing...' : step === 1 ? 'Continue to Step 2 →' : 'Submit Application'}
              </button>
            </div>
          </form>

          <p className="text-[10px] font-mono text-stone-400 text-center mt-6">
            Data protected under Privacy Act 1988 (Cth) · Canberra ACT
          </p>
        </div>
      </main>
    </div>
  );
}
