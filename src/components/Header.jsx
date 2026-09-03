import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about", num: "01" },
    { label: "Projects", href: "#projects", num: "02" },
    { label: "Experience", href: "#experience", num: "03" },
    { label: "Tech Stack", href: "#tech-stack", num: "04" },
    { label: "Certifications", href: "#certifications", num: "05" },
    { label: "Contact", href: "#contact", num: "06" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 text-white transition-all duration-300 bg-[#0c0c0e]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Studio Branding */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 bg-amber-500/80 rounded-full group-hover:scale-125 transition-transform"></span>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                Anubhav Baghel
              </span>
              <span className="stamp-tag text-[10px] text-zinc-400 tracking-wider uppercase">
                Studio // 2026
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 bg-[#141417] border border-white/[0.08] px-2 py-1 rounded-full shadow-inner">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-all"
                >
                  <span className="stamp-tag text-[9px] text-amber-500/70">{item.num}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Stamps / Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="mailto:code.anubhavbaghel@gmail.com"
            className="stamp-tag text-xs text-zinc-400 hover:text-zinc-100 px-3 py-1.5 rounded-md bg-[#141417] border border-white/[0.08] hover:border-white/20 transition-all flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>AVAILABLE FOR WORK</span>
          </a>
          <div className="flex items-center gap-1 text-zinc-400">
            <a href="https://github.com/anubhavbaghel" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-white transition-colors" title="GitHub">
              <GitHubIcon fontSize="small" />
            </a>
            <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-white transition-colors" title="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-zinc-400 hover:text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#141417] border-b border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center justify-between py-2 text-sm text-zinc-300 hover:text-white border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="stamp-tag text-xs text-amber-500/70">{item.num}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10">
            <span>DELHI, IN</span>
            <span className="stamp-tag text-emerald-400">STATUS: OPEN FOR ROLE</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
