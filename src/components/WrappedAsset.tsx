import React from "react";
import classNames from "classnames";
import styles from "./WrappedAsset.module.css";

import { useAsset } from "../hooks/contentful";

type Props = {
  assetId: string;
  className?: string;
};
export function WrappedAsset({ assetId, className }: Props) {
  const { data, loading } = useAsset(assetId);
  const { fields, metadata } = data;

  if (loading) {
    return null;
  }

  const type = fields.file.contentType.split("/")[0];
  const tags = metadata.tags.map((tag: any) => tag.sys.id);

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.narrowWrapper]: !tags.includes("wide"),
      })}
    >
      {type === "image" ? (
        <img className={styles.image} alt="" src={fields.file.url} />
      ) : (
        <video className={styles.video} controls>
          <source src={fields.file.url} />
        </video>
      )}
    </div>
  );
}
