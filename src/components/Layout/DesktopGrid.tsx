import React, { CSSProperties, PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./DesktopGrid.module.css";
import { Background, useGlobalBackground } from "../../state/global";
import { Language } from "../../types";
import { useLinks } from "../../hooks/contentful";

interface Props extends PropsWithChildren {
  lang: Language;
}
export function DesktopGrid({ children, lang }: Props) {
  const [background] = useGlobalBackground();
  const {
    data: { items },
  } = useLinks();

  const location = useLocation();
  // eslint-disable-next-line
  const isHome = location.pathname.match(/^\/(pl|en)[\/]?$/);

  return (
    <div className={styles.grid} style={backgroundCSS(background)}>
      <Link className={classNames(styles.areaA, styles.bigLink)} to="projects">
        PROJECTS
      </Link>
      <div className={classNames(styles.areaAll, styles.center)}>
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
    </div>
  );
}

function backgroundCSS(background: Background): CSSProperties {
  switch (background.type) {
    case "Animated":
      return {
        animationName: styles.background,
      };
    case "Half":
      return {
        "--layout-bg-color": `linear-gradient(180deg, ${background.color} "150vh"}, #FFFFFF 0%)`,
      } as CSSProperties;
    case "Full":
    default:
      return { "--layout-bg-color": background.color } as CSSProperties;
  }
}
