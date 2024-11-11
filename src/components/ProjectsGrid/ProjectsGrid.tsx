import React, { useEffect, useState } from "react";
import styles from "./ProjectsGrid.module.css";

import { ProjectType } from "../../types";
import { useGlobalBackground } from "../../state/global";
import { ProjectItem } from "./ProjectItem";
import { Filter } from "./Filter";

export function ProjectsGrid({ projects }: any) {
  const [filter, setFilter] = useState<ProjectType | null>(null);
  const filteredProjects = filter
    ? projects.filter((project: any) =>
        project.fields.projectType.includes(filter),
      )
    : projects;

  const [, setBackground] = useGlobalBackground();

  useEffect(() => {
    setBackground({ type: "Full", color: "#FFFFFF" });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className={styles.grid}>
        {filteredProjects.map((item: any) => (
          <ProjectItem key={`pg-item-${item.sys.id}`} project={item} />
        ))}
      </ul>
    </div>
  );
}
