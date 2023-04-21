const bio = () => {
  return (
    <>
      Utilizing every skill I have to learn various passions, and sharing those
      learning with others.
    </>
  );
};

const history = () => {
  return (
    <>
      Right now, I work as a software engineer where my job is build out
      products from start to end. This is where I thrive, and I intend to
      leverage the same product-building skills to enable new skills in all the
      areas I intend to explore. More info soon :)
    </>
  );
};

const education = () => {
  return (
    <p>
      I graduated from Rutgers in 2023, where I triple majored in math, comp
      sci, and stats in 2 years, and spent the other 2 years exploring art,
      history, theater, music, religion, philosophy, and poli sci. Looking back,
      the majors gave me the how, while the liberal arts gave me the why behind
      the ideas I persue.
    </p>
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
        {history()}
      </p>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {education()}
      </p>
    </section>
  );
}
