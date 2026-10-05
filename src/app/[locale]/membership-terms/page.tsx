import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Membership Terms & Welfare Charter — Igbo Community Canberra',
  description: 'Official Membership Terms, Dues Structure, and Welfare Charter of Igbo Community Canberra Inc.',
};

export default function MembershipTermsPage() {
  const sections = [
    {
      title: 'Constitutional Basis & Eligibility',
      content: (
        <>
          <p>
            Membership in Igbo Community Canberra Inc. (ACT Reg. A04821) is governed by the Constitution of the Association and the <em>Associations Incorporation Act 1991</em> (ACT).
          </p>
          <p>
            Membership is open to individuals of Igbo heritage, their spouses, and their families residing in the Australian Capital Territory (ACT) and adjacent regional communities.
          </p>
        </>
      ),
    },
    {
      title: 'Membership Tiers and Annual Dues',
      content: (
        <>
          <p>The Association operates two democratically approved annual dues categories:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Family Membership ($250 AUD / year):</strong> Encompasses the primary registered member, their spouse, and all dependent children residing at the registered household address. Grants full voting representation at the Annual General Assembly and comprehensive coverage under the ICC Bereavement &amp; Welfare Charter.
            </li>
            <li>
              <strong>Single Adult Membership ($150 AUD / year):</strong> Applicable to individual adult residents. Grants individual voting representation at the General Assembly, individual Welfare Charter coverage, and portal access.
            </li>
          </ul>
          <p className="text-xs text-stone-500 pt-1">
            Annual dues are payable at the commencement of each calendar year. Concessions or hardship payment arrangements may be requested confidentially through the Office of the Treasurer.
          </p>
        </>
      ),
    },
    {
      title: 'Welfare & Bereavement Solidarity Charter',
      content: (
        <>
          <p>
            In alignment with the core founding tenet <em>Onye aghana nwanne ya</em>, the Association administers a dedicated solidarity fund:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Financial and logistical support for member families experiencing bereavement or qualifying compassionate crises.</li>
            <li>New resident integration and community welfare assistance.</li>
            <li>All welfare deliberations and financial disbursements are conducted with strict confidentiality by the Executive Council to protect family dignity.</li>
          </ul>
          <p className="font-semibold text-stone-900 dark:text-stone-100 pt-2">
            Welfare details, household distress claims, and disbursement values are strictly confidential and will never be published publicly.
          </p>
        </>
      ),
    },
    {
      title: 'Member Obligations and Code of Conduct',
      content: (
        <>
          <p>All members agree to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Uphold the dignity, cultural values, and constitutional objectives of the Igbo community in Canberra.</li>
            <li>Treat all executive officers, fellow members, and guests with mutual dignity and decorum during General Assemblies and social gatherings.</li>
            <li>Maintain timely settlement of annual membership dues.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Resignation and Expulsion Procedures',
      content: (
        <>
          <p>
            A member may resign from the Association by delivering written notice to the Secretary. Resignations take effect upon receipt, and personal data is handled according to our Privacy Policy.
          </p>
          <p>
            Disciplinary proceedings or termination of membership for constitutional breach follow due process and natural justice as stipulated under Section 7 of the ICC Constitution.
          </p>
          <p className="font-mono text-xs text-stone-500 pt-2">
            [Membership Terms Placeholder: Subject to constitutional revisions ratified at General Assembly].
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      category="GOVERNANCE & CHARTER"
      title="Membership Terms & Welfare Charter"
      version="Charter Doc. MT-2026/01"
      lastUpdated="5 October 2026"
      sections={sections}
    />
  );
}
