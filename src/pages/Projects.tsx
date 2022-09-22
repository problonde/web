import React from "react";

import { useProjects } from "../hooks/contentful";
import { ProjectsGrid } from "../components";

export function Projects() {
  const { data, loading } = useProjects();
  const { items } = data;

  if (loading) {
    return null;
  }

  return (
    <ProjectsGrid projects={items} />
  );
}
