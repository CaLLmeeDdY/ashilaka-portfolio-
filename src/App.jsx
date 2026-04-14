import React, { useState } from 'react';
// 1. Added FaTiktok to the imports
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFileDownload, FaSun, FaMoon, FaTiktok } from 'react-icons/fa';
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
  imagePath: "/3d-profile.jpg", 
  email: "ashilakaedwin@gmail.com",
  phone: "+254 769 058 951",
  whatsapp: "254769058951", 
  instagram: "netash_254",
  // 2. Add your TikTok handle here (without the @ symbol)
  tiktok: "ashilakaeddy054" 
};

const projects = [
  {
    title: "TIA Clinic Showcase",
    image: "/project1.jpg", 
    tags: ["React", "Tailwind"],
    description: "An interactive web platform demonstrating modern frontend development practices. Built with lightning-fast architecture.",
    link: "#"
  },
  {
    title: "WhatsApp Automation",
    image: "/project2.jpg", 
    tags: ["Python", "Django"],
    description: "A comprehensive lead automation platform designed to integrate WhatsApp messaging capabilities with complex sales workflows.",
    link: "#"
  },
  {
    title: "DataBasedIndex",
    image: "/project3.jpg", 
    tags: ["Django", "Celery"],
    description: "A sophisticated AI-powered SEO content generation and static site deployment tool designed to streamline web creation.",
    link: "#"
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

export default function App() {
  const [buttonText, setButtonText] = useState("Send a message");
  const [isDarkMode, setIsDarkMode] = useState(true); 

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
    <div className={`min-h-screen font-sans pb-24 selection:bg-[#d9232e] selection:text-white scroll-smooth transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      
      <MatrixBackground isDarkMode={isDarkMode} />

      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0f16]/60 border-gray-800/50' : 'bg-white/60 border-gray-200'}`}>
        <div className="flex justify-between items-center py-5 px-8 lg:px-24">
          <div className="text-xl font-bold tracking-wider uppercase">{profile.name}</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <a href="#home" className="hover:text-[#d9232e] transition-colors">Home</a>
            <a href="#projects" className="hover:text-[#d9232e] transition-colors">Projects</a>
            <a href="#about" className="hover:text-[#d9232e] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#d9232e] transition-colors">Contact</a>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-500/20 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-gray-800" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. PRO HERO SECTION */}
      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-24 min-h-screen items-center pt-20">
        <div className="space-y-6 relative z-10 p-8 rounded-2xl backdrop-blur-sm bg-black/10">
          <p className={`font-mono tracking-widest uppercase text-sm flex items-center gap-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="w-2 h-2 rounded-full bg-[#d9232e] animate-pulse"></span>
            System Online
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            I build digital <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-[#d9232e]">masterpieces.</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-semibold border-l-2 border-[#d9232e] pl-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {profile.role}
          </h2>
          <p className={`max-w-xl leading-relaxed text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            {profile.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-6">
            <a href="#contact" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white bg-[#d9232e] rounded group shadow-[0_0_15px_rgba(217,35,46,0.3)]">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">{profile.buttonText}</span>
            </a>
            
            <a href={profile.resumeLink} download className={`border px-6 py-3 rounded font-bold transition-all duration-300 flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:text-white hover:border-[#d9232e] hover:bg-[#d9232e]/5' : 'border-gray-400 text-gray-800 hover:text-[#d9232e] hover:border-[#d9232e]'}`}>
              <FaFileDownload size={18} />
              {profile.resumeText}
            </a>

            {/* Icon Row */}
            <div className={`flex items-center gap-4 border-l pl-4 h-10 ${isDarkMode ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600'}`}>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={26} />
              </a>
              <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
                <FaInstagram size={26} />
              </a>
              {/* 3. TikTok Icon Added Here */}
              <a href={`https://tiktok.com/@${profile.tiktok}`} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`} aria-label="TikTok">
                <FaTiktok size={26} />
              </a>
              <a href="#contact" className="hover:text-[#d9232e] transition-colors" aria-label="Contact">
                <FaEnvelope size={26} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative mt-12 lg:mt-0">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#d9232e] to-red-900 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-500"></div>
            <div className={`w-72 h-72 md:w-96 md:h-96 rounded-full p-1 relative transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.8)] ${isDarkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100'}`}>
              <div className={`w-full h-full rounded-full overflow-hidden relative z-10 border-4 ${isDarkMode ? 'border-[#0a0f16] bg-[#0a0f16]' : 'border-white bg-white'}`}>
                <img 
                  src={profile.imagePath} 
                  alt={profile.name} 
                  onError={(e) => { e.target.style.display = 'none'; }}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className={`px-8 lg:px-24 py-32 border-y backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-[#0d131b]/80 border-gray-800/50' : 'bg-white/80 border-gray-200'}`}>
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`border rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${isDarkMode ? 'bg-[#111822]/90 border-gray-800 hover:border-gray-500 hover:shadow-red-900/10' : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-red-900/10'}`}>
              <div className={`h-48 flex items-center justify-center relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <div className="absolute inset-0 bg-[#d9232e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  onError={(e) => { e.target.style.display = 'none'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#d9232e] transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={`px-2 py-1 border text-xs rounded ${isDarkMode ? 'bg-[#0a0f16] border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-700'}`}>{tag}</span>
                  ))}
                </div>
                <p className={`text-sm mb-8 line-clamp-3 flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <a href={project.link} className="block text-center w-full py-3 border border-[#d9232e] text-[#d9232e] hover:bg-[#d9232e] hover:text-white rounded transition-all font-bold tracking-wide mt-auto">
                  Read Case Study &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT & EXPERIENCE SECTION */}
      <section id="about" className={`px-8 lg:px-24 py-24 border-y backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0f16]/80 border-gray-800/50' : 'bg-gray-50/80 border-gray-200'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="p-8 rounded-2xl backdrop-blur-sm bg-black/5">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className={`leading-relaxed mb-8 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              I am a Full Stack Developer and Computer Scientist with a deep passion for building scalable applications and managing robust cloud infrastructure. Over the past few years, I've had the opportunity to solve real-world technical challenges across varied environments.
            </p>
            <a href={profile.resumeLink} download className="inline-block bg-transparent border border-[#d9232e] text-[#d9232e] hover:bg-[#d9232e] hover:text-white px-8 py-3 rounded font-bold transition-all hover:shadow-[0_0_15px_rgba(217,35,46,0.3)]">
              Download Detailed CV
            </a>
          </div>
          
          <div className="space-y-8 mt-4 lg:mt-0 p-8 rounded-2xl backdrop-blur-sm bg-black/5">
            {experience.map((job, index) => (
              <div key={index} className={`relative pl-8 border-l ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
                <div className={`absolute w-4 h-4 border-2 rounded-full -left-[9px] top-1 ${index === 0 ? 'border-[#d9232e]' : (isDarkMode ? 'border-gray-600' : 'border-gray-400')} ${isDarkMode ? 'bg-[#0a0f16]' : 'bg-white'}`}></div>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className={`${index === 0 ? 'text-[#d9232e]' : (isDarkMode ? 'text-gray-500' : 'text-gray-600')} text-sm font-mono mb-3 mt-1`}>{job.company} • {job.date}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className={`px-8 lg:px-24 py-32 backdrop-blur-md transition-colors duration-500 ${isDarkMode ? 'bg-[#0d131b]/80' : 'bg-white/80'}`}>
        <div className={`max-w-5xl mx-auto border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#111822]/90 border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#d9232e]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Open for roles in Full Stack Development, Data Science, and Cloud Engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className={`w-12 h-12 rounded border flex items-center justify-center text-[#d9232e] group-hover:bg-[#d9232e] group-hover:text-white transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                  <span className="font-mono text-xl">@</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="font-mono">{profile.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className={`w-12 h-12 rounded border flex items-center justify-center text-[#d9232e] group-hover:bg-[#d9232e] group-hover:text-white transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                  <span className="font-mono text-xl">#</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-mono">{profile.phone}</p>
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
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:border-[#d9232e] focus:ring-1 focus:ring-[#d9232e] transition-all ${isDarkMode ? 'bg-[#0a0f16] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com" 
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:border-[#d9232e] focus:ring-1 focus:ring-[#d9232e] transition-all ${isDarkMode ? 'bg-[#0a0f16] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="4" 
                  placeholder="How can I help you?" 
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:border-[#d9232e] focus:ring-1 focus:ring-[#d9232e] transition-all ${isDarkMode ? 'bg-[#0a0f16] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#d9232e] hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/20"
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