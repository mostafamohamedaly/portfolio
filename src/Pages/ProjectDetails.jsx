import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
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

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 md:p-12 cursor-default">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={handleBackButtonClick}
          className="bg-transparent py-2 px-4 text-gray-300 outline outline-2 outline-gray-300 text-base md:text-lg font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:opacity-80"
        >
          ← Back
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-center">{project.title}</h1>
        <div className="w-[100px] md:w-[120px]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-6 md:mt-10">
        {project.media.map((item, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.src}
              alt={`Media ${index}`}
              className="w-full h-auto cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox-overlay fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content relative max-w-full max-h-full p-4 md:p-6"
            onClick={stopPropagation}
          >
            {/* Close Button */}
            <button
              className="close-btn absolute top-4 left-4 py-0 text-white text-lg md:text-xl font-bold ring-2 ring-white"
              onClick={closeLightbox}
            >
              Close
            </button>

            {/* Previous Button */}
            <button
              className="prev absolute top-1/2 left-4 py-0 transform -translate-y-1/2 text-white text-xl md:text-2xl ring-2 ring-white"
              onClick={prevImage}
            >
              ←
            </button>

            {/* Next Button */}
            <button
              className="next absolute top-1/2 right-4 py-0 transform -translate-y-1/2 text-white text-xl md:text-2xl ring-2 ring-white"
              onClick={nextImage}
            >
              →
            </button>

            <img
              src={project.media[currentIndex].src}
              alt={`Media ${currentIndex}`}
              className="lightbox-image max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
