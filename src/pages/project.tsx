import React from "react";
import { useParams } from "react-router-dom";

export Project = () => {
  { projectId } = useParams();

  return <h2>Project {projectId}</h2>;
};
