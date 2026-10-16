import Image from 'next/image';
import Link from 'next/link';

import { Platform, SocialLink } from '@/components/Socials';
import { business } from '@/lib/business';
import { avatar } from '@/lib/info';

const services = [
  {
    title: 'Product engineering',
    description:
      'Web and mobile applications, from the first prototype to a production launch.',
  },
  {
    title: 'AI and LLM integration',
    description:
      'Assistants, agents, and automation built on modern language models, wired into your existing tools and data.',
  },
  {
    title: 'Backend and infrastructure',
    description:
      'APIs, databases, payments, and cloud infrastructure that stay reliable as usage grows.',
  },
  {
    title: 'Technical advising',
    description:
      'Architecture reviews, build-versus-buy decisions, and hands-on help for founders and small teams.',
  },
];

export default function HomePage() {
  return (
    <section className="flex flex-col max-w-[650px]">
      <div className="flex items-center gap-5 mb-8">
        <Image
          alt={business.founder}
          className="rounded-full shrink-0 w-[72px] h-[72px] object-cover"
          src={avatar}
          placeholder="blur"
          width={72}
          priority
        />
        <div>
          <h1 className="font-bold text-3xl font-serif">{business.name}</h1>
          <p className="text-neutral-400">{business.tagline}</p>
        </div>
      </div>

      <p className="mb-4 text-neutral-200">
        {business.legalName} is a software consulting firm that designs and
        builds software for startups and growing businesses. We take products
        from idea to launch and keep them running after.
      </p>
      <p className="mb-10 text-neutral-200">
        The firm is led by {business.founder}, previously a software engineer at
        Solana Labs, where he built a payments product that processed over $80M
        through integrations with platforms like Shopify. See{' '}
        <Link href="/projects" className="underline underline-offset-4">
          past projects
        </Link>
        .
      </p>

      <h2 className="font-bold text-xl font-serif mb-4">Services</h2>
      <ul className="grid gap-4 sm:grid-cols-2 mb-10">
        {services.map((service) => (
          <li
            key={service.title}
            className="rounded-md border border-neutral-700 p-4"
          >
            <h3 className="font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-neutral-400">{service.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-xl font-serif mb-4">Contact</h2>
      <p className="mb-10 text-neutral-200">
        For new projects and questions, email{' '}
        <a
          href={`mailto:${business.email}`}
          className="underline underline-offset-4"
        >
          {business.email}
        </a>
        .
      </p>

      <h2 className="font-bold text-xl font-serif mb-4">Elsewhere</h2>
      <div className="flex flex-col w-full">
        <SocialLink platform={Platform.Linkedin} />
        <SocialLink platform={Platform.Github} />
        <SocialLink platform={Platform.X} />
        <SocialLink platform={Platform.Substack} />
        <SocialLink platform={Platform.Youtube} />
        <SocialLink platform={Platform.Instagram} />
        <SocialLink platform={Platform.Tiktok} />
      </div>
    </section>
  );
}
