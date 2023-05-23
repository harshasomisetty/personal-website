import Image from 'next/image';

import { Inter } from 'next/font/google';
import { Platform, SocialLink } from '../components/Socials';
import { avatar } from '@/lib/info';

const inter = Inter({ subsets: ['latin'] });

const about = () => {
  return <>Creating Context X Building Tech</>;
};
const aboutMore = () => {
  return (
    <>
      I create projects and document my progress, work as a software engineer @
      Solana labs, and am a Rutgers &apos;23 grad
    </>
  );
};

export default function HomePage() {
  //
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-bold text-3xl font-serif text-center sm:text-start">
        Harsha Somisetty
      </h1>
      <div className="flex items-center md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={'Harsha Somisetty'}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200 text-center sm:text-start">
        {about()}
      </p>
      {/* <p className="hidden sm:flex my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {aboutMore()}
      </p> */}
      <div className="flex flex-col w-full">
        <SocialLink platform={Platform.Youtube} />
        <SocialLink platform={Platform.Instagram} />
        <SocialLink platform={Platform.Github} />
        <SocialLink platform={Platform.Twitter} />
        <SocialLink platform={Platform.Linkedin} />
      </div>
    </section>
  );
}
