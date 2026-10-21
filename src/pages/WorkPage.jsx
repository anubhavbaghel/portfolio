import { useState } from "react";
import { Link } from "react-router-dom";
import { selectedProjects, webEngineeringTrack } from "../data/portfolioData";
import { ArrowUpRight, BookOpen, Layers, Globe, Sparkles, Terminal, CheckCircle2, Briefcase, Cpu } from "lucide-react";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState({}); // { [projectId]: 'exec' | 'tech' }

  const getTab = (id) => activeTab[id] || "exec";
  const setTab = (id, tab) => setActiveTab((prev) => ({ ...prev, [id]: tab }));

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-6 border-b border-paper-300 pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold">
            Engineering Portfolio &amp; Case Studies
          </span>
          <span className="text-xs font-mono text-ink-400">&bull;</span>
          <span className="text-xs font-mono text-ink-500">6 Featured Systems</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6 font-display">
          Selected Work &amp; Systems
        </h1>
        <p className="text-lg text-ink-600 max-w-3xl leading-relaxed">
          Comprehensive breakdowns of software applications, developer tools, and client platforms. Every project features both an <strong>Executive Overview</strong> for hiring teams and a <strong>System Architecture Spec</strong> with an 8-point deep dive for engineering leads.
        </p>

        {/* Global Lens Explanation */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-paper-100/70 border border-paper-300 rounded-lg text-xs">
          <div className="flex items-start gap-2.5">
            <Briefcase className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
            <div>
              <strong className="text-ink-900 block font-mono uppercase text-[11px]">For Hiring Managers &amp; Product Teams:</strong>
              <span className="text-ink-600">Toggle "Executive Overview" on any project below to see the business problem, solution, user impact, and key ROI metrics.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Cpu className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
            <div>
              <strong className="text-ink-900 block font-mono uppercase text-[11px]">For Technical Leads &amp; Architects:</strong>
              <span className="text-ink-600">Toggle "System Architecture" for data pipelines, concurrency models, schema designs, and full 8-point technical case studies.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Software Projects List */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {selectedProjects.map((project, index) => {
            const isExec = getTab(project.id) === "exec";

            return (
              <article
                key={project.id}
                className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-10 hover:border-paper-400 transition-all shadow-subtle"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-paper-200">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-paper-200 text-ink-800 rounded border border-paper-300">
                      SYS_0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-ink-500">
                      {project.year} &bull; {project.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
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

                    {/* Dual Mode Switcher */}
                    <div className="inline-flex rounded-md border border-paper-300 bg-paper-200 p-0.5 text-xs font-mono">
                      <button
                        onClick={() => setTab(project.id, "exec")}
                        className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                          isExec
                            ? "bg-paper-50 text-ink-900 font-semibold shadow-xs"
                            : "text-ink-600 hover:text-ink-900"
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-terracotta" />
                        <span>Executive</span>
                      </button>
                      <button
                        onClick={() => setTab(project.id, "tech")}
                        className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                          !isExec
                            ? "bg-paper-50 text-ink-900 font-semibold shadow-xs"
                            : "text-ink-600 hover:text-ink-900"
                        }`}
                      >
                        <Terminal className="w-3 h-3 text-cobalt" />
                        <span>Architecture</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-4xl font-bold text-ink-900 mb-2 tracking-tight font-display">
                    <Link to={`/work/${project.id}`} className="hover:text-terracotta transition-colors">
                      {project.name}
                    </Link>
                  </h2>
                  <p className="text-base font-medium text-terracotta font-sans">
                    {project.tagline}
                  </p>
                </div>

                {/* Dual Lens Dynamic View */}
                {isExec ? (
                  /* EXECUTIVE OVERVIEW (For HR, Recruiters, Product Leads) */
                  <div className="space-y-6">
                    <p className="text-base text-ink-700 leading-relaxed font-sans max-w-4xl">
                      {project.summary}
                    </p>

                    {/* 3-Column Problem / Solution / Impact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div className="p-4 bg-paper-100/80 rounded-lg border border-paper-200 space-y-1.5">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-terracotta block">
                          The Problem
                        </span>
                        <p className="text-xs text-ink-700 leading-relaxed">
                          {project.executiveSummary?.theProblem || project.caseStudy.problem}
                        </p>
                      </div>

                      <div className="p-4 bg-paper-100/80 rounded-lg border border-paper-200 space-y-1.5">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cobalt block">
                          The Solution
                        </span>
                        <p className="text-xs text-ink-700 leading-relaxed">
                          {project.executiveSummary?.theSolution || project.caseStudy.approach}
                        </p>
                      </div>

                      <div className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-200/60 space-y-1.5">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                          Business &amp; User Impact
                        </span>
                        <p className="text-xs text-ink-800 leading-relaxed">
                          {project.executiveSummary?.theImpact || project.caseStudy.testingValidation}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics Strip if available */}
                    {project.keyMetrics && project.keyMetrics.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-2">
                        {project.keyMetrics.map((metric, mIdx) => (
                          <div key={mIdx} className="px-3.5 py-2 rounded bg-paper-100 border border-paper-200 font-mono text-xs">
                            <span className="text-ink-500 block text-[10px] uppercase">{metric.label}</span>
                            <span className="text-ink-900 font-bold text-sm">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Engineering Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
                        Demonstrated Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-ink-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* SYSTEM ARCHITECTURE VIEW (For Tech Leads & Senior Engineers) */
                  <div className="space-y-6">
                    {/* Visual Architecture Flow Pipeline */}
                    {project.architectureFlow && project.architectureFlow.length > 0 && (
                      <div className="space-y-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
                          Data &amp; Control Flow Pipeline:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {project.architectureFlow.map((stage) => (
                            <div
                              key={stage.step}
                              className="bg-paper-100 border border-paper-300 rounded p-3.5 space-y-1 relative"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] font-bold text-terracotta">
                                  STAGE {stage.step}
                                </span>
                                <span className="font-mono text-[10px] bg-paper-200 px-1.5 py-0.5 rounded text-ink-600">
                                  {stage.tech}
                                </span>
                              </div>
                              <h4 className="font-bold text-ink-900 text-xs font-mono">{stage.label}</h4>
                              <p className="text-[11px] text-ink-600 leading-relaxed font-sans">{stage.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Architectural Specifications Grid */}
                    <div className="bg-paper-100 border border-paper-300 rounded-lg p-5 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-paper-200 font-mono text-xs">
                        <span className="font-semibold text-ink-800 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-cobalt" />
                          <span>Architectural Subsystems &amp; Implementation Details</span>
                        </span>
                        <span className="text-[11px] text-ink-400">RFC Spec Level</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(project.architecture).map(([layer, desc]) => (
                          <div key={layer} className="space-y-1 bg-paper-50 p-3 rounded border border-paper-200">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-500 font-semibold block">
                              {layer}
                            </span>
                            <div className="text-ink-800 leading-relaxed font-sans text-xs">
                              {desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Bar: Tech Stack & Actions */}
                <div className="pt-6 mt-6 border-t border-paper-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-paper-200 text-ink-800 text-xs font-mono rounded border border-paper-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Link
                      to={`/work/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-medium transition-colors shadow-subtle"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Full 8-Point Case Study</span>
                    </Link>

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                      >
                        <span>GitHub</span>
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
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3 h-3 text-ink-500" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Web Development Delivery Track */}
      <section id="web-track" className="pt-16 border-t border-paper-300 bg-paper-100/60 pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="border-b border-paper-300 pb-6">
            <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
              Production Web Track
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 mb-4 font-display">
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
                className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-4 hover:border-paper-400 transition-all shadow-subtle"
              >
                <div className="flex justify-between items-start gap-2 border-b border-paper-200 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink-900 font-display">{exp.company}</h3>
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
              <h3 className="text-xl font-bold text-ink-900 tracking-tight flex items-center gap-2 font-display">
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
                  className="group bg-paper-50 border border-paper-300 rounded-lg p-5 hover:border-terracotta transition-all flex flex-col justify-between shadow-subtle hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-ink-500 uppercase tracking-wider">
                        {site.type}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="text-lg font-bold text-ink-900 group-hover:text-terracotta transition-colors mb-1.5 font-display">
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
