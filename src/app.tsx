import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact, Home, Project, Projects, Studio } from "./pages";
import { Layout, RootRedirect } from "./components";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="studio" element={<Studio />} />

        <Route path="projects">
          <Route path="" element={<Projects />} />
          <Route path=":projectId" element={<Project />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
