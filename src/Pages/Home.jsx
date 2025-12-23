import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Configs/projectsConfig";
import { Animate } from "react-simple-animate";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const skills = [
    { name: "ReactJS", percentage: 85 },
    { name: "TailwindCSS (CSS in General)", percentage: 95 },
    { name: "VueJS", percentage: 60 },
    { name: "Svelte", percentage: 50 },
    { name: "JavaScript", percentage: 80 },
    { name: "NodeJS", percentage: 75 },
    { name: "Python", percentage: 60 },
    { name: "Java", percentage: 70 }
  ];

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position
      setScrolled(window.scrollY > 50);

      // Animate progress bars
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const progressBars = skillsSection.querySelectorAll(".progress-bar");
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
          progressBars.forEach((bar) => {
            const percentage = bar.getAttribute("data-percentage");
            bar.style.width = percentage + "%";
          });
        }
      }

      // Scroll reveal animations
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <div className={`overflow-x-hidden min-h-screen transition-colors duration-500 ${darkMode ? 'bg-primary-900 text-neutral-100' : 'bg-neutral-50 text-primary-900'}`}>
        {/* Header Section */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? 'bg-primary-900/95 backdrop-blur-lg border-b border-neutral-800/50 shadow-lg'
              : 'bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-lg'
            : darkMode
              ? 'bg-primary-900/80 backdrop-blur-md border-b border-neutral-800/50'
              : 'bg-white/80 backdrop-blur-md border-b border-neutral-200'
        }`}>
          <div className="flex items-center justify-between px-8 sm:px-20 py-5 max-w-7xl mx-auto">
            <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight scale-in ${darkMode ? 'text-white' : 'text-primary-900'}`}>
              Mostafa<span className="text-accent-500">.Dev</span>
            </h1>
            <div className="sm:hidden">
              {/* Mobile Burger Menu */}
              <button
                id="burger-menu"
                className={`focus:outline-none transition-colors ${darkMode ? 'text-white' : 'text-primary-900'}`}
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
            <nav className="hidden sm:flex z-10 space-x-8 font-medium items-center stagger-children">
              <a
                href="#about"
                onClick={(e) => smoothScroll(e, "about")}
                className={`relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                  darkMode
                    ? 'text-neutral-300 hover:text-accent-400 after:bg-accent-400'
                    : 'text-neutral-700 hover:text-accent-600 after:bg-accent-600'
                }`}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => smoothScroll(e, "skills")}
                className={`relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                  darkMode
                    ? 'text-neutral-300 hover:text-accent-400 after:bg-accent-400'
                    : 'text-neutral-700 hover:text-accent-600 after:bg-accent-600'
                }`}
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => smoothScroll(e, "projects")}
                className={`relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                  darkMode
                    ? 'text-neutral-300 hover:text-accent-400 after:bg-accent-400'
                    : 'text-neutral-700 hover:text-accent-600 after:bg-accent-600'
                }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, "contact")}
                className={`relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                  darkMode
                    ? 'text-neutral-300 hover:text-accent-400 after:bg-accent-400'
                    : 'text-neutral-700 hover:text-accent-600 after:bg-accent-600'
                }`}
              >
                Contact
              </a>
              <div className={`flex items-center space-x-3 ml-4 pl-4 border-l ${darkMode ? 'border-neutral-700' : 'border-neutral-300'}`}>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${
                    darkMode ? 'text-neutral-400 hover:text-accent-400' : 'text-neutral-600 hover:text-accent-600'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 24"
                  >
                    <path d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S0 2.12 0 3.5 1.12 6 2.5 6 4.98 4.88 4.98 3.5zM.01 24h5V7H.01v17zM7 7h5v2.3h.07c.69-1.22 2.37-2.5 4.93-2.5C20.12 6.8 21 9.4 21 13.9v10.1h-5v-8.8c0-2.1-.74-3.5-2.58-3.5-1.41 0-2.24.95-2.6 1.86-.13.33-.17.79-.17 1.25v9.2H7V7z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${
                    darkMode ? 'text-neutral-400 hover:text-accent-400' : 'text-neutral-600 hover:text-accent-600'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.41 7.87 10.94.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.11-3.23.7-3.9-1.56-3.9-1.56-.53-1.37-1.29-1.73-1.29-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.72-1.55-2.57-.29-5.28-1.29-5.28-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.21 1.2a11.23 11.23 0 012.92-.39c.99 0 2 .13 2.92.39 2.23-1.52 3.21-1.2 3.21-1.2.63 1.64.23 2.86.11 3.16.74.82 1.2 1.86 1.2 3.14 0 4.5-2.71 5.48-5.3 5.77.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.8.55C20.71 21.41 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                </a>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`ml-6 p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-accent-400'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-accent-600'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </nav>
          </div>
        </header>
        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`hidden fixed inset-0 backdrop-blur-lg sm:hidden flex-col items-center justify-center space-y-8 z-50 ${
            darkMode ? 'bg-primary-900/95' : 'bg-white/95'
          }`}
        >
          <a
            href="#about"
            onClick={(e) => {
              smoothScroll(e, "about");
              document.getElementById("mobile-menu").classList.toggle("hidden");
            }}
            className={`text-xl transition-all duration-300 hover:scale-110 ${
              darkMode ? 'text-white hover:text-accent-400' : 'text-primary-900 hover:text-accent-600'
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              smoothScroll(e, "skills");
              document.getElementById("mobile-menu").classList.toggle("hidden");
            }}
            className={`text-xl transition-all duration-300 hover:scale-110 ${
              darkMode ? 'text-white hover:text-accent-400' : 'text-primary-900 hover:text-accent-600'
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              smoothScroll(e, "projects");
              document.getElementById("mobile-menu").classList.toggle("hidden");
            }}
            className={`text-xl transition-all duration-300 hover:scale-110 ${
              darkMode ? 'text-white hover:text-accent-400' : 'text-primary-900 hover:text-accent-600'
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              smoothScroll(e, "contact");
              document.getElementById("mobile-menu").classList.toggle("hidden");
            }}
            className={`text-xl transition-all duration-300 hover:scale-110 ${
              darkMode ? 'text-white hover:text-accent-400' : 'text-primary-900 hover:text-accent-600'
            }`}
          >
            Contact
          </a>
          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-125 ${
                darkMode ? 'text-neutral-400 hover:text-accent-400' : 'text-neutral-600 hover:text-accent-600'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 24"
              >
                <path d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S0 2.12 0 3.5 1.12 6 2.5 6 4.98 4.88 4.98 3.5zM.01 24h5V7H.01v17zM7 7h5v2.3h.07c.69-1.22 2.37-2.5 4.93-2.5C20.12 6.8 21 9.4 21 13.9v10.1h-5v-8.8c0-2.1-.74-3.5-2.58-3.5-1.41 0-2.24.95-2.6 1.86-.13.33-.17.79-.17 1.25v9.2H7V7z" />
              </svg>
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-125 ${
                darkMode ? 'text-neutral-400 hover:text-accent-400' : 'text-neutral-600 hover:text-accent-600'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.41 7.87 10.94.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.11-3.23.7-3.9-1.56-3.9-1.56-.53-1.37-1.29-1.73-1.29-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.72-1.55-2.57-.29-5.28-1.29-5.28-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.21 1.2a11.23 11.23 0 012.92-.39c.99 0 2 .13 2.92.39 2.23-1.52 3.21-1.2 3.21-1.2.63 1.64.23 2.86.11 3.16.74.82 1.2 1.86 1.2 3.14 0 4.5-2.71 5.48-5.3 5.77.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.8.55C20.71 21.41 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
              </svg>
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-125 ${
                darkMode
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-accent-400'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-accent-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          <button
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
            className={`text-base mt-8 px-6 py-2 border rounded-lg transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'text-neutral-400 hover:text-white border-neutral-700 hover:border-neutral-500'
                : 'text-neutral-600 hover:text-primary-900 border-neutral-300 hover:border-neutral-500'
            }`}
          >
            Close
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen pt-24 px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto z-10">
            <div className="space-y-8">
              {/* Badge */}
              <span className={`fade-in-up inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                darkMode
                  ? 'bg-accent-900/30 text-accent-300 border border-accent-700/50'
                  : 'bg-accent-50 text-accent-700 border border-accent-200'
              }`}>
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
                Available for freelance work
              </span>

              {/* Main Heading */}
              <h2 className="hero hero-gradient-text text-4xl sm:text-6xl lg:text-8xl font-bold fade-in-up relative z-20">
                Developer & Designer
              </h2>

              {/* Subheading */}
              <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed fade-in-up ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                I create <span className={`font-semibold ${darkMode ? 'text-white' : 'text-primary-900'}`}>sleek, high-performance</span> user interfaces and love
                crafting <span className={`font-semibold ${darkMode ? 'text-white' : 'text-primary-900'}`}>exceptional web experiences</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 fade-in-up">
                <button
                  className={`group px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-500 shadow-medium hover:shadow-strong hover:scale-105 relative overflow-hidden ${
                    darkMode
                      ? 'bg-accent-600 hover:bg-accent-700 text-white'
                      : 'bg-accent-600 hover:bg-accent-700 text-white'
                  }`}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button
                  className={`px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-500 border-2 hover:scale-105 ${
                    darkMode
                      ? 'border-neutral-600 hover:border-accent-500 text-neutral-200 hover:text-accent-400 hover:bg-accent-500/10'
                      : 'border-neutral-400 hover:border-accent-600 text-neutral-700 hover:text-accent-700 hover:bg-accent-50'
                  }`}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </button>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 justify-center pt-8 max-w-2xl mx-auto fade-in-up">
                {['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'UI/UX'].map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                      darkMode
                        ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 shadow-soft'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Gradient Orbs */}
            <div className={`absolute top-1/4 -right-48 w-96 h-96 rounded-full blur-3xl pulse ${
              darkMode ? 'bg-accent-900/20' : 'bg-accent-200/40'
            }`}></div>
            <div className={`absolute bottom-1/4 -left-48 w-96 h-96 rounded-full blur-3xl pulse ${
              darkMode ? 'bg-primary-700/20' : 'bg-primary-200/40'
            }`} style={{ animationDelay: '2s' }}></div>
            <div className={`absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl pulse ${
              darkMode ? 'bg-accent-800/10' : 'bg-accent-100/50'
            }`} style={{ animationDelay: '1s' }}></div>

            {/* Floating Elements */}
            <div className={`absolute top-32 right-32 w-20 h-20 rounded-lg rotate-12 float ${
              darkMode ? 'bg-gradient-to-br from-accent-600/20 to-accent-800/20 border border-accent-700/30'
                        : 'bg-gradient-to-br from-accent-100 to-accent-200 border border-accent-300'
            }`}></div>
            <div className={`absolute bottom-40 left-20 w-16 h-16 rounded-full float ${
              darkMode ? 'bg-gradient-to-br from-primary-600/20 to-primary-800/20'
                        : 'bg-gradient-to-br from-primary-100 to-primary-200'
            }`} style={{ animationDelay: '1.5s' }}></div>
            <div className={`absolute top-1/2 right-1/4 w-12 h-12 rounded-lg -rotate-45 float ${
              darkMode ? 'bg-accent-700/20 border border-accent-600/30'
                        : 'bg-accent-100 border border-accent-200'
            }`} style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className={`w-6 h-6 ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className={`relative px-10 py-32 overflow-hidden ${
          darkMode ? 'bg-primary-800/30' : 'bg-white'
        }`}>
          <div className="max-w-5xl mx-auto">
            <div className="scroll-reveal text-center mb-12">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                darkMode ? 'bg-accent-900/30 text-accent-300' : 'bg-accent-100 text-accent-700'
              }`}>
                About Me
              </span>
              <h2 className={`text-5xl sm:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                Crafting Digital<br/>Experiences
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="scroll-reveal space-y-6">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  Hello! I'm a passionate <span className={`font-semibold ${darkMode ? 'text-white' : 'text-primary-900'}`}>developer and designer</span> specializing in ReactJS,
                  TailwindCSS, and creating engaging user interfaces.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  With a knack for detail and performance, I aim to deliver high-quality projects
                  tailored to the user's needs. Every pixel matters, every interaction counts.
                </p>
                <div className="flex gap-4 pt-4">
                  <button
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-soft hover:shadow-medium hover:scale-105 ${
                      darkMode
                        ? 'bg-transparent border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white'
                        : 'bg-transparent border-2 border-accent-600 text-accent-700 hover:bg-accent-600 hover:text-white'
                    }`}
                    onClick={() => window.open("/resume", "_blank")}
                  >
                    View My Resume
                  </button>
                </div>
              </div>

              {/* Right Column - Stats/Features */}
              <div className="scroll-reveal grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-neutral-800/50 border border-neutral-700/50' : 'bg-neutral-50 border border-neutral-200'
                }`}>
                  <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>5+</div>
                  <div className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Years Experience</div>
                </div>
                <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-neutral-800/50 border border-neutral-700/50' : 'bg-neutral-50 border border-neutral-200'
                }`}>
                  <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>50+</div>
                  <div className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Projects Completed</div>
                </div>
                <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-neutral-800/50 border border-neutral-700/50' : 'bg-neutral-50 border border-neutral-200'
                }`}>
                  <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>30+</div>
                  <div className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Happy Clients</div>
                </div>
                <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-neutral-800/50 border border-neutral-700/50' : 'bg-neutral-50 border border-neutral-200'
                }`}>
                  <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>100%</div>
                  <div className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className={`absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-accent-600' : 'bg-accent-300'
          }`}></div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`relative px-10 py-32 overflow-hidden ${
          darkMode ? 'bg-primary-900' : 'bg-neutral-100'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                darkMode ? 'bg-accent-900/30 text-accent-300' : 'bg-accent-100 text-accent-700'
              }`}>
                Skills
              </span>
              <h2 className={`text-5xl sm:text-6xl font-bold ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                Technical Expertise
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {skills.map((skill, index) => (
                <div key={index} className="scroll-reveal">
                  <div className="flex justify-between mb-3">
                    <span className={`font-semibold text-lg ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                      {skill.name}
                    </span>
                    <span className={`font-bold ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className={`w-full h-3 rounded-full overflow-hidden ${
                    darkMode ? 'bg-neutral-800' : 'bg-neutral-300'
                  }`}>
                    <div
                      className={`progress-bar h-full rounded-full ease-in-out duration-[1500ms] ${
                        darkMode
                          ? 'bg-gradient-to-r from-accent-600 to-accent-400'
                          : 'bg-gradient-to-r from-accent-600 to-accent-500'
                      }`}
                      data-percentage={skill.percentage}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`relative px-10 py-32 overflow-hidden ${
          darkMode ? 'bg-primary-800/30' : 'bg-white'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="scroll-reveal text-center mb-16">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                darkMode ? 'bg-accent-900/30 text-accent-300' : 'bg-accent-100 text-accent-700'
              }`}>
                Portfolio
              </span>
              <h2 className={`text-5xl sm:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                Featured Projects
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                A selection of my recent work showcasing design and development expertise
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {projects.map((project) => (
                <div key={project.id} className="scroll-reveal">
                  <ProjectCard project={project} darkMode={darkMode} />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className={`absolute bottom-20 left-20 w-40 h-40 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-accent-600' : 'bg-accent-300'
          }`}></div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`relative px-10 py-32 overflow-hidden ${
          darkMode ? 'bg-primary-900' : 'bg-neutral-100'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="scroll-reveal">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                darkMode ? 'bg-accent-900/30 text-accent-300' : 'bg-accent-100 text-accent-700'
              }`}>
                Contact
              </span>
              <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                Let's Create<br/>Something Amazing
              </h2>
              <p className={`mb-12 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                Have a project in mind? Let's bring your ideas to life together.
                I'm always open to discussing new opportunities and collaborations.
              </p>
              <a
                href="mailto:mostafamuhamedaly@gmail.com"
                className={`group inline-flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-500 shadow-medium hover:shadow-strong hover:scale-105 ${
                  darkMode
                    ? 'bg-accent-600 hover:bg-accent-700 text-white'
                    : 'bg-accent-600 hover:bg-accent-700 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Me an Email
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 ${
              darkMode ? 'bg-accent-600' : 'bg-accent-300'
            }`}></div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`relative text-center py-12 border-t ${
          darkMode ? 'bg-primary-900 border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-primary-900'}`}>
                Mostafa<span className="text-accent-500">.Dev</span>
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-125 ${
                    darkMode ? 'text-neutral-400 hover:text-accent-400' : 'text-neutral-600 hover:text-accent-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 24">
                    <path d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S0 2.12 0 3.5 1.12 6 2.5 6 4.98 4.88 4.98 3.5zM.01 24h5V7H.01v17zM7 7h5v2.3h.07c.69-1.22 2.37-2.5 4.93-2.5C20.12 6.8 21 9.4 21 13.9v10.1h-5v-8.8c0-2.1-.74-3.5-2.58-3.5-1.41 0-2.24.95-2.6 1.86-.13.33-.17.79-.17 1.25v9.2H7V7z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-125 ${
                    darkMode ? 'text-neutral-400 hover:text-accent-400' : 'text-neutral-600 hover:text-accent-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.41 7.87 10.94.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.11-3.23.7-3.9-1.56-3.9-1.56-.53-1.37-1.29-1.73-1.29-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.72-1.55-2.57-.29-5.28-1.29-5.28-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.21 1.2a11.23 11.23 0 012.92-.39c.99 0 2 .13 2.92.39 2.23-1.52 3.21-1.2 3.21-1.2.63 1.64.23 2.86.11 3.16.74.82 1.2 1.86 1.2 3.14 0 4.5-2.71 5.48-5.3 5.77.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.8.55C20.71 21.41 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
              <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                &copy; {new Date().getFullYear()} Mostafa.MA. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Animate>
  );
};

export default Home;
