import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Terms of Use — Igbo Community Canberra',
  description: 'Terms and conditions governing the use of the Igbo Community Canberra portal and member services.',
};

export default function TermsOfUsePage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: (
        <>
          <p>
            By accessing or using the official portal of Igbo Community Canberra Inc. (ACT Reg. A04821), you agree to be bound by these Terms of Use, our Privacy Policy, and the Constitution of the Association.
          </p>
          <p>
            If you do not accept these terms, you must discontinue use of the portal immediately.
          </p>
        </>
      ),
    },
    {
      title: 'Member Accounts & Security',
      content: (
        <>
          <p>
            Certain features of the portal, including dues payment records, AGM voting agendas, and event RSVPs, require a registered member account.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are responsible for maintaining the strict confidentiality of your authentication credentials.</li>
            <li>You must notify the Secretariat immediately at <code>secretariat@igbocommunitycanberra.org.au</code> of any unauthorized access.</li>
            <li>Account credentials must not be shared or transferred to non-members.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Prohibited Conduct',
      content: (
        <>
          <p>Users and members shall not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scrape, extract, or harvest member names, directories, or contact details for commercial or unauthorized solicitations.</li>
            <li>Submit fraudulent, deceptive, or abusive messages through secretariat forms.</li>
            <li>Attempt to bypass rate limits, authentication barriers, or security headers.</li>
            <li>Misrepresent affiliation with or authority to speak on behalf of the ICC Executive Council.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Intellectual Property and Cultural Crest',
      content: (
        <>
          <p>
            All intellectual property rights in the ICC portal, including the Association logo, cultural insignias, constitutional texts, and official photography, belong to Igbo Community Canberra Inc.
          </p>
          <p>
            Reproduction of any material without express written consent from the Executive Council is strictly prohibited.
          </p>
        </>
      ),
    },
    {
      title: 'Governing Law and Jurisdiction',
      content: (
        <>
          <p>
            These Terms of Use are governed by the laws of the Australian Capital Territory (ACT) and the Commonwealth of Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of the Australian Capital Territory.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      category="LEGAL & PORTAL POLICIES"
      title="Terms of Use"
      version="Version 1.0 (Draft)"
      lastUpdated="5 October 2026"
      sections={sections}
    />
  );
}
