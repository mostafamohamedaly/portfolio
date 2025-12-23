import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, darkMode = true }) => {
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className={`group rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border ${
      darkMode
        ? 'bg-neutral-800/50 backdrop-blur-sm border-neutral-700/50 hover:border-accent-500/50'
        : 'bg-white border-neutral-200 hover:border-accent-400'
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          darkMode ? 'from-neutral-900/90' : 'from-white/90'
        }`}></div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          darkMode
            ? 'text-white group-hover:text-accent-400'
            : 'text-primary-900 group-hover:text-accent-600'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-6 line-clamp-3 leading-relaxed ${
          darkMode ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {project.description}
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleMoreDetails}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-soft ${
              darkMode
                ? 'bg-accent-600 hover:bg-accent-700 text-white'
                : 'bg-accent-600 hover:bg-accent-700 text-white'
            }`}
          >
            View Details
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-center border-2 ${
                darkMode
                  ? 'border-neutral-600 hover:border-accent-500 text-neutral-300 hover:text-accent-400 hover:bg-accent-500/10'
                  : 'border-neutral-400 hover:border-accent-600 text-neutral-700 hover:text-accent-700 hover:bg-accent-50'
              }`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
