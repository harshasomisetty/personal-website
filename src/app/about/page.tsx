const bio = () => {
  return (
    <>
      Learning topics I consider fun, and using my tech skills/historical tilt
      to approach these topics from a unique angle.
    </>
  );
};

const background = () => {
  return (
    <>
      I work as a software engineer where my job is build out products from
      start to end. Before that, I finsihed up Rutgers&#39;23, where I triple
      majored in math, comp sci, and stats, then spent ~2 years exploring art,
      dancing, history, theater, music, religion, philosophy, and poli sci.
      After immersing myself in the logical and creative, surveying the
      connections between subjects, and thinking about the future, I&#39;m in a
      spot to start sharing my takeaways with the world.
    </>
  );
};

const website = () => {
  return (
    <>
      This website will serve as a portfolio of what I explore, and a place to
      dig deeper into my thoughts on these explorations.
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
