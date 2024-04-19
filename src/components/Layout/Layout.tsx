import React, { CSSProperties, useRef } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useIntersection } from "react-use";
import classNames from "classnames";
import styles from "./Layout.module.css";

import { Language } from "../../types";
import { useLinks } from "../../hooks/contentful";
import { Background, useGlobalBackground } from "../../state/global";

export function Layout() {
  const { lang } = useParams() as { lang: Language };
  const { data } = useLinks();
  const { items } = data;
  const [background] = useGlobalBackground();

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
    <div className={styles.wrapper} style={backgroundCSS(background)}>
      <Link
        className={classNames(
          styles.bigLink,
          styles.fixedLink,
          styles.top,
          styles.left,
        )}
        to="projects"
      >
        PROJECTS
      </Link>
      <Link
        className={classNames(
          styles.bigLink,
          styles.fixedLink,
          styles.bottom,
          styles.left,
        )}
        to="contact"
      >
        CONTACT
      </Link>
      <Link
        className={classNames(
          styles.bigLink,
          styles.fixedLink,
          styles.top,
          styles.right,
        )}
        to="studio"
      >
        STUDIO
      </Link>
      {lang === "en" && (
        <Link
          className={classNames(
            styles.bigLink,
            styles.fixedLink,
            styles.bottom,
            styles.right,
          )}
          to="/pl"
        >
          PL
        </Link>
      )}
      {lang === "pl" && (
        <Link
          className={classNames(
            styles.bigLink,
            styles.fixedLink,
            styles.bottom,
            styles.right,
          )}
          to="/en"
        >
          ENG
        </Link>
      )}
      {isHome && (
        <div className={styles.bottomWrapper}>
          {items.map((link: any, index: number) => (
            <span key={link.fields.title}>
              {index > 0 && " / "}
              <a
                className={styles.bigLink}
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
    </div>
  );
}

function backgroundCSS(background: Background): CSSProperties {
  switch (background.type) {
    case "Animated":
      return {
        animationName: styles.background,
        animationDuration: "10s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationPlayState: "running",
      };
    case "Half":
      return {
        background: `linear-gradient(180deg, ${background.color} "150vh"}, #FFFFFF 0%)`,
      };
    case "Full":
    default:
      return { background: background.color };
  }
}
