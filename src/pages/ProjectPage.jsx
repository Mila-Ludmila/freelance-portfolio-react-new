import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectList";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  if (!project) {
    // Обробка відсутності проекту з id
    return <div>Проект не знайдено</div>;
  }
  return (
    <main className="section">
      <div className="container">
        <div className="projects-details">
          <h1 className="title-1">{project.title}</h1>
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub link="https://github.com/Mila-Ludmila?tab=repositories" />
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
