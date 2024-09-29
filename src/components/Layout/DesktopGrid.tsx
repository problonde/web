import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./DesktopGrid.module.css";
import { useGlobalBackground } from "../../state/global";
import { Language } from "../../types";
import { useLinks } from "../../hooks/contentful";
import { backgroundCSS } from "./backgroundCSS";
import { useIntersection } from "./useIntersection";
import { useIsHome } from "./useIsHome";

interface Props extends PropsWithChildren {
  lang: Language;
}
export function DesktopGrid({ children, lang }: Props) {
  const [background] = useGlobalBackground();
  const {
    data: { items },
  } = useLinks();
  const { intersects, ref: intersectionRef } = useIntersection();
  const isHome = useIsHome();

  return (
    <div className={styles.grid} style={backgroundCSS(background)}>
      <Link className={classNames(styles.areaA, styles.bigLink)} to="projects">
        PROJECTS
      </Link>
      <div className={classNames(styles.areaAll, styles.center)}>
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
        {children}
      </div>
      <Link className={classNames(styles.areaB, styles.bigLink)} to="studio">
        STUDIO
      </Link>
      <Link className={classNames(styles.areaC, styles.bigLink)} to="contact">
        CONTACT
      </Link>
      {lang === "en" && (
        <Link className={classNames(styles.areaD, styles.bigLink)} to="/pl">
          PL
        </Link>
      )}
      {lang === "pl" && (
        <Link className={classNames(styles.areaD, styles.bigLink)} to="/en">
          ENG
        </Link>
      )}
      {isHome && (
        <div className={classNames(styles.areaF, styles.bottomWrapper)}>
          {items.map((link: any, index: number) => (
            <span key={link.fields.title}>
              {index > 0 && " / "}
              <a
                className={classNames(styles.bigLink)}
                target="_blank"
                href={link.fields.link}
                rel="noreferrer"
              >
                {link.fields.title}
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
