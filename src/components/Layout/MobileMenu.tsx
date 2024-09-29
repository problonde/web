import classNames from "classnames";
import React, { useEffect } from "react";
import useTransition from "react-transition-state";
import styles from "./MobileMenu.module.css";
import { useLockBodyScroll } from "react-use";
import { MobileHeader } from "./MobileHeader";

interface Props {
  open: boolean;
  close: () => void;
}
export function MobileMenu({ open, close }: Props) {
  const [{ status }, toggle] = useTransition({
    timeout: 200,
    mountOnEnter: true,
    preEnter: true,
    unmountOnExit: true,
  });

  useEffect(() => {
    toggle(open);
  }, [open]);

  useLockBodyScroll(open);

  if (status === "unmounted") {
    return null;
  }

  return (
    <div className={classNames(styles.wrapper, status)}>
      <MobileHeader showLogo onClick={close} />
    </div>
  );
}
