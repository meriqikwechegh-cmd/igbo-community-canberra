import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Photo & Video Consent Policy — Igbo Community Canberra',
  description: 'Policy regarding photography, video recordings, and media consent at Igbo Community Canberra events and assemblies.',
};

export default function PhotoVideoConsentPage() {
  const sections = [
    {
      title: 'Context & Purpose of Media Capture',
      content: (
        <>
          <p>
            Igbo Community Canberra Inc. documents its cultural festivals, Annual General Assemblies, youth showcases, and communal gatherings through photography and videography.
          </p>
          <p>
            Media recordings serve to preserve cultural archives, celebrate community heritage, and inform member families via official newsletters and our secure portal.
          </p>
        </>
      ),
    },
    {
      title: 'Notice and Signage at Events',
      content: (
        <>
          <p>
            At all major public and member events (such as the Annual Igbo Day at EPIC Centre), prominent signage will notify attendees that official photography and videography are in progress.
          </p>
          <p>
            By attending, members and guests acknowledge that official media representatives may capture wide-angle cultural proceedings and crowd imagery.
          </p>
        </>
      ),
    },
    {
      title: 'Protection of Children and Minors',
      content: (
        <>
          <p>
            ICC enforces strict guidelines concerning media featuring minors. Close-up portraits of children are not published in public media without explicit parental or guardian permission.
          </p>
          <p>
            Names of children or identifying school details are never paired with photographs on any public channel.
          </p>
        </>
      ),
    },
    {
      title: 'Right to Opt-Out & Image Removal Procedure',
      content: (
        <>
          <p>
            Any member or attendee may request the exclusion or prompt removal of their likeness or that of their dependents from ICC media channels at any time.
          </p>
          <p>To request removal:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email <code>media@igbocommunitycanberra.org.au</code> or <code>secretariat@igbocommunitycanberra.org.au</code>.</li>
            <li>Specify the URL or context of the image/video.</li>
            <li>The Secretariat will review and remove or blur the requested media within 5 business days.</li>
          </ul>
          <p className="font-mono text-xs text-stone-500 pt-2">
            [Photo &amp; Video Opt-Out Protocol Placeholder: Pending final ratification by ICC Executive Council].
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      category="MEDIA & CULTURAL ARCHIVES"
      title="Photo & Video Consent Policy"
      version="Policy Doc. PVC-2026/01"
      lastUpdated="5 October 2026"
      sections={sections}
    />
  );
}
