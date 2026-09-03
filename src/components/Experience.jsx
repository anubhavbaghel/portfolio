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
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Docket Header */}
      <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
        <span className="stamp-tag text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
          SECTION // 03
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Work Journey & Production Log
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="paper-card rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-start relative transition-all duration-300 hover:border-white/20"
          >
            {/* Left Log Metadata */}
            <div className="lg:w-1/3 flex flex-col flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="stamp-tag text-xs font-mono text-zinc-400">LOG // 0{exp.id}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-1">{exp.company}</h3>
              <div className="inline-block font-mono text-xs text-amber-400/90 font-medium mb-4">
                [{exp.duration}]
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed hidden sm:block">
                {exp.about}
              </p>
            </div>

            {/* Right Responsibilities & Spec */}
            <div className="lg:w-2/3 flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 w-full">
              <h4 className="text-base sm:text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <span className="text-amber-500">▶</span>
                <span>{exp.role}</span>
              </h4>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx} className="text-zinc-400 text-xs sm:text-sm flex items-start leading-relaxed">
                    <span className="text-amber-500/80 mr-2.5 mt-0.5 font-mono">→</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="stamp-tag text-[11px] font-mono px-2.5 py-1 bg-white/[0.04] text-zinc-300 rounded border border-white/[0.08]"
                  >
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