import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="projects" element={ <div>projects</div> }>
        <Route path=":projectId" element={ <Project /> }>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
