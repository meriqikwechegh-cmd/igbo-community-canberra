'use client';

import { ChangeEvent } from 'react';
import Link from 'next/link';

interface ConsentCheckboxProps {
  name?: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: string;
}

export default function ConsentCheckbox({
  name = 'privacyConsent',
  required = true,
  checked = false,
  onChange,
  error,
}: ConsentCheckboxProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.checked);
  };

  return (
    <div className="space-y-1.5 pt-2 pb-1">
      <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-none">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={handleChange}
          required={required}
          aria-required={required}
          className="mt-0.5 h-4 w-4 rounded-none border-stone-300 dark:border-stone-700 text-[#064e3b] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#064e3b]"
        />
        <label htmlFor={name} className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed cursor-pointer select-none">
          I consent to the collection and processing of my household information in accordance with the{' '}
          <Link
            href="/en/privacy-policy"
            target="_blank"
            className="text-[#064e3b] dark:text-emerald-400 font-semibold underline hover:text-emerald-950"
          >
            ICC Privacy Policy
          </Link>{' '}
          and agree to the{' '}
          <Link
            href="/en/membership-terms"
            target="_blank"
            className="text-[#064e3b] dark:text-emerald-400 font-semibold underline hover:text-emerald-950"
          >
            Membership Terms
          </Link>
          . I understand my personal data is strictly confidential and never publicly disclosed.
        </label>
      </div>
      {error && (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
}
