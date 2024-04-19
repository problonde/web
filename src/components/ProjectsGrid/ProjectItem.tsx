import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useAsset } from "../../hooks/contentful";
import styles from "./ProjectItem.module.css";

export function ProjectItem({ project }: any) {
  const { data, loading } = useAsset(project.fields.mainImage.sys.id);
  const { fields } = data;

  if (loading) {
    return null;
  }

  return (
    <li className={styles.item} key={project.sys.id}>
      <Link
        style={
          {
            "--sq-bg-image": `url("${fields.file.url}")`,
            "--sq-bg-color": project.fields.color,
          } as CSSProperties
        }
        className={styles.squareLink}
        to={`${project.sys.id}`}
      >
        <div>{project.fields.projectName}</div>
      </Link>
    </li>
  );
}
