import styles from "./ProjectContainer.module.css";

interface TProjectContainerContent {
  children: React.ReactNode;
}

export function ProjectContainer({ children }: ProjectContainerContent) {
  return <div className={styles.container}>{children}</div>;
}
