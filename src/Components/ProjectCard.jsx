import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/project/${project.id}`); // Navigate to a dynamic route for project details
  };

    useEffect(() => {
  console.log(project)
    }, [project])

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transform transition-all">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <img
        src={project.screenshot}
        alt={`${project.title} screenshot`}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
      <div className="flex gap-3">
        <button
          onClick={handleMoreDetails}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
        >
          More Details
        </button>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Project URL
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
