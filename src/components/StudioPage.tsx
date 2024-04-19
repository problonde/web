import React, { useEffect } from "react";
import styles from "./StudioPage.module.css";
import { useSimplePage } from "../hooks/contentful";

import { useGlobalBackground } from "../state/global";
import { Asset } from "./Asset";
import { Body } from "./Body";

export function StudioPage() {
  const [, setBackground] = useGlobalBackground();
  const {
    data: { fields },
    loading,
  } = useSimplePage("4R8U3AHmYFGLsZiYpFPqKZ");

  useEffect(() => {
    setBackground({ type: "Full", color: "#FFFFFF" });
  }, []);

  if (!fields || loading) {
    return null;
  }
  const { image, body } = fields;

  return (
    <div className={styles.wrapper}>
      <Asset className={styles.asset} assetId={image.sys.id} />
      <Body className={styles.body} content={body.content} />
    </div>
  );
}
