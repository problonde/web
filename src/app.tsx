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
        <Route index path="" element={<Home />} />

        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
