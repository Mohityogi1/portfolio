import React from 'react';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { useTheme } from '../App';

const About: React.FC = () => {
  const { theme } = useTheme();

  const timelineItems = [
    {
      year: '2023 - Present',
      title: 'B.Tech Computer Science (AI & ML)',
      organization: 'Shekhawati Group of Institute and Technology, Sikar',
      description: 'Currently in 2nd year, specializing in Artificial Intelligence and Machine Learning',
      icon: GraduationCap,
      isActive: true
    },
    {
      year: '2023',
      title: 'Started Full Stack Development Journey',
      organization: 'Self-Taught & Online Courses',
      description: 'Began learning modern web development technologies and frameworks',
      icon: Award,
      isActive: false
    },
    {
      year: '2022',
      title: 'Higher Secondary Education',
      organization: 'Rajasthan Board',
      description: 'Completed 12th grade with focus on Science and Mathematics',
      icon: GraduationCap,
      isActive: false
    }
  ];

  return (
    <section id="about" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            About Me
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My journey in technology and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              My Story
            </h3>
            <div className="space-y-4">
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate Computer Science student currently pursuing my B.Tech in AI & ML at Shekhawati Group of Institute and Technology, Sikar. As a 2nd-year student, I'm deeply fascinated by the intersection of technology and innovation.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My journey in technology began with curiosity about how things work, which led me to explore programming, web development, and artificial intelligence. I believe in continuous learning and staying updated with the latest technological trends.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                When I'm not coding, you'll find me exploring new technologies, working on personal projects, or sharing knowledge with fellow developers. I'm always excited to collaborate on innovative projects that can make a positive impact.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className={`flex items-center space-x-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <MapPin size={20} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
                <span>Sikar, Rajasthan, India</span>
              </div>
              <div className={`flex items-center space-x-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <Calendar size={20} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
              theme === 'dark' ? 'bg-cyan-500/30' : 'bg-blue-500/30'
            }`} />
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    <div className={`absolute left-0 p-2 rounded-full ${
                      item.isActive
                        ? theme === 'dark' 
                          ? 'bg-cyan-500' 
                          : 'bg-blue-500'
                        : theme === 'dark' 
                          ? 'bg-gray-700' 
                          : 'bg-gray-300'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        item.isActive ? 'text-white' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <div className="ml-12">
                      <div className={`text-sm font-medium mb-1 ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        {item.year}
                      </div>
                      <h4 className={`text-lg font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm mb-2 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.organization}
                      </p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;