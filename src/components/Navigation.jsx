import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/notes", label: "Notes" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-paper-300 py-3.5 shadow-subtle"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-baseline gap-2 text-ink-900"
        >
          <span className="font-bold tracking-tight text-xl font-display group-hover:text-terracotta transition-colors">
            {personalInfo.name}
          </span>
          <span className="text-xs text-ink-500 font-mono hidden sm:inline">
            / {personalInfo.role}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-600" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-ink-900 transition-colors pb-0.5 border-b-2 ${
                  isActive
                    ? "border-terracotta text-ink-900 font-semibold"
                    : "border-transparent text-ink-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href={personalInfo.contacts.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-700 bg-paper-200 hover:bg-paper-300 border border-paper-400/60 px-3 py-1.5 rounded transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-terracotta" />
            <span>PDF</span>
            <ArrowUpRight className="w-3 h-3 text-ink-400" />
          </a>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-xs font-mono font-medium tracking-wide uppercase px-3.5 py-1.5 border transition-all rounded ${
                isActive
                  ? "bg-ink-900 text-paper-50 border-ink-900"
                  : "border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper-50"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Actions: Theme Toggle + Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-800 hover:text-ink-900 rounded focus:outline-none focus:ring-1 focus:ring-terracotta cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper-50 border-b border-paper-300 px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-ink-700 hover:text-terracotta border-b border-paper-200"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left py-2 border-b border-paper-200 ${
                    isActive ? "text-terracotta font-semibold" : "text-ink-700 hover:text-terracotta"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={personalInfo.contacts.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-paper-200 text-ink-800 text-sm font-mono rounded border border-paper-300"
              >
                <FileText className="w-4 h-4 text-terracotta" />
                <span>View Résumé (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 px-4 bg-ink-900 text-paper-50 text-sm font-medium rounded hover:bg-terracotta hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
