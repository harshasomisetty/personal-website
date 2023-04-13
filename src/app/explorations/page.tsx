import { ProjectCard } from "../../components/Projects";

export default function ExplorationsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Explorations</h1>
      <div>
        <ProjectCard projectName="TwitBlog" />
        <ProjectCard projectName="Checkra" />
      </div>
    </section>
  );
}
