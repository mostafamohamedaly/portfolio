import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Configs/projectsConfig";
import { useTheme } from "../Context/ThemeContext";

const AllProjects = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  console.log('AllProjects - Projects data:', projects);
  console.log('AllProjects - Number of projects:', projects.length);

  useEffect(() => {
    // Scroll reveal animations
    const reveals = document.querySelectorAll(".scroll-reveal");

    const handleScroll = () => {
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Initial check for elements already in view
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-primary-900" : "bg-neutral-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mb-8 border-2 ${
              darkMode
                ? "border-neutral-600 hover:border-accent-500 text-neutral-300 hover:text-accent-400 hover:bg-accent-500/10"
                : "border-neutral-400 hover:border-accent-600 text-neutral-700 hover:text-accent-700 hover:bg-accent-50"
            }`}
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </button>

          <div className="text-center mb-12">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                darkMode
                  ? "bg-accent-900/30 text-accent-300"
                  : "bg-accent-100 text-accent-700"
              }`}
            >
              Portfolio
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-primary-900"
              }`}
            >
              All Projects
            </h1>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              A complete collection of my recent work showcasing design and development
              expertise across various technologies
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="scroll-reveal"
            >
              <ProjectCard project={project} darkMode={darkMode} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-neutral-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-accent-400" : "text-accent-600"
                }`}
              >
                {projects.length}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                Total Projects
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-accent-400" : "text-accent-600"
                }`}
              >
                {new Set(projects.flatMap(p => p.technologies || [])).size}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                Technologies Used
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-accent-400" : "text-accent-600"
                }`}
              >
                {projects.filter(p => p.url).length}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                Live Projects
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-accent-400" : "text-accent-600"
                }`}
              >
                100%
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
