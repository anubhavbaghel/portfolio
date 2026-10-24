import { useParams, Link, Navigate } from "react-router-dom";
import { technicalNotes } from "../data/portfolioData";
import { ArrowLeft, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function NoteArticlePage() {
  const { noteId } = useParams();
  const currentIndex = technicalNotes.findIndex((n) => n.id === noteId);

  if (currentIndex === -1) {
    return <Navigate to="/notes" replace />;
  }

  const note = technicalNotes[currentIndex];
  const prevNote = currentIndex > 0 ? technicalNotes[currentIndex - 1] : null;
  const nextNote = currentIndex < technicalNotes.length - 1 ? technicalNotes[currentIndex + 1] : null;

  return (
    <article className="pt-32 pb-24">
      {/* Top Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <Link
          to="/notes"
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-ink-900 dark:hover:text-ink-100 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Notes Index</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 pb-10 border-b border-paper-300 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-500">
          <span>{note.date}</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-ink-500" />
            {note.readTime}
          </span>
          <span>&bull;</span>
          <span className="text-ink-700 bg-paper-200 px-2 py-0.5 rounded border border-paper-300">
            {note.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 leading-[1.12] font-display">
          {note.title}
        </h1>

        <p className="text-lg text-ink-600 leading-relaxed italic font-serif pt-2">
          {note.summary}
        </p>

        {/* Executive Summary Takeaways for Fast Reading */}
        <div className="p-4 bg-paper-100/90 rounded-lg border border-paper-300 space-y-2 mt-4">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300" />
            <span>Key Takeaway for Technical Leaders</span>
          </span>
          <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-sans">
            AI code generation is only as good as the automated validation layers protecting the repository. The highest ROI comes from strict typing, property-based tests, and schema validators that reject hallucinated properties early in the pipeline.
          </p>
        </div>

        <div className="pt-4 border-t border-paper-200 flex items-center justify-between text-xs font-mono text-ink-500">
          <span>By Anubhav Baghel</span>
          <span>Software &amp; Product Developer</span>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-base sm:text-lg text-ink-800 leading-relaxed font-sans font-normal">
        {note.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Colophon & Bottom Navigation */}
      <footer className="max-w-3xl mx-auto px-6 pt-12 border-t border-paper-300 space-y-10">
        <div className="p-6 bg-paper-100 rounded-xl border border-paper-300 text-xs text-ink-600 font-mono space-y-2 shadow-subtle">
          <span className="text-ink-800 font-bold block uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300" />
            <span>Author Colophon</span>
          </span>
          <p className="font-sans text-sm text-ink-700 leading-relaxed">
            Written by <strong>Anubhav Baghel</strong>, a software developer building web applications and tools at the intersection of engineering fundamentals, robust validation, and AI-assisted workflows.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          {prevNote ? (
            <Link
              to={`/notes/${prevNote.id}`}
              className="flex items-center gap-2 text-ink-600 hover:text-ink-900 dark:hover:text-ink-100 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="truncate max-w-xs">Prev: {prevNote.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/notes"
            className="px-4 py-2 bg-paper-200 hover:bg-paper-300 rounded text-ink-800 border border-paper-300 transition-colors"
          >
            All Notes
          </Link>

          {nextNote ? (
            <Link
              to={`/notes/${nextNote.id}`}
              className="flex items-center gap-2 text-ink-600 hover:text-ink-900 dark:hover:text-ink-100 hover:underline"
            >
              <span className="truncate max-w-xs">Next: {nextNote.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </article>
  );
}
