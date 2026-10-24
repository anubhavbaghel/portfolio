import { useParams, Link, Navigate } from "react-router-dom";
import { selectedProjects } from "../data/portfolioData";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, ArrowRight, Layers, Cpu } from "lucide-react";
import projectImages from "../assets/projectImages";
import { LocoPreview, SiteShotPreview, ContentGuardPreview, ProjectScreenshotPreview } from "../components/ProjectPreviews";

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

  // Select visual preview component
  let preview = null;
  if (project.id === "loco") {
    preview = <LocoPreview />;
  } else if (project.id === "siteshot") {
    preview = <SiteShotPreview />;
  } else if (project.id === "contentguard") {
    preview = <ContentGuardPreview />;
  } else if (project.id === "thaddeus") {
    preview = (
      <ProjectScreenshotPreview
        imageSrc={projectImages.thaddeus}
        altText="Thaddeus Creates Production SSR Storefront"
        link={project.links.demo}
      />
    );
  }

  return (
    <article className="pt-32 pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-ink-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all engineering work</span>
        </Link>
      </div>

      {/* Case Study Header Card */}
      <header className="max-w-4xl mx-auto px-6 pb-10 border-b border-paper-300 space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-2.5 py-1 bg-paper-200 text-xs font-mono rounded border border-paper-300 text-ink-800">
            {project.status}
          </span>
          <span className="text-xs font-mono text-ink-500">
            {project.year} &bull; {project.role}
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink-900 mb-3 leading-[1.1] font-display">
            {project.name}
          </h1>
          <p className="text-lg sm:text-xl text-ink-600 font-medium font-sans">
            {project.tagline}
          </p>
        </div>

        <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
          {project.summary}
        </p>

        {/* Visual Product Showcase Inside Case Study */}
        {preview && (
          <div className="pt-2 pb-4">
            {preview}
          </div>
        )}

        {/* Executive Problem / Solution / Impact Quick Snapshot */}
        {project.executiveSummary && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-paper-100 rounded-xl border border-paper-300 text-xs font-sans">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 block">The Problem</span>
              <p className="text-ink-700 leading-relaxed">{project.executiveSummary.theProblem}</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 block">The Solution</span>
              <p className="text-ink-700 leading-relaxed">{project.executiveSummary.theSolution}</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-500 block">The Impact</span>
              <p className="text-ink-800 leading-relaxed">{project.executiveSummary.theImpact}</p>
            </div>
          </div>
        )}

        {/* Tech Stack Pills & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-paper-200">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 bg-paper-200 text-ink-800 text-xs font-mono rounded border border-paper-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-ink-900 hover:bg-ink-800 text-paper-50 rounded text-xs font-mono transition-colors shadow-xs"
              >
                <span>GitHub Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
              >
                <span>Live System</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Visual Pipeline Stages */}
      {project.architectureFlow && project.architectureFlow.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pt-10 pb-6">
          <div className="p-5 bg-paper-100 rounded-xl border border-paper-300 space-y-3">
            <div className="flex items-center justify-between border-b border-paper-200 pb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-ink-600 dark:text-ink-300" />
                <span>Data &amp; Control Flow</span>
              </span>
              <span className="text-[11px] font-mono text-ink-500">Pipeline Stages</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {project.architectureFlow.map((stage) => (
                <div
                  key={stage.step}
                  className="bg-paper-50 border border-paper-300 rounded p-3 space-y-1 shadow-xs"
                >
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="font-bold text-ink-900 dark:text-ink-100">0{stage.step}</span>
                    <span className="bg-paper-200 px-1 py-0.5 rounded text-ink-600">{stage.tech}</span>
                  </div>
                  <h4 className="font-bold text-ink-900 text-xs font-mono">{stage.label}</h4>
                  <p className="text-[11px] text-ink-600 leading-tight font-sans">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Concise Architectural Breakdown */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-12 text-ink-800">
        {/* Problem & Audience */}
        <section className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            01 / Problem &amp; Context
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-900 font-display">
            {caseStudy.problem}
          </h2>
          <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-sans">
            <strong>Target Users:</strong> {caseStudy.audience}
          </p>
        </section>

        {/* Approach & Architecture */}
        <section className="space-y-4 border-t border-paper-200 pt-8">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            02 / Architecture &amp; System Strategy
          </span>
          <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-sans">
            {caseStudy.approach}
          </p>

          <div className="bg-paper-100 rounded-xl border border-paper-300 p-5 space-y-3 font-mono text-xs">
            <span className="font-bold text-ink-900 flex items-center gap-2 border-b border-paper-200 pb-2 text-xs">
              <Layers className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300" />
              <span>Architectural Specifications</span>
            </span>

            {Object.entries(project.architecture).map(([k, v]) => (
              <div key={k} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-1 border-b border-paper-200 last:border-b-0">
                <span className="font-semibold text-ink-800 uppercase text-[11px] w-28 shrink-0">{k}:</span>
                <span className="text-ink-700 font-sans text-xs">{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hard Challenges */}
        <section className="space-y-3 border-t border-paper-200 pt-8">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            03 / Key Challenges &amp; Edge Cases
          </span>
          <div className="space-y-2.5 font-sans">
            {caseStudy.challenges.map((challenge, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700 bg-paper-50 p-3.5 rounded-lg border border-paper-200 shadow-xs">
                <AlertCircle className="w-4 h-4 text-ink-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{challenge}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Validation & Testing */}
        <section className="space-y-3 border-t border-paper-200 pt-8">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            04 / Testing &amp; Quality Control
          </span>
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800/50 shadow-xs font-sans">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{caseStudy.testingValidation}</span>
          </div>
        </section>

        {/* Honest Trade-offs */}
        <section className="space-y-3 border-t border-paper-200 pt-8">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            05 / Trade-offs &amp; Honest Limitations
          </span>
          <div className="bg-paper-100 p-4 rounded-lg border border-paper-300 italic font-serif leading-relaxed text-sm text-ink-800">
            "{caseStudy.tradeoffs}"
          </div>
        </section>

        {/* Next Milestones */}
        <section className="space-y-3 border-t border-paper-200 pt-8">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block">
            06 / Next Engineering Milestones
          </span>
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800 bg-paper-50 p-4 rounded-lg border border-paper-200 font-sans font-medium">
            <ArrowRight className="w-4 h-4 text-ink-600 dark:text-ink-300 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{caseStudy.nextMilestones}</span>
          </div>
        </section>
      </div>

      {/* Case Study Pagination Bar */}
      <footer className="max-w-4xl mx-auto px-6 pt-10 border-t border-paper-300 flex flex-col sm:flex-row justify-between items-center gap-4">
        {prevProject ? (
          <Link
            to={`/work/${prevProject.id}`}
            className="flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-ink-900 dark:hover:text-ink-100 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Prev: {prevProject.name}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          to="/work"
          className="px-4 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            to={`/work/${nextProject.id}`}
            className="flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-ink-900 dark:hover:text-ink-100 hover:underline"
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
