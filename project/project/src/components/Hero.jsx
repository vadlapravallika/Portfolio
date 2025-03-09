import { motion } from 'framer-motion'
import TypewriterEffect from 'typewriter-effect'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-coffee-800">
            Welcome to My Portfolio
          </h1>
          
          <div className="text-xl md:text-2xl text-coffee-600 mb-8">
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

          <p className="text-lg text-coffee-700 mb-12 max-w-2xl mx-auto">
            Crafting beautiful web experiences with the same dedication as brewing the perfect cup of coffee.
          </p>

          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/vadlapravallika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/pravallika-vadla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:pravalli541@gmail.com"
              className="text-coffee-600 hover:text-coffee-800 transition-colors duration-300"
            >
              <FiMail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero