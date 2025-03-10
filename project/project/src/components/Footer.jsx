import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-coffee-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Name & Description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-marcellus text-xl mb-2">Pravallika Vadla</h3>
            <p className="text-coffee-300">Frontend Developer & Coffee Enthusiast</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/vadlapravallika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-300 hover:text-white transition-colors duration-300"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pravallika-vadla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-300 hover:text-white transition-colors duration-300"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:pravalli541@gmail.com"
              className="text-coffee-300 hover:text-white transition-colors duration-300"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-coffee-300 text-sm">
          <p>© {new Date().getFullYear()} Pravallika Vadla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
