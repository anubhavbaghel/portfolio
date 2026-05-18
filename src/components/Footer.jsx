import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 mt-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wider text-white mb-2 cursor-pointer hover:text-teal-400 transition-colors">
            Anubhav<span className="text-teal-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Turning ideas into modern, responsive, and user-friendly web experiences.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 text-gray-400">
          <a href="mailto:code.anubhavbaghel@gmail.com" className="hover:text-teal-400 hover:-translate-y-1 transition-all duration-300" aria-label="Email">
            <MailIcon fontSize="medium" />
          </a>
          <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
            <LinkedInIcon fontSize="medium" />
          </a>
          <a href="https://github.com/anubhavbaghel" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
            <GitHubIcon fontSize="medium" />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5 flex flex-col items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Anubhav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;