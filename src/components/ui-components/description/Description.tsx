import styles from "./Description.module.css";
import { getDescription } from "../../../datamanagment/data";

const description = getDescription();

export function Description() {
  return (
    <div className={styles.container}>
      <p>{description}</p>
    </div>
  );
}
