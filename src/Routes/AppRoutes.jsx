import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../Pages/SplashScreen/SplashScreen";
import ResumePage from "../Resume/ResumePage";
import ProjectDetails from "../Pages/ProjectDetails";
import AllProjects from "../Pages/AllProjects";
import projects from "../Configs/projectsConfig";
import Home from "../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
    </Routes>
  );
};

export default AppRoutes;
