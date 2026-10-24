import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import AboutPage from "./pages/AboutPage";
import NotesPage from "./pages/NotesPage";
import NoteArticlePage from "./pages/NoteArticlePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white dark:bg-black text-ink-900 selection:bg-terracotta/20 selection:text-terracotta antialiased transition-colors duration-200">
          {/* Persistent Editorial Header */}
          <Navigation />

          {/* Dedicated Route Views */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:projectId" element={<CaseStudyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/notes/:noteId" element={<NoteArticlePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Persistent Editorial Colophon & Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
