import styles from "./Header.module.css";

interface HeaderContent {
  children: string;
}

export function Header({ children }: HeaderContent) {
  return <h1 className={styles.header}>{children}</h1>;
}
