import styles from "./ProfilePic.module.css";
import pfpImage from "../../../assets/img/pfp.jpg";
import backgroundIMG from "../../../assets/img/placeholder.png";

export function ProfilePic() {
  return (
    <div className={styles.container}>
      <img className={styles.backgroundIMG} src={backgroundIMG}></img>
      <img className={styles.pfp} src={pfpImage}></img>
    </div>
  );
}
