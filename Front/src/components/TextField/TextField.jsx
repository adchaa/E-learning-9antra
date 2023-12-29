import styles from "./TextField.module.css";
export default function TextField(props) {
  const { title, placeholder } = props;
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <textarea className={styles.body} placeholder={placeholder}></textarea>
    </div>
  );
}
