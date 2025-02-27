import { Link } from "react-router-dom";
import projectData from "../data/projects"; // Import the updated project data

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-full py-40 bg-gradient-to-b from-blue-950 to-blue-800 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="header flex flex-col justify-center items-center gap-2">
            <h2 className="md:text-7xl text-5xl font-semibold text-center tracking-tight bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-blue-200 text-transparent">
              Recent Projects
            </h2>
            <p className="text-xl text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
              amet?
            </p>
          </div>
          <div className="h-full md:p-4 grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-6 items-center justify-center ">
            {projectData.map((project) => (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                className="card-project flex flex-col justify-end items-start gap-3"
              >
                <h1 className="text-2xl tracking-tight font-semibold bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 text-transparent">
                  {project.title}
                </h1>
                <ul className="flex gap-2">
                  {project.type.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;