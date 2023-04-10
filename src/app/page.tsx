import Image from "next/image";

import { Inter } from "next/font/google";
import { Platform, SocialLink } from "@/app/components/Socials";

const inter = Inter({ subsets: ["latin"] });

const about = () => {
  return (
    <>
      Blending my skills in building and insatiable curiosity to unravel the
      world's mysteries
    </>
  );
};
const aboutMore = () => {
  return (
    <>
      I build projects and document my progress, work as a software engineer @
      Solana labs, and am a Rutgers '23 grad.
    </>
  );
};

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-3xl font-serif">Harsha Somisetty</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        {/* <Image
          alt={"Harsha Somisetty"}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        /> */}
      </div>
      <p className="hidden sm:flex my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {aboutMore()}
      </p>
      <ul className="hidden sm:flex flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
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
      <div className="md:hidden flex flex-row">
        <SocialLink platform={Platform.Github} />
        <SocialLink platform={Platform.Linkedin} />
        <SocialLink platform={Platform.Twitter} />
        <SocialLink platform={Platform.Youtube} />
        <SocialLink platform={Platform.Instagram} />
      </div>
    </section>
  );
}
