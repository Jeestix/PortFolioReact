import styles from "./ProfilePic.module.css";
const pfpImage = "/img/pfp.jpg";
const backgroundIMG = "/img/background.jpg";

export function ProfilePic() {
  return (
    <div className={styles.container}>
      <img className={styles.backgroundIMG} src={backgroundIMG}></img>
      <img className={styles.pfp} src={pfpImage}></img>
    </div>
  );
}
