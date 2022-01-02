import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Project } from "./pages";
import { Layout, RootRedirect } from "./elements";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<Layout />}>
        <Route index path="" element={<Home />} />

        <Route path="projects" element={ <div>projects</div> } />
        <Route path="projects/:projectId" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
