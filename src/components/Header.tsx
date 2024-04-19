import React from "react";
import styles from "./Header.module.css";

type Props = {
  children: React.ReactNode;
};

export function Header({ children }: Props) {
  return <h2 className={styles.header}>{children}</h2>;
}
