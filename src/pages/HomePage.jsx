import { useState } from "react";
import { Link } from "react-router-dom";
import { personalInfo, selectedProjects, engineeringPrinciples, technicalNotes } from "../data/portfolioData";
import { ArrowRight, Download, Layers, BookOpen, Clock, ArrowUpRight, Cpu, Briefcase } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState({}); // { [projectId]: 'exec' | 'tech' }
  const featuredProjects = selectedProjects.slice(0, 3);
  const latestNote = technicalNotes[0];

  const getTab = (id) => activeTab[id] || "exec";
  const setTab = (id, tab) => setActiveTab((prev) => ({ ...prev, [id]: tab }));

  return (
    <div className="space-y-0">
      {/* Editorial & Technical Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-paper-300 bg-blueprint-grid">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Engineering Telemetry Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-paper-50 border border-paper-300 shadow-subtle text-xs font-mono text-ink-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-semibold text-ink-900">ACTIVE:</span>
              <span>Available for Roles &amp; Product Projects</span>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-ink-400">
              LOC: 28.61° N, 77.20° E &bull; IST (UTC+5:30)
            </span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-900 leading-[1.08] mb-6 font-display">
              Engineering software that solves{" "}
              <span className="text-terracotta relative inline-block underline decoration-paper-300 decoration-wavy decoration-1 underline-offset-8">
                real business problems.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-normal text-ink-600 leading-snug mb-8 max-w-3xl">
              {personalInfo.supportingStatement}
            </p>

            {/* Dual Audience Perspective Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-5 bg-paper-50/90 border border-paper-300 rounded-lg shadow-card backdrop-blur-sm">
              <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-paper-200 pb-4 md:pb-0 md:pr-5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink-900">
                  <Briefcase className="w-3.5 h-3.5 text-terracotta" />
                  <span>For Hiring Teams &amp; Leadership</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  Delivered <strong>60+ client websites</strong> with high reliability. Strong product thinking, user empathy, clear communication, and business ROI focus.
                </p>
              </div>

              <div className="space-y-1.5 md:pl-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink-900">
                  <Cpu className="w-3.5 h-3.5 text-cobalt" />
                  <span>For Engineering Leads &amp; Architects</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  TypeScript, React 19 SSR, Mongoose connection pooling, token-bucket rate limiting, and schema-first AI agent verification.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-ink-900 text-paper-50 hover:bg-terracotta transition-all text-sm font-medium shadow-subtle hover:shadow-lift"
              >
                <span>Selected Work &amp; Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/notes"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-paper-50 hover:bg-paper-200 border border-paper-300 text-ink-800 transition-colors text-sm font-medium shadow-subtle"
              >
                <span>Engineering Notes</span>
                <ArrowRight className="w-4 h-4 text-ink-500" />
              </Link>

              <a
                href={personalInfo.contacts.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded text-ink-600 hover:text-ink-900 text-sm font-mono transition-colors"
              >
                <Download className="w-4 h-4 text-terracotta" />
                <span>Résumé (PDF)</span>
              </a>
            </div>
          </div>

          {/* Technical Credibility Strip */}
          <div className="mt-16 pt-8 border-t border-paper-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-l-2 border-terracotta pl-4">
              <span className="block font-mono text-[11px] text-ink-500 uppercase tracking-wider mb-0.5">
                Delivery Record
              </span>
              <span className="block font-bold text-ink-900 text-lg font-display">
                60+ Client Sites
              </span>
              <span className="block text-xs text-ink-600">
                Production web deployments &amp; QA
              </span>
            </div>

            <div className="border-l-2 border-cobalt pl-4">
              <span className="block font-mono text-[11px] text-ink-500 uppercase tracking-wider mb-0.5">
                Core Stack
              </span>
              <span className="block font-bold text-ink-900 text-lg font-display">
                React 19 &bull; Next.js &bull; TS
              </span>
              <span className="block text-xs text-ink-600">
                Full-stack SSR, API routes, Supabase
              </span>
            </div>

            <div className="border-l-2 border-emerald-600 pl-4">
              <span className="block font-mono text-[11px] text-ink-500 uppercase tracking-wider mb-0.5">
                AI Tooling
              </span>
              <span className="block font-bold text-ink-900 text-lg font-display">
                Gemini &bull; Ollama &bull; Agents
              </span>
              <span className="block text-xs text-ink-600">
                85%+ API quota savings in SiteShot
              </span>
            </div>

            <div className="border-l-2 border-paper-400 pl-4">
              <span className="block font-mono text-[11px] text-ink-500 uppercase tracking-wider mb-0.5">
                Location
              </span>
              <span className="block font-bold text-ink-900 text-lg font-display">
                New Delhi, India
              </span>
              <span className="block text-xs text-ink-600">
                Open to on-site &amp; remote roles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Systems Showcase with Dual-Perspective Toggles */}
      <section className="py-24 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-300 gap-4">
            <div>
              <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
                Featured Engineering Systems
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
                Selected Software Products
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-terracotta hover:underline"
            >
              <span>View all 6 projects &amp; web track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => {
              const currentTab = getTab(project.id);

              return (
                <article
                  key={project.id}
                  className="bg-paper-50 border border-paper-300 rounded-lg p-6 sm:p-10 hover:border-paper-400 transition-all shadow-card hover:shadow-lift"
                >
                  {/* Top Bar with Number, Status & Perspective Switcher */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-paper-200">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 bg-paper-200 text-ink-900 rounded border border-paper-300">
                        REF-0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-ink-500">
                        {project.year} &bull; {project.role}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border bg-paper-100 text-ink-700 border-paper-300 hidden sm:inline">
                        {project.badge}
                      </span>
                    </div>

                    {/* Dual-Perspective Perspective Toggle (Non-technical vs Technical) */}
                    <div className="inline-flex p-1 bg-paper-200 rounded border border-paper-300 text-xs font-mono">
                      <button
                        onClick={() => setTab(project.id, "exec")}
                        className={`px-3 py-1 rounded transition-all cursor-pointer ${
                          currentTab === "exec"
                            ? "bg-paper-50 text-ink-900 font-semibold shadow-subtle"
                            : "text-ink-600 hover:text-ink-900"
                        }`}
                      >
                        Executive Overview
                      </button>
                      <button
                        onClick={() => setTab(project.id, "tech")}
                        className={`px-3 py-1 rounded transition-all cursor-pointer ${
                          currentTab === "tech"
                            ? "bg-ink-900 text-paper-50 font-semibold shadow-subtle"
                            : "text-ink-600 hover:text-ink-900"
                        }`}
                      >
                        System Architecture
                      </button>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-4xl font-bold text-ink-900 mb-2 tracking-tight font-display">
                      <Link to={`/work/${project.id}`} className="hover:text-terracotta transition-colors">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-terracotta">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Dynamic Tab Body: Executive Overview vs Technical Architecture */}
                  {currentTab === "exec" ? (
                    /* Non-technical View: Problem, Solution, Impact */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 p-6 bg-paper-100/70 border border-paper-300 rounded-lg">
                      <div className="space-y-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-bold block">
                          The Problem Solved
                        </span>
                        <p className="text-xs sm:text-sm text-ink-800 leading-relaxed font-normal">
                          {project.executiveSummary?.theProblem || project.summary}
                        </p>
                      </div>

                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-paper-200 pt-4 md:pt-0 md:pl-6">
                        <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-bold block">
                          What Was Built
                        </span>
                        <p className="text-xs sm:text-sm text-ink-800 leading-relaxed font-normal">
                          {project.executiveSummary?.theSolution || project.tagline}
                        </p>
                      </div>

                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-paper-200 pt-4 md:pt-0 md:pl-6">
                        <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-bold block">
                          Business &amp; User Impact
                        </span>
                        <p className="text-xs sm:text-sm text-ink-800 leading-relaxed font-normal">
                          {project.executiveSummary?.theImpact || "Delivered production reliability with zero overhead."}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Technical View: Architectural Pipeline */
                    <div className="space-y-6 my-6">
                      <div className="p-5 bg-paper-100 border border-paper-300 rounded-lg space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-paper-200 pb-2">
                          <span className="font-bold text-ink-900 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-terracotta" />
                            <span>System Architecture Pipeline</span>
                          </span>
                          <span className="text-ink-500">Node Data Flow</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                          {project.architectureFlow?.map((stage) => (
                            <div key={stage.step} className="p-3 bg-paper-50 rounded border border-paper-200 space-y-1">
                              <span className="text-[10px] text-terracotta font-bold block">STAGE {stage.step}</span>
                              <span className="font-bold text-ink-900 block font-sans text-xs">{stage.label}</span>
                              <p className="text-[11px] text-ink-600 font-sans leading-relaxed">{stage.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stack Tags & Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-paper-200">
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

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/work/${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-medium transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study Analysis</span>
                      </Link>

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                        >
                          <span>Source</span>
                          <ArrowUpRight className="w-3 h-3 text-ink-500" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-paper-50 hover:bg-paper-200 border border-paper-300 text-ink-900 rounded text-sm font-medium transition-colors shadow-subtle"
            >
              <span>Explore All 6 Projects, DevOps &amp; Web Track</span>
              <ArrowRight className="w-4 h-4 text-terracotta" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Matrix */}
      <section className="py-20 border-b border-paper-300 bg-paper-100/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-paper-300 gap-4">
            <div>
              <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-1">
                Engineering Discipline &amp; Values
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink-900 font-display">
                How I Approach Software Problems
              </h2>
            </div>
            <Link to="/about" className="text-xs font-mono text-terracotta hover:underline">
              Read full philosophy &amp; education &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringPrinciples.slice(0, 3).map((item) => (
              <div key={item.number} className="bg-paper-50 border border-paper-300 p-6 rounded-lg space-y-3 shadow-subtle">
                <div className="flex items-center justify-between border-b border-paper-200 pb-2">
                  <span className="font-mono text-xs font-bold text-terracotta">[{item.number}]</span>
                  <span className="text-[11px] font-mono text-ink-500 bg-paper-200 px-2 py-0.5 rounded">{item.tag}</span>
                </div>
                <h3 className="font-bold text-ink-900 text-base leading-snug font-display">{item.title}</h3>
                <p className="text-xs text-ink-600 leading-relaxed font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Note Feature & Executive Contact Prompt */}
      <section className="py-20 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 bg-paper-50 border border-paper-300 rounded-lg p-8 space-y-4 shadow-card">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta font-semibold uppercase tracking-wider">
                Featured Engineering Note
              </span>
              <span className="text-ink-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-terracotta" />
                {latestNote.readTime}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight font-display">
              <Link to={`/notes/${latestNote.id}`} className="hover:text-terracotta transition-colors">
                {latestNote.title}
              </Link>
            </h3>

            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
              {latestNote.summary}
            </p>

            <div className="p-3.5 bg-paper-100 rounded border border-paper-200 text-xs text-ink-700">
              <strong className="text-ink-900 block mb-0.5">Key Takeaway for Leadership:</strong>
              {latestNote.executiveTakeaway}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-paper-200 text-xs font-mono">
              <span className="text-ink-500">{latestNote.category}</span>
              <Link to={`/notes/${latestNote.id}`} className="text-terracotta hover:underline font-semibold">
                Read Full Essay &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block">
              Initiate Collaboration
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-ink-900 tracking-tight font-display leading-tight">
              Looking for a disciplined, high-velocity builder?
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed">
              Available for full-time software engineering roles, technical internships, and product collaborations. Responsive and communicative.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-mono font-medium transition-all shadow-subtle hover:shadow-lift"
              >
                <span>Get in touch directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
