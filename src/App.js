import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  Code, 
  Database, 
  Server, 
  Terminal, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Briefcase,
  User,
  Send,
  MessageCircle
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top < 300;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors duration-300 hover:text-indigo-400 ${
        activeSection === id ? 'text-indigo-400' : 'text-slate-300'
      }`}
    >
      {children}
    </button>
  );

  const MobileNavLink = ({ id, children }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`block w-full text-left py-3 px-4 text-base font-medium border-l-4 transition-all duration-300 ${
        activeSection === id 
          ? 'border-indigo-500 text-indigo-400 bg-slate-800/50' 
          : 'border-transparent text-slate-400 hover:bg-slate-800/30 hover:text-slate-200'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-indigo-500/5 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            MSH<span className="text-indigo-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink id="home">Home</NavLink>
            <NavLink id="about">About</NavLink>
            <NavLink id="skills">Skills</NavLink>
            <NavLink id="experience">Experience</NavLink>
            <NavLink id="projects">Projects</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl">
            <MobileNavLink id="home">Home</MobileNavLink>
            <MobileNavLink id="about">About</MobileNavLink>
            <MobileNavLink id="skills">Skills</MobileNavLink>
            <MobileNavLink id="experience">Experience</MobileNavLink>
            <MobileNavLink id="projects">Projects</MobileNavLink>
            <MobileNavLink id="contact">Contact</MobileNavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
              Full Stack Web Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Md. Siam <br />
              <span className="text-indigo-500">Hossain</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              I build robust web applications using Laravel, React, and PHP. 
              Passionate about creating efficient, scalable, and user-friendly solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
              >
                View Work <ChevronRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 pt-6 text-slate-400">
              <a href="https://github.com/siamStark" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/siamhossain24/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all"><Linkedin size={24} /></a>
              <a href="mailto:siammiah9@gmail.com" className="hover:text-indigo-400 hover:scale-110 transition-all"><Mail size={24} /></a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-grid-slate-700/[0.1] -z-10" />
               <div className="text-center p-8">
                  <div className="w-24 h-24 bg-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Code size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Development</h3>
                  <p className="text-slate-400">Laravel • React • MySQL</p>
               </div>
               
               {/* Decorative floating code blocks */}
               <div className="absolute -top-4 -right-4 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl transform rotate-12 opacity-80">
                 <Database size={20} className="text-emerald-400" />
               </div>
               <div className="absolute -bottom-6 -left-2 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl transform -rotate-6 opacity-80">
                 <Server size={20} className="text-blue-400" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <User className="text-indigo-500" size={28} />
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
  Hi, I’m <span className="text-indigo-400 font-semibold">Md. Siam Hossain</span>, a Computer Science & Engineering graduate and a 
  passionate <span className="text-indigo-400 font-semibold">PHP, Laravel & React developer</span>. I enjoy building scalable and 
  practical web applications such as e-commerce platforms, Management systems,ERP system and custom web solutions.
  <br /><br />
  I have hands-on experience from my internship where I worked on real-world projects, integrated payment gateways, and followed 
  the MVC architecture. I’m always eager to learn new technologies and build software that solves real-world problems.
</p>

              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-800">
                <div>
                   <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Location</h4>
                   <p className="text-white">Uttara Sector 10, Dhaka, Bangladesh</p>
                </div>
                <div>
                   <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Education</h4>
                   <p className="text-white">BSc (CSE) - IUBAT (CGPA 3.40/4.00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiency</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Code className="text-blue-400" />} 
              title="Frontend" 
              skills={['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap']} 
            />
            <SkillCard 
              icon={<Server className="text-indigo-400" />} 
              title="Backend" 
              skills={['PHP', 'Laravel', 'C# (Basic)', 'Node.js (Basic)']} 
            />
            <SkillCard 
              icon={<Database className="text-emerald-400" />} 
              title="Database" 
              skills={['MySQL', 'MongoDB', 'Database Design', 'Query Optimization']} 
            />
            <SkillCard 
              icon={<Terminal className="text-orange-400" />} 
              title="Tools & System" 
              skills={['Git & GitHub', 'Windows Server', 'CentOS', 'Active Directory']} 
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-indigo-500" size={28} />
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
            <ExperienceCard 
              role="Intern - Laravel Developer"
              company="Softdeft, Tongi, Gazipur"
              period="June 2025 - December 2025"
              description={[
                "Assisted in developing and maintaining modules for a multi-vendor e-commerce platform.",
                "Integrated SSLCommerz payment gateway for secure online transactions.",
                "Collaborated with the team on vendor dashboard features and debugging Laravel controllers.",
                "Gained hands-on experience with MVC architecture and RESTful API integration."
              ]}
              current={true}
            />
            <ExperienceCard 
              role="Training - PHP (Laravel)"
              company="ICT Division's EDGE Project"
              period="Nov 2024 - Jul 2025"
              description={[
                "Completed 80 hours of intensive training on PHP and Laravel framework.",
                "Hands-on training on Computer Networking, including Windows Server and Active Directory.",
                "Microsoft certified workshop in Virtual Machine."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <FileText className="text-indigo-500" size={28} />
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <a href="https://github.com/siamStark" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
              View All Github <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Pharmacy Management System"
              tech="Dotnet, C#, MySQL, JavaScript"
              desc="A comprehensive system for managing pharmacy inventory, sales, and customer data built with .NET ecosystem."
              link="https://github.com/siamStark/Pharmacy-Management-System-using-Dotnet"
              color="border-purple-500/50"
            />
            <ProjectCard 
              title="Movie Website"
              tech="Core PHP, HTML, CSS, MySQL"
              desc="A dynamic movie listing website allowing users to browse and search for movies, built using raw PHP and MySQL."
              link="https://github.com/siamStark/Movie-Website"
              color="border-blue-500/50"
            />
            <ProjectCard 
              title="School Management System"
              tech="Laravel, PHP, Blade, MySQL"
              desc="An academic management platform for tracking student data, attendance, and grades efficiently."
              link="https://github.com/siamStark/School-Management-System"
              color="border-emerald-500/50"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-indigo-500" size={28} />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">BSc in CSE</h3>
                  <p className="text-indigo-400">IUBAT (International University of Business Agriculture and Technology)</p>
                </div>
                <span className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-slate-400 border border-slate-800">2021-2025</span>
              </div>
              <p className="text-slate-400 mb-2">CGPA: <span className="text-white font-medium">3.40 / 4.00</span></p>
              <p className="text-sm text-slate-500 mt-4 italic">
                Thesis: "Enhancing Deepfake Detection Accuracy with SwinIR and RandomForest" (Under Review)
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">HSC (Science)</h3>
                    <p className="text-slate-400 text-sm">Major General Mahmudul Hasan Adarsha College</p>
                  </div>
                  <span className="text-slate-500 text-sm">2019</span>
                </div>
                <p className="text-slate-400 text-sm mt-2">GPA: 4.25 / 5.00</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">SSC (Science)</h3>
                    <p className="text-slate-400 text-sm">Velayet Hossain Bahumukhi Uchcha Bidyalay</p>
                  </div>
                  <span className="text-slate-500 text-sm">2017</span>
                </div>
                <p className="text-slate-400 text-sm mt-2">GPA: 5.00 / 5.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/20 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-slate-400">
                I'm currently available for freelance work or full-time opportunities.
                <br />Connect with me via Email or WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Email Card */}
              <a 
                href="mailto:siammiah9@gmail.com"
                className="group bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-slate-400 text-sm">siammiah9@gmail.com</p>
                <span className="text-indigo-400 text-sm font-medium mt-2 group-hover:underline">Send Message</span>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/8801688813663"
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="text-slate-400 text-sm">+880 1688-813663</p>
                <span className="text-emerald-400 text-sm font-medium mt-2 group-hover:underline">Chat Now</span>
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800/50">
               <div className="flex justify-center gap-6 text-slate-400">
                  <a href="https://github.com/siamStark" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/siamhossain24/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Md Siam Hossain. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Component Helpers

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 group">
    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-slate-400 text-sm">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ role, company, period, description, current }) => (
  <div className="relative pl-8 md:pl-12 pb-2">
    <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-slate-950 ${current ? 'bg-indigo-500' : 'bg-slate-600'}`}></div>
    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <p className="text-indigo-400 font-medium">{company}</p>
        </div>
        <span className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-slate-400 border border-slate-800 whitespace-nowrap">
          {period}
        </span>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectCard = ({ title, tech, desc, link, color }) => (
  <div className={`bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 group flex flex-col h-full`}>
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <Github size={20} />
        </a>
      </div>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.split(', ').map((t, i) => (
          <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className={`h-1 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
  </div>
);

export default Portfolio;