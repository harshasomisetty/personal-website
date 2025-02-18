import { Mdx } from '@/components/mdx';
import { allAbouts } from 'contentlayer/generated';

export default function AboutPage() {
  console.log('Rendering About page');

  if (allAbouts.length === 0) {
    console.error('No about content found');
    return <div>Content not found</div>;
  }

  const about = allAbouts[0];

  return (
    <section className="container max-w-4xl pb-6 space-y-6">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          {about.title}
        </h1>
      </div>
      <Mdx code={about.body.code} tweets={{}} />
    </section>
  );
}
