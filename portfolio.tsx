import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`text-sm uppercase tracking-wider ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/530F8272-23B1-44F4-935B-4FE8B55BE4BA.jpg-ThaceMS5Rl9jr63pdsbBxnBrfJDaXA.jpeg"
                alt="Ameya Deshmukh"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-blue-500 shadow-xl"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Ameya Deshmukh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Principal Software Engineer | AI Specialist | Full-Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={() => scrollTo('about')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* About section remains the same */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm a passionate software engineer with expertise in AI, machine learning, and full-stack development. 
              With experience ranging from academic research to industry applications, I've led teams in developing 
              cutting-edge technologies in ultrasound systems, computer vision, and data analytics. My goal is to 
              leverage technology to solve complex problems and drive innovation in the field of computer science.
            </p>
          </div>
        </section>

        {/* Experience section remains the same */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-12">
              {[
                {
                  title: "Principal Software Engineer",
                  company: "Stanford University",
                  period: "May 2023 - Present",
                  achievements: [
                    "Led the development of Advanced Ultrasound System Architecture",
                    "Revolutionized Pulse-Echo Ultrasound Prototyping",
                    "Pioneered Real-Time Sound Speed Estimation and Aberration correction software"
                  ]
                },
                {
                  title: "Computer Vision Researcher",
                  company: "Haworth Laboratory",
                  period: "Jan - Apr 2023",
                  achievements: [
                    "Deployed a U-Net Deep Learning Model for infarction detection",
                    "Augmented 500+ CT images to avoid overfitting",
                    "Developed an Automated Image Analysis Pipeline"
                  ]
                },
                {
                  title: "Lead Software Engineer",
                  company: "BUCL Laboratory",
                  period: "Aug - Dec 2022",
                  achievements: [
                    "Led the Software Team to devise an automatized Signal Processing Software",
                    "Robotized positioning of ultrasound transducer using VXM-3 3D Stepping Motor Controllers",
                    "Pioneered a full-stack application with GUI for efficient user communication"
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-blue-400 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{job.period}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="space-y-8">
              {[
                {
                  degree: "Master of Science, Computer Science - AI Specialization",
                  school: "University of Southern California",
                  period: "Expected May 2026",
                  gpa: "GPA: 4.00",
                  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ZmKk2ItLHdbvjRy2TGyCE2jUZcJtI.png"
                },
                {
                  degree: "Bachelor of Science, Computer Science - summa cum laude",
                  school: "University of Cincinnati",
                  period: "Aug 2020 - Apr 2024",
                  gpa: "GPA: 3.92",
                  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sNWj7hgQzpU4ACePYgwGzDv5MJbEbI.png",
                  achievements: [
                    "Recipient of the prestigious Mantei Mae Award",
                    "National Co-op Ambassador Award",
                    "UC Global Scholarship",
                    "CEAS International Outreach Scholarship"
                  ]
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-700 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 mb-2">{edu.school}</p>
                      <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                      <p className="text-sm text-gray-300 mb-2">{edu.gpa}</p>
                    </div>
                  </div>
                  {edu.achievements && (
                    <ul className="list-disc list-inside text-gray-300 text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills section remains the same */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Python", "MATLAB", "C++", "JavaScript",
                "React", "Node.js", "TensorFlow", "PyTorch",
                "Computer Vision", "Machine Learning", "Deep Learning", "Signal Processing",
                "AWS", "Azure", "Git", "Docker"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section remains the same */}
        <section id="projects" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Ultrasound System",
                  description: "Developed a complex Block Infrastructure within the Verasonics ultrasound system codebase.",
                  technologies: ["MATLAB", "C++", "Signal Processing"]
                },
                {
                  title: "Real-Time Medical Image Diagnosis",
                  description: "Implemented Real-Time Sound Speed Estimation and Aberration correction software.",
                  technologies: ["CUDA", "MATLAB", "AWS"]
                },
                {
                  title: "Automated CT Image Analysis",
                  description: "Built a U-Net Deep Learning Model to determine regions of infarction in rat hearts.",
                  technologies: ["Python", "TensorFlow", "OpenCV"]
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-700 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/ameya1252" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ameya1252" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ameyaudeshmukh@gmail.com" className="text-gray-300 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ameya Deshmukh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}