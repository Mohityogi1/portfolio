import React from 'react';
import { Home, User, Code, Briefcase, Mail, Download } from 'lucide-react';
import { useTheme } from '../App';

interface NavigationProps {
  currentSection: number;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const { theme } = useTheme();

  const navItems = [
    { icon: Home, label: 'Home', id: 'hero' },
    { icon: Code, label: 'Skills', id: 'skills' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: User, label: 'About', id: 'about' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Placeholder for resume download
    alert('Resume download will be implemented with actual resume file');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-white/95 backdrop-blur-md border-b border-blue-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}>
              <span className="text-white font-bold text-sm">MY</span>
            </div>
            <span className={`font-bold text-xl ${
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Mohit Yogi
            </span>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentSection === index;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-lg transition-all duration-300 group relative ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-blue-500/20 text-blue-600'
                      : theme === 'dark'
                        ? 'hover:bg-gray-800 text-gray-400 hover:text-cyan-400'
                        : 'hover:bg-gray-100 text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-900 text-white'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
            
            <button
              onClick={downloadResume}
              className={`ml-4 px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white'
              }`}
            >
              <Download size={16} />
              <span className="text-sm font-medium">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;