import { Link } from "react-router-dom";
import { personalInfo, selectedProjects, technicalNotes } from "../data/portfolioData";
import { ArrowRight, ArrowUpRight, BookOpen, Globe } from "lucide-react";
import projectImages from "../assets/projectImages";
import { LocoPreview, SiteShotPreview, ContentGuardPreview, ProjectScreenshotPreview } from "../components/ProjectPreviews";

export default function HomePage() {
  const featured = selectedProjects.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* Editorial & Clear Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-paper-300 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Status & Telemetry */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-paper-50 border border-paper-300 shadow-xs text-xs font-mono text-ink-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-semibold text-ink-900">AVAILABLE:</span>
              <span>Software Engineering &amp; Product Roles</span>
            </div>
            <span className="text-xs font-mono text-ink-500">
              New Delhi, India &bull; IST (UTC+5:30)
            </span>
          </div>

          {/* Main Headline & Supporting Statement */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-900 leading-[1.08] mb-6 font-display">
              Building useful software, thoughtfully.
            </h1>

            <p className="text-xl sm:text-2xl font-normal text-ink-700 leading-snug mb-8 max-w-3xl font-sans">
              Software developer combining computer science fundamentals, full-stack SSR architectures, and AI-accelerated workflows to solve genuine human and business problems.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#featured-work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-ink-900 text-paper-50 hover:bg-ink-800 transition-all text-sm font-medium shadow-subtle hover:shadow-card"
              >
                <span>Explore Selected Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/work#web-track"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-paper-50 hover:bg-paper-200 border border-paper-300 text-ink-800 transition-colors text-sm font-medium shadow-subtle"
              >
                <Globe className="w-4 h-4 text-ink-600" />
                <span>60+ Deployed Sites Track</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-3 rounded text-ink-600 hover:text-ink-900 text-sm font-mono transition-colors"
              >
                <span>About &amp; Trajectory &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Tangible Direction Strip: 3 Concrete Pillars */}
          <div className="mt-16 pt-8 border-t border-paper-300 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="border-l-2 border-ink-900 dark:border-white pl-4 space-y-1">
              <span className="font-mono text-[11px] text-ink-500 uppercase tracking-wider block font-bold">
                01 / Proven Execution
              </span>
              <span className="font-bold text-ink-900 text-lg font-display block">
                60+ Delivered Websites
              </span>
              <p className="text-xs text-ink-600 leading-relaxed font-sans">
                Turnkey client platforms shipped across fast-paced agency environments with high reliability.
              </p>
            </div>

            <div className="border-l-2 border-ink-900 dark:border-white pl-4 space-y-1">
              <span className="font-mono text-[11px] text-ink-500 uppercase tracking-wider block font-bold">
                02 / Modern Full-Stack
              </span>
              <span className="font-bold text-ink-900 text-lg font-display block">
                React 19 &bull; Next.js &bull; TS
              </span>
              <p className="text-xs text-ink-600 leading-relaxed font-sans">
                Full-stack SSR, TanStack Start, Supabase PostgreSQL, MongoDB, and Python backend services.
              </p>
            </div>

            <div className="border-l-2 border-ink-900 dark:border-white pl-4 space-y-1">
              <span className="font-mono text-[11px] text-ink-500 uppercase tracking-wider block font-bold">
                03 / AI Discipline
              </span>
              <span className="font-bold text-ink-900 text-lg font-display block">
                Validated AI Workflows
              </span>
              <p className="text-xs text-ink-600 leading-relaxed font-sans">
                Gemini &amp; Ollama model orchestration with strict schema validation, defensive testing, and zero hallucinated drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products: Experience-First Layout */}
      <section id="featured-work" className="py-24 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-300 gap-4">
            <div>
              <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block mb-2">
                Tangible Software Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
                Featured Products &amp; Systems
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-600 hover:text-ink-900 hover:underline"
            >
              <span>View all projects &amp; case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Product Cards with Live Visual Previews */}
          <div className="space-y-16">
            {featured.map((project, index) => {
              // Select appropriate preview based on project ID
              let previewComponent = null;
              if (project.id === "loco") {
                previewComponent = <LocoPreview />;
              } else if (project.id === "siteshot") {
                previewComponent = <SiteShotPreview />;
              } else if (project.id === "contentguard") {
                previewComponent = <ContentGuardPreview />;
              } else if (project.id === "thaddeus") {
                previewComponent = (
                  <ProjectScreenshotPreview
                    imageSrc={projectImages.thaddeus}
                    altText="Thaddeus Creates Production SSR Storefront"
                    link={project.links.demo}
                  />
                );
              }

              return (
                <article
                  key={project.id}
                  className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-10 shadow-subtle hover:border-paper-400 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Preview Side (5 cols) */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                      {previewComponent}
                    </div>

                    {/* Narrative & Details Side (7 cols) */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                      {/* Meta Bar */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-500">
                        <span className="font-bold text-ink-900">0{index + 1}</span>
                        <span>&bull;</span>
                        <span className="uppercase">{project.role}</span>
                        <span>&bull;</span>
                        <span className="px-2 py-0.5 rounded bg-paper-200 border border-paper-300 text-ink-700">
                          {project.badge}
                        </span>
                      </div>

                      {/* Project Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight font-display mb-1">
                          <Link to={`/work/${project.id}`} className="hover:opacity-75 transition-opacity">
                            {project.name}
                          </Link>
                        </h3>
                        <p className="text-sm font-medium text-ink-600 font-sans">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Crisp Summary */}
                      <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-sans">
                        {project.summary}
                      </p>

                      {/* Problem / Solution Snapshot */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                        <div className="p-3 bg-paper-100 rounded border border-paper-200">
                          <span className="font-mono text-[10px] uppercase font-bold text-ink-500 block">The Problem</span>
                          <span className="text-ink-800 leading-tight block mt-0.5">{project.executiveSummary?.theProblem}</span>
                        </div>
                        <div className="p-3 bg-paper-100 rounded border border-paper-200">
                          <span className="font-mono text-[10px] uppercase font-bold text-ink-500 block">The Solution</span>
                          <span className="text-ink-800 leading-tight block mt-0.5">{project.executiveSummary?.theSolution}</span>
                        </div>
                      </div>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-paper-200 text-ink-800 text-[11px] font-mono rounded border border-paper-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-paper-200">
                        <Link
                          to={`/work/${project.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink-900 hover:bg-ink-800 text-paper-50 rounded text-xs font-mono transition-colors shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read Case Study</span>
                        </Link>

                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                          >
                            <span>Code</span>
                            <ArrowUpRight className="w-3 h-3 text-ink-500" />
                          </a>
                        )}

                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                          >
                            <span>Live</span>
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
        </div>
      </section>

      {/* Visual Client Work Gallery (60+ Sites Track Record) */}
      <section className="py-24 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-paper-300 pb-6 gap-4">
            <div>
              <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block mb-2">
                Production Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
                60+ Deployed Client Websites
              </h2>
            </div>
            <p className="text-sm text-ink-600 max-w-md font-sans">
              Delivered across agency roles at Adaan Digital Solutions and DI Infotech. High-speed turnkey delivery, bespoke frontend craft, and dependable hosting.
            </p>
          </div>

          {/* Screenshot Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectScreenshotPreview
              imageSrc={projectImages.wdc}
              altText="WDC Global — International Freight Platform"
              link="https://wdc-design-2.vercel.app/"
            />
            <ProjectScreenshotPreview
              imageSrc={projectImages.flydheera}
              altText="Flydheera Aviation & Travel Platform"
              link="https://flydheera.com/"
            />
            <ProjectScreenshotPreview
              imageSrc={projectImages.purava}
              altText="Purava Luxury Bath & Interiors"
              link="https://puravabath.com/"
            />
            <ProjectScreenshotPreview
              imageSrc={projectImages.divyajewellers}
              altText="Divya Jewellers E-Commerce Storefront"
              link="https://divyajewellers.co.in/"
            />
            <ProjectScreenshotPreview
              imageSrc={projectImages.dranilkumarsharma}
              altText="Dr. Anil Kumar Sharma Healthcare Portal"
              link="https://dranilkumarsharma.com/"
            />
            <ProjectScreenshotPreview
              imageSrc={projectImages.sewaexpo}
              altText="SewaExpo Global Conference Infrastructure"
              link="https://www.sewaexpo.com/"
            />
          </div>

          <div className="p-6 bg-paper-50 rounded-xl border border-paper-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-ink-900 font-display text-base">Explore the Complete Production Track</h4>
              <p className="text-xs text-ink-600 font-sans">Includes agency responsibilities, CMS stacks (WordPress, Shopify, Wix), and custom implementations.</p>
            </div>
            <Link
              to="/work#web-track"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 hover:bg-ink-800 text-paper-50 rounded text-xs font-mono transition-colors shrink-0"
            >
              <span>View Full Web Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy: Crisp & Directional */}
      <section className="py-24 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="border-b border-paper-300 pb-6">
            <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block mb-2">
              Engineering Mindset
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
              How I Build Software
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-3 shadow-subtle">
              <span className="font-mono text-xs font-bold text-ink-500 block">[01]</span>
              <h3 className="text-lg font-bold text-ink-900 font-display">Problem First, Tool Second</h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                Technology choices should follow real constraints—data shape, user latency, and operational cost—rather than trends or resume padding.
              </p>
            </div>

            <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-3 shadow-subtle">
              <span className="font-mono text-xs font-bold text-ink-500 block">[02]</span>
              <h3 className="text-lg font-bold text-ink-900 font-display">AI Leverage with Human Rigor</h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                AI coding models generate syntax rapidly, but software engineering is about system architecture, boundary conditions, and failure modes. You cannot verify what you do not understand.
              </p>
            </div>

            <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-3 shadow-subtle">
              <span className="font-mono text-xs font-bold text-ink-500 block">[03]</span>
              <h3 className="text-lg font-bold text-ink-900 font-display">Production Ownership</h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                Software only proves its value when it encounters real-world users, messy network conditions, and edge cases. Fast feedback loops beat prolonged theoretical design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Notes */}
      <section className="py-24 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-paper-300 pb-6 gap-4">
            <div>
              <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block mb-1">
                Technical Retrospectives
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink-900 font-display">
                Engineering Notes
              </h2>
            </div>
            <Link to="/notes" className="text-xs font-mono text-ink-600 hover:text-ink-900 hover:underline">
              View all essays &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalNotes.slice(0, 2).map((note) => (
              <article
                key={note.id}
                className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 hover:border-paper-400 transition-all shadow-subtle space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-ink-500">
                  <span>{note.date}</span>
                  <span>&bull;</span>
                  <span>{note.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink-900 font-display">
                  <Link to={`/notes/${note.id}`} className="hover:opacity-75 transition-opacity">
                    {note.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                  {note.summary}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/notes/${note.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-600 hover:text-ink-900 hover:underline"
                  >
                    <span>Read Note</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Collaboration */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block">
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
            Interested in working together?
          </h2>
          <p className="text-base sm:text-lg text-ink-600 max-w-xl mx-auto leading-relaxed font-sans">
            I am currently open to software engineering roles, technical internships, and product collaborations. Reach out to discuss architecture, tools, or open positions.
          </p>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded bg-ink-900 hover:bg-ink-800 text-paper-50 text-sm font-medium transition-colors shadow-subtle"
            >
              Get in Touch
            </Link>
            <a
              href={personalInfo.contacts.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded bg-paper-100 hover:bg-paper-200 border border-paper-300 text-ink-800 text-sm font-mono transition-colors"
            >
              View Résumé (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
