import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Project } from "./pages";
import { Lang } from "./elements/lang";
import { RootRedirect } from "./elements/root_redirect";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang(pl|en)" element={<Lang />}>
        <Route index path="home" element={<Home />} />
        <Route path="projects" element={ <div>projects</div> } />
        <Route path="projects/:projectId" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
