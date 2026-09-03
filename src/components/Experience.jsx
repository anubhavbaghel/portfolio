import React from "react";

const experienceData = [
  {
    id: 1,
    company: "Adaan Digital Solutions",
    role: "SaaS Web Builder Intern",
    duration: "June 2026 – Present",
    about:
      "Contributing to 60+ client websites, executing end-to-end web building workflows across diverse industries. Specializing in UI implementation, responsive design, content workflows, accessibility, SEO, and quality assurance.",
    responsibilities: [
      "Contributed to 60+ client websites, implementing requirements across page layouts, content, images, and responsive behaviour.",
      "Build and maintain websites using Wix, Wix CMS, and WordPress, handling UI implementation, content updates, responsive layouts, accessibility, SEO, and QA.",
      "Translate project requirements and UI/UX references into production-ready website pages across desktop, tablet, and mobile devices.",
      "Troubleshoot layout and functional issues using browser developer tools and perform responsive and cross-browser testing.",
    ],
    techStack: [
      "Wix",
      "Wix CMS",
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "Accessibility",
      "SEO",
      "QA Testing",
      "Browser DevTools",
      "Cross-Browser Compatibility",
    ],
  },
  {
    id: 2,
    company: "DI Infotech Leaders Pvt. Ltd.",
    role: "WordPress Intern",
    duration: "Jan 2026 – May 2026",
    about:
      "Developed and delivered 10+ websites using WordPress and custom web development, converting designer wireframes into responsive, high-performing websites.",
    responsibilities: [
      "Developed and delivered 10+ websites using WordPress and custom web development, covering UI/UX implementation, responsive development, testing, and delivery.",
      "Built and customised WordPress websites and custom components from designer wireframes, maintaining responsive layouts, UI/UX consistency, and performance.",
      "Worked on forms, SMTP integration, SEO, and Core Web Vitals, while identifying and resolving UI and functional issues.",
      "Used HTML, CSS, and JavaScript to customise WordPress websites and build custom web interfaces.",
      "Managed website deployments, domain and hosting configurations, and server maintenance using cPanel.",
    ],
    techStack: [
      "WordPress",
      "Elementor",
      "Divi",
      "Shopify",
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "SMTP",
      "cPanel",
      "SEO",
      "Core Web Vitals",
      "Git/GitHub",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <p className="text-gray-400 font-medium uppercase tracking-wider mb-2 text-sm">
          My Journey
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Work <em className="text-gray-400 not-italic">Experience</em>
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative flex flex-col md:grid md:grid-cols-12 gap-8 items-start">
            {/* Timeline Left Side */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col pt-2 md:sticky md:top-24">
              <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
              <span className="text-gray-300 font-medium tracking-wide mb-3 text-sm">{exp.duration}</span>
              <p className="text-gray-400 text-sm leading-relaxed hidden md:block">
                {exp.about}
              </p>
            </div>

            {/* Content Right Side */}
            <div className="md:col-span-8 lg:col-span-9 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-white transition-colors">
                {exp.role}
              </h4>
              
              <ul className="flex flex-col gap-4 mb-8">
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx} className="text-gray-400 text-sm md:text-base flex items-start leading-relaxed">
                    <span className="text-gray-500 mr-3 mt-1 text-lg leading-none">▹</span>
                    {res}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {exp.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium px-3 py-1 bg-white/5 hover:bg-white/10 hover:text-white text-gray-300 rounded-lg transition-colors border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;