import React from "react";
import styles from "./MenuIcon.module.css";

interface Props {
  onClick: () => void;
}
export function MenuIcon({ onClick }: Props) {
  return (
    <a onClick={onClick} className={styles.link}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </a>
  );
}
