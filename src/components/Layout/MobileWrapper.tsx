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
import { MobileHeader } from "./MobileHeader";

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
      <MobileHeader onClick={() => setMenuOpen(true)} showLogo={!intersects} />
      {isHome && (
        <div className={styles.logoWrapper}>
          <h1 className={styles.hugeLogo} ref={intersectionRef}>
            problonde
          </h1>
        </div>
      )}
      {children}
      <MobileMenu
        lang={lang}
        open={menuOpen}
        close={() => setMenuOpen(false)}
      />
    </div>
  );
}
