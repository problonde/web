import React, { PropsWithChildren } from "react";

import styles from "./ContactWrapper.module.css";

export function ContactWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
