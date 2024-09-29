import { CSSProperties } from "react";
import { Background } from "../../state/global";
import styles from "./animation.module.css";

export function backgroundCSS(background: Background): CSSProperties {
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
