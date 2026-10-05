import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Privacy Policy — Igbo Community Canberra',
  description: 'Official Privacy Policy and Australian Privacy Principles compliance statement for Igbo Community Canberra Inc.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Commitment to Privacy and Legal Framework',
      content: (
        <>
          <p>
            Igbo Community Canberra Inc. (ACT Reg. No. A04821, ABN 48 192 840 129) is committed to protecting the privacy, confidentiality, and security of our members, families, and website visitors.
          </p>
          <p>
            We manage personal data in accordance with the <em>Privacy Act 1988</em> (Cth), the Australian Privacy Principles (APPs), and the <em>Associations Incorporation Act 1991</em> (ACT).
          </p>
        </>
      ),
    },
    {
      title: 'Information We Collect and Stated Purpose',
      content: (
        <>
          <p>We do not collect personal information without a stated constitutional or administrative purpose. Data collected includes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Primary Member Details:</strong> Full name, verified email, telephone number, residential address (used solely for membership roll, voting verification at General Assemblies, and formal Secretariat communications).</li>
            <li><strong>Household Information:</strong> Spouse and dependent details under family memberships (used solely to extend cultural welfare coverage and event entitlements under the ICC Bereavement &amp; Welfare Charter).</li>
            <li><strong>Financial and Dues Records:</strong> Membership plan tier, payment receipt numbers, and subscription status (processed securely through encrypted payment gateways; ICC never stores raw credit card details).</li>
            <li><strong>RSVP and Event Registrations:</strong> Attendance numbers and dietary requirements (used strictly for event logistics, seating capacity, and safety at community venues such as the EPIC Centre).</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Strict Prohibition on Public Disclosure',
      content: (
        <>
          <p className="font-semibold text-stone-900 dark:text-stone-100">
            ICC enforces a zero-exposure policy regarding personal data:
          </p>
          <p>
            Under no circumstances does ICC sell, rent, commercialize, or publicly disclose member names, contact details, residential addresses, welfare claims, dues standing, or household rosters. All member records are kept strictly confidential within access-controlled administrative systems.
          </p>
        </>
      ),
    },
    {
      title: 'Role-Based Access Control and Storage',
      content: (
        <>
          <p>
            Access to personal information is strictly restricted to designated Executive Officers on a need-to-know basis:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>President:</strong> Executive oversight of membership affairs and constitutional governance.</li>
            <li><strong>Secretary:</strong> Maintenance of the official Association Register of Members as required by ACT law.</li>
            <li><strong>Treasurer:</strong> Reconciliation of annual dues and financial audits.</li>
            <li><strong>Technical Administrator:</strong> Secure maintenance of database infrastructure and audit logs.</li>
          </ul>
          <p className="font-mono text-xs text-stone-500 pt-2">
            [Storage Placeholder: Encrypted PostgreSQL database hosted via Supabase in Australian AWS region (ap-southeast-2), subject to verification by ICC Executive Council].
          </p>
        </>
      ),
    },
    {
      title: 'Data Retention and Right of Deletion',
      content: (
        <>
          <p>
            Member records are retained for the duration of active membership plus statutory retention periods required by ACT incorporated association and taxation statutes (typically 7 years for financial records).
          </p>
          <p>
            Members may request access to, correction of, or deletion of their personal data upon resigning from the association by submitting a formal request in writing to the Secretariat. Data will be archived or securely expunged subject to legal retention obligations.
          </p>
          <p className="font-mono text-xs text-stone-500 pt-1">
            [Retention &amp; Deletion Process Placeholder: To be reviewed and codified by ICC Legal Officer].
          </p>
        </>
      ),
    },
    {
      title: 'Privacy Contact & Secretariat Officer',
      content: (
        <>
          <p>
            For any inquiries, requests for access, or concerns regarding your personal data, please contact the ICC Secretariat:
          </p>
          <div className="p-4 bg-stone-100 dark:bg-stone-800 font-mono text-xs space-y-1">
            <p>Privacy Officer · Igbo Community Canberra Inc.</p>
            <p>GPO Box 1985, Canberra ACT 2601</p>
            <p>Email: <a href="mailto:privacy@igbocommunitycanberra.org.au" className="underline">privacy@igbocommunitycanberra.org.au</a></p>
            <p>Secretariat: <a href="mailto:secretariat@igbocommunitycanberra.org.au" className="underline">secretariat@igbocommunitycanberra.org.au</a></p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      category="STATUTORY PRIVACY GOVERNANCE"
      title="Privacy Policy & Data Protection"
      version="Policy Doc. PP-2026/01"
      lastUpdated="5 October 2026"
      sections={sections}
    />
  );
}
