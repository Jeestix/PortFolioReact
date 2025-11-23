import styles from "./Technologie.module.css";
import { getTechnologies } from "../../../datamanagment/data";

const technologies = getTechnologies();

export function Technologie() {
  return (
    <div className={styles.container}>
      {technologies.map((item, index) =>
        item.items.map((technologie, index) => (
          <div key={index} className={styles[item.group]}>
            {technologie}
          </div>
        ))
      )}
    </div>
  );
}
