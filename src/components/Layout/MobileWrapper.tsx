import React, { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import styles from "./MobileWrapper.module.css";
import { Language } from "../../types";
import { useGlobalBackground } from "../../state/global";
import { backgroundCSS } from "./backgroundCSS";
import { useLinks } from "../../hooks/contentful";

interface Props extends PropsWithChildren {
  lang: Language;
}
export function MobileWrapper({ lang, children }: Props) {
  const [background] = useGlobalBackground();
  const {
    data: { items },
  } = useLinks();

  const location = useLocation();
  // eslint-disable-next-line
  const isHome = location.pathname.match(/^\/(pl|en)[\/]?$/);

  return (
    <div style={backgroundCSS(background)} className={styles.wrapper}>
      {children}
    </div>
  );
}
