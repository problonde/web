import React from "react";
import { useParams } from "react-router-dom";
import { useProjects } from "../hooks/contentful";

export const Project = () => {
  const { projectId } = useParams();
  const { loading, error, data = { items: [] } } = useProjects();
  const { items } = data;
  console.log(items);

  return (
    <div>
      <h2>Project {projectId}</h2>
      {items.map(item => (
        <h3>{item.fields.projectName}</h3>
      ))}
    </div>
  );
};
