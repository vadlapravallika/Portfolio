import { motion } from 'framer-motion';
import profilePic from '../assets/profilep.jpg'; // Adjust the path if needed

const About = () => {
  const skills = [
    'React.js', 'JavaScript', 'Python', 'Java', 'Node.js',
    'Flask', 'Spring Boot', 'TypeScript', 'MongoDB',
    'SQL', 'Docker', 'Git'
  ];

  return (
    <section id="about" className="section-padding bg-coffee-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-800 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image with Larger Size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-lg shadow-lg border-4 border-coffee-300 w-72 h-72 object-cover" // Increased size
              />
            </motion.div>

            {/* About Text */}
            <div>
              <p className="text-coffee-700 text-lg leading-relaxed mb-6">
                Passionate Full-Stack Developer and coffee aficionado, blending creativity and technology to craft robust digital experiences. Just like the perfect cup of coffee, I strive for balance—between frontend elegance and backend efficiency. Whether brewing a strong espresso or developing seamless APIs, precision and excellence are my priorities.
              </p>

              {/* Skills Section */}
              <h3 className="text-xl font-bold mb-4 text-coffee-800">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-coffee-50 p-3 rounded-lg text-center text-coffee-700 hover:bg-coffee-200 transition-colors duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
