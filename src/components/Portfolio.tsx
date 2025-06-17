import React, { useState } from "react";
import { ExternalLink, Github as GitHub } from "lucide-react";
import ERPSoft from "../assets/business.jpg";
import Mughal from "../assets/mughal.png";
import Mawahid from "../assets/mawahid.png";
import Mutarjim from "../assets/mutarjim.jpeg";
import Expense from "../assets/expense.jpg";
import Resturant from "../assets/resturant.png";
import Encrypt from "../assets/encrypt.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "ERP Web App",
      category: "Web Application",
      image: ERPSoft,
      description:
        "A comprehensive ERP system built for a textile company to manage inventory, purchases, sales, employee records, payroll, and detailed business analytics. Designed to streamline operations and improve efficiency across departments.",
      technologies: [".NET", "React", "SQL Server", "Bootstrap"],
      demoLink:
        "https://drive.google.com/file/d/19VG-LYZkBbt0-MWOnz4JYXDQc1dVGOVJ/view?usp=sharing",
      githubLink: "",
    },
    {
      id: 2,
      title: "AI Web Builder",
      category: "Personal Project",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "An AI-powered tool that generates web elements based on user prompts using Gemini API and displays them in real-time.",
      technologies: ["React", "Gemini API", "Node.js", "Tailwind CSS"],
      demoLink: "",
      githubLink: "",
    },
    {
      id: 3,
      title: "Learning Management System",
      category: "Web Application",
      image:
        "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "An LMS platform enabling course management, student tracking, quizzes, and progress analytics for educational institutions.",
      technologies: ["C#", "ASP.NET", "SQL Server", "Bootstrap"],
      demoLink:
        "https://drive.google.com/drive/folders/1SekCRIuZR7BM1LlTp3l8R1sbX6H-e01P?usp=sharing",
      githubLink: "",
    },
    {
      id: 5,
      title: "Expense Tracker PWA",
      category: "Personal Project",
      image: Expense,
      description:
        "A Progressive Web App (PWA) for tracking daily expenses, featuring offline functionality using LocalStorage and installable on mobile/desktop devices.",
      technologies: ["React", "PWA", "LocalStorage", "Bootstrap"],
      demoLink: "https://tcw-expense-tracker.netlify.app/",
      githubLink: "https://github.com/HumayyonAhmed/tcw-expense-tracker",
    },
    {
      id: 6,
      title: "Language Translator App",
      category: "Personal Project",
      image: Mutarjim,
      description:
        "A language translation app built with Firebase, Kotlin, and Google ML SDK, enabling real-time translations between multiple languages.",
      technologies: ["Kotlin", "Firebase", "Google ML SDK", "Android"],
      demoLink:
        "https://drive.google.com/file/d/16f2mjHETk0nyT39hUWx0S_1t_gd1oDvv/view?usp=sharing",
      githubLink: "https://github.com/HumayyonAhmed/LanguageTranslator",
    },
    {
      id: 7,
      title: "Industrial Company Website",
      category: "WordPress",
      image: Mughal,
      description:
        "A professional WordPress website for an industrial engineering company, showcasing their services, portfolio, and contact details. Built with a clean, modern design and optimized for both desktop and mobile devices.",
      technologies: ["WordPress", "PHP", "HTML", "CSS"],
      demoLink: "",
      githubLink: "",
    },
    {
      id: 8,
      title: "Mawahid Traders Website",
      category: "WordPress",
      description:
        "A custom WordPress website built for Mawahid Emb Traders, a business specializing in embroidery machine parts. The website features product listings, company information, and customer support.",
      demoLink: "",
      githubLink: "", // Since it\'s a WordPress site, there might not be a public GitHub repo
      image: Mawahid,
      technologies: ["WordPress", "PHP", "WooCommerce", "MySQL"],
    },
    {
      id: 9,
      title: "AR Restaurant Menu App",
      category: "Personal Project",
      image: Resturant,
      description:
        "A mobile app that uses AR to show 3D models of restaurant dishes. Users can view details, customize orders, and share their experience. Built with React and .NET for Iqra University.",
      technologies: ["React", "MUI", "Redux", "Formik", "Yup", ".NET"],
      demoLink: "https://resturantar.netlify.app",
      githubLink: "",
    },
    {
      id: 10,
      title: "Caesar Cipher Tool",
      category: "Personal Project",
      image: Encrypt,
      description:
        "A simple JavaScript tool to encrypt text using the Caesar cipher algorithm. Just enter your text and get the encrypted result.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://encryptonline.netlify.app/",
      githubLink: "https://github.com/HumayyonAhmed/CeaserCipher",
    },
  ];

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            My Portfolio
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my recent work and see how I've helped clients achieve their
            digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 dark:bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">
                      {project.category}
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    target="_blank"
                    href={project.demoLink}
                    className={`text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center text-sm font-medium ${
                      !project.demoLink ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    aria-disabled={!project.demoLink}
                    onClick={(e) => !project.demoLink && e.preventDefault()}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    {project.demoLink ? "Live Demo" : "Demo Unavailable"}
                  </a>
                  <a
                    target="_blank"
                    href={project.githubLink}
                    className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center text-sm font-medium ${
                      !project.githubLink ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    aria-disabled={!project.githubLink}
                    onClick={(e) => !project.githubLink && e.preventDefault()}
                  >
                    <GitHub size={16} className="mr-1" />
                    {project.githubLink ? "Code" : "Code Unavailable"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-72 sm:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    {selectedProject.category}
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    target="_blank"
                    href={selectedProject.demoLink}
                    className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center transition-colors duration-300 ${
                      !selectedProject.demoLink
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={(e) =>
                      !selectedProject.demoLink && e.preventDefault()
                    }
                    aria-disabled={!selectedProject.demoLink}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    {selectedProject.demoLink
                      ? "Live Demo"
                      : "Demo Unavailable"}
                  </a>
                  <a
                    target="_blank"
                    href={selectedProject.githubLink}
                    className={`px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg flex items-center transition-colors duration-300 ${
                      !selectedProject.githubLink
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    aria-disabled={!selectedProject.githubLink}
                    onClick={(e) =>
                      !selectedProject.githubLink && e.preventDefault()
                    }
                  >
                    <GitHub size={18} className="mr-2" />
                    {selectedProject.githubLink
                      ? "View Code"
                      : "Code Unavailable"}
                  </a>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Project Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
