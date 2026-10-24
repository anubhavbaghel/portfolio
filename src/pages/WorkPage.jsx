import { Link } from "react-router-dom";
import { selectedProjects } from "../data/portfolioData";
import { ArrowUpRight, BookOpen } from "lucide-react";
import projectImages from "../assets/projectImages";
import { LocoPreview, SiteShotPreview, ContentGuardPreview, ProjectScreenshotPreview } from "../components/ProjectPreviews";

function getProjectPreview(project) {
  if (project.id === "loco") {
    return <LocoPreview />;
  }
  if (project.id === "siteshot") {
    return <SiteShotPreview />;
  }
  if (project.id === "contentguard") {
    return <ContentGuardPreview />;
  }
  if (project.id === "thaddeus") {
    return (
      <ProjectScreenshotPreview
        imageSrc={projectImages.thaddeus}
        altText="Thaddeus Creates Production SSR Storefront"
        link={project.links.demo}
      />
    );
  }
  if (project.id === "onroute") {
    return (
      <div className="p-5 bg-paper-100 rounded-lg border border-paper-300 font-mono text-xs space-y-2">
        <span className="text-ink-500 uppercase text-[10px] block font-bold">Figma Prototype Flow</span>
        <div className="p-3 bg-paper-50 rounded border border-paper-200 text-ink-800 font-sans">
          Multi-screen commute pairing &bull; Dynamic shift grouping &bull; Verified coworker badges
        </div>
      </div>
    );
  }
  return (
    <div className="p-5 bg-paper-100 rounded-lg border border-paper-300 font-mono text-xs space-y-2">
      <span className="text-ink-500 uppercase text-[10px] block font-bold">Internal Tool Suite</span>
      <div className="p-3 bg-paper-50 rounded border border-paper-200 text-ink-800 font-sans">
        Agency automation workflows &bull; Multi-client asset pipelines &bull; Operational tooling
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-6 border-b border-paper-300 pb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold">
            Engineering Systems &amp; Case Studies
          </span>
          <span className="text-xs font-mono text-ink-400">&bull;</span>
          <span className="text-xs font-mono text-ink-500">6 Projects</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6 font-display">
          Selected Work
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl leading-relaxed font-sans">
          Software applications, developer tools, and full-stack systems built with architectural discipline. Each system features an in-depth architectural breakdown.
        </p>
      </section>

      {/* Software Projects List with Tangible Visuals */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {selectedProjects.map((project, index) => {
            const previewComponent = getProjectPreview(project);

            return (
              <article
                key={project.id}
                className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-10 hover:border-paper-400 transition-all shadow-subtle"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Visual Preview */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    {previewComponent}
                  </div>

                  {/* Right Column: Project Story & Actions */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-paper-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-ink-500">
                        <span className="font-bold text-ink-900">SYS_0{index + 1}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                        <span>&bull;</span>
                        <span>{project.role}</span>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-paper-200 text-ink-700 border border-paper-300">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight font-display mb-1">
                        <Link to={`/work/${project.id}`} className="hover:opacity-75 transition-opacity">
                          {project.name}
                        </Link>
                      </h2>
                      <p className="text-sm font-medium text-ink-600 font-sans">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-sans">
                      {project.summary}
                    </p>

                    {/* Problem & Solution in 2 clean pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-sans">
                      <div className="p-3 bg-paper-100 rounded border border-paper-200">
                        <span className="font-mono text-[10px] font-bold text-ink-500 block uppercase">Problem:</span>
                        <p className="text-ink-700 leading-snug mt-0.5">{project.executiveSummary?.theProblem}</p>
                      </div>
                      <div className="p-3 bg-paper-100 rounded border border-paper-200">
                        <span className="font-mono text-[10px] font-bold text-ink-500 block uppercase">Solution:</span>
                        <p className="text-ink-700 leading-snug mt-0.5">{project.executiveSummary?.theSolution}</p>
                      </div>
                    </div>

                    {/* Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-paper-200 text-ink-800 text-[11px] font-mono rounded border border-paper-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-paper-200">
                      <Link
                        to={`/work/${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 hover:bg-ink-800 text-paper-50 rounded text-xs font-mono transition-colors shadow-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Case Study</span>
                      </Link>

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
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
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                        >
                          <span>Live System</span>
                          <ArrowUpRight className="w-3 h-3 text-ink-500" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
