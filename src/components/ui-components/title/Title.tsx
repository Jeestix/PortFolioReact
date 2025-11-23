import styles from "./Title.module.css";

interface TitleContent {
  children: string;
}

export function Title({ children }: TitleContent) {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
    </div>
  );
}
