import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0c] border-t border-white/10 py-12 mt-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand / Colophon */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
            <span className="stamp-tag text-xs font-mono text-zinc-400 font-semibold">
              ANUBHAV BAGHEL // STUDIO DOCKET
            </span>
          </div>
          <p className="text-zinc-500 text-xs font-mono max-w-md">
            Hand-crafted web applications, WordPress systems, and digital tools. Built with precision and modern standards.
          </p>
        </div>
        
        {/* Social / Direct Channels */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
          <a
            href="mailto:code.anubhavbaghel@gmail.com"
            className="hover:text-zinc-100 px-3 py-1.5 bg-[#141417] border border-white/10 rounded-md transition-colors"
          >
            EMAIL DISPATCH
          </a>
          <a
            href="https://www.linkedin.com/in/anubhav-baghel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 px-3 py-1.5 bg-[#141417] border border-white/10 rounded-md transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/anubhavbaghel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 px-3 py-1.5 bg-[#141417] border border-white/10 rounded-md transition-colors"
          >
            GITHUB
          </a>
        </div>
      </div>
      
      {/* Imprint line */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-zinc-600 gap-2">
        <p>&copy; {new Date().getFullYear()} Anubhav Baghel. All rights reserved.</p>
        <p>EDITION: FOLIO-2026 // DELHI, IN</p>
      </div>
    </footer>
  );
};

export default Footer;