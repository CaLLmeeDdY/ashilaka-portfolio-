import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFileDownload, FaSun, FaMoon, FaTiktok, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import MatrixBackground from './MatrixBackground'; 

// ==========================================================
// 🎛️ MASTER CONTROL PANEL
// ==========================================================
const profile = {
  name: "NETASH.KE",
  role: "FULL PACK NETWORK TECHNICIAN AND DEVELOPER",
  bio: "Specializing in scalable web applications, Data Science, and Cloud Infrastructure. Delivering technical mastery across modern frameworks and automated deployments.",
  buttonText: "Got a project?",
  resumeText: "My Resume",
  resumeLink: "/ashilaka-resume.pdf", 
  imagePath: "/avatar-clean.jpg", 
  email: "ashilakaedwin@gmail.com",
  phone: "+254 769 058 951",
  whatsapp: "254769058951", 
  instagram: "netash_254",
  tiktok: "ashilakaeddy054" 
};

const projects = [
  {
    title: "NETASH_OS v3.8.0",
    image: "/netash-bg.jpg", // Replace with one of the screenshots you took
    tags: ["Flutter", "Dart", "Android"],
    description: "A tactical, offline-first network diagnostic suite for Android. Features live ICMP jitter tracking, ARP subnet scanning, inline Telnet console, and 802.11 airspace monitoring.",
    apkLink: "/Netash_OS_v3.8.0.apk", // This triggers the custom download button
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "TIA Clinic Showcase",
    image: "/project1.jpg", 
    tags: ["React", "Tailwind", "Vite"],
    description: "An interactive web platform demonstrating modern frontend development practices. Built with lightning-fast architecture and responsive design.",
    githubLink: "#", 
    liveLink: "#"    
  },
  {
    title: "WhatsApp Automation",
    image: "/project2.jpg", 
    tags: ["Python", "Django", "API"],
    description: "A comprehensive lead automation platform designed to integrate WhatsApp messaging capabilities with complex sales workflows.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "DataBasedIndex",
    image: "/project3.jpg", 
    tags: ["Django", "Celery", "AI"],
    description: "A sophisticated AI-powered SEO content generation and static site deployment tool designed to streamline web creation.",
    githubLink: "#",
    liveLink: "#"
  }
];

const experience = [
  {
    role: "Lead Full Stack Developer",
    company: "Agency",
    date: "Nov 2023 - Present",
    description: "Spearheaded the architecture of AI-powered web applications, ultimately improving deployment times, system uptime, and overall performance."
  },
  {
    role: "Data Science Intern",
    company: "Remote",
    date: "June 2023 - Oct 2023",
    description: "Applied machine learning models to solve complex datasets, focusing on high-accuracy predictive analytics and health classification."
  }
];

