import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Project } from './pages';
import { Layout, RootRedirect } from './elements';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path=":lang" element={<Layout />}>
        <Route index path="" element={<Home />} />

        <Route path="projects" element={<div>projects</div>} />
        <Route path="projects/:projectId" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
