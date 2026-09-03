import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Docket Header */}
      <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
        <span className="stamp-tag text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
          SECTION // 06
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Studio Inquiries & Direct Dispatch
        </h2>
      </div>

      {/* Contact Container */}
      <div className="paper-card rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-12">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between lg:w-5/12">
          <div>
            <div className="inline-block px-2.5 py-1 bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-400 rounded mb-4">
              DISPATCH DESK
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 tracking-tight">
              Let's build something authentic together.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Whether you have a full project in mind, need technical assistance, or want to discuss a role, I'm always open to talking craft.
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <a 
                href="mailto:code.anubhavbaghel@gmail.com" 
                className="flex items-center gap-3 p-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-zinc-300 hover:text-white hover:border-white/20 transition-all w-full"
              >
                <span className="p-2 bg-white/5 border border-white/10 rounded-lg text-amber-400"><MailIcon fontSize="small" /></span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">DIRECT EMAIL</span>
                  <span className="font-mono text-xs sm:text-sm font-medium">code.anubhavbaghel@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-zinc-500 mr-2">CHANNELS:</span>
            <a
              href="https://www.linkedin.com/in/anubhav-baghel/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-1.5"
            >
              <LinkedInIcon fontSize="small" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/anubhavbaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-1.5"
            >
              <GitHubIcon fontSize="small" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-7/12 bg-[#18181c] border border-white/10 rounded-xl p-6 sm:p-8">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">SENDER NAME</label>
                <input 
                  type="text" 
                  placeholder="e.g. John Doe" 
                  className="w-full bg-[#121214] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/60 transition-all"
                />
              </div>
              <div className="w-full">
                <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-[#121214] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/60 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">PROJECT / INQUIRY TOPIC</label>
              <input 
                type="text" 
                placeholder="Brief summary of your message" 
                className="w-full bg-[#121214] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/60 transition-all"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">MESSAGE DETAILS</label>
              <textarea 
                placeholder="Describe your goals, requirements, or questions..." 
                rows="4" 
                className="w-full bg-[#121214] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/60 transition-all resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="mt-2 bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-lg hover:bg-white transition-all duration-200 shadow-md flex items-center justify-center gap-2 self-start cursor-pointer"
            >
              <span>DISPATCH MESSAGE</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;