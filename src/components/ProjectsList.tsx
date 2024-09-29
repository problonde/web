import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsList.module.css";

import { useProjects } from "../hooks/contentful";
import { useGlobalBackground } from "../state/global";

import { ProjectData, ProjectFields } from "../types/Project";

export function ProjectsList() {
  const {
    data: { items },
  } = useProjects();
  const [, setBackground] = useGlobalBackground();

  const handleEnter = (fields: ProjectFields) => () => {
    setBackground({ type: "Full", color: fields.color });
  };

  const handleLeave = () => {
    setBackground({ type: "Animated", color: "#FFFFFF" });
  };

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div className={styles.item} key={item.sys.id}>
          <Link
            className={styles.link}
            onMouseEnter={handleEnter(item.fields)}
            onMouseLeave={handleLeave}
            to={`projects/${item.sys.id}`}
          >
            {item.fields.projectName}
          </Link>
        </div>
      ))}
    </div>
  );
}
