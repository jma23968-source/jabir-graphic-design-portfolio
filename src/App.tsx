import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { SkillsAndProcess } from './components/SkillsAndProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { ImageUploadNotice } from './components/ImageUploadNotice';
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
