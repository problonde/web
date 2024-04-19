import React from "react";

import classNames from "classnames";
import { useAsset } from "../hooks/contentful";
import styles from "./Asset.module.css";

type Props = {
  assetId: string;
  className?: string;
};
export function Asset({ assetId, className }: Props) {
  const { data, loading } = useAsset(assetId);
  const { fields } = data;

  if (loading) {
    return null;
  }

  const type = fields.file.contentType.split("/")[0];

  return type === "image" ? (
    <img
      className={classNames(styles.img, className)}
      alt=""
      src={fields.file.url}
    />
  ) : (
    <video className={classNames(styles.video, className)} controls>
      <source src={fields.file.url} />
    </video>
  );
}
