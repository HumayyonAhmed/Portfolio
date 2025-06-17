import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Briefcase, Mail } from 'lucide-react';
import ProfileImage from '../assets/profile.png';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const hero = heroRef.current;
      
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const x = clientX - rect.left; // x position within the element
        const y = clientY - rect.top;  // y position within the element
        
        const xPercent = x / rect.width;
        const yPercent = y / rect.height;
        
        const layers = hero.querySelectorAll('.parallax-layer');
        layers.forEach((layer: Element, index) => {
          const depth = index + 1;
          const moveX = (xPercent - 0.5) * depth * 20;
          const moveY = (yPercent - 0.5) * depth * 20;
          
          (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const TextReveal: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
    return (
      <span className="inline-block overflow-hidden">
        {text.split('').map((char, index) => (
          <span 
            key={index}
            className="inline-block animate-fade-in opacity-0"
            style={{ animationDelay: `${delay + index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 overflow-hidden flex items-center pt-24 pb-10"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-layer absolute -right-12 top-32 w-48 h-48 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl"></div>
        <div className="parallax-layer absolute left-1/4 bottom-1/4 w-64 h-64 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-xl"></div>
        <div className="parallax-layer absolute left-12 top-1/3 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4">
              <TextReveal text="Hello, I'm" delay={0.2} />
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <TextReveal text="Humayun Ahmed" delay={0.2} />
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                <TextReveal text="Full-Stack Developer" delay={0.2} />
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
              I build beautiful, functional, and scalable web applications that help businesses grow and succeed in the digital world.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <Briefcase size={18} />
                View My Work
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Code size={18} />
                My Services
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 relative">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center overflow-hidden shadow-2xl animate-float">
              <img
                src={ProfileImage}
                alt="Developer Portrait"
                className="w-full h-full object-cover opacity-75"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-teal-400 dark:bg-teal-500 rounded-full blur-md opacity-30 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-400 dark:bg-purple-500 rounded-full blur-md opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;