import styles from "./ProfilePic.module.css";
import { getProfilePicURL, getBannerPicURL } from "../../../datamanagment/data";

const pfpImage = getProfilePicURL();
const backgroundIMG = getBannerPicURL();

export function ProfilePic() {
  return (
    <div className={styles.container}>
      <img className={styles.backgroundIMG} src={backgroundIMG}></img>
      <img className={styles.pfp} src={pfpImage}></img>
    </div>
  );
}
