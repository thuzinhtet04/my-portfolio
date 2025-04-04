import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home.tsx";

import TestC from "./test.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Projects from "./pages/Projects.tsx";
import Layout from "./components/Layout.tsx";
import ChangeWallpaper from "./components/ChangeWallpaper";
const App = () => {
  const location = useLocation();
  const state = location.state;
  return (
      <>
        <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        <Route path="/test" element={<TestC />} />
        <Route path="/projects" element={<Projects />} />
            </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/wallpaper" element={<ChangeWallpaper />} />
        </Routes>
        )}
    </>
  );
};

export default App;
