export const bio = () => {
  return (
    <>
      I'm obsessed with exploring new ideas and diving into various passions,
      with interests ranging from technology, fitness, and personal growth to
      acting, theater, storytelling, and dancing. I'm all about staying
      authentic, vulnerable, and keeping things real, so you can expect some
      cringe alongside the valuable insights and experiences I share. as I
      continue to learn and create, my mission is to inspire others to follow
      their unique paths and embrace continuous growth. join me as we learn and
      grow together, navigating this incredible journey called life.
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
    </section>
  );
}
