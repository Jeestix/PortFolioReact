import styles from "./Title.module.css";
import { getTitle } from "../../../datamanagment/data";

const title = getTitle();

export function Title() {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}
