import React from "react";
import { useParams } from "react-router-dom";

export const Project = () => {
  const { projectId } = useParams();

  return (
    <h2>Project {projectId}</h2>
  );
};
