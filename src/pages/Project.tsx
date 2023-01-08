import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProject } from "../hooks/contentful";
import { BackgroundType, useGlobalBackground } from "../state/global";

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
      setBackground({ type: BackgroundType.Full, color: fields.color });
    }

    return () => setBackground({ type: BackgroundType.Full, color: "#FFFFFF" });
  }, [fields]);

  if (loading) {
    return null;
  }

  return (
    <ProjectDetail project={fields} />
  );
}
