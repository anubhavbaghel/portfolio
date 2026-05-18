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
    <header className="fixed top-0 w-full z-50  text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wider hover:text-teal-400 cursor-pointer">
          Anubhav
        </h2>

        {/* Desktop Nav */}
        <nav className="hidden md:block backdrop-blur-md">
          <ul className="flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-black hover:bg-teal-400 cursor-pointer transition-all duration-300 text-md font-normal tracking-wide block px-5 py-2 rounded-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links (Desktop) */}
        <ul className="hidden md:flex gap-4 items-center text-gray-300">
          <li className="">
            <a href="mailto:code.anubhavbaghel@gmail.com" className="hover:text-teal-400 cursor-pointer transition-colors duration-300 block"><MailIcon /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer transition-colors duration-300 block"><LinkedInIcon /></a>
          </li>
          <li>
            <a href="https://github.com/anubhavbaghel" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer transition-colors duration-300 block"><GitHubIcon /></a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-300 hover:text-teal-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 absolute top-full left-0 w-full shadow-xl">
          <nav className="flex flex-col items-center py-6 gap-4">
            <ul className="flex flex-col items-center gap-2 w-full px-6">
              {navLinks.map((link) => (
                <li key={link} className="w-full">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-teal-400 hover:bg-white/5 cursor-pointer transition-all duration-300 text-lg font-medium w-full text-center block py-3 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-6 mt-2 border-t border-white/10 pt-6 w-[80%] justify-center text-gray-300">
              <a href="mailto:code.anubhavbaghel@gmail.com" className="hover:text-teal-400 cursor-pointer transition-colors duration-300 block"><MailIcon /></a>
              <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer transition-colors duration-300 block"><LinkedInIcon /></a>
              <a href="https://github.com/anubhavbaghel" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer transition-colors duration-300 block"><GitHubIcon /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
