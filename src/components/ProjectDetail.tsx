import React from "react";
import styles from "./ProjectDetail.module.css";

import { Body, Header, Asset } from ".";

export function ProjectDetail({ project }: any) {
  const { projectName, mainImage, body } = project;

  return (
    <div className={styles.wrapper}>
      <Asset assetId={mainImage.sys.id} />
      <Header>{projectName}</Header>
      <Body content={body.content} />
    </div>
  );
}
