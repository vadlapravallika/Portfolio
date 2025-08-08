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
      role: "Software Developer",
      company: "Anu Tech Solutions, LLC",
      location: "Michigan",
      period: "Jun 2025 – Present",
      skills: "Java, React.js, Node.js, RESTful APIs, Microservices, AWS, CI/CD, Docker, Agile",
      responsibilities: [
        "Developing and enhancing enterprise-grade applications using Java, React.js, RESTful APIs, and microservices architecture",
        "Designing scalable, secure, and maintainable components with a focus on performance and cloud readiness",
        "Collaborating cross-functionally in Agile teams to deliver high-quality features and production issue resolutions",
        "Implementing CI/CD pipelines and containerized deployments to ensure development consistency and rapid releases",
        "Optimizing backend services with Node.js and integrating AWS solutions for cloud-native scalability"
      ]
    },
    {
      role: "Associate Systems Engineer",
      company: "TCS",
      location: "Hyderabad, IND",
      period: "May '21 - Jul '23",
      skills: "React.js, JavaScript, SQL Server, Node.js, Express.js, HTML5, CSS3, REST APIs, Test Automation, Git, CI/CD, Postman, Jest",
      responsibilities: [
        "Designed and developed 5+ scalable full-stack web applications using React.js (frontend) and Node.js/Express.js (backend), supporting 10,000+ daily users",
        "Integrated 15+ RESTful APIs for secure and performant data flow across microservices",
        "Improved page load time by 30% and reduced latency in legacy systems by refactoring code and optimizing data retrieval",
        "Implemented CI/CD pipelines using GitHub Actions, reducing manual deployment effort by 40%",
        "Wrote unit and integration tests using Jest and Postman, increasing test coverage by 35%",
        "Collaborated across Agile teams for sprint planning, estimations, and retrospectives, contributing to 100% sprint goal completion for 6+ months",
        "Partnered with QA to ensure business compliance and bug resolution within SLA (95%)"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Wipro Technologies",
      location: "Hyderabad, IND",
      period: "Aug '19 - Apr '21",
      skills: "React.js, Python, SQL Server, HTML5, CSS3",
      responsibilities: [
        "Developed 20+ responsive UI components using React.js, HTML5, and CSS3 for enterprise banking tools, enhancing user accessibility and experience",
        "Worked closely with backend teams to integrate RESTful services, enabling real-time account and transaction updates",
        "Ensured 100% cross-browser compatibility and mobile responsiveness, leading to a 15% increase in internal user adoption",
        "Participated in Agile ceremonies including daily standups, sprint demos, and retrospectives with a team of 7 engineers",
        "Performed manual and automated testing using in-house scripts, reducing UI-related bugs by 25% pre-release"
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
                  <p className="text-coffee-500 mb-2">{exp.period}</p>
                  {exp.skills && (
                    <p className="text-coffee-600 text-sm mb-3 italic">
                      <span className="font-semibold">Skills:</span> {exp.skills}
                    </p>
                  )}
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
