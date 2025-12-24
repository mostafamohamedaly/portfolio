import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, darkMode = true }) => {
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/project/${project.id}`);
  };

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
      }
    };
    return darkMode ? colors[tech]?.dark || '' : colors[tech]?.light || '';
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
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
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
