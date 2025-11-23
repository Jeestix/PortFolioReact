import * as styles from "./TechContainer.module.css";

interface TechContainerContent {
  children: React.ReactNode;
}

export function TechContainer({ children }: TechContainerContent) {
  return <div className={styles.container}>{children}</div>;
}
