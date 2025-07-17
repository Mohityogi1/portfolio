import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Brain, Cpu, Globe } from 'lucide-react';
import { useTheme } from '../App';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Deep Learning', level: 75 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Data Analysis', level: 85 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Linux', level: 75 },
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Constantly learning and growing in the ever-evolving world of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-50 border border-gray-200 hover:border-blue-500/50'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20' 
                      : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className={`flex justify-between mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            theme === 'dark' 
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                              : 'bg-gradient-to-r from-blue-500 to-purple-500'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 2 + skillIndex) * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;