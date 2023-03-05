import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import projects from "../data/portfolio.json";

export default function Projects() {
  console.log(projects);
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className = "mb-4">Projects</h1>
        <div class="row">
          {projects.map((project) => {
            return (
              <div class="col-md-4 d-flex justify-content-center mb-5">
                <ProjectCard
                  deployed={project.deployed}
                  name={project.name}
                  img={project.img}
                  alt={project.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
