import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-white dark:bg-black text-ink-700 border-t border-paper-300">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-paper-200">
          <div>
            <Link to="/" className="text-xl font-bold text-ink-900 tracking-tight font-display hover:text-terracotta transition-colors">
              {personalInfo.name}
            </Link>
            <p className="text-xs text-ink-500 font-mono mt-1">
              Building useful software, thoughtfully.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-600 hover:text-terracotta transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div className="space-y-2">
            <span className="text-ink-400 block uppercase tracking-wider">Navigation</span>
            <ul className="space-y-1.5 text-ink-700">
              <li><Link to="/work" className="hover:text-terracotta">Selected Work</Link></li>
              <li><Link to="/about" className="hover:text-terracotta">About &amp; Trajectory</Link></li>
              <li><Link to="/notes" className="hover:text-terracotta">Engineering Notes</Link></li>
              <li><Link to="/resume" className="hover:text-terracotta">Résumé</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-ink-400 block uppercase tracking-wider">Online</span>
            <ul className="space-y-1.5 text-ink-700">
              <li>
                <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta flex items-center gap-1.5">
                  <GithubIcon className="w-3 h-3 text-ink-500" />
                  <span>github.com/anubhavbaghel</span>
                </a>
              </li>
              <li>
                <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta flex items-center gap-1.5">
                  <LinkedinIcon className="w-3 h-3 text-ink-500" />
                  <span>linkedin.com/in/anubhav-baghel</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.contacts.email}`} className="hover:text-terracotta flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-ink-500" />
                  <span>{personalInfo.contacts.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-ink-400 block uppercase tracking-wider">Colophon</span>
            <p className="text-ink-600 leading-relaxed font-sans text-xs">
              Designed with an editorial typography-led aesthetic. Built with React 19, Tailwind CSS, Lucide icons, and React Router.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-ink-400 block uppercase tracking-wider">Copyright</span>
            <p className="text-ink-600 font-sans text-xs">
              &copy; {new Date().getFullYear()} Anubhav Baghel. All rights reserved.
            </p>
            <p className="text-ink-500 text-[11px] font-mono">
              New Delhi, India &bull; IST (UTC+5:30)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
