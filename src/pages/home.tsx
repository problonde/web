import React from 'react';

import { useProjects } from '../hooks/contentful';

export function Home() {
  useProjects();

  return <h1>Index</h1>;
}
