import React, { useState } from 'react';
import { Code, Smartphone, Server, Layout, ShoppingCart, FileText, Search, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code size={32} />,
    title: 'Custom Web Applications',
    description: 'Build scalable and secure web applications using the latest technologies like React and .NET Core, tailored to meet your business needs.'
  },
  {
    icon: <Server size={32} />,
    title: 'Backend & API Integration',
    description: 'Create reliable backend systems and integrate APIs to automate processes, enhance functionality, and ensure seamless data flow.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Modern Frontend Interfaces',
    description: 'Design responsive, fast-loading user interfaces with React or HTML/CSS to ensure a smooth and engaging user experience across all devices.'
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'WordPress & WooCommerce',
    description: 'Build custom WordPress sites and WooCommerce stores, optimized for speed, basic SEO, and quick, efficient customizations.'
  },
  {
    icon: <Layout size={32} />,
    title: 'Figma to Code',
    description: 'Convert your Figma designs into fully responsive React components or HTML/CSS — pixel-perfect and ready to deploy.'
  },
  {
    icon: <FileText size={32} />,
    title: 'MVP & Rapid Prototyping',
    description: 'Validate your ideas quickly with MVPs or clickable prototypes, enabling fast feedback and iteration to reduce time-to-market.'
  },
  {
    icon: <Layout size={32} />,
    title: 'UI/UX Design',
    description: 'Craft intuitive and visually appealing UI/UX designs for websites and mobile apps to enhance user experience and drive engagement.'
  },
  {
    icon: <Search size={32} />,
    title: 'Web Scraping & Automation',
    description: 'Automate data collection and business tasks using Python, perfect for lead generation, data analysis, and content aggregation.'
  }
];

const Services: React.FC = () => {

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
            My Services
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
          </h2>
          <p className="text-lg mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your ideas deserve great code. I provide powerful full-stack solutions to help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Discuss your project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Get Started With Your Project
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
