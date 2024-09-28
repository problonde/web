import React, { useRef } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { useIntersection } from "react-use";
import classNames from "classnames";
import styles from "./Layout.module.css";

import { Language } from "../../types";
import { DesktopGrid } from "./DesktopGrid";

export function Layout() {
  const { lang } = useParams() as { lang: Language };

  const date = new Date();

  const location = useLocation();
  // eslint-disable-next-line
  const isHome = location.pathname.match(/^\/(pl|en)[\/]?$/);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <DesktopGrid lang={lang}>
      <h1
        className={classNames(styles.logo, {
          [styles.hidden]: !!intersection && intersection.isIntersecting,
        })}
      >
        problonde
      </h1>
      {isHome && (
        <h1 className={styles.hugeLogo} ref={intersectionRef}>
          problonde
        </h1>
      )}
      <Outlet />
      <div className={styles.footer}>
        created by Problonde Studio
        {date.getFullYear()}
      </div>
    </DesktopGrid>
  );
}
