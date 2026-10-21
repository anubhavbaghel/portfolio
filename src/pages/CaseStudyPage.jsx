import { useParams, Link, Navigate } from "react-router-dom";
import { selectedProjects } from "../data/portfolioData";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, ArrowRight, Layers, Sparkles, Cpu, Briefcase } from "lucide-react";

export default function CaseStudyPage() {
  const { projectId } = useParams();
  const currentIndex = selectedProjects.findIndex((p) => p.id === projectId);

  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = selectedProjects[currentIndex];
  const prevProject = currentIndex > 0 ? selectedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < selectedProjects.length - 1 ? selectedProjects[currentIndex + 1] : null;

  const { caseStudy } = project;

  return (
    <article className="pt-32 pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-terracotta transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all engineering projects</span>
        </Link>
      </div>

      {/* Case Study Header Card */}
      <header className="max-w-4xl mx-auto px-6 pb-12 border-b border-paper-300">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-2.5 py-1 bg-paper-200 text-xs font-mono rounded border border-paper-300 text-ink-800">
            {project.status}
          </span>
          <span className="text-xs font-mono text-ink-500">
            {project.year} &bull; {project.role}
          </span>
          <span className="text-xs font-mono text-terracotta bg-terracotta/10 px-2 py-0.5 rounded">
            Engineering Case Study
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink-900 mb-3 leading-[1.1] font-display">
          {project.name}
        </h1>
        <p className="text-xl text-terracotta font-medium mb-6 font-sans">
          {project.tagline}
        </p>

        <p className="text-base sm:text-lg text-ink-700 leading-relaxed mb-8 font-sans">
          {project.summary}
        </p>

        {/* Executive Summary Card (Quick Clarity for Recruiters & Hiring Managers) */}
        {project.executiveSummary && (
          <div className="mb-8 p-5 bg-paper-100/90 border border-paper-300 rounded-xl space-y-4 shadow-subtle">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink-900 border-b border-paper-200 pb-2.5">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span>10-Second Executive Summary</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-terracotta block">
                  Problem
                </span>
                <p className="text-ink-700 leading-relaxed">
                  {project.executiveSummary.theProblem}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cobalt block">
                  Solution
                </span>
                <p className="text-ink-700 leading-relaxed">
                  {project.executiveSummary.theSolution}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Impact
                </span>
                <p className="text-ink-800 leading-relaxed">
                  {project.executiveSummary.theImpact}
                </p>
              </div>
            </div>

            {project.keyMetrics && project.keyMetrics.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2 border-t border-paper-200">
                {project.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-paper-50 px-3 py-1.5 rounded border border-paper-300 font-mono text-xs">
                    <span className="text-ink-500 text-[10px] uppercase block">{metric.label}:</span>
                    <span className="text-ink-900 font-bold">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-paper-200 text-ink-800 text-xs font-mono rounded border border-paper-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Action Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-paper-200">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-mono transition-colors shadow-subtle"
            >
              <span>Inspect Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
            >
              <span>Visit Live Production System</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Visual Data & Pipeline Flow */}
      {project.architectureFlow && project.architectureFlow.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pt-12 pb-6">
          <div className="p-6 bg-paper-100 rounded-xl border border-paper-300 space-y-4">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cobalt" />
                <span>System Pipeline &amp; Data Flow Topology</span>
              </span>
              <span className="text-[11px] font-mono text-ink-500">End-to-End Workflow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {project.architectureFlow.map((stage) => (
                <div
                  key={stage.step}
                  className="bg-paper-50 border border-paper-300 rounded p-4 space-y-1.5 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-terracotta">
                      0{stage.step}
                    </span>
                    <span className="font-mono text-[10px] bg-paper-200 px-1.5 py-0.5 rounded text-ink-600">
                      {stage.tech}
                    </span>
                  </div>
                  <h4 className="font-bold text-ink-900 text-xs font-mono">{stage.label}</h4>
                  <p className="text-xs text-ink-600 leading-relaxed font-sans">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8-Point Engineering Deep Dive */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 text-ink-800">
        {/* 1. Problem Statement */}
        <section className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block">
            01 / Problem Statement
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 leading-snug font-display">
            {caseStudy.problem}
          </h2>
        </section>

        {/* 2. Target Audience */}
        <section className="space-y-3 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-terracotta" />
            <span>02 / Who Experiences This Problem</span>
          </span>
          <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
            {caseStudy.audience}
          </p>
        </section>

        {/* 3. Technical & Product Approach */}
        <section className="space-y-3 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            03 / Approach &amp; System Strategy
          </span>
          <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
            {caseStudy.approach}
          </p>
        </section>

        {/* 4. Architecture & Rationale */}
        <section className="space-y-4 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            04 / Architecture &amp; Technology Choices
          </span>
          <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
            {caseStudy.architectureDetails}
          </p>

          <div className="bg-paper-100 rounded-xl border border-paper-300 p-6 space-y-4 font-mono text-xs">
            <span className="font-bold text-ink-900 flex items-center gap-2 border-b border-paper-200 pb-3 text-sm">
              <Layers className="w-4 h-4 text-cobalt" />
              <span>Architectural Specifications &amp; Subsystems</span>
            </span>

            {Object.entries(project.architecture).map(([k, v]) => (
              <div key={k} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-1 border-b border-paper-200 last:border-b-0">
                <span className="font-semibold text-ink-800 uppercase text-xs w-32 shrink-0">{k}:</span>
                <span className="text-ink-700 font-sans text-sm">{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Implementation Challenges */}
        <section className="space-y-4 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            05 / Technical Challenges &amp; Edge Cases
          </span>
          <ul className="space-y-3 font-sans">
            {caseStudy.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink-700 bg-paper-50 p-4 rounded-lg border border-paper-200 shadow-xs">
                <AlertCircle className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <span className="leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Testing & Validation */}
        <section className="space-y-3 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            06 / Testing, Verification &amp; Quality Control
          </span>
          <div className="flex items-start gap-3 text-base text-ink-700 bg-emerald-50/50 p-5 rounded-lg border border-emerald-200 shadow-xs font-sans">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{caseStudy.testingValidation}</span>
          </div>
        </section>

        {/* 7. Trade-offs & Limitations */}
        <section className="space-y-3 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            07 / Trade-offs &amp; Honest Limitations
          </span>
          <div className="bg-paper-100 p-6 rounded-lg border border-paper-300 italic font-serif leading-relaxed text-base text-ink-800">
            "{caseStudy.tradeoffs}"
          </div>
        </section>

        {/* 8. Next Milestones */}
        <section className="space-y-3 border-t border-paper-200 pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            08 / Next Engineering Milestones
          </span>
          <div className="flex items-start gap-3 text-base text-ink-800 font-medium bg-paper-50 p-5 rounded-lg border border-paper-200 font-sans">
            <ArrowRight className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
            <span className="leading-relaxed">{caseStudy.nextMilestones}</span>
          </div>
        </section>
      </div>

      {/* Case Study Pagination Bar */}
      <footer className="max-w-4xl mx-auto px-6 pt-12 border-t border-paper-300 flex flex-col sm:flex-row justify-between items-center gap-6">
        {prevProject ? (
          <Link
            to={`/work/${prevProject.id}`}
            className="flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-terracotta"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: {prevProject.name}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          to="/work"
          className="px-4 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
        >
          All Case Studies
        </Link>

        {nextProject ? (
          <Link
            to={`/work/${nextProject.id}`}
            className="flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-terracotta"
          >
            <span>Next: {nextProject.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
