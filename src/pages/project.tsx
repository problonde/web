import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../hooks/contentful';

export function Project() {
  const { projectId } = useParams();
  // add loading and error
  const { data = { items: [] } } = useProjects();
  const { items } = data;

  return (
    <div>
      <h2>
        Project
        {projectId}
      </h2>
      {items.map((item) => (
        <h3>{item.fields.projectName}</h3>
      ))}
    </div>
  );
}
