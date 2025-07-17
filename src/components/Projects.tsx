import React from 'react';
import { ExternalLink, Github, Zap, Database, Brain, Globe } from 'lucide-react';
import { useTheme } from '../App';

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot built with Python and TensorFlow, featuring natural language processing and contextual understanding.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analysis using React and D3.js with real-time updates.',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Smart Home IoT System',
      description: 'IoT-based smart home automation system with mobile app control and sensor integration.',
      tech: ['Arduino', 'React Native', 'Firebase', 'IoT'],
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-white border border-gray-200 hover:border-blue-500/50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-2">
                      <button className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-gray-700 text-gray-400 hover:text-cyan-400' 
                          : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                      }`}>
                        <ExternalLink size={18} />
                      </button>
                      <button className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-gray-700 text-gray-400 hover:text-cyan-400' 
                          : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                      }`}>
                        <Github size={18} />
                      </button>
                    </div>
                  </div>

                  <h3 className={`text-xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === 'dark' 
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'bg-blue-500/20 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;