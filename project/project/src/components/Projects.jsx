import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {
  const carouselRef = useRef(null);

  const projects = [
    {
      title: 'Inventory Management System',
      description: 'JavaFX-based inventory system with MySQL integration, implementing CRUD operations and PDF invoice generation.',
      tech: ['JavaFX', 'MySQL', 'MVC', 'PDF Generation'],
      github: '#',
      live: '#',
      image: 'https://www.lovelycoding.org/wp-content/uploads/2018/10/Inventory-Management-System-Project.png',
    },
    {
      title: 'PDF Summarizer Web Application',
      description: 'Flask web app with OpenAI GPT-3.5 API for PDF summarization, featuring caching in SQLite and responsive UI with CSS animations.',
      tech: ['Flask', 'OpenAI API', 'SQLite', 'CSS'],
      github: 'https://github.com/vadlapravallika/PDF-Summerizer',
      live: '#',
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Movie Database Application',
      description: 'Full-stack movie database system with secure RESTful APIs for CRUD operations and user authentication.',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'REST API'],
      github: 'https://github.com/vadlapravallika/moviedatabase',
      live: 'https://moviedatabase-one.vercel.app/',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Mood Music App',
      description: 'Personalized music app with advanced routing and global state management using React Context API.',
      tech: ['React.js', 'Tailwind CSS', 'Context API', 'React Router'],
      github: 'https://github.com/vadlapravallika/moodmusic-app',
      live: 'https://moodmusic-app-valli-git-main-pravallika-vadlas-projects.vercel.app/',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills, built with modern web technologies for a responsive and interactive user experience.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/vadlapravallika/portfolio-website',
      live: 'https://vadlapravallika.vercel.app/',
      image: portfolioImg, // Correct usage of the imported variable
    },
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      carouselRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-800">
            Featured Projects
          </h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in full-stack development,
            API integration, and responsive design.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-coffee-600 text-white p-2 rounded-full shadow-md hover:bg-coffee-700 transition-colors duration-300 z-10"
          >
            <FiChevronLeft size={24} />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-8 no-scrollbar custom-scrollbar"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="min-w-[300px] bg-coffee-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-coffee-800">{project.title}</h3>
                  <p className="text-coffee-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-coffee-200 text-coffee-700 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub size={20} className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300" />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink size={20} className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-coffee-600 text-white p-2 rounded-full shadow-md hover:bg-coffee-700 transition-colors duration-300 z-10"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
