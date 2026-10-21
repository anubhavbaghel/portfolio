import { Link } from "react-router-dom";
import { selectedProjects, webEngineeringTrack } from "../data/portfolioData";
import { ArrowUpRight, BookOpen, Layers, Globe } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-6 border-b border-paper-300 pb-12">
        <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
          Engineering Case Studies
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6">
          Selected Work &amp; Systems
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl leading-relaxed">
          Detailed technical breakdowns of software applications, developer tools, and client platforms. Click on any project to read its comprehensive 8-point architectural case study.
        </p>
      </section>

      {/* Software Projects List */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="space-y-20">
          {selectedProjects.map((project, index) => (
            <article
              key={project.id}
              className="bg-paper-50 border border-paper-300 rounded-lg p-6 sm:p-10 hover:border-paper-400 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-paper-200">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-paper-200 text-ink-800 rounded border border-paper-300">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-ink-500">
                    {project.year} &bull; {project.role}
                  </span>
                </div>

                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full border ${
                    project.status.includes("Live")
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : project.status.includes("Completed")
                      ? "bg-sky-50 text-sky-800 border-sky-200"
                      : "bg-amber-50 text-amber-800 border-amber-200"
                  }`}
                >
                  {project.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-1.5 tracking-tight">
                      <Link to={`/work/${project.id}`} className="hover:text-terracotta transition-colors">
                        {project.name}
                      </Link>
                    </h2>
                    <p className="text-sm font-medium text-terracotta">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block mb-2">
                      Key Engineering Highlights:
                    </span>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ink-700">
                        <span className="text-terracotta mt-0.5">&bull;</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-paper-200 text-ink-800 text-xs font-mono rounded border border-paper-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/work/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-medium transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Deep Case Study</span>
                    </Link>

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                      >
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-ink-500" />
                      </a>
                    )}

                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                      >
                        <span>Live System</span>
                        <ArrowUpRight className="w-3 h-3 text-ink-500" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-paper-100 border border-paper-300 rounded p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-paper-200">
                    <span className="font-semibold text-ink-800 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-terracotta" />
                      <span>System Architecture Spec</span>
                    </span>
                    <span className="text-[11px] text-ink-400">spec</span>
                  </div>

                  {Object.entries(project.architecture).map(([layer, desc]) => (
                    <div key={layer} className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold block">
                        {layer}
                      </span>
                      <div className="p-2.5 bg-paper-50 rounded border border-paper-200 text-ink-800 leading-relaxed font-sans text-xs">
                        {desc}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-paper-200 text-[11px] text-ink-500 flex items-center justify-between">
                    <span>Status: {project.status}</span>
                    <Link
                      to={`/work/${project.id}`}
                      className="text-terracotta hover:underline font-sans"
                    >
                      Case study &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Web Development Delivery Track */}
      <section id="web-track" className="pt-16 border-t border-paper-300 bg-paper-100/60 pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="border-b border-paper-300 pb-6">
            <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
              Production Web Track
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 mb-4">
              60+ Client Sites Delivered &amp; Maintained
            </h2>
            <p className="text-base text-ink-600 max-w-3xl leading-relaxed">
              {webEngineeringTrack.overview}
            </p>
          </div>

          {/* Agency Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webEngineeringTrack.workplaceExperience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-paper-50 border border-paper-300 rounded p-6 sm:p-8 space-y-4 hover:border-paper-400 transition-all shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
              >
                <div className="flex justify-between items-start gap-2 border-b border-paper-200 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">{exp.company}</h3>
                    <p className="text-sm font-medium text-terracotta">{exp.role}</p>
                  </div>
                  <span className="font-mono text-xs text-ink-500 bg-paper-200 px-2.5 py-1 rounded border border-paper-300 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500 font-semibold block">
                    Core Delivery Focus:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-ink-700">
                      <span className="text-terracotta mt-0.5">&bull;</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-1.5 border-t border-paper-200">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-paper-200 text-ink-700 text-[11px] font-mono rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Production Deployments */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-paper-300">
              <h3 className="text-xl font-bold text-ink-900 tracking-tight flex items-center gap-2">
                <Globe className="w-5 h-5 text-terracotta" />
                <span>Selected Production Deployments</span>
              </h3>
              <span className="font-mono text-xs text-ink-500">Live verified client domains</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webEngineeringTrack.selectedClientBuilds.map((site, sIdx) => (
                <a
                  key={sIdx}
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-paper-50 border border-paper-300 rounded p-5 hover:border-terracotta transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-ink-500 uppercase tracking-wider">
                        {site.type}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="text-lg font-bold text-ink-900 group-hover:text-terracotta transition-colors mb-1.5">
                      {site.title}
                    </h4>
                    <p className="text-xs text-ink-600 leading-relaxed mb-4">
                      {site.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-paper-200 flex items-center justify-between text-xs font-mono text-ink-500">
                    <span>{site.tech}</span>
                    <span className="text-terracotta text-[11px] group-hover:underline">Visit site &rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
