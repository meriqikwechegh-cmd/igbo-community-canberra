'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PublicSidebar } from '@/components/PublicSidebar';
import ConsentCheckbox from '@/components/ConsentCheckbox';

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Secretariat Inquiry',
    message: '',
    privacyConsent: false,
    hp_field: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.privacyConsent) {
      setError('You must consent to our privacy policy so the Secretariat can process your inquiry.');
      return;
    }
    if (form.hp_field) {
      setError('Spam detected.');
      return;
    }
    setError('');
    setLoading(true);

    // Simulate secure submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafaf9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-[#064e3b] selection:text-white transition-colors">
      <PublicSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Notice Bar */}
        <div className="bg-stone-900 text-stone-400 text-xs py-2 px-4 sm:px-6 border-b border-stone-800 shrink-0">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs">
                Secretariat &amp; Executive Council Correspondence · ACT Inc. A04821
              </span>
            </div>
            <Link href="/en" className="text-[11px] font-mono text-stone-400 hover:text-white underline">
              ← Back to Portal Home
            </Link>
          </div>
        </div>

        {/* Banner */}
        <section className="bg-[#064e3b] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-emerald-950">
          <div className="max-w-5xl mx-auto space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-300 font-bold block">
              OFFICIAL CORRESPONDENCE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-50">
              Secretariat &amp; Community Contact
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/80 max-w-2xl leading-relaxed">
              Contact the Executive Council for membership matters, welfare support, cultural calendar queries, or privacy inquiries.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto w-full px-4 sm:px-8 py-10 sm:py-16 grid md:grid-cols-12 gap-8 lg:gap-12 flex-1">
          {/* Left Column: Official Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 rounded-none">
              <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-4 pb-2 border-b border-stone-100 dark:border-stone-800">
                Official Directory
              </h2>
              <dl className="space-y-4 text-xs">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Postal Address</dt>
                  <dd className="font-semibold text-stone-800 dark:text-stone-200 mt-0.5">
                    Igbo Community Canberra Inc.<br />
                    GPO Box 1985, Canberra ACT 2601
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">General Secretariat</dt>
                  <dd className="font-semibold text-[#064e3b] dark:text-emerald-400 mt-0.5">
                    <a href="mailto:secretariat@igbocommunitycanberra.org.au" className="hover:underline">
                      secretariat@igbocommunitycanberra.org.au
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Privacy &amp; Data Rights</dt>
                  <dd className="font-semibold text-[#064e3b] dark:text-emerald-400 mt-0.5">
                    <a href="mailto:privacy@igbocommunitycanberra.org.au" className="hover:underline">
                      privacy@igbocommunitycanberra.org.au
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Direct Telephone</dt>
                  <dd className="font-semibold text-stone-800 dark:text-stone-200 mt-0.5">
                    (02) 6100 4820
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Assembly Venue</dt>
                  <dd className="text-stone-600 dark:text-stone-400 mt-0.5">
                    Acton Community Centre, Acton ACT 2601
                  </dd>
                </div>
              </dl>
            </div>

            <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-500 rounded-none space-y-1">
              <p className="font-mono font-bold text-stone-700 dark:text-stone-300">Confidentiality Guarantee</p>
              <p className="leading-relaxed">
                All communications sent to the Secretariat are managed confidentially. We never publish contact details or share inquiries with external parties.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-none">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                Direct Secretariat Communication
              </h2>
              <p className="text-xs text-stone-500 mb-6">
                Submit an official dispatch to the Secretariat. All fields marked with * are required.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-900/20 border border-[#064e3b] text-center space-y-3 rounded-none">
                  <div className="w-10 h-10 bg-[#064e3b] text-white flex items-center justify-center mx-auto rounded-none">
                    ✓
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    Dispatch Received
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed max-w-sm mx-auto">
                    Your message has been securely submitted to the ICC Secretariat. An officer will review and respond to your verified email address.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        subject: 'General Secretariat Inquiry',
                        message: '',
                        privacyConsent: false,
                        hp_field: '',
                      });
                    }}
                    className="text-xs font-mono underline text-[#064e3b] dark:text-emerald-400 mt-2 block mx-auto"
                  >
                    Submit another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_contact">Do not fill this</label>
                    <input
                      type="text"
                      id="hp_contact"
                      name="hp_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.hp_field}
                      onChange={(e) => update('hp_field', e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs rounded-none">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      placeholder="e.g. Chinedu Eze"
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="04xx xxx xxx"
                        className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3.5 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Subject Matter *
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none px-3 py-2.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    >
                      <option>General Secretariat Inquiry</option>
                      <option>Membership Application &amp; Dues</option>
                      <option>Welfare Solidarity &amp; Support</option>
                      <option>Cultural Calendar &amp; Event RSVP</option>
                      <option>Privacy, Data Rights &amp; Records</option>
                      <option>Constitution &amp; Governance Motion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                      Message / Dispatch Content *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Please articulate your query or motion with relevant context..."
                      className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 rounded-none p-3.5 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-[#064e3b]"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <ConsentCheckbox
                    checked={form.privacyConsent}
                    onChange={(c) => update('privacyConsent', c)}
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#064e3b] hover:bg-emerald-950 text-white font-bold py-3 rounded-none transition disabled:opacity-60 text-xs tracking-wider uppercase cursor-pointer"
                  >
                    {loading ? 'Transmitting Dispatch…' : 'Transmit Official Dispatch'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
