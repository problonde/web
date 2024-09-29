import classNames from "classnames";
import React, { useEffect } from "react";
import useTransition from "react-transition-state";
import styles from "./MobileMenu.module.css";
import { useLockBodyScroll } from "react-use";
import { MobileHeader } from "./MobileHeader";
import { useProjects } from "../../hooks/contentful";
import { Link } from "react-router-dom";
import { Language } from "../../types";

interface Props {
  open: boolean;
  close: () => void;
  lang: Language;
}
export function MobileMenu({ open, close, lang }: Props) {
  const [{ status }, toggle] = useTransition({
    timeout: 200,
    mountOnEnter: true,
    preEnter: true,
    unmountOnExit: true,
  });

  const {
    data: { items },
  } = useProjects();

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
      <div className={styles.list}>
        <Link onClick={close} className={styles.link} to="projects">
          PROJECTS
        </Link>
        {items.map((item) => (
          <Link
            key={item.sys.id}
            onClick={close}
            className={styles.link}
            to={`projects/${item.sys.id}`}
          >
            {item.fields.projectName}
          </Link>
        ))}
        <Link onClick={close} className={styles.link} to="studio">
          STUDIO
        </Link>
        <Link onClick={close} className={styles.link} to="contact">
          CONTACT
        </Link>
        {lang === "en" && (
          <Link onClick={close} className={styles.link} to="/pl">
            PL
          </Link>
        )}
        {lang === "pl" && (
          <Link onClick={close} className={styles.link} to="/en">
            ENG
          </Link>
        )}
      </div>
    </div>
  );
}
