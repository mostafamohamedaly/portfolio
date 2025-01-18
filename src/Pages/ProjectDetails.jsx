import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

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

  const stopPropagation = (e) => e.stopPropagation(); // To prevent overlay close

  const handleBackButtonClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="p-24 cursor-default">
      <div className="flex justify-between items-center">
        <button
          onClick={handleBackButtonClick}
          className="bg-transparent py-2 px-5 text-gray-300 outline outline-2 outline-gray-300 text-lg font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:opacity-80"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="w-[120px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {project.media.map((item, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.src}
              alt={`Media ${index}`}
              className="w-full cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={stopPropagation}>
            {/* Close Button */}
            <button
              className="close-btn absolute top-2 left-5 py-0 text-white text-xl font-bold ring-2 ring-white"
              onClick={closeLightbox}
            >
              Close
            </button>

            {/* Previous Button */}
            <button
              className="prev absolute top-1/2 left-4 py-0 transform -translate-y-1/2 text-white text-2xl ring-2 ring-white"
              onClick={prevImage}
            >
              ←
            </button>

            {/* Next Button */}
            <button
              className="next absolute top-1/2 right-4 py-0 transform -translate-y-1/2 text-white text-2xl ring-2 ring-white"
              onClick={nextImage}
            >
              →
            </button>

            <img
              src={project.media[currentIndex].src}
              alt={`Media ${currentIndex}`}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
