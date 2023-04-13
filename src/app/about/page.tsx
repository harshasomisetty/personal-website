const bio = () => {
  return (
    <>
      Obsessed with exploring new ideas and diving into various passions, with
      interests ranging from technology, fitness, and personal growth to acting,
      theater, storytelling, and dancing. As I continue to learn and create, my
      mission is to inspire others to follow their unique paths and embrace
      continuous growth.
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
