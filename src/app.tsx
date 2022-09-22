import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Project, Projects } from "./pages";
import { Layout, RootRedirect } from "./components";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<Layout />}>
        <Route path="" element={<Home />} />

        <Route path="projects">
          <Route path="" element={<Projects />} />
          <Route path=":projectId" element={<Project />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
