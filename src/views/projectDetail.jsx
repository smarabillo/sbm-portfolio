import { useParams } from "react-router-dom";
import projectData from "../data/projects";
import { section } from "motion/react-client";

function ProjectDetail() {
  const { id } = useParams(); // Get the project id from the URL
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section id="projects" className="p-4 bg-blue-500">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <img src={project.image} alt={project.title} className="rounded-lg w-full max-w-3xl mx-auto" />
      <p className="mt-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Visit Project
      </a>
    </section>
  );
}

export default ProjectDetail;