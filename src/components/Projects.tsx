interface Props {
  projectName: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  location: string;
  link: string;
  image?: string;
}

export const ProjectCard = (props: Props) => {
  const project = projectsData[props.projectName];
  return (
    <div className="flex flex-col border-2 rounded border-white antialiased m-2 p-2 w-full space-y-3">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="">{project.description}</p>
      <p className="text-sm">{project.tech}</p>

      <div className="p-1 w-fit border rounded-lg border-white shadow-sm hover:shadow-xl">
        <a href={`http://${project.link}`}>
          <p>View on {project.location}</p>
        </a>
      </div>
    </div>
  );
};

const projectsData: Record<string, ProjectCardProps> = {
  PerpetualsExchange: {
    title: "Perpetuals Exchange",
    link: "https://perps-ui.vercel.app/trade/SOL-USD",
    description:
      "Perpetuals Exchange built on Solana, with a focus on low fees and high throughput",
    location: "Web",
    tech: "React, Typescript, Solana, Rust, Web3, Next.js, Tailwind, Vercel",
    image: "perpetuals",
  },
  TwitBlog: {
    title: "TwitBlog",
    link: "twitblog.xyz",
    description:
      "Twitter Thread Aggregator that identifies all of a User's Threads, and identifies relevant topics",
    location: "Web",
    tech: "MERN stack (Mongodb, Express, React, Node) with Tailwind, NginX, with a multi-container Docker architecture, with Python Data Processing. Deployed on DigitalOcean.",
    image: "twitblog",
  },
  Checkra: {
    title: "Checkra",
    link: "checkra.xyz",
    description:
      "Podcast aggregator that creates podcast notes, timestamps, and identifies keywords/entities",
    location: "Web",
    tech: "Full Stack Python for Dataprocessing and Website. Spacy for NLP, Flask/Plotly for Website, Deployed on Heroku.",
    image: "checkra",
  },
};
