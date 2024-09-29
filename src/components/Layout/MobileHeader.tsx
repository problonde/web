import React from "react";
import styles from "./MobileHeader.module.css";
import { MenuIcon } from "./MenuIcon";
import classNames from "classnames";

interface Props {
  onClick: () => void;
  showLogo: boolean;
}
export function MobileHeader({ onClick, showLogo }: Props) {
  return (
    <div className={styles.header}>
      <h1 className={classNames(styles.logo, { [styles.hidden]: !showLogo })}>
        problonde
      </h1>
      <MenuIcon onClick={onClick} />
    </div>
  );
}
