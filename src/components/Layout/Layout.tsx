import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import classNames from "classnames";
import styles from "./Layout.module.css";

import { Language } from "../../types";
import { DesktopGrid } from "./DesktopGrid";

export function Layout() {
  const { lang } = useParams() as { lang: Language };

  const date = new Date();
  const [intersects, setIntersects] = useState(false);

  const location = useLocation();
  // eslint-disable-next-line
  const isHome = location.pathname.match(/^\/(pl|en)[\/]?$/);
  const intersectionRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIntersects(entries.slice(-1)[0].isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => observer.disconnect();
  }, [intersects]);

  return (
    <DesktopGrid lang={lang}>
      <h1
        className={classNames(styles.logo, {
          [styles.hidden]: intersects,
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
