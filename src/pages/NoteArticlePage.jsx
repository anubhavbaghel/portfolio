import { useParams, Link, Navigate } from "react-router-dom";
import { technicalNotes } from "../data/portfolioData";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

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
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-600 hover:text-terracotta transition-colors"
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
            <Clock className="w-3.5 h-3.5 text-terracotta" />
            {note.readTime}
          </span>
          <span>&bull;</span>
          <span className="text-terracotta font-medium">{note.category}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 leading-[1.12]">
          {note.title}
        </h1>

        <p className="text-lg text-ink-600 leading-relaxed italic font-serif pt-2">
          {note.summary}
        </p>

        <div className="pt-4 border-t border-paper-200 flex items-center justify-between text-xs font-mono text-ink-500">
          <span>By Anubhav Baghel</span>
          <span>Software Developer</span>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-base sm:text-lg text-ink-800 leading-relaxed font-normal">
        {note.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Colophon & Bottom Navigation */}
      <footer className="max-w-3xl mx-auto px-6 pt-12 border-t border-paper-300 space-y-10">
        <div className="p-6 bg-paper-100 rounded border border-paper-300 text-xs text-ink-600 font-mono space-y-2">
          <span className="text-ink-800 font-bold block uppercase tracking-wider">
            Author Colophon
          </span>
          <p className="font-sans text-sm text-ink-700 leading-relaxed">
            Written by <strong>Anubhav Baghel</strong>, a software developer building web applications and tools at the intersection of engineering fundamentals and AI-assisted workflows.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          {prevNote ? (
            <Link
              to={`/notes/${prevNote.id}`}
              className="flex items-center gap-2 text-ink-600 hover:text-terracotta"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="truncate max-w-xs">Prev: {prevNote.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/notes"
            className="px-3.5 py-1.5 bg-paper-200 hover:bg-paper-300 rounded text-ink-800 border border-paper-300"
          >
            All Notes
          </Link>

          {nextNote ? (
            <Link
              to={`/notes/${nextNote.id}`}
              className="flex items-center gap-2 text-ink-600 hover:text-terracotta"
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
