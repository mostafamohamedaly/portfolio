import React, { useEffect } from "react";
import animeBoy from "./../Images/AnimeBoy2.jpg";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Configs/projectsConfig";
import { Animate } from "react-simple-animate";

const Home = () => {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (!skillsSection) return;

      const progressBars = skillsSection.querySelectorAll(".progress-bar");
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        progressBars.forEach((bar) => {
          const percentage = bar.getAttribute("data-percentage");
          bar.style.width = percentage + "%";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <div className="overflow-x-hidden bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 min-h-screen text-white">
        {/* Header Section */}
        <header className="flex items-center justify-between p-5 px-8 sm:px-20 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-center sm:text-left">
            Mostafa.Dev
          </h1>
          <div className="sm:hidden">
            {/* Mobile Burger Menu */}
            <button
              id="burger-menu"
              className="text-white focus:outline-none"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex z-10 space-x-6 font-semibold items-center">
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "about")}
              className="hover:text-purple-400"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => smoothScroll(e, "skills")}
              className="hover:text-purple-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "projects")}
              className="hover:text-purple-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, "contact")}
              className="hover:text-purple-400"
            >
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-1.5 hover:bg-blue-500 transition duration-300">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 24"
                  >
                    <path d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S0 2.12 0 3.5 1.12 6 2.5 6 4.98 4.88 4.98 3.5zM.01 24h5V7H.01v17zM7 7h5v2.3h.07c.69-1.22 2.37-2.5 4.93-2.5C20.12 6.8 21 9.4 21 13.9v10.1h-5v-8.8c0-2.1-.74-3.5-2.58-3.5-1.41 0-2.24.95-2.6 1.86-.13.33-.17.79-.17 1.25v9.2H7V7z" />
                  </svg>
                </a>
              </div>
              <div className="bg-white rounded-full p-1.5 hover:bg-black transition duration-300">
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.41 7.87 10.94.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.11-3.23.7-3.9-1.56-3.9-1.56-.53-1.37-1.29-1.73-1.29-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.72-1.55-2.57-.29-5.28-1.29-5.28-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.21 1.2a11.23 11.23 0 012.92-.39c.99 0 2 .13 2.92.39 2.23-1.52 3.21-1.2 3.21-1.2.63 1.64.23 2.86.11 3.16.74.82 1.2 1.86 1.2 3.14 0 4.5-2.71 5.48-5.3 5.77.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.8.55C20.71 21.41 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </header>
        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className="hidden sm:hidden fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-50"
        >
          <a
            href="#about"
            onClick={(e) => smoothScroll(e, "about")}
            className="text-white text-xl"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => smoothScroll(e, "skills")}
            className="text-white text-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => smoothScroll(e, "projects")}
            className="text-white text-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "contact")}
            className="text-white text-xl"
          >
            Contact
          </a>
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-1.5 hover:bg-blue-500 transition duration-300">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 24"
                >
                  <path d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S0 2.12 0 3.5 1.12 6 2.5 6 4.98 4.88 4.98 3.5zM.01 24h5V7H.01v17zM7 7h5v2.3h.07c.69-1.22 2.37-2.5 4.93-2.5C20.12 6.8 21 9.4 21 13.9v10.1h-5v-8.8c0-2.1-.74-3.5-2.58-3.5-1.41 0-2.24.95-2.6 1.86-.13.33-.17.79-.17 1.25v9.2H7V7z" />
                </svg>
              </a>
            </div>
            <div className="bg-white rounded-full p-1.5 hover:bg-black transition duration-300">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.41 7.87 10.94.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.11-3.23.7-3.9-1.56-3.9-1.56-.53-1.37-1.29-1.73-1.29-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.72-1.55-2.57-.29-5.28-1.29-5.28-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.21 1.2a11.23 11.23 0 012.92-.39c.99 0 2 .13 2.92.39 2.23-1.52 3.21-1.2 3.21-1.2.63 1.64.23 2.86.11 3.16.74.82 1.2 1.86 1.2 3.14 0 4.5-2.71 5.48-5.3 5.77.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.8.55C20.71 21.41 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </a>
            </div>
          </div>
          <button
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
            className="text-white text-lg mt-4"
          >
            Close Menu
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center h-screen sm:flex-row sm:justify-around">
          <div className="z-10">
            <div className="hero-container">
              <h2
                className="hero glitch layers text-3xl sm:text-6xl font-extrabold mb-4"
                data-text="Welcome to My World"
              >
                <span>Welcome to My World</span>
              </h2>
              <p className="text-base sm:text-lg max-w-md sm:max-w-2xl md:ml-[65px] text-center pb-6">
                I create sleek, high-performance user interfaces and love
                crafting exceptional web experiences.
              </p>
              <button
                className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 hover:bg-purple-800 rounded-lg text-base sm:text-lg transition-all"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </button>
            </div>
          </div>
          <img
            className="hidden md:block min-w-[600px] absolute -right-[550px] rounded-full fade-circle z-0"
            src={animeBoy}
          />
        </section>
        {/* About Section */}
        <section id="about" className="px-10 py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg">
              Hello! I'm a passionate developer specializing in ReactJS,
              TailwindCSS, and creating engaging user interfaces. With a knack
              for detail and performance, I aim to deliver high-quality projects
              tailored to the user's needs.
            </p>
            <div className="flex justify-center pt-10">
              <button
                className="px-8 py-3 bg-purple-600 hover:bg-purple-800 rounded-lg text-lg transition-all"
                onClick={() => window.open("/resume", "_blank")}
              >
                My Resume
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-10 py-20 bg-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              My Tools & Skills
            </h2>
            <div className="space-y-6">
              {/* Skill Item */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">ReactJS</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="85"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              {/* Additional Skill Items */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    TailwindCSS (CSS in General)
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="95"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">VueJS</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="60"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>{" "}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Svelte</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="50"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">JavaScript</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="80"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">NodeJS</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="75"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Python</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="60"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Java</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar h-full bg-purple-600 ease-in-out duration-[1500ms]"
                    data-percentage="70"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-10 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Project Card */}
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-10 py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="mb-8 text-lg">
              Interested in working together or have any questions? Reach out to
              me!
            </p>
            <a
              href="mailto:mostafamuhamedaly@gmail.com"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-800 rounded-lg text-lg transition-all inline-block"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-5 bg-gray-900">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mostafa.MA . All rights reserved.
          </p>
        </footer>
      </div>
    </Animate>
  );
};

export default Home;
