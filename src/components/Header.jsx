import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wider hover:text-teal-400 cursor-pointer transition-colors">
          Anubhav
        </h2>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
            {navLinks.map((link) => (
              <li key={link} className="hover:text-teal-400 cursor-pointer transition-colors text-sm font-medium tracking-wide">
                {link}
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links (Desktop) */}
        <ul className="hidden md:flex gap-4 items-center text-gray-300">
          <li className="hover:text-teal-400 cursor-pointer transition-colors"><MailIcon /></li>
          <li className="hover:text-teal-400 cursor-pointer transition-colors"><LinkedInIcon /></li>
          <li className="hover:text-teal-400 cursor-pointer transition-colors"><GitHubIcon /></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-300 hover:text-teal-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 absolute top-full left-0 w-full shadow-xl">
          <nav className="flex flex-col items-center py-6 gap-6">
            <ul className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-teal-400 cursor-pointer transition-colors text-lg font-medium w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </li>
              ))}
            </ul>
            <div className="flex gap-6 mt-2 border-t border-white/10 pt-6 w-[80%] justify-center text-gray-300">
              <span className="hover:text-teal-400 cursor-pointer transition-colors"><MailIcon /></span>
              <span className="hover:text-teal-400 cursor-pointer transition-colors"><LinkedInIcon /></span>
              <span className="hover:text-teal-400 cursor-pointer transition-colors"><GitHubIcon /></span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
