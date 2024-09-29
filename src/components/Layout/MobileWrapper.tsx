import React, { PropsWithChildren, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./MobileWrapper.module.css";
import { Language } from "../../types";
import { useGlobalBackground } from "../../state/global";
import { backgroundCSS } from "./backgroundCSS";
import { useLinks } from "../../hooks/contentful";
import classNames from "classnames";
import { useIsHome } from "./useIsHome";
import { useIntersection } from "./useIntersection";
import { MobileMenu } from "./MobileMenu";
import { MenuIcon } from "./MenuIcon";

interface Props extends PropsWithChildren {
  lang: Language;
}
export function MobileWrapper({ lang, children }: Props) {
  const [background] = useGlobalBackground();
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    data: { items },
  } = useLinks();

  const { ref: intersectionRef, intersects } = useIntersection();
  const isHome = useIsHome();

  return (
    <div style={backgroundCSS(background)} className={styles.wrapper}>
      <div className={styles.header}>
        <h1
          className={classNames(styles.logo, { [styles.hidden]: intersects })}
        >
          problonde
        </h1>
        <MenuIcon onClick={() => setMenuOpen(true)} />
      </div>
      {isHome && (
        <div className={styles.logoWrapper}>
          <h1 className={styles.hugeLogo} ref={intersectionRef}>
            problonde
          </h1>
        </div>
      )}
      {children}
      <MobileMenu open={menuOpen} close={() => setMenuOpen(false)} />
    </div>
  );
}
