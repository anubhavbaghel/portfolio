import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
          What's Next?
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Get In <em className="text-teal-600 not-italic">Touch</em>
        </h2>
      </div>

      {/* Contact Container */}
      <div className="flex flex-col lg:flex-row gap-12 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
        {/* Background ambient glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        {/* Left Side: Info */}
        <div className="flex flex-col justify-center lg:w-5/12 relative z-10">
          <h3 className="text-3xl font-bold text-white mb-4">Let's build something together!</h3>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Whether you have a question, a project in mind, or just want to say hi, I try my best to get back to everyone. Drop me a message and let's chat.
          </p>
          
          <div className="flex flex-col gap-4 mb-8">
            <a 
              href="mailto:code.anubhavbaghel@gmail.com" 
              className="flex items-center gap-4 text-gray-300 hover:text-teal-400 transition-colors w-fit"
            >
              <span className="p-3 bg-white/5 border border-white/10 rounded-xl"><MailIcon /></span>
              <span className="font-medium tracking-wide text-sm md:text-base">code.anubhavbaghel@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 border-t border-white/10 pt-8">
            <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-teal-400 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/anubhavbaghel" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-teal-400 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1">
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-7/12 relative z-10">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-5">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
            ></textarea>
            
            <button type="submit" className="mt-2 bg-teal-500 text-black font-bold text-sm md:text-base px-8 py-3.5 rounded-xl hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 w-full sm:w-auto self-start">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;