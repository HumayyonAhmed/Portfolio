import React from 'react';
import { Code, Server, Layout, Database, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  const expertise = [
    { name: 'Frontend Development', icon: <Layout size={24} />, level: 95 },
    { name: 'Backend Development', icon: <Server size={24} />, level: 90 },
    { name: 'Database Design', icon: <Database size={24} />, level: 85 },
    { name: 'API Development', icon: <Code size={24} />, level: 92 },
  ];

 
  const skills = [
    "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "SQL", "ASP.NET", "C#",
    "Entity Framework", "REST APIs", "Tailwind", "MUI",
    "Bootstrap", "jQuery", "Python", "Web Scraping", "REST API", "Redux"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my journey, skills, and what drives me to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* About Description - Takes 2/3 width on large screens */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in crafting beautiful, functional, and scalable applications. My journey in tech started with a curiosity for solving complex problems and has evolved into a passion for creating exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I believe that great software is more than just code—it's about understanding user needs, business goals, and creating solutions that bring value. Whether working on a complex enterprise application or a simple landing page, I bring the same level of dedication and attention to detail.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:translate-y-[-5px]"
                  >
                    <div className="flex items-center mb-2">
                      <div className="text-blue-600 dark:text-blue-400 mr-2">
                        {skill.icon}
                      </div>
                      <h5 className="font-medium">{skill.name}</h5>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-full rounded-full"
                        style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section - Takes 1/3 width on large screens */}
          <div className="lg:col-span-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm h-full">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300 mb-2 transition-all hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;