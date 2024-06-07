const bio = () => {
  return (
    <>
      I currently work as a software engineer at Solana Labs, where I build 0 to
      1 startup products. Absolutely love tech, and once you get to know me,
      you&apos;ll see how it pervades my life.
    </>
  );
};

const background = () => {
  return (
    <>
      I graduated from Rutgers&apos;23, where I triple majored in Math, Computer
      Science, and Statistics in 2.5 years. Then spent the rest of college
      studying acting, history, music, religion, philosophy, poli sci, and even
      dancing.
    </>
  );
};

const website = () => {
  return (
    <>
      I&apos;ve achieved most of the goals my younger self set for himself. Now
      with the freedom of adulthood, I&apos;m in the process of reorienting what
      I want from life. Will hopefully use this place to fleshout what exactly
      that is.
    </>
  );
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {background()}
      </p>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {website()}
      </p>
    </section>
  );
}
