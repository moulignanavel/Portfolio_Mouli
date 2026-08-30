import React from 'react';
import BaseLayout from './components/layout/BaseLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export function App() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Achievements & Leadership Section */}
      <Achievements />

      {/* Certifications Section */}
      <Certifications />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />
    </BaseLayout>
  );
}

export default App;
