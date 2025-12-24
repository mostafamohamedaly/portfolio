import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-primary-900 text-white" : "bg-neutral-50 text-primary-900"
      }`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate(-1)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-accent-600 hover:bg-accent-700 text-white"
                : "bg-accent-600 hover:bg-accent-700 text-white"
            }`}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.media.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + project.media.length) % project.media.length
    );
  };

  const stopPropagation = (e) => e.stopPropagation();

  // Technology badge colors
  const getTechColor = (tech) => {
    const colors = {
      'Figma': {
        light: 'bg-purple-100 text-purple-700 border-purple-300',
        dark: 'bg-purple-900/30 text-purple-300 border-purple-700/50'
      },
      'React': {
        light: 'bg-cyan-100 text-cyan-700 border-cyan-300',
        dark: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/50'
      },
      'NodeJS': {
        light: 'bg-green-100 text-green-700 border-green-300',
        dark: 'bg-green-900/30 text-green-300 border-green-700/50'
      },
      'NextJS': {
        light: 'bg-gray-200 text-gray-800 border-gray-400',
        dark: 'bg-gray-700/30 text-gray-200 border-gray-600/50'
      },
      'Vue': {
        light: 'bg-emerald-100 text-emerald-700 border-emerald-300',
        dark: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/50'
      }
    };
    return darkMode ? colors[tech]?.dark || '' : colors[tech]?.light || '';
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? "bg-primary-900" : "bg-neutral-50"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={handleBackButtonClick}
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
            Back to Projects
          </button>

          <div className="text-center mb-8">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-primary-900"
            }`}>
              {project.title}
            </h1>

            {/* Technology Badges */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-110 ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <p className={`text-lg max-w-4xl mx-auto leading-relaxed ${
              darkMode ? "text-neutral-300" : "text-neutral-600"
            }`}>
              {project.description}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-medium hover:shadow-strong ${
                  darkMode
                    ? "bg-accent-600 hover:bg-accent-700 text-white"
                    : "bg-accent-600 hover:bg-accent-700 text-white"
                }`}
              >
                Visit Live Site
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Media Gallery */}
        <div className="mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-primary-900"
          }`}>
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.media.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 cursor-pointer border ${
                  darkMode
                    ? "bg-neutral-800/50 backdrop-blur-sm border-neutral-700/50 hover:border-accent-500/50"
                    : "bg-white border-neutral-200 hover:border-accent-400"
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.src}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <svg
                        className="w-12 h-12 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      <p className="font-semibold">View Full Size</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={stopPropagation}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 bg-gradient-to-b from-black/60 to-transparent z-10">
              <div className="text-white">
                <p className="text-sm text-neutral-400">
                  {currentIndex + 1} / {project.media.length}
                </p>
                <p className="text-lg font-semibold">{project.title}</p>
              </div>
              <button
                className="group p-3 rounded-xl text-white transition-all duration-300 hover:bg-white/10 hover:scale-110"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative flex items-center justify-center w-full h-full max-w-7xl">
              {/* Previous Button */}
              {project.media.length > 1 && (
                <button
                  className="absolute left-4 z-10 p-4 rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
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
                </button>
              )}

              {/* Image */}
              <div className="relative max-w-full max-h-full flex items-center justify-center">
                <img
                  src={project.media[currentIndex].src}
                  alt={`${project.title} - Image ${currentIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Next Button */}
              {project.media.length > 1 && (
                <button
                  className="absolute right-4 z-10 p-4 rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Bottom Thumbnails */}
            {project.media.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex gap-3 justify-center overflow-x-auto pb-2 scrollbar-hide">
                  {project.media.map((item, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                        currentIndex === index
                          ? "border-accent-500 scale-110 shadow-lg"
                          : "border-white/20 hover:border-white/40 opacity-60 hover:opacity-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                    >
                      <img
                        src={item.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