// ==========================================================
// ⌨️ TYPEWRITER ANIMATION COMPONENT
// ==========================================================
const Typewriter = ({ text, speed = 60 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse text-[#00d2ff] ml-1">|</span>
    </span>
  );
};

export default function App() {
  const [buttonText, setButtonText] = useState("Send a message");
  const [isDarkMode, setIsDarkMode] = useState(true); 
  
  // --- NEW: DYNAMIC NAVIGATION TRACKER ---
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      // Offset by 200px so it triggers right before you hit the section
      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "58d4ea45-916e-455f-81ba-d8eb3c803bb9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setButtonText("Message Sent! 🚀");
        event.target.reset(); 
        setTimeout(() => setButtonText("Send a message"), 5000); 
      } else {
        setButtonText("Error sending message.");
      }
    } catch (error) {
      setButtonText("Network Error.");
    }
  };

  return (
    <div className={`min-h-screen font-sans pb-24 selection:bg-[#00d2ff] selection:text-black scroll-smooth transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      
      <MatrixBackground isDarkMode={isDarkMode} />

      {/* 1. DYNAMIC NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0f16]/60 border-gray-800/50' : 'bg-white/60 border-gray-200'}`}>
        <div className="flex justify-between items-center py-5 px-8 lg:px-24">
          <div className="text-xl font-bold tracking-wider uppercase text-[#00d2ff]">{profile.name}</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            {['home', 'projects', 'about', 'contact'].map((tab) => (
              <a 
                key={tab}
                href={`#${tab}`} 
                className={`relative py-1 transition-all duration-300 ${activeSection === tab ? 'text-[#00d2ff] scale-110' : 'hover:text-[#00d2ff]'}`}
              >
                {tab}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00d2ff] transition-all duration-300 ${activeSection === tab ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></span>
              </a>
            ))}
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-500/20 transition-all duration-300 ml-4 border border-transparent hover:border-gray-500"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-[#00d2ff]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. PRO HERO SECTION */}
      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-24 min-h-screen items-center pt-20">
        <div className="space-y-6 relative z-10 p-8 rounded-2xl backdrop-blur-sm bg-black/10 border border-white/5">
          <p className={`font-mono tracking-widest uppercase text-sm flex items-center gap-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse shadow-[0_0_8px_#00d2ff]"></span>
            System Online
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight min-h-[140px] md:min-h-[160px]">
            <Typewriter text="Hey, it's your friendly neighborhood Technician, Ashilaka Edwin, 😄" />
          </h1>

          <h2 className={`text-2xl md:text-3xl font-semibold border-l-2 border-[#00d2ff] pl-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {profile.role}
          </h2>
          <p className={`max-w-xl leading-relaxed text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            {profile.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-6">
            <a href="#contact" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-[#0a0f16] bg-[#00d2ff] rounded group shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] transition-all">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
              <span className="relative">{profile.buttonText}</span>
            </a>
            
            <a href={profile.resumeLink} download className={`border px-6 py-3 rounded font-bold transition-all duration-300 flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:text-[#00d2ff] hover:border-[#00d2ff] hover:bg-[#00d2ff]/10' : 'border-gray-400 text-gray-800 hover:text-[#00d2ff] hover:border-[#00d2ff]'}`}>
              <FaFileDownload size={18} />
              {profile.resumeText}
            </a>

            {/* Icon Row */}
            <div className={`flex items-center gap-4 border-l pl-4 h-10 ${isDarkMode ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600'}`}>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors hover:scale-110" aria-label="WhatsApp">
                <FaWhatsapp size={26} />
              </a>
              <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors hover:scale-110" aria-label="Instagram">
                <FaInstagram size={26} />
              </a>
              <a href={`https://tiktok.com/@${profile.tiktok}`} target="_blank" rel="noopener noreferrer" className={`transition-colors hover:scale-110 ${isDarkMode ? 'hover:text-white' : 'hover:text-[#00d2ff]'}`} aria-label="TikTok">
                <FaTiktok size={26} />
              </a>
              <a href="#contact" className="hover:text-[#00d2ff] transition-colors hover:scale-110" aria-label="Contact">
                <FaEnvelope size={26} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative mt-12 lg:mt-0 w-full">
          <div className="relative group cursor-pointer w-full max-w-[27rem] lg:max-w-[36rem] aspect-square">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00d2ff] to-blue-900 rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-500"></div>
            <div className={`relative z-10 w-full h-full rounded-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.03] ${isDarkMode ? 'shadow-[0_0_40px_rgba(0,210,255,0.15)] border border-[#00d2ff]/20' : 'shadow-xl border border-gray-200'}`}>
              <img 
                src={profile.imagePath} 
                alt={profile.name} 
                onError={(e) => { e.target.style.display = 'none'; }}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className={`px-8 lg:px-24 py-32 border-y backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-[#0d131b]/80 border-gray-800/50' : 'bg-gray-50/80 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>A selection of my recent work and technical experiments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`relative group border rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${isDarkMode ? 'bg-[#111822]/90 border-gray-800 hover:border-[#00d2ff]/50 hover:shadow-[#00d2ff]/10' : 'bg-white border-gray-200 hover:border-[#00d2ff]/50 hover:shadow-[#00d2ff]/20'}`}>
                
                <div className={`h-56 relative overflow-hidden flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'}`}>
                  <div className="absolute inset-0 bg-[#00d2ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={(e) => { e.target.style.opacity = 0; }} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg backdrop-blur-md ${isDarkMode ? 'bg-black/60 text-[#00d2ff] border border-[#00d2ff]/30' : 'bg-white/80 text-blue-600 border border-blue-200'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00d2ff] transition-colors">{project.title}</h3>
                  <p className={`text-sm mb-8 leading-relaxed flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {/* DYNAMIC BUTTON RENDERER */}
                  <div className={`flex items-center gap-4 pt-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    {project.apkLink ? (
                      // INJECTED NETASH_OS BUTTON
                      <a 
                        href={project.apkLink} 
                        download="Netash_OS_v3.8.0.apk" 
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all font-bold text-sm shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] ${isDarkMode ? 'bg-[#090C10] text-[#00E5FF] border border-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#090C10]' : 'bg-white text-blue-600 border border-blue-500 hover:bg-blue-600 hover:text-white'}`}
                      >
                        <FaFileDownload size={16} /> DOWNLOAD APK [50MB]
                      </a>
                    ) : (
                      // STANDARD PORTFOLIO BUTTONS
                      <>
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#00d2ff] hover:bg-[#0099cc] text-[#0a0f16] rounded-lg transition-all font-bold text-sm shadow-lg shadow-blue-900/20"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 py-3 border rounded-lg transition-all font-bold text-sm ${isDarkMode ? 'border-gray-700 text-gray-300 hover:text-[#00d2ff] hover:border-[#00d2ff] hover:bg-[#00d2ff]/10' : 'border-gray-300 text-gray-700 hover:text-[#00d2ff] hover:border-[#00d2ff] hover:bg-blue-50'}`}
                        >
                          <FaGithub size={16} /> Code
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT & EXPERIENCE SECTION */}
      <section id="about" className={`px-8 lg:px-24 py-24 border-y backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0f16]/80 border-gray-800/50' : 'bg-white/80 border-gray-200'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="p-8 rounded-2xl backdrop-blur-sm bg-black/5 border border-white/5">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className={`leading-relaxed mb-8 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              I am a Full Stack Developer and Computer Scientist with a deep passion for building scalable applications and managing robust cloud infrastructure. Over the past few years, I've had the opportunity to solve real-world technical challenges across varied environments.
            </p>
            <a href={profile.resumeLink} download className="inline-block bg-transparent border border-[#00d2ff] text-[#00d2ff] hover:bg-[#00d2ff] hover:text-black px-8 py-3 rounded font-bold transition-all hover:shadow-[0_0_15px_rgba(0,210,255,0.3)]">
              Download Detailed CV
            </a>
          </div>
          
          <div className="space-y-8 mt-4 lg:mt-0 p-8 rounded-2xl backdrop-blur-sm bg-black/5 border border-white/5">
            {experience.map((job, index) => (
              <div key={index} className={`relative pl-8 border-l ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
                <div className={`absolute w-4 h-4 border-2 rounded-full -left-[9px] top-1 ${index === 0 ? 'border-[#00d2ff] shadow-[0_0_8px_#00d2ff]' : (isDarkMode ? 'border-gray-600' : 'border-gray-400')} ${isDarkMode ? 'bg-[#0a0f16]' : 'bg-white'}`}></div>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className={`${index === 0 ? 'text-[#00d2ff]' : (isDarkMode ? 'text-gray-500' : 'text-gray-600')} text-sm font-mono mb-3 mt-1`}>{job.company} • {job.date}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className={`px-8 lg:px-24 py-32 backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-[#0d131b]/80' : 'bg-gray-50/80'}`}>
        <div className={`max-w-5xl mx-auto border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#111822]/90 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Open for roles in Full Stack Development, Data Science, and Cloud Engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded border flex items-center justify-center text-[#00d2ff] group-hover:bg-[#00d2ff] group-hover:text-black transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                  <span className="font-mono text-xl">@</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="font-mono group-hover:text-[#00d2ff] transition-colors">{profile.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded border flex items-center justify-center text-[#00d2ff] group-hover:bg-[#00d2ff] group-hover:text-black transition-all duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                  <span className="font-mono text-xl">#</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-mono group-hover:text-[#00d2ff] transition-colors">{profile.phone}</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe" 
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all ${isDarkMode ? 'bg-[#0a0f16] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com" 
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all ${isDarkMode ? 'bg-[#0a0f16] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="4" 
                  placeholder="How can I help you?" 
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all ${isDarkMode ? 'bg-[#0a0f16] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#00d2ff] hover:bg-[#0099cc] text-[#0a0f16] font-bold py-4 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/20"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}