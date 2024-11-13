import { useState } from 'react';
import { Code, Palette } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "A full-stack e-commerce platform with modern UI/UX",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "design",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "Complete brand identity design for a tech startup",
    },
    // Add more projects as needed
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full inline-flex items-center ${
              filter === 'web'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Code size={18} className="mr-2" />
            Web
          </button>
          <button
            onClick={() => setFilter('design')}
            className={`px-6 py-2 rounded-full inline-flex items-center ${
              filter === 'design'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Palette size={18} className="mr-2" />
            Design
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;