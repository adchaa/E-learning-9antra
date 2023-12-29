import { useState } from "react";
import styles from "./PrimaryBtn.module.css";

export default function PrimaryBtn(props) {
  const { text, clickfn } = props;
  return (
    <button className={styles.primary} onClick={clickfn}>
      {text}
    </button>
  );
}
