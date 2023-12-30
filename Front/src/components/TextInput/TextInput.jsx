import styles from "./TextInput.module.css";
export default function TextInput(props) {
  const { title, placeholder } = props;
  return (
    <div className={styles.name}>
      <p className={styles.title}>{title}</p>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
