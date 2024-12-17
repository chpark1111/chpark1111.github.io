import React from 'react';
import './components.css';

function ProjectCard({ title, role, tags, links }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="role">{role}</div>
      <div className="tags">{tags}</div>
      <div className="links">
        {links.map((link, i) => (
          <a key={i} href={link.href}>{link.text}</a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
