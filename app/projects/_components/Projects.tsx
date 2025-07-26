import projects from "@/app/_lib/projects";
import EachProject from "./EachProject";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projectGeneralContainer}>
      <ul className={styles.firstUL}>
        {projects.map((project, index) => (
            <EachProject data={project} key={project.id} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
