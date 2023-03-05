import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import projects from "../data/portfolio.json";

export default function Projects() {
  console.log(projects);
  return (
    <Layout>
      <div>
        <h1>Projects</h1>

        {projects.map((project) => {
          return (
            <ProjectCard
              deployed={project.deployed}
              name={project.name}
              img={project.img}
              alt={project.name}
            />
          );
        })}
      </div>
    </Layout>
  );
}
