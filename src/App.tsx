import { motion } from 'motion/react';
import { 
  Linkedin, 
  Mail, 
  ChevronDown, 
  GraduationCap, 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Shield, 
  Terminal, 
  BrainCircuit, 
  Smartphone,
  Cloud,
  Briefcase
} from 'lucide-react';

const educationData = [
  {
    institution: "Kyungdong University Global Campus",
    degree: "Bachelor's Degree in Smart Computing",
    description: "Comprehensive 4-year program focusing on modern computing technologies, software engineering, and artificial intelligence.",
    years: [
      {
        year: "1st Year",
        courses: ["Computer Architecture", "Computer Application", "C++", "Engineering Math"]
      },
      {
        year: "2nd Year",
        courses: ["System Analysis", "Operating System", "Networking", "Java Programming", "Computer Graphics", "Database Management", "Data Structure", "Data Communication & Telecommunication", "Cryptography & Cybersecurity", "Computer Vision"]
      },
      {
        year: "3rd Year",
        courses: ["Web Development", "Modeling & Animation", "Linux", "AI & Deep Learning", "Research & Methodology", "Game Development", "Data Mining & Analysis", "Cloud Computing"]
      },
      {
        year: "4th Year",
        courses: ["Smart Computing Project", "Ethical Hacking", "Data Science", "Career Training & Workshop", "Advanced Web Technology", "Seminar on IT", "Problem Solving", "Mobile Programming", "Internet of Things", "Digital Forensic", "Blockchain & Cryptography"]
      }
    ]
  },
  {
    institution: "College of Science and Technology (CST)",
    degree: "Mechanical Engineering",
    description: "Foundational studies in engineering principles, mechanics, and problem-solving.",
    years: []
  },
  {
    institution: "G.S M.DEI Nyanza",
    degree: "Mathematics, Physics, and Computer Science (MPC)",
    description: "Advanced secondary education focusing on core STEM subjects.",
    years: []
  }
];

const skillsData = [
  { category: "Web Development", icon: <Globe className="w-6 h-6" />, skills: ["Advanced Web Technology", "React", "HTML/CSS", "JavaScript"] },
  { category: "AI & Data Science", icon: <BrainCircuit className="w-6 h-6" />, skills: ["AI & Deep Learning", "Data Science", "Data Mining & Analysis", "Computer Vision"] },
  { category: "Cloud & Systems", icon: <Cloud className="w-6 h-6" />, skills: ["Cloud Computing", "Linux", "Operating Systems", "Networking"] },
  { category: "Security & Blockchain", icon: <Shield className="w-6 h-6" />, skills: ["Ethical Hacking", "Cryptography", "Digital Forensics", "Blockchain"] },
  { category: "Software Engineering", icon: <Code className="w-6 h-6" />, skills: ["C++", "Java", "Data Structures", "System Analysis"] },
  { category: "Emerging Tech", icon: <Cpu className="w-6 h-6" />, skills: ["Internet of Things (IoT)", "Mobile Programming", "Game Development", "Computer Graphics"] },
];

const projectsData = [
  {
    title: "Smart Computing IoT System",
    description: "A comprehensive IoT solution developed as part of the 4th-year Smart Computing Project, integrating hardware sensors with cloud analytics.",
    tags: ["IoT", "Cloud Computing", "Data Analysis"]
  },
  {
    title: "AI-Powered Data Analyzer",
    description: "A machine learning application built to process and analyze large datasets, utilizing deep learning techniques for predictive modeling.",
    tags: ["AI", "Deep Learning", "Python"]
  },
  {
    title: "Secure Web Platform",
    description: "A modern web application built with advanced web technologies, featuring robust authentication, cryptography, and secure database management.",
    tags: ["Web Development", "Cybersecurity", "Database"]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight text-white">JD<span className="text-indigo-500">.</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          </div>
          <a 
            href="https://www.linkedin.com/in/jeanpierredufitumukiza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">Connect</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-500/30 mb-6 relative shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] hover:border-indigo-500 transition-colors duration-300">
              <img 
                src="/profile.jpg" 
                alt="Dufitumukiza Jean Pierre" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if the user hasn't uploaded the image yet
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/jeanpierre/400/400';
                }}
              />
            </div>
            <h2 className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4">Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Dufitumukiza Jean Pierre</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Bachelor’s Student in Smart Computing | Aspiring Web Developer | Passionate About AI, Cloud & Business Innovation
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
                View My Work
              </a>
              <a href="mailto:priodufitumukiza@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Terminal className="w-8 h-8 text-indigo-500" />
              About Me
            </h2>
            <div className="prose prose-invert prose-lg text-slate-400">
              <p>
                I am a dedicated Smart Computing student with a strong foundation in software engineering, artificial intelligence, and cloud technologies. My academic journey has equipped me with a diverse skill set ranging from low-level programming (C++) to advanced web technologies and deep learning.
              </p>
              <p>
                I am deeply passionate about leveraging technology to drive business innovation. Whether it's building secure web applications, analyzing complex datasets, or developing IoT solutions, I thrive on solving challenging problems and continuously expanding my technical horizons.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="w-10 h-10 text-indigo-500" />
              Academic Journey
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive look at my educational background and the rigorous coursework that has shaped my technical expertise.</p>
          </motion.div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-indigo-400 font-medium text-lg mb-4">{edu.degree}</p>
                <p className="text-slate-400 mb-8">{edu.description}</p>

                {edu.years.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {edu.years.map((year, yIndex) => (
                      <div key={yIndex} className="bg-slate-950/50 rounded-xl p-6 border border-slate-800/50">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm">{yIndex + 1}</span>
                          {year.year}
                        </h4>
                        <ul className="space-y-2">
                          {year.courses.map((course, cIndex) => (
                            <li key={cIndex} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-indigo-500 mt-1">▹</span> {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Code className="w-10 h-10 text-indigo-500" />
              Technical Skills
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Areas of expertise developed through academic projects and personal exploration.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Briefcase className="w-10 h-10 text-indigo-500" />
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A selection of academic and personal projects demonstrating my practical abilities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all"
              >
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-xl tracking-tight text-white block mb-2">JD<span className="text-indigo-500">.</span></span>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Dufitumukiza Jean Pierre. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/jeanpierredufitumukiza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:priodufitumukiza@gmail.com" 
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
