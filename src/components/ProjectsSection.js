import React from 'react';
import './components.css';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>A selection of previous projects that I have either led or co-led, for research, coursework, and of course, for fun!</p>
      </div>
      <div className="project-filters">
        <button>All</button>
        <button>System Building</button>
        <button>Deep Learning</button>
        <button>Data Analysis</button>
        <button>Qualitative Method</button>
        <button>Others</button>
      </div>

      <ProjectCard 
        title="PINTOS: Operating Systems and Lab."
        role="Implemented kernel threads, running user programs, a file system, and a virtual memory for an operating system framework for the 80x86 architecture, running on the QEMU simulator (equally led in a team of 2)."
        tags="#operating-systems #kernel-threads #file-system #virtual-memory"
        links={[
          { text: "proj-description", href: "#" }
        ]}
      />

      <ProjectCard
        title="Authoring Personal Algorithm for Daily Score."
        role="Invited for a talk at the Open Humans Keating Memorial event, a personal self-tracking project."
        tags="#quantified-self #personal-project"
        links={[
          { text: "wiki", href: "#" },
          { text: "presentation", href: "#" },
          { text: "press (in Korean)", href: "#" }
        ]}
      />
    </section>
  );
}

export default ProjectsSection;
