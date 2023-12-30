import styles from "./SendBtn.module.css";
export default function SendBtn(props) {
  const { textmessage } = props;
  return (
    <div className={styles.btn}>
      <input className={styles.send} type="submit" value={textmessage} />
    </div>
  );
}
