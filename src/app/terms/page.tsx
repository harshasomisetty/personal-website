import { PageLayout } from '@/components/PageLayout';
import { business, policiesUpdated } from '@/lib/business';

export const metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${business.legalName}`,
};

export default function TermsPage() {
  return (
    <PageLayout title="Terms of Service" description={`Last updated ${policiesUpdated}`}>
      <div className="prose prose-invert max-w-[650px]">
        <p>
          These terms apply to your use of {business.url} (the &quot;site&quot;),
          operated by {business.legalName} (&quot;we&quot;, &quot;us&quot;). By
          using the site, you agree to them.
        </p>

        <h2>The site</h2>
        <p>
          The site describes our software development and consulting services.
          Content on the site is for general information only and is not an
          offer to perform work.
        </p>

        <h2>Client work</h2>
        <p>
          Consulting and development work is governed by a separate written
          agreement or statement of work between us and the client. If that
          agreement conflicts with these terms, the agreement controls.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The site&apos;s design, text, and images belong to us or our
          licensors. You may view and share pages for personal, non-commercial
          use. Do not copy or republish them without our permission.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not use the site to break the law, interfere with its operation,
          or try to gain unauthorized access to our systems.
        </p>

        <h2>Third-party links</h2>
        <p>
          The site links to services we do not control. We are not responsible
          for their content or practices.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The site is provided &quot;as is&quot; without warranties of any kind,
          to the fullest extent the law allows.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent the law allows, {business.legalName} is not
          liable for indirect, incidental, or consequential damages that arise
          from your use of the site.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. We will post changes on this page and
          update the date above. Continued use of the site means you accept the
          updated terms.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the United States and of the
          state in which {business.legalName} is organized.
        </p>

        <h2>Contact</h2>
        <p>
          {business.legalName}
          <br />
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </div>
    </PageLayout>
  );
}
