import styles from "./Project.module.css";
import { getProjects } from "../../../datamanagment/data";

const projects = getProjects();

export function Project() {
  return (
    <div className={styles.container}>
      {projects.map((project, index) => (
        <a
          key={index}
          className={styles.project}
          href={project.url}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <span className={styles.title}>{project.name}</span>
          <span className={styles.desc}>{project.description}</span>
        </a>
      ))}
    </div>
  );
}
