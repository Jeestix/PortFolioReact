import styles from "./TextContainer.module.css";

interface TextContainerContent {
  children: React.ReactNode;
}

export function TextContainer({ children }: TextContainerContent) {
  return <div className={styles.container}>{children}</div>;
}
