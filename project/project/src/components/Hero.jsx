import { motion } from 'framer-motion'
import TypewriterEffect from 'typewriter-effect'
import { FiGithub, FiLinkedin, FiMail, FiArrowDownCircle } from 'react-icons/fi'
import coffeeRun from '../assets/image.png'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-coffee-50 section-padding">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-coffee-800">
            Welcome to My Portfolio
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src={coffeeRun}
              alt="Running Coffee Cup"
              className="w-48 h-48 object-contain animate-bounce rounded-full shadow-lg"
            />
          </div>

          <div className="text-2xl md:text-3xl text-coffee-600 mb-6">
            <TypewriterEffect
              options={{
                strings: [
                  'Frontend Developer',
                  'UI/UX Enthusiast',
                  'Coffee Lover ☕',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-lg md:text-xl text-coffee-700 mb-10 max-w-3xl mx-auto">      Crafting beautiful web experiences with the same dedication as brewing the perfect cup of coffee.</p>

          <div className="flex justify-center space-x-8 mb-10">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/vadlapravallika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300"
            >
              <FiGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/pravallika-vadla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300"
            >
              <FiLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:pravalli541@gmail.com"
              className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300"
            >
              <FiMail size={28} />
            </motion.a>
          </div>

          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <a href="#about" className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300">
              <FiArrowDownCircle size={36} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
