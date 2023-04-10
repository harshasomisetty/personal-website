import Image from "next/image";

import { Inter } from "next/font/google";
import { Platform, SocialLink } from "@/app/components/Socials";

const inter = Inter({ subsets: ["latin"] });

const about = () => {
  return (
    <>
      hi, i'm Harsha, a creative explorer and documenter. i work on projects and
      document my progress, work as a software engineer @ solana labs, and a
      rutgers '23 grad.
    </>
  );
};
export const bio = () => {
  return (
    <>
      i'm obsessed with exploring new ideas and diving into various passions,
      with interests ranging from technology, fitness, and personal growth to
      acting, theater, storytelling, and dancing. i'm all about staying
      authentic, vulnerable, and keeping things real, so you can expect some
      cringe alongside the valuable insights and experiences i share. as i
      continue to learn and create, my mission is to inspire others to follow
      their unique paths and embrace continuous growth. join me as we learn and
      grow together, navigating this incredible journey called life.
    </>
  );
};

export default function Home() {
  console.log("tesst");
  console.log("home platform", Platform.Github);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-3xl font-serif">Harsha Somisetty</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className="flex flex-row">
        <SocialLink platform={Platform.Github} />
        <SocialLink platform={Platform.Linkedin} />
        <SocialLink platform={Platform.Twitter} />
        <SocialLink platform={Platform.Youtube} />
        <SocialLink platform={Platform.Instagram} />
      </div>
    </main>
  );
}
