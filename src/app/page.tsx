import Image from 'next/image';

import { Platform, SocialLink } from '@/components/Socials';
import { business } from '@/lib/business';
import { avatar } from '@/lib/info';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-bold text-3xl font-serif text-center sm:text-start">
        {business.founder}
      </h1>
      <p className="mt-2 text-neutral-400 text-center">
        Software developer. I take ideas from 0 to 1.
      </p>
      <div className="flex items-center md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={business.founder}
          className="rounded-full w-[100px] h-[100px] object-cover"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      <p className="mb-8 max-w-[460px] text-center text-neutral-200">
        I run {business.legalName}, a software development and consulting
        firm. For work inquiries, email{' '}
        <a
          href={`mailto:${business.email}`}
          className="underline underline-offset-4"
        >
          {business.email}
        </a>
        .
      </p>
      <div className="flex flex-col w-full">
        <SocialLink platform={Platform.Instagram} />
        <SocialLink platform={Platform.Tiktok} />
        <SocialLink platform={Platform.Substack} />
        <SocialLink platform={Platform.X} />
        <SocialLink platform={Platform.Youtube} />
        <SocialLink platform={Platform.Linkedin} />
        <SocialLink platform={Platform.Github} />
      </div>
    </section>
  );
}
