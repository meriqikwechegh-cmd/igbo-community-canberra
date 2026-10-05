import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Accessibility Statement — Igbo Community Canberra',
  description: 'Our commitment to digital accessibility and WCAG 2.1 AA compliance across the Igbo Community Canberra portal.',
};

export default function AccessibilityPage() {
  const sections = [
    {
      title: 'Our Accessibility Commitment',
      content: (
        <>
          <p>
            Igbo Community Canberra Inc. is dedicated to ensuring that our digital portal and cultural resources are accessible to all community members, regardless of ability, neurodiversity, or assistive technology.
          </p>
          <p>
            Our web platform aims to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>.
          </p>
        </>
      ),
    },
    {
      title: 'Accessibility Features Implemented',
      content: (
        <>
          <p>Key digital accessibility provisions across the portal include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Keyboard Navigation:</strong> All interactive elements, sidebar links, theme controls, and form inputs are operable via standard keyboard tabbing.</li>
            <li><strong>Contrast Ratios:</strong> Text and interactive components meet or exceed WCAG AA minimum contrast standards (4.5:1 for body copy).</li>
            <li><strong>Screen Reader Semantics:</strong> Structural landmarks (<code>main</code>, <code>nav</code>, <code>aside</code>, <code>header</code>, <code>footer</code>) and live regions for loading states (<code>role="status"</code>).</li>
            <li><strong>Reduced Motion:</strong> Respect for operating system <code>prefers-reduced-motion</code> settings across animated skeleton shimmers and loading indicators.</li>
            <li><strong>Non-Text Contrast &amp; Alt Tags:</strong> Real community photographs include descriptive alternative text.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Multilingual and Cultural Access',
      content: (
        <>
          <p>
            In recognition of the cultural diversity of our membership, the portal provides dual-language support in English (EN) and Igbo (Asụsụ Igbo), ensuring intergenerational access for elders and young diaspora learners alike.
          </p>
        </>
      ),
    },
    {
      title: 'Feedback and Accessibility Assistance',
      content: (
        <>
          <p>
            If you encounter any accessibility barrier on our portal or require alternative formats for constitutional or welfare documents, please notify our Secretariat:
          </p>
          <div className="p-4 bg-stone-100 dark:bg-stone-800 font-mono text-xs space-y-1">
            <p>Digital Access Coordinator · Igbo Community Canberra Inc.</p>
            <p>Email: <a href="mailto:accessibility@igbocommunitycanberra.org.au" className="underline">accessibility@igbocommunitycanberra.org.au</a></p>
            <p>Phone: (02) 6100 4820</p>
          </div>
          <p className="font-mono text-xs text-stone-500 pt-2">
            [Accessibility Review Placeholder: Ongoing audit scheduled by ICC Secretariat].
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      category="DIGITAL INCLUSION"
      title="Accessibility Statement"
      version="Statement ACC-2026/01"
      lastUpdated="5 October 2026"
      sections={sections}
    />
  );
}
