import styles from "./HomeImg.module.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import people from "../../assets/people.png";
export default function HomeImg() {
  return (
    <div>
      <div className={styles.paragraph}>
        <p>Improve your skills on your own </p>
        <p className={styles.textcenter}>To prepare for a better future</p>
        <div className={styles.center}>
          <PrimaryBtn text="REGISTER NOW" />
        </div>
      </div>
      <div className={styles.photo}>
        <img src={people} />
      </div>
    </div>
  );
}
