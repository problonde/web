import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import classNames from "classnames";
import styles from "./Layout.module.css";

import { Language } from "../../types";
import { DesktopGrid } from "./DesktopGrid";
import { useWindowSize } from "react-use";
import { MobileWrapper } from "./MobileWrapper";

export function Layout() {
  const { lang } = useParams() as { lang: Language };
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  const date = new Date();

  const Wrapper = isMobile ? MobileWrapper : DesktopGrid;

  return (
    <Wrapper lang={lang}>
      <Outlet />
      <div className={styles.footer}>
        created by Problonde Studio {date.getFullYear()}
      </div>
    </Wrapper>
  );
}
