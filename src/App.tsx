import { useState, useEffect } from 'react';

// Layout components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Common / utility components
import { CustomCursor } from './components/common/CustomCursor';
import { ImageUploadNotice } from './components/common/ImageUploadNotice';

// Portfolio modal
import { ProjectModal } from './components/portfolio/ProjectModal';

// Page sections
import { Hero } from './sections/Hero/Hero';
import { SelectedWork } from './sections/Projects/SelectedWork';
import { About } from './sections/About/About';
import { SkillsAndProcess } from './sections/Skills/SkillsAndProcess';
import { Contact } from './sections/Contact/Contact';

// Types
import { BehanceProject } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<BehanceProject | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-ivory text-ink selection:bg-cobalt selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Smart Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
        <About />
        <SkillsAndProcess />
        <Contact />
      </main>

      {/* Quiet, Elegant Footer */}
      <Footer />

      {/* Detailed Project View Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Asset Guidance Notification */}
      <ImageUploadNotice />
    </div>
  );
}

export default App;
