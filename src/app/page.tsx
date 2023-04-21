import Image from "next/image";

import { Inter } from "next/font/google";
import { Platform, SocialLink } from "../components/Socials";
import { avatar } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

const about = () => {
  return <>Channeling the ultimate generalist</>;
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
    <section>
      <h1 className="font-bold text-3xl font-serif text-center sm:text-start">
        Harsha Somisetty
      </h1>
      <div className="flex items-center md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={"Harsha Somisetty"}
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
      <p className="hidden sm:flex my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {aboutMore()}
      </p>
      <ul className="hidden sm:flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@harshasomisetty"
          >
            <p className="h-7">follow me on youtube</p>
          </a>
        </li>
      </ul>
      <div className="md:hidden flex flex-col">
        <SocialLink platform={Platform.Instagram} />
        <SocialLink platform={Platform.Youtube} />
        <SocialLink platform={Platform.Github} />
        <SocialLink platform={Platform.Twitter} />
        <SocialLink platform={Platform.Linkedin} />
      </div>
    </section>
  );
}
