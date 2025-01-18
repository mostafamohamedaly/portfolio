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
      <header className="flex items-center justify-between p-5 px-20 py-10">
        <h1 className="text-3xl font-bold tracking-wide">Mostafa.Dev</h1>
        <nav className="z-10 flex space-x-6 font-semibold">
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center flex flex-row justify-around items-center h-[80vh]">
        <div className="z-10">
          <div class="hero-container">
            <h2 class="hero glitch layers" data-text="Welcome to My World">
              <span>Welcome to My World</span>
            </h2>
            <p className="text-lg sm:text-2xl max-w-2xl text-left pb-6">
              I create sleek, high-performance user interfaces and love crafting
              exceptional web experiences.
            </p>
            <button
              className="flex justify-start px-8 py-3 bg-purple-600 hover:bg-purple-800 rounded-lg text-lg transition-all"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </button>
          </div>
          {/* <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 animate-pulse text-left">
            Welcome to My World
          </h2>
          */}
        </div>
        <div className="w-[600px]"></div>
        <img
          className="z-0 -right-[550px] absolute rounded-full fade-circle"
          src={animeBoy}
        />
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg">
            Hello! I'm a passionate developer specializing in ReactJS,
            TailwindCSS, and creating engaging user interfaces. With a knack for
            detail and performance, I aim to deliver high-quality projects
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
                <span>85%</span>
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
                <span>95%</span>
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
                <span className="font-semibold">JavaScript</span>
                <span>80%</span>
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
                <span>75%</span>
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
                <span>60%</span>
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
                <span>70%</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-8 text-lg">
            Interested in working together or have any questions? Reach out to
            me!
          </p>
          <a
            href="mailto:your.email@example.com"
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
