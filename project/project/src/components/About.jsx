import { motion } from 'framer-motion';
import profilePic from '../assets/profilep.jpg'; // Adjust path as needed

const About = () => {
  const skills = [
    'React.js', 'JavaScript', 'Python', 'Java', 'Node.js',
    'Flask', 'Spring Boot', 'TypeScript', 'MongoDB',
    'SQL', 'Docker', 'Git'
  ];

  const education = [
    {
      degree: "Master of Information Technology and Management",
      school: "Illinois Institute of Technology, Chicago, IL",
      year: "Aug 2023 - May 2025",
      details: "GPA: 4.0 | Relevant Coursework: Full-Stack Development, RESTful CRUD APIs, Web Systems Architecture, Software Oriented Architecture, SDLC"
    },
    {
      degree: "Bachelor of Science in Engineering",
      school: "Jawaharlal Nehru Technological University Kakinada (JNTUK), India",
      year: "Jun 2015 - May 2019",
      details: "GPA: 3.65"
    }
  ];

  const experience = [
    {
      role: "Associate Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Hyderabad, India",
      period: "May 2022 – July 2023",
      responsibilities: [
        "Designed 30+ responsive web pages using React.js, HTML, CSS, and PHP, enhancing user engagement by 25%",
        "Developed secure RESTful APIs integrated with Spring Boot, improving backend performance and scalability",
        "Collaborated with teams to troubleshoot issues, optimizing performance and reducing system downtime by 20%"
      ]
    },
    {
      role: "System Administrator",
      company: "Wipro Technologies",
      location: "Hyderabad, India",
      period: "Aug 2019 – Apr 2021",
      responsibilities: [
        "Resolved 95% of technical issues for Outlook, O365, and Global Protect at the 1st and 2nd support levels",
        "Managed 500+ user accounts and maintained 99.9% system uptime through efficient Windows OS and network troubleshooting",
        "Delivered IT support for ICICI Bank, ensuring efficient issue resolution using the Finacle ticketing system"
      ]
    }
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
            {/* Profile Image */}
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
                className="rounded-lg shadow-lg border-4 border-coffee-300 w-72 h-72 object-cover"
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

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-4 text-coffee-800">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-coffee-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-bold text-coffee-800">{edu.degree}</h4>
                  <p className="text-coffee-600">{edu.school}</p>
                  <p className="text-coffee-500">{edu.year}</p>
                  <p className="text-coffee-600 mt-2">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-4 text-coffee-800">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-coffee-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-bold text-coffee-800">{exp.role}</h4>
                  <p className="text-coffee-600">{exp.company}</p>
                  <p className="text-coffee-500">{exp.location}</p>
                  <p className="text-coffee-500 mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-coffee-700">{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
