import styles from "./MainContainer.module.css";

interface MainContainerContent {
  children: React.ReactNode;
}

export function MainContainer({ children }: MainContainerContent) {
  return <div className={styles.container}>{children}</div>;
}
