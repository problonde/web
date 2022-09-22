import React, { useEffect } from "react";
// import styled from 'styled-components';
import { useParams } from "react-router-dom";

import { useProject } from "../hooks/contentful";
import { useGlobalBackground } from "../state/global";

import { ProjectDetail } from "../components";

export function Project() {
  const { projectId } = useParams();
  // add loading and error
  if (!projectId) { return null; } // redirect to projects
  const [, setBackground] = useGlobalBackground();
  const { data, loading } = useProject(projectId);
  const { fields } = data;

  useEffect(() => {
    if (fields) {
      setBackground(fields.color);
    }

    return () => setBackground("#FFFFFF");
  }, [fields]);

  if (loading) {
    return null;
  }

  return (
    <ProjectDetail project={fields} />
  );
}
