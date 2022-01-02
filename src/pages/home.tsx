import React from "react";

import { useProjects } from "../hooks/contentful";

export const Home = () => {
  useProjects();

  return <h1>Index</h1>;
};
