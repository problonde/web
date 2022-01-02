import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/index";
import { Project } from "./pages/project";
import { Lang } from "./components/lang";
import { RootRedirect } from "./components/root_redirect";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<Lang />}>
        <Route index path="home" element={<Index />} />
        <Route path="projects" element={ <div>projects</div> } />
        <Route path="projects/:projectId" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
